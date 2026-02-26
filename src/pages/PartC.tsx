import React from 'react';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import BackToTop from '../components/BackToTop';
import { Rocket, Clock } from 'lucide-react';
import { calculateReadingTime } from '../utils/readingTime';

const PartC = () => {
  const textContent = `
    Reflection on ALIA-ASLA Standards of Professional Excellence for Teacher Librarians

    In the ALIA-ASLA standards of professional excellence document, 1.4 Knowledge of Library and Information conveys that excellent TLs “understand that professionally managed and resourced school libraries are crucial to the achievements of the school community” (Australian Library and Information Association [ALIA] & Australian School Library Association [ASLA], 2004, p. 2). Prior to the course, I chose to acquire resources based on student preferences, research into popular and interesting materials, as well as teacher input; however, I didn’t have a systematic or documented way of how or why I purchased resources or made decisions. However, through the subject Resourcing the Curriculum, I learned how to create a collection development policy (CDP), which allows a TL to professionally outline the rationale in developing and managing the collection of a library (Johnson, 2018). In that subject, I connected the CDP to the metaphor of a blueprint by which the rationale for the library’s resources, budgeting, weeding, and challenges were drawn from (Figure 10). I learned that the CDP is a well planned document that would allow me to shape the vision and mission of the library in connection with that of the school’s. However, in actual practice, I’ve only begun the process of creating a CDP for my school library. The ability to create a CDP seems less daunting with the knowledge I’ve gained through the subject, but I still have more to learn. One way I plan on professionally developing this skill is to connect with other TLs through the Korea Int’l Librarians Association (Figure 11). By doing so, I can learn by analysing the CDPs of other schools, as well as gleaning knowledge and experience from TLs who have developed their own policies; learning from others helps me to gain a new perspective into how to create my own.

    In 3.1 Lifelong Learning, the document states that excellent TLs “undertake research which informs evidence-based innovation in school library programs” (ALIA & ASLA, 2004, p. 4). Prior to the course, I did not consider or take any formal actions regarding research to inform my practice. However, through the subject Research in Practice I’m currently enrolled in, I’m learning how to evaluate the methodologies, rationale, method, and discussion of research papers, so that I can critically assess the validity of a study, as well as the transferability of its findings into my own context. Even though I am only halfway through the course, I’m already starting to understand the importance of evidence-based practice; the decisions I make as a TL need to be informed not only by my understanding, observations, and conclusions, but also from well researched findings of other TLs. To professionally develop my understanding of research informed practice, I will need to find mentors, workshops, or certification classes that can help me gain a deeper understanding as to how to apply theory from research into practice. Furthermore, I believe conducting research on a small scale, perhaps in collaboration with teachers or administration, could be a step forward for me as a TL in using research to inform my practice. Through professional development and experience, I may then be able to start conducting more formal research to benefit not only my school library, but perhaps the wider school library community.
  `;

  const readingTime = calculateReadingTime(textContent);

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
            <span className="text-teal-600 dark:text-teal-400 font-bold tracking-widest uppercase text-xs">Part C</span>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
            <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-medium">
              <Clock size={12} /> {readingTime}
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-slate-900 dark:text-white mb-8 leading-tight">
            Reflection on ALIA-ASLA Standards of Professional Excellence for Teacher Librarians
          </h1>
        </motion.div>

        <div className="space-y-16 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          
          {/* Section 1 */}
          <section>
            {/* Figure 10 */}
            <figure className="my-8">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
                <img 
                  src="/images/figure10.png" 
                  alt="Collection Development Policy Presentation Slides" 
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="mt-4 text-sm text-slate-500 dark:text-slate-400 text-center italic">
                <span className="font-bold not-italic block mb-1">Figure 10</span>
                Collection Development Policy Presentation Slides<br/>
                Note: Images Collection Development Policy [Presentation slides] by Charles Chan, 2025, property of the author. Images without attribution in this post were sourced from Canva (n.d.). https://www.canva.com under a Pro Content non-attribution license.
              </figcaption>
            </figure>

            <p className="mb-6">
              In the ALIA-ASLA standards of professional excellence document, 1.4 Knowledge of Library and Information conveys that excellent TLs “understand that professionally managed and resourced school libraries are crucial to the achievements of the school community” <a href="https://read.alia.org.au/alia-asla-standards-professional-excellence-teacher-librarians" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">(Australian Library and Information Association [ALIA] & Australian School Library Association [ASLA], 2004, p. 2)</a>. Prior to the course, I chose to acquire resources based on student preferences, research into popular and interesting materials, as well as teacher input; however, I didn’t have a systematic or documented way of how or why I purchased resources or made decisions. However, through the subject Resourcing the Curriculum, I learned how to create a collection development policy (CDP), which allows a TL to professionally outline the rationale in developing and managing the collection of a library (Johnson, 2018). In that subject, I connected the CDP to the metaphor of a blueprint by which the rationale for the library’s resources, budgeting, weeding, and challenges were drawn from (Figure 10). I learned that the CDP is a well planned document that would allow me to shape the vision and mission of the library in connection with that of the school’s. However, in actual practice, I’ve only begun the process of creating a CDP for my school library. The ability to create a CDP seems less daunting with the knowledge I’ve gained through the subject, but I still have more to learn. One way I plan on professionally developing this skill is to connect with other TLs through the Korea Int’l Librarians Association (Figure 11). By doing so, I can learn by analysing the CDPs of other schools, as well as gleaning knowledge and experience from TLs who have developed their own policies; learning from others helps me to gain a new perspective into how to create my own.
            </p>

            {/* Figure 11 */}
            <figure className="my-8">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
                <img 
                  src="/images/figure11.png" 
                  alt="Korea Int’l Librarians Association 2025 Fall Meeting Information" 
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="mt-4 text-sm text-slate-500 dark:text-slate-400 text-center italic">
                <span className="font-bold not-italic block mb-1">Figure 11</span>
                Korea Int’l Librarians Association 2025 Fall Meeting Information<br/>
                Note: Image KILA Fall 2025 Meeting Schedule [Screenshot] by Charles Chan, 2026, property of the author.
              </figcaption>
            </figure>

            <p>
              In 3.1 Lifelong Learning, the document states that excellent TLs “undertake research which informs evidence-based innovation in school library programs” <a href="https://read.alia.org.au/alia-asla-standards-professional-excellence-teacher-librarians" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">(ALIA & ASLA, 2004, p. 4)</a>. Prior to the course, I did not consider or take any formal actions regarding research to inform my practice. However, through the subject Research in Practice I’m currently enrolled in, I’m learning how to evaluate the methodologies, rationale, method, and discussion of research papers, so that I can critically assess the validity of a study, as well as the transferability of its findings into my own context. Even though I am only halfway through the course, I’m already starting to understand the importance of evidence-based practice; the decisions I make as a TL need to be informed not only by my understanding, observations, and conclusions, but also from well researched findings of other TLs. To professionally develop my understanding of research informed practice, I will need to find mentors, workshops, or certification classes that can help me gain a deeper understanding as to how to apply theory from research into practice. Furthermore, I believe conducting research on a small scale, perhaps in collaboration with teachers or administration, could be a step forward for me as a TL in using research to inform my practice. Through professional development and experience, I may then be able to start conducting more formal research to benefit not only my school library, but perhaps the wider school library community.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
};

export default PartC;
