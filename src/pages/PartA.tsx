import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from '../components/Navbar';
import BackToTop from '../components/BackToTop';
import { Play, ChevronDown, ChevronUp } from 'lucide-react';
import clsx from 'clsx';
import { calculateReadingTime } from '../utils/readingTime';

const PartA = () => {
  const [activeDefinitions, setActiveDefinitions] = useState<string[]>([]);

  const definitions = [
    {
      id: "effective-tls",
      term: "Effective Teacher Librarians",
      definition: "Effective teacher librarians (TLs) are lifelong learners who critically analyse, proactively learn, and continually adapt to changes in pedagogy, information, and technology to shape the TL’s services and library’s resources to support teaching and learning in a school community."
    },
    {
      id: "teachers",
      term: "Teachers",
      definition: "As teachers, TLs continually learn new pedagogical theory, as well as support the current ways in which teachers teach and students learn."
    },
    {
      id: "info-pros",
      term: "Information Professionals",
      definition: "As professionals in information literacy, TLs support both students and teachers in how to acquire, assess, evaluate, and use information."
    },
    {
      id: "digital-experts",
      term: "Digital Literacy Experts",
      definition: "As professionals in digital literacy, TLs first learn, then lead, collaborate, and teach others in the effective use of technology in the teaching and learning process."
    }
  ];

  // Calculate total reading time
  const allContent = definitions.map(d => d.definition).join(' ');
  const readingTime = calculateReadingTime(allContent);

  const toggleDefinition = (id: string) => {
    setActiveDefinitions(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 noise-bg font-sans">
      <Navbar />
      <BackToTop />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-xs">Part A</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-slate-900 dark:text-white mb-8 leading-tight">
            Part A – Effective Teacher Librarian Philosophy
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed italic">
            Please click on each of the words below and read together as one paragraph:
          </p>
        </motion.div>

        {/* Interactive Definitions */}
        <div className="space-y-4 mb-20">
          {definitions.map((item) => {
            const isOpen = activeDefinitions.includes(item.id);
            return (
              <motion.div
                key={item.id}
                initial={false}
                className={clsx(
                  "bg-white dark:bg-slate-900 rounded-2xl border overflow-hidden transition-all duration-300",
                  isOpen 
                    ? "border-blue-500 shadow-lg ring-1 ring-blue-500" 
                    : "border-slate-200 dark:border-slate-800 hover:border-blue-300"
                )}
              >
                <button
                  onClick={() => toggleDefinition(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left group"
                >
                  <span className={clsx(
                    "font-serif text-xl font-medium transition-colors",
                    isOpen ? "text-blue-600 dark:text-blue-400" : "text-slate-900 dark:text-white group-hover:text-blue-600"
                  )}>
                    {item.term}
                  </span>
                  <span className={clsx(
                    "p-2 rounded-full transition-colors",
                    isOpen ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" : "bg-slate-100 text-slate-500 dark:bg-slate-800"
                  )}>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-lg text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/50 mt-2 pt-4">
                        {item.definition}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Figure 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
            <div className="relative rounded-3xl overflow-hidden bg-slate-900 aspect-video group cursor-pointer shadow-2xl mb-4">
            {/* YouTube video embed */}
            <iframe
              className="absolute inset-0 w-full h-full object-cover"
              src="https://www.youtube.com/embed/RPDndy6F0I4?autoplay=0&rel=0"
              title="Student Testimonial Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Play className="text-white ml-1" fill="currentColor" size={32} />
              </div>
            </div>
          </div>
          
          <p className="text-sm text-slate-500 dark:text-slate-400 text-center italic">
            Note: Secondary Media Center Testimonial [Video] by Charles Chan, 2024, property of the author.
          </p>
        </motion.div>

      </main>
    </div>
  );
};

export default PartA;
