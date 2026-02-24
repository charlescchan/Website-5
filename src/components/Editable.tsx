import React, { useState, useEffect, useRef } from 'react';
import { useContent } from '../context/ContentContext';
import { Edit2, Save, X, Image as ImageIcon, Film, Settings, Download, LogOut } from 'lucide-react';
import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';

interface EditableTextProps {
  id: string;
  defaultText?: string;
  className?: string;
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
  multiline?: boolean;
}

export const EditableText: React.FC<EditableTextProps> = ({ 
  id, 
  defaultText, 
  className, 
  as: Component = 'span',
  multiline = false
}) => {
  const { content, isEditing, updateContent } = useContent();
  const text = content[id] || defaultText || "Edit me...";
  
  if (isEditing) {
    if (multiline) {
      return (
        <textarea
          value={text}
          onChange={(e) => updateContent(id, e.target.value)}
          className={clsx(
            "w-full bg-yellow-100/50 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 rounded p-1 outline-none focus:ring-2 focus:ring-yellow-400",
            className
          )}
          rows={3}
        />
      );
    }
    return (
      <input
        type="text"
        value={text}
        onChange={(e) => updateContent(id, e.target.value)}
        className={clsx(
          "min-w-[50px] bg-yellow-100/50 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 rounded px-1 outline-none focus:ring-2 focus:ring-yellow-400",
          className
        )}
      />
    );
  }

  // If multiline, render as markdown to support links and formatting
  if (multiline) {
    return (
      <div className={clsx("markdown-content", className)}>
        <ReactMarkdown
          components={{
            a: ({node, ...props}) => <a {...props} className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer" />,
            p: ({node, ...props}) => <p {...props} className="mb-2 last:mb-0" />
          }}
        >
          {text}
        </ReactMarkdown>
      </div>
    );
  }

  return (
    <Component className={className}>
      {text}
    </Component>
  );
};

interface EditableMediaProps {
  id: string;
  defaultSrc: string;
  className?: string;
  type: 'image' | 'video';
  alt?: string;
}

export const EditableMedia: React.FC<EditableMediaProps> = ({
  id,
  defaultSrc,
  className,
  type,
  alt
}) => {
  const { content, isEditing, updateContent } = useContent();
  const src = content[id] || defaultSrc;

  return (
    <div className={clsx("relative group", className)}>
      {type === 'image' ? (
        <img src={src} alt={alt || "Editable image"} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full relative">
           {/* Simple video placeholder/display logic */}
           <img src={src} alt={alt || "Video thumbnail"} className="w-full h-full object-cover" />
           {/* In a real app, this might render an iframe or video tag based on the URL */}
        </div>
      )}

      {isEditing && (
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-4 z-20">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-xl w-full max-w-sm">
            <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
              {type === 'image' ? <span className="flex items-center gap-1"><ImageIcon size={12}/> Image URL</span> : <span className="flex items-center gap-1"><Film size={12}/> Video/Thumbnail URL</span>}
            </label>
            <input
              type="text"
              value={src}
              onChange={(e) => updateContent(id, e.target.value)}
              className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded p-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export const AdminControls = () => {
  const { isEditing, isAuthenticated, toggleEditMode, saveContent, login, logout, downloadContent, githubConfig, updateGithubConfig } = useContent();
  const [showLogin, setShowLogin] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Settings state
  const [tempConfig, setTempConfig] = useState(githubConfig);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(password);
    if (success) {
      setShowLogin(false);
      setPassword("");
      setError("");
    } else {
      setError("Invalid password");
    }
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateGithubConfig(tempConfig);
    setShowSettings(false);
    alert("Settings saved! You can now save content to GitHub.");
  };

  if (!isAuthenticated) {
    if (showLogin) {
      return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-2xl max-w-md w-full border border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-serif font-medium mb-6 text-slate-900 dark:text-white">Admin Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="Enter admin password"
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                <p className="text-xs text-slate-400 mt-2">Default: admin123</p>
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => setShowLogin(false)}
                  className="flex-1 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    }

    return (
      <button
        onClick={() => setShowLogin(true)}
        className="fixed bottom-6 right-6 z-50 p-3 bg-white/10 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors backdrop-blur-sm border border-transparent hover:border-slate-200 dark:hover:border-slate-700 shadow-sm"
        title="Admin Login"
      >
        <Edit2 size={16} />
      </button>
    );
  }

  if (showSettings) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-2xl max-w-md w-full border border-slate-200 dark:border-slate-800">
          <h2 className="text-2xl font-serif font-medium mb-6 text-slate-900 dark:text-white">GitHub Settings</h2>
          <p className="text-sm text-slate-500 mb-4">Configure these settings to enable saving content directly to your GitHub repository.</p>
          <form onSubmit={handleSaveSettings} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">GitHub Personal Access Token</label>
              <input
                type="password"
                value={tempConfig.token}
                onChange={(e) => setTempConfig({...tempConfig, token: e.target.value})}
                className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="ghp_..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Repository Owner (Username)</label>
              <input
                type="text"
                value={tempConfig.owner}
                onChange={(e) => setTempConfig({...tempConfig, owner: e.target.value})}
                className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="e.g. charlescchan"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Repository Name</label>
              <input
                type="text"
                value={tempConfig.repo}
                onChange={(e) => setTempConfig({...tempConfig, repo: e.target.value})}
                className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="e.g. portfolio-2025"
              />
            </div>
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
              >
                Save Settings
              </button>
              <button
                type="button"
                onClick={() => setShowSettings(false)}
                className="flex-1 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {isEditing && (
        <div className="flex gap-2 animate-in slide-in-from-bottom-5 fade-in duration-300">
           <button
            onClick={downloadContent}
            className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-full shadow-lg hover:bg-slate-800 transition-colors"
            title="Download JSON backup"
          >
            <Download size={18} /> Backup
          </button>
          <button
            onClick={saveContent}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-colors"
          >
            <Save size={18} /> Save
          </button>
          <button
            onClick={toggleEditMode}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-colors"
          >
            <X size={18} /> Cancel
          </button>
        </div>
      )}

      {!isEditing && (
        <div className="flex gap-2">
          <button
            onClick={() => {
              setTempConfig(githubConfig);
              setShowSettings(true);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full shadow-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
            title="Configure GitHub"
          >
            <Settings size={18} />
          </button>
          <button
            onClick={toggleEditMode}
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full shadow-lg hover:opacity-90 transition-opacity"
          >
            <Edit2 size={18} /> Edit
          </button>
          <button
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full shadow-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
            title="Logout"
          >
            <LogOut size={18} />
          </button>
        </div>
      )}
    </div>
  );
};
