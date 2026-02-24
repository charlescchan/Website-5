import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import SpotlightCard from '../components/SpotlightCard';
import { ArrowRight, Compass, Layers, Rocket, BookOpen, GraduationCap, School, Calendar } from 'lucide-react';
import { EditableText, AdminControls } from '../components/Editable';

const Home = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 noise-bg">
      <Navbar />
      <AdminControls />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]"
        >
          {/* Hero Section */}
          <motion.div variants={item} className="md:col-span-8 md:row-span-2 bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-700 group-hover:bg-blue-500/20"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                <EditableText id="home.hero.badge" defaultText="Portfolio 2025" />
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-medium text-slate-900 dark:text-white leading-[1.1] mb-6">
                <EditableText id="home.hero.title.prefix" defaultText="Redefining the library as a" /> <span className="italic text-slate-500 dark:text-slate-400"><EditableText id="home.hero.title.highlight" defaultText="dynamic hub" /></span> <EditableText id="home.hero.title.suffix" defaultText="of innovation." />
              </h1>
              <div className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                <EditableText id="home.hero.description" defaultText="Welcome to my professional portfolio. A curated collection of artifacts, reflections, and strategies exploring the evolving role of the Teacher Librarian in the 21st century." multiline />
              </div>
            </div>

            <div className="relative z-10 mt-8 flex gap-4">
              <Link to="/part-a" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors">
                <EditableText id="home.hero.cta" defaultText="Start Exploring" /> <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          {/* Profile Card */}
          <motion.div variants={item} className="md:col-span-4 md:row-span-2 bg-slate-900 dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-800 flex flex-col text-white relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2690&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
             <div className="relative z-10 flex flex-col h-full">
                <div className="size-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-auto border border-white/20">
                  <span className="font-serif text-3xl">CC</span>
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-1"><EditableText id="home.profile.name" defaultText="Charles Chan" /></h3>
                  <p className="text-slate-400 text-sm uppercase tracking-wider mb-6"><EditableText id="home.profile.degree" defaultText="Master of Education" /></p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <School size={16} />
                      <span><EditableText id="home.profile.uni" defaultText="Charles Sturt University" /></span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <GraduationCap size={16} />
                      <span><EditableText id="home.profile.course" defaultText="Teacher Librarianship" /></span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <Calendar size={16} />
                      <span><EditableText id="home.profile.session" defaultText="Session 3 2025" /></span>
                    </div>
                  </div>
                </div>
             </div>
          </motion.div>

          {/* Part A Card */}
          <SpotlightCard variants={item} className="md:col-span-6 lg:col-span-3 p-6 hover:border-blue-500/50 transition-colors group rounded-3xl" spotlightColor="rgba(59, 130, 246, 0.15)">
            <Link to="/part-a" className="h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl group-hover:scale-110 transition-transform">
                  <Compass size={24} />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Part A</span>
              </div>
              <h3 className="text-xl font-serif font-medium mb-2 group-hover:text-blue-600 transition-colors"><EditableText id="home.partA.title" defaultText="Professional Knowledge" /></h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                <EditableText id="home.partA.desc" defaultText="My philosophy statement and the theoretical foundations of modern librarianship." />
              </p>
            </Link>
          </SpotlightCard>

          {/* Part B Card */}
          <SpotlightCard variants={item} className="md:col-span-6 lg:col-span-3 p-6 hover:border-indigo-500/50 transition-colors group rounded-3xl" spotlightColor="rgba(99, 102, 241, 0.15)">
            <Link to="/part-b" className="h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-2xl group-hover:scale-110 transition-transform">
                  <Layers size={24} />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Part B</span>
              </div>
              <h3 className="text-xl font-serif font-medium mb-2 group-hover:text-indigo-600 transition-colors"><EditableText id="home.partB.title" defaultText="Critical Reflection" /></h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                <EditableText id="home.partB.desc" defaultText="Three themes of learning: Collaboration, Leadership, and AI integration." />
              </p>
            </Link>
          </SpotlightCard>

          {/* Part C Card */}
          <SpotlightCard variants={item} className="md:col-span-6 lg:col-span-3 p-6 hover:border-teal-500/50 transition-colors group rounded-3xl" spotlightColor="rgba(20, 184, 166, 0.15)">
            <Link to="/part-c" className="h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 rounded-2xl group-hover:scale-110 transition-transform">
                  <Rocket size={24} />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Part C</span>
              </div>
              <h3 className="text-xl font-serif font-medium mb-2 group-hover:text-teal-600 transition-colors"><EditableText id="home.partC.title" defaultText="Future Practice" /></h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                <EditableText id="home.partC.desc" defaultText="Evaluation against ALIA standards and strategic planning for the future." />
              </p>
            </Link>
          </SpotlightCard>

          {/* References Card */}
          <SpotlightCard variants={item} className="md:col-span-6 lg:col-span-3 p-6 hover:border-slate-500/50 transition-colors group rounded-3xl" spotlightColor="rgba(148, 163, 184, 0.15)">
             <Link to="/references" className="h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-2xl group-hover:scale-110 transition-transform">
                    <BookOpen size={24} />
                  </div>
                  <div className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:bg-slate-100 dark:group-hover:bg-slate-800 transition-colors">
                    <ArrowRight size={14} className="text-slate-400" />
                  </div>
                </div>
                <h3 className="text-xl font-serif font-medium mb-2 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors"><EditableText id="home.references.title" defaultText="Academic References" /></h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                  <EditableText id="home.references.desc" defaultText="Comprehensive bibliography and works cited." />
                </p>
             </Link>
          </SpotlightCard>

        </motion.div>
      </main>
    </div>
  );
};

export default Home;
