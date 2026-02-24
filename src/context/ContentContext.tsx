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
  // Home Page
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
  const [authToken, setAuthToken] = useState<string | null>(null);

  // Load content from API on mount
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('/api/content');
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
    const token = sessionStorage.getItem('auth_token');
    if (token) {
      setAuthToken(token);
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

  const saveContent = async () => {
    if (!authToken) return;

    try {
      const response = await fetch('/api/content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content, password: authToken }),
      });

      if (response.ok) {
        alert('Content saved successfully!');
        setIsEditing(false);
      } else {
        alert('Failed to save content. Please try again.');
      }
    } catch (error) {
      console.error("Error saving content:", error);
      alert('Error saving content.');
    }
  };

  const login = async (password: string): Promise<boolean> => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        setIsAuthenticated(true);
        setAuthToken(password);
        sessionStorage.setItem('auth_token', password);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsEditing(false);
    setAuthToken(null);
    sessionStorage.removeItem('auth_token');
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
