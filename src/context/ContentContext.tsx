import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the content structure
export interface ContentData {
  [key: string]: string;
}

interface ContentContextType {
  content: ContentData;
  isEditing: boolean;
  isAuthenticated: boolean;
  toggleEditMode: () => void;
  updateContent: (key: string, value: string) => void;
  saveContent: () => Promise<void>;
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

  const saveToGitHub = async (newContent: ContentData) => {
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    const owner = import.meta.env.VITE_REPO_OWNER;
    const repo = import.meta.env.VITE_REPO_NAME;
    const path = 'public/content.json';

    if (!token || !owner || !repo) {
      alert("GitHub configuration missing. Please set VITE_GITHUB_TOKEN, VITE_REPO_OWNER, and VITE_REPO_NAME in your environment variables.");
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
        throw new Error('Failed to fetch file info from GitHub');
      }

      const fileData = await getResponse.json();
      const sha = fileData.sha;

      // 2. Update the file
      const contentString = JSON.stringify(newContent, null, 2);
      const contentEncoded = btoa(unescape(encodeURIComponent(contentString))); // Handle UTF-8

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
        // We use a dummy password for dev server save
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
        // Ignore error and fall through to GitHub/Download
        console.log("Local save failed, trying alternatives...");
      }
    }

    // 2. Try GitHub API (Production/Netlify)
    if (import.meta.env.VITE_GITHUB_TOKEN) {
      const success = await saveToGitHub(content);
      if (success) setIsEditing(false);
      return;
    }

    // 3. Fallback: Download JSON
    const blob = new Blob([JSON.stringify(content, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'content.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    alert('Configuration for automatic saving is missing. The content file has been downloaded. Please commit this file to your repository in the "public" folder manually.');
    setIsEditing(false);
  };

  const login = async (password: string): Promise<boolean> => {
    // Client-side check for static deployment
    // Note: In a real static app, secrets are visible in the bundle. 
    // For a portfolio, this is often an acceptable trade-off for simplicity.
    const validPassword = import.meta.env.VITE_ADMIN_PASSWORD || "admin123";
    
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
      toggleEditMode, 
      updateContent, 
      saveContent,
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
