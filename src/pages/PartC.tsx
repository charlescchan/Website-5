import React from 'react';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import BackToTop from '../components/BackToTop';
import { BookOpen, Award, CheckCircle2, TrendingUp, Mail } from 'lucide-react';
import { EditableText, AdminControls } from '../components/Editable';

const PartC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 noise-bg font-sans">
      <Navbar />
      <BackToTop />
      <AdminControls />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-teal-600 dark:text-teal-400 font-bold tracking-widest uppercase text-xs mb-4 block">Part C: Future Practice</span>
          <h1 className="font-serif text-4xl md:text-6xl font-medium text-slate-900 dark:text-white mb-6">
            <EditableText id="partC.title" defaultText="Reflective Evaluation" />
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            <EditableText id="partC.intro" defaultText="An assessment of my professional practice against the ALIA Standards of Professional Excellence, identifying strengths and areas for future growth." multiline />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Standard 1 Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-2xl">
                <BookOpen size={24} />
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase"><EditableText id="partC.std1.level" defaultText="Advanced" /></span>
            </div>
            <h3 className="font-serif text-2xl text-slate-900 dark:text-white mb-4"><EditableText id="partC.std1.title" defaultText="Knowledge of Library & Information" /></h3>
            <div className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-grow">
              <EditableText id="partC.std1.desc" defaultText="I have demonstrated a strong understanding of information organization and retrieval. My work in ETL503 (Resourcing the Curriculum) highlighted my ability to select and curate resources that meet specific curriculum needs." multiline />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold uppercase text-slate-400">
                <span>Proficiency Level</span>
                <span><EditableText id="partC.std1.score" defaultText="85%" /></span>
              </div>
              <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-blue-600 rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Standard 2 Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-teal-50 dark:bg-teal-900/20 text-teal-600 rounded-2xl">
                <TrendingUp size={24} />
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase"><EditableText id="partC.std2.level" defaultText="Proficient" /></span>
            </div>
            <h3 className="font-serif text-2xl text-slate-900 dark:text-white mb-4"><EditableText id="partC.std2.title" defaultText="Lifelong Learning" /></h3>
            <div className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-grow">
              <EditableText id="partC.std2.desc" defaultText="Commitment to ongoing professional development is crucial. I have actively engaged with professional networks and conferences to stay abreast of trends in digital pedagogy and young adult literature." multiline />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold uppercase text-slate-400">
                <span>Proficiency Level</span>
                <span><EditableText id="partC.std2.score" defaultText="75%" /></span>
              </div>
              <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="h-full bg-teal-600 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* PD Log */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-yellow-400" />
              <h3 className="font-serif text-2xl"><EditableText id="partC.pd.title" defaultText="Professional Development Log" /></h3>
            </div>

            <div className="space-y-4">
              {[
                {
                  id: "pd1",
                  date: "Oct 2024",
                  title: "ALIA Schools Conference",
                  provider: "Australian Library and Information Association",
                  hours: "12 Hours"
                },
                {
                  id: "pd2",
                  date: "Aug 2024",
                  title: "Generative AI in Education",
                  provider: "NSW Department of Education",
                  hours: "5 Hours"
                },
                {
                  id: "pd3",
                  date: "May 2024",
                  title: "Copyright for Educators",
                  provider: "Smartcopying",
                  hours: "3 Hours"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="text-green-400 mt-1 shrink-0" size={18} />
                    <div>
                      <h4 className="font-bold text-lg"><EditableText id={`partC.${item.id}.title`} defaultText={item.title} /></h4>
                      <p className="text-slate-400 text-sm"><EditableText id={`partC.${item.id}.provider`} defaultText={item.provider} /></p>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center gap-4 pl-8 md:pl-0">
                    <span className="text-sm font-mono text-slate-400"><EditableText id={`partC.${item.id}.date`} defaultText={item.date} /></span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold"><EditableText id={`partC.${item.id}.hours`} defaultText={item.hours} /></span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 text-center">
              <p className="text-slate-300 mb-6"><EditableText id="partC.contact.text" defaultText="Ready to collaborate on future projects?" /></p>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-colors">
                <Mail size={18} /> <EditableText id="partC.contact.btn" defaultText="Contact Me" />
              </button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default PartC;
