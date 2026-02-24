import React, { useState } from 'react';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import BackToTop from '../components/BackToTop';
import { School, Library, Monitor, Play, Quote, Clock } from 'lucide-react';
import clsx from 'clsx';
import { calculateReadingTime } from '../utils/readingTime';
import { EditableText, EditableMedia, AdminControls } from '../components/Editable';

const PartA = () => {
  const [activeTab, setActiveTab] = useState<'teachers' | 'info' | 'digital'>('teachers');

  const tabs = {
    teachers: {
      title: "Teachers",
      icon: School,
      color: "bg-blue-500",
      content: "As teachers, we are instructional leaders who collaborate with educators to integrate information literacy into the curriculum. We design engaging learning experiences that foster critical thinking, curiosity, and a lifelong love of reading, ensuring every student has the skills to succeed in an information-rich world."
    },
    info: {
      title: "Information Professionals",
      icon: Library,
      color: "bg-indigo-500",
      content: "As information specialists, we curate diverse, relevant collections that reflect our community. We organize knowledge systems to ensure equitable access, guiding users through complex information landscapes with expertise in database management, resource selection, and ethical information use."
    },
    digital: {
      title: "Digital Literacy Experts",
      icon: Monitor,
      color: "bg-teal-500",
      content: "As digital literacy experts, we empower students and staff to navigate the digital world safely and effectively. We champion the use of educational technology, teaching digital citizenship, online safety, and the creative use of digital tools to express understanding and innovation."
    }
  };

  // Calculate total reading time based on all content
  const allContent = Object.values(tabs).map(t => t.content).join(' ') + 
    "My professional identity is built upon three interconnected pillars, each essential to the modern school library.";
  const readingTime = calculateReadingTime(allContent);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 noise-bg font-sans">
      <Navbar />
      <BackToTop />
      <AdminControls />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-xs">Part A: Professional Knowledge</span>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
            <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-medium">
              <Clock size={12} /> {readingTime}
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-medium text-slate-900 dark:text-white mb-6">
            <EditableText id="partA.title" defaultText="Statement of Philosophy" />
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            <EditableText id="partA.intro" defaultText="My professional identity is built upon three interconnected pillars, each essential to the modern school library." multiline />
          </p>
        </motion.div>

        {/* Interactive Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {(Object.keys(tabs) as Array<keyof typeof tabs>).map((key) => {
            const tab = tabs[key];
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={clsx(
                  "relative p-6 rounded-2xl border text-left transition-all duration-300 flex flex-col gap-4 group overflow-hidden",
                  isActive 
                    ? "bg-white dark:bg-slate-900 border-blue-500 shadow-lg ring-1 ring-blue-500" 
                    : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-blue-300"
                )}
              >
                <div className={clsx(
                  "p-3 rounded-xl w-fit transition-colors",
                  isActive ? "bg-blue-500 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:text-blue-500"
                )}>
                  <tab.icon size={24} />
                </div>
                <span className={clsx(
                  "font-serif text-lg font-medium",
                  isActive ? "text-slate-900 dark:text-white" : "text-slate-500"
                )}>
                  <EditableText id={`partA.tab.${key}.title`} defaultText={tab.title} />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="active-glow"
                    className="absolute inset-0 bg-blue-500/5 pointer-events-none"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Content Display */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden mb-20"
        >
          <Quote className="absolute top-8 left-8 text-slate-100 dark:text-slate-800 transform -scale-x-100" size={120} />
          <div className="relative z-10">
            <h3 className="font-serif text-2xl font-medium text-slate-900 dark:text-white mb-6">
              The Teacher Librarian as <EditableText id={`partA.tab.${activeTab}.title`} defaultText={tabs[activeTab].title} />
            </h3>
            <div className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-balance">
              <EditableText id={`partA.tab.${activeTab}.content`} defaultText={tabs[activeTab].content} multiline />
            </div>
          </div>
        </motion.div>

        {/* Video Section */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 aspect-video group cursor-pointer shadow-2xl">
          <EditableMedia 
            id="partA.video.thumbnail" 
            defaultSrc="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2670&auto=format&fit=crop" 
            type="video"
            className="absolute inset-0 w-full h-full"
          />
          <div className="absolute inset-0 w-full h-full bg-black/40 pointer-events-none"></div>
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
              <Play className="text-white ml-1" fill="currentColor" size={32} />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
            <p className="text-white/80 text-sm font-mono uppercase tracking-wider mb-1">Figure 1</p>
            <p className="text-white font-serif text-xl"><EditableText id="partA.video.caption" defaultText="Student Testimonial: The Impact of the Modern Library" /></p>
          </div>
        </div>

      </main>
    </div>
  );
};

export default PartA;
