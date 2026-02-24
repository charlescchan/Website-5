import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Command, FileText, User, BookOpen, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CommandPaletteProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, setIsOpen }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  // Define searchable items
  const items = [
    { id: 'home', title: 'Home', path: '/', icon: <User className="h-4 w-4" />, category: 'Navigation' },
    { id: 'part-a', title: 'Part A: Statement of Philosophy', path: '/part-a', icon: <FileText className="h-4 w-4" />, category: 'Navigation' },
    { id: 'part-b', title: 'Part B: Critical Reflection', path: '/part-b', icon: <BookOpen className="h-4 w-4" />, category: 'Navigation' },
    { id: 'part-c', title: 'Part C: Evaluation of Future Practice', path: '/part-c', icon: <ArrowRight className="h-4 w-4" />, category: 'Navigation' },
    { id: 'references', title: 'References', path: '/references', icon: <BookOpen className="h-4 w-4" />, category: 'Navigation' },
    { id: 'contact', title: 'Contact Me', action: () => window.location.href = 'mailto:charles.chan@example.com', icon: <User className="h-4 w-4" />, category: 'Actions' },
  ];

  const filteredItems = query === ''
    ? items
    : items.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );

  useEffect(() => {
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
    };
    window.addEventListener('keydown', onKeydown);
    return () => window.removeEventListener('keydown', onKeydown);
  }, [isOpen, setIsOpen]);

  const handleSelect = (item: any) => {
    if (item.path) {
      navigate(item.path);
    } else if (item.action) {
      item.action();
    }
    setIsOpen(false);
    setQuery('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          static
          as={motion.div}
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm"
          />

          <div className="fixed inset-0 overflow-y-auto p-4 pt-[20vh]">
            <Dialog.Panel
              as={motion.div}
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="mx-auto max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-900/5 dark:bg-slate-900 dark:ring-white/10"
            >
              <div className="flex items-center border-b border-slate-200 px-4 py-3 dark:border-slate-800">
                <Search className="mr-3 h-5 w-5 text-slate-400" />
                <input
                  className="h-full w-full bg-transparent text-lg text-slate-900 placeholder:text-slate-400 focus:outline-none dark:text-white"
                  placeholder="Type a command or search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                />
                <div className="hidden text-xs text-slate-400 sm:flex">
                  <kbd className="rounded border border-slate-200 bg-slate-100 px-1.5 py-0.5 font-mono text-xs font-medium dark:border-slate-700 dark:bg-slate-800">ESC</kbd>
                </div>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-2">
                {filteredItems.length === 0 ? (
                  <div className="px-4 py-10 text-center text-slate-500">
                    No results found.
                  </div>
                ) : (
                  <div className="space-y-1">
                    {filteredItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleSelect(item)}
                        className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{item.title}</div>
                          <div className="text-xs text-slate-400">{item.category}</div>
                        </div>
                        {item.id === 'contact' && <span className="text-xs text-slate-400">↵</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="border-t border-slate-200 bg-slate-50 px-4 py-2 text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-900/50">
                <span className="mr-3">Pro tip: Press <kbd className="font-mono font-bold">⌘K</kbd> to open this anytime</span>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
