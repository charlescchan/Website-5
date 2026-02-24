import React from 'react';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import BackToTop from '../components/BackToTop';
import { Users, Crown, BrainCircuit, ArrowRight, Clock } from 'lucide-react';
import { calculateReadingTime } from '../utils/readingTime';
import { EditableText, EditableMedia, AdminControls } from '../components/Editable';

const PartB = () => {
  const themes = [
    {
      id: "theme-01",
      title: "Teacher Librarians as Collaborators",
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-50 dark:bg-blue-900/20",
      content: (
        <>
          <div className="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            <EditableText id="partB.theme1.intro" defaultText="Collaboration is the cornerstone of effective school librarianship. Throughout my coursework in ETL401, I learned that the teacher librarian's role extends far beyond resource management; it involves active partnership with classroom teachers to design and deliver curriculum." multiline />
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm my-8 group">
            <div className="aspect-video bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
               <EditableMedia 
                 id="partB.theme1.image"
                 defaultSrc="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2670&auto=format&fit=crop" 
                 type="image"
                 alt="Collaboration meeting"
                 className="w-full h-full"
               />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Figure 1 <span className="w-1 h-1 rounded-full bg-slate-300"></span> 2024
              </div>
              <p className="font-serif text-lg text-slate-900 dark:text-white"><EditableText id="partB.theme1.caption" defaultText="Collaborative planning session with History faculty" /></p>
            </div>
          </div>
          <div className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            <EditableText id="partB.theme1.conclusion" defaultText="The artifact above demonstrates a collaborative unit plan developed for a Year 9 History class. By embedding information literacy skills directly into the assessment task, we saw a marked improvement in student research quality." multiline />
          </div>
        </>
      )
    },
    {
      id: "theme-02",
      title: "Teacher Librarians as Leaders",
      icon: Crown,
      color: "text-indigo-600",
      bg: "bg-indigo-50 dark:bg-indigo-900/20",
      content: (
        <>
          <div className="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            <EditableText id="partB.theme2.intro" defaultText="Leadership in the library is about advocacy and vision. In ETL504, we explored the concept of 'leading from the middle.' As a teacher librarian, I am uniquely positioned to see the whole school curriculum and identify gaps and opportunities." multiline />
          </div>
          <blockquote className="border-l-4 border-indigo-500 pl-6 py-2 my-8 italic text-xl text-slate-700 dark:text-slate-200 font-serif">
            "<EditableText id="partB.theme2.quote" defaultText="True leadership is not about title, but about influence. By championing reading culture and digital citizenship, the library becomes the heart of the school's learning mission." multiline />"
          </blockquote>
          <div className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            <EditableText id="partB.theme2.conclusion" defaultText="I applied this learning by leading a professional development session on inquiry learning models. This initiative not only raised the profile of the library but also empowered staff to try new teaching strategies." multiline />
          </div>
        </>
      )
    },
    {
      id: "theme-03",
      title: "Teacher Librarians as AI Experts",
      icon: BrainCircuit,
      color: "text-teal-600",
      bg: "bg-teal-50 dark:bg-teal-900/20",
      content: (
        <>
          <div className="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            <EditableText id="partB.theme3.intro" defaultText="The rapid rise of generative AI presents both a challenge and an opportunity. My exploration of this theme in ETL523 highlighted the urgent need for AI literacy." multiline />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-slate-900 text-white p-6 rounded-2xl flex flex-col justify-between h-64 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-32 bg-teal-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <BrainCircuit className="text-teal-400 mb-4" size={32} />
              <div>
                <h4 className="font-serif text-xl mb-2"><EditableText id="partB.theme3.card.title" defaultText="AI Literacy Workshop" /></h4>
                <p className="text-slate-400 text-sm"><EditableText id="partB.theme3.card.subtitle" defaultText="Year 12 Seminar Series" /></p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-2xl flex flex-col justify-center items-center text-center h-64">
              <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-full mb-4">
                <ArrowRight className="text-slate-400" />
              </div>
              <p className="text-sm text-slate-500">View Workshop Materials</p>
            </div>
          </div>
          <div className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            <EditableText id="partB.theme3.conclusion" defaultText="Rather than banning these tools, I advocate for their ethical and creative use. This role as a technology guide is a natural evolution of the information specialist function." multiline />
          </div>
        </>
      )
    }
  ];

  // Calculate reading time (approximate since content is JSX)
  const readingTime = "5 min read";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 noise-bg font-sans">
      <Navbar />
      <BackToTop />
      <AdminControls />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sticky Sidebar */}
          <aside className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-32">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-xs mb-4 block">Part B: Critical Reflection</span>
              <h1 className="font-serif text-4xl font-medium text-slate-900 dark:text-white mb-4">
                <EditableText id="partB.title" defaultText="Three Themes of Learning" />
              </h1>
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-medium mb-8">
                <Clock size={12} /> {readingTime}
              </div>
              <nav className="space-y-2 border-l border-slate-200 dark:border-slate-800">
                {themes.map((theme, index) => (
                  <a 
                    key={theme.id}
                    href={`#${theme.id}`}
                    className="block pl-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white hover:border-l-2 hover:border-slate-900 dark:hover:border-white -ml-[1px] transition-all"
                  >
                    <EditableText id={`partB.theme${index+1}.title`} defaultText={theme.title} />
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:w-3/4 space-y-24">
            <div className="lg:hidden mb-12">
               <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-xs mb-4 block">Part B: Critical Reflection</span>
               <h1 className="font-serif text-4xl md:text-5xl font-medium text-slate-900 dark:text-white mb-4">
                <EditableText id="partB.mobile.title" defaultText="Three Themes of Learning" />
              </h1>
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-medium">
                <Clock size={12} /> {readingTime}
              </div>
            </div>

            {themes.map((theme, index) => (
              <motion.section 
                key={theme.id} 
                id={theme.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-32"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-2xl ${theme.bg} ${theme.color}`}>
                    <theme.icon size={28} />
                  </div>
                  <h2 className="font-serif text-3xl text-slate-900 dark:text-white">
                    <EditableText id={`partB.theme${index+1}.heading`} defaultText={theme.title} />
                  </h2>
                </div>
                
                <div className="pl-0 md:pl-4 border-l-0 md:border-l border-slate-200 dark:border-slate-800 md:ml-6">
                  {theme.content}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PartB;
