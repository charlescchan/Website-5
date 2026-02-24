import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the content structure
export interface ContentData {
  [key: string]: string;
}

interface ContentContextType {
  content: ContentData;
  isEditing: boolean;
  isAuthenticated: boolean;
  githubConfig: { token: string, owner: string, repo: string };
  toggleEditMode: () => void;
  updateContent: (key: string, value: string) => void;
  saveContent: () => Promise<void>;
  downloadContent: () => void;
  updateGithubConfig: (config: { token: string, owner: string, repo: string }) => void;
  login: (password: string) => Promise<boolean>;
  logout: () => void;
}

const defaultContent: ContentData = {
  // Fallback content if fetch fails
  "home.hero.badge": "Portfolio 2025",
  "home.hero.title.prefix": "Redefining the library as a",
  "home.hero.title.highlight": "dynamic hub",
  "home.hero.title.suffix": "of innovation.",
  "home.hero.description": "Welcome to my professional portfolio. A curated collection of artifacts, reflections, and strategies exploring the evolving role of the Teacher Librarian in the 21st century.",
  "home.hero.cta": "Start Exploring",
  "home.profile.name": "Charles Chan",
  "home.profile.degree": "Master of Education",
  "home.profile.uni": "Charles Sturt University",
  "home.profile.course": "Teacher Librarianship",
  "home.profile.session": "Session 3 2025",
  "home.partA.title": "Professional Knowledge",
  "home.partA.desc": "My philosophy statement and the theoretical foundations of modern librarianship.",
  "home.partB.title": "Critical Reflection",
  "home.partB.desc": "Three themes of learning: Collaboration, Leadership, and AI integration.",
  "home.partC.title": "Future Practice",
  "home.partC.desc": "Evaluation against ALIA standards and strategic planning for the future.",
  "home.references.title": "Academic References",
  "home.references.desc": "Comprehensive bibliography and works cited.",
};

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<ContentData>(defaultContent);
  const [isEditing, setIsEditing] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Load content on mount
  useEffect(() => {
    const fetchContent = async () => {
      try {
        // In production (Netlify), this fetches the static JSON file
        // In dev (server.ts), this fetches from the static file served by Express/Vite
        const response = await fetch('/content.json?t=' + new Date().getTime()); // Prevent caching
        if (response.ok) {
          const data = await response.json();
          if (Object.keys(data).length > 0) {
            setContent(prev => ({ ...prev, ...data }));
          }
        }
      } catch (error) {
        console.error("Failed to fetch content:", error);
      }
    };

    fetchContent();

    // Check for existing session
    const sessionAuth = sessionStorage.getItem('is_authenticated');
    if (sessionAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const toggleEditMode = () => {
    if (isAuthenticated) {
      setIsEditing(prev => !prev);
    }
  };

  const updateContent = (key: string, value: string) => {
    setContent(prev => ({ ...prev, [key]: value }));
  };

  const [githubConfig, setGithubConfig] = useState({
    token: import.meta.env.VITE_GITHUB_TOKEN || '',
    owner: import.meta.env.VITE_REPO_OWNER || '',
    repo: import.meta.env.VITE_REPO_NAME || ''
  });

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedConfig = localStorage.getItem('github_config');
    if (savedConfig) {
      setGithubConfig(prev => ({ ...prev, ...JSON.parse(savedConfig) }));
    }
  }, []);

  const updateGithubConfig = (config: { token: string, owner: string, repo: string }) => {
    setGithubConfig(config);
    localStorage.setItem('github_config', JSON.stringify(config));
  };

  const saveToGitHub = async (newContent: ContentData) => {
    const { token, owner, repo } = githubConfig;
    const path = 'public/content.json';

    if (!token || !owner || !repo) {
      const missing = [];
      if (!token) missing.push("Token");
      if (!owner) missing.push("Owner");
      if (!repo) missing.push("Repo");
      alert(`GitHub configuration missing (${missing.join(', ')}). Please configure it in Settings.`);
      return false;
    }

    try {
      // 1. Get current SHA of the file
      const getResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.github.v3+json',
        }
      });

      if (!getResponse.ok) {
        if (getResponse.status === 404) {
           // File doesn't exist, create it (sha will be null/undefined which is fine for create)
           console.log("File not found, creating new...");
        } else {
           throw new Error(`Failed to fetch file info from GitHub (${getResponse.status})`);
        }
      }

      const fileData = await getResponse.ok ? await getResponse.json() : {};
      const sha = fileData.sha;

      // 2. Update the file
      const contentString = JSON.stringify(newContent, null, 2);
      // Use a UTF-8 safe base64 encoding
      const contentEncoded = btoa(
        encodeURIComponent(contentString).replace(/%([0-9A-F]{2})/g,
          function toSolidBytes(match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        })
      );

      const putResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: 'Update content via CMS',
          content: contentEncoded,
          sha: sha,
        })
      });

      if (putResponse.ok) {
        alert('Content saved to GitHub! The site will rebuild and update in a few minutes.');
        return true;
      } else {
        const errorData = await putResponse.json();
        throw new Error(errorData.message || 'Failed to update file on GitHub');
      }
    } catch (error) {
      console.error("GitHub Save Error:", error);
      alert(`Failed to save to GitHub: ${error instanceof Error ? error.message : 'Unknown error'}`);
      return false;
    }
  };

  const saveContent = async () => {
    // 1. Try Local Dev Server (if running locally)
    if (import.meta.env.DEV) {
      try {
        const response = await fetch('/api/content', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ content, password: process.env.ADMIN_PASSWORD || "admin123" }),
        });
        if (response.ok) {
          alert('Content saved locally!');
          setIsEditing(false);
          return;
        }
      } catch (e) {
        console.log("Local save failed, trying alternatives...");
      }
    }

    // 2. Try GitHub API
    if (githubConfig.token) {
      const success = await saveToGitHub(content);
      if (success) setIsEditing(false);
      return;
    }

    // 3. Fallback: Download JSON
    downloadContent();
  };

  const downloadContent = () => {
    const blob = new Blob([JSON.stringify(content, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'content.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    alert('Content downloaded. Please upload "content.json" to your repository in the "public" folder.');
    setIsEditing(false);
  }

  const login = async (password: string): Promise<boolean> => {
    const validPassword = import.meta.env.VITE_ADMIN_PASSWORD || "admin123";
    
    // Debug log for troubleshooting (remove in high security apps)
    console.log(`Login attempt. Expecting: ${validPassword.substring(0, 3)}...`);

    if (password === validPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem('is_authenticated', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsEditing(false);
    sessionStorage.removeItem('is_authenticated');
  };

  return (
    <ContentContext.Provider value={{ 
      content, 
      isEditing, 
      isAuthenticated,
      githubConfig,
      toggleEditMode, 
      updateContent, 
      saveContent,
      downloadContent,
      updateGithubConfig,
      login,
      logout
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
