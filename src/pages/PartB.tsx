import React, { useState } from 'react';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import BackToTop from '../components/BackToTop';
import { Users, Crown, BrainCircuit, ArrowRight, Clock, Play } from 'lucide-react';
import { calculateReadingTime } from '../utils/readingTime';

const PartB = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Calculate reading time based on the text content
  const textContent = `
    Teacher Librarians as Collaborators
    At the beginning of this course, Master of Education (Teacher Librarianship), I reflected on what it meant to be a teacher librarian (TL), and this included maintaining the library’s resources, developing the physical space, and creating a welcoming atmosphere for learning (Chan, 2024b). My early disposition shows a belief that the influence of a TL was limited to the issues concerning the library only. However, I’ve learned throughout this course that the role of the TL continually needs to adapt (Chan, 2024a) to go beyond the logistics of the library (Belisle, 2005), especially in the areas of collaboration, in order to impact teaching and learning in a school. Through collaboration, TLs can bring their unique set of knowledge and skills as a librarian, as well as previous teaching experience to partner with teachers in impacting instruction, lesson planning, and assessments (Bentley et al., 2016). My understanding as I approach the end of this course is that for TLs to be responsive and effective, TLs must change their perspective of the role to go beyond the walls of the library, and continually reflect on how to impact the teaching and learning needs of the whole school through collaboration.
    Evidence of my developing perspective on collaboration can be found in my blogpost “The TL as Collaborator, Steward, and Thinker” (Chan, 2025c). As opposed to my earlier disposition which only concerned the library, this post shows a growing understanding that as a collaborator, the TL takes initiative to connect with teachers to understand how to potentially work together to impact teaching and learning. Evidence of this growing perspective can also be found in my current practice as a TL. I reached out to a high school photography teacher in person and discovered she wanted to try teaching a new unit on videography, but didn’t have much experience with making videos. Since videography and photography have been a passion of mine for many years, I offered to collaboratively plan and teach students the skills they would need. Figure 3 is a followup email I sent in response to the teacher’s question regarding ideas for videography projects. By taking the initiative to collaborate, students gain the benefit of learning from teachers with different skill sets, and teachers gain a partner with skills which the subject teacher may not possess (Johnson, 2019). Together, the TL and subject teacher can make a greater impact on teaching and learning by sharing ideas, skill sets, as well as curriculum and pedagogical knowledge and experience. As I move forward into the future as a TL, my understanding is that the role is one of collaboration; not only does it add value from the perspective of teachers, but it also adds value to the learning experience of students.
    Teacher Librarians as Leaders
    Throughout my journey as a TL, I did not consider how leadership fit into the role. In my current school, there are formal leadership positions for technology, curriculum, and community relations (Figure 4), which led me to believe there was not a place for me to be a leader (Chan, 2025e). However, in my journey during the course, especially through the subject Teacher Librarian as Leader, I developed the understanding of how essential leadership is. Without it, a TL role may be less visible to administrators, who when faced with budget cuts, may conclude the position to be expendable (Weisburg, 2020). However, with it, a TL can be more visible by taking on initiatives that are important to administrators through using their specific skill set to affect change (Ray, 2013). This happens most effectively when a TL is in frequent contact with a principal regarding school initiatives (Merga et al., 2021, as cited in Ness et al., 2022) who proactively supports the TL in taking on leadership roles (Johnston, 2012). If a principal perceives a needed initiative that fits the skills and commitment of a TL, through situational leadership they can delegate that role to the TL (Expert Program Management [EPM], 2018, 5:52-6:08). Through this leadership role, a TL can use their strengths and skills to impact teaching and learning (Charles Sturt University, n.d.) beyond the one-to-one aforementioned collaborative role to a school-wide level.
    Evidence of my growing understanding of TL leadership can be seen in my blog posts and TL practice. In an earlier blog post, I demonstrated a shift in understanding that leadership, including providing professional development, was an important aspect of the TL role, but was unsure how to accomplish it (Chan, 2025f). This shift stemmed from the understanding that the TL role needs to be continually renegotiated to fit the current needs of the school and bring clear and visible value to teaching and learning (Bentley et al., 2016). In my practice, I began putting theory into practice: at the tail end of a staff meeting when the principal brought up the topic of generative AI (GenAI), I raised my hand nervously and told the entire high school staff that I could assist them with GenAI, if they wanted help learning (Chan, 2025i). This marked a clear shift in my thinking and practice as a TL; in the past I would not have even considered offering training on a subject related to technology, since our school has an Education Technology team. However, I took action based on a new understanding of the TL role, which includes being visible and offering teachers PD on skills I possessed. This eventually led to the principal delegating to me an opportunity to lead a PD session on GenAI, which the middle and high school staff found helpful (Figures 6 and 7). From the course, subject, and this experience, I’ve learned to continually reflect and look for opportunities to connect with administrators and colleagues through leadership roles to impact teaching and learning with the skills and knowledge I have as a TL.
    Teacher Librarians and Generative AI
    My first blog post shows a developing understanding that one way for TLs to remain relevant is to adapt and learn how new technologies are impacting teaching and learning (Chan, 2024a), but it only reveals a broad understanding of the topic. However, through research in my second assessment in Introduction to Teacher Librarianship, I started to move from a general to a more specific conceptualization that GenAI, as a new technology, is reshaping the information search process (ISP) (Chan, 2024c). GenAI is rapidly reshaping how information is searched for and processed by teachers and students, and this gives TLs the opportunity to integrate their skills and knowledge with information literacy and technology to impact teaching and learning. TLs, experts in both inquiry learning and pedagogy, can support teachers in how to utilize GenAI in redesigning how they teach and how students learn (Oddone et al., 2024). Acknowledgement of this specific concept in my learning can be found in two later blog posts where I discuss the importance of learning AI as a TL (Chan, 2025d), and then utilizing that expertise in helping teachers and students navigate it (Chan, 2025g). Furthermore, during the Virtual Study Visit, I also learned how GenAI is currently reshaping the librarian’s role in various industries to support their clientele’s ISP (Chan, 2025h). Clearly, a growing understanding of the importance and impact of GenAI in education and its impact on the TL role has been a key theme throughout my learning through this course. What has been unclear in my blog posts and assessments prior to my professional placement was how this theory could be implemented into practice.
    In hindsight and reflection, the Virtual Professional Placement at Nanyang Technological University (NTU) Library provided a pivotal experience in understanding how to implement GenAI as a TL into practice. Being asked to create a deliverable on GenAI for NTU librarians to use with university students gave me an opportunity to explore creating with GenAI rather than just consuming information from it (Nanyang Technological University Library [NTU], 2025). Initially, I planned to create a video on GenAI since I was familiar with videography, but over several weeks during my placement, I chose to learn about and explore GenAI further to see if I could create a more interactive experience for students; this resulted in the NTU Library’s Prompt Engineering for Guided Inquiry tool (Chan, 2025b). This tool combined my understanding of Kuhlthau’s Information Search Process (Kuhlthau et al., 2015) as a librarian, scaffolding in the learning process as a former English teacher, and personal understanding of GenAI. This experience taught me that I could create digital GenAI tools that combined my knowledge and experience as a TL to impact teaching and learning in a practical way. During the iteration process, I frequently updated my principal on the new GenAI tools and skills I had been learning, and this led him to ask me if I could build a GenAI tool for our high school staff; ideally, teachers could use it to generate feedback on integrating questioning strategies with their pre-existing lesson plans. The GenAI tool I ended up developing (Chan, 2025a) created an opportunity for me to collaborate with the AP World History teacher, who became passionate about the tool’s functionality. Eventually this led to the principal asking us to provide PD about the GenAI tool during a high school staff meeting (Figure 9). Reflecting on this experience has made me question how I could potentially move forward as a leader and collaborator regarding GenAI; the possibilities may involve showing teachers how to create or modify their own GenAI tools, or how to use the GenAI tool I created with their lessons effectively. It may also involve teaching students how to critically use and evaluate GenAI in collaboration with teachers (Hossain, 2025), as well as teaching them how to create with GenAI. This new understanding of GenAI has expanded my role as a TL, creating a practical way to impact teaching and learning as a leader, collaborator, and information technology specialist.
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
            <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-xs">Part B</span>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
            <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-medium">
              <Clock size={12} /> {readingTime}
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-slate-900 dark:text-white mb-8 leading-tight">
            Part B – Critical Reflection
          </h1>
        </motion.div>

        <div className="space-y-16 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          
          {/* Figure 2 */}
          <figure className="my-8">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
              <img 
                src="/images/figure2.png" 
                alt="Secondary Media Center (SMC) Makerspace" 
                className="w-full h-auto"
              />
            </div>
            <figcaption className="mt-4 text-sm text-slate-500 dark:text-slate-400 text-center italic">
              <span className="font-bold not-italic block mb-1">Figure 2</span>
              Makerspace within Library<br/>
              Note: Image Secondary Media Center (SMC) Makerspace [Photograph] by Charles Chan, 2024, property of the author.
            </figcaption>
          </figure>

          {/* Section 1 */}
          <section id="collaborators">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                <Users size={24} />
              </div>
              <h2 className="font-serif text-3xl text-slate-900 dark:text-white">Teacher Librarians as Collaborators</h2>
            </div>
            
            <p className="mb-6">
              At the beginning of this course, Master of Education (Teacher Librarianship), I reflected on what it meant to be a teacher librarian (TL), and this included maintaining the library’s resources, developing the physical space, and creating a welcoming atmosphere for learning <a href="https://charlescchan.wordpress.com/2024/11/19/a-journey-of-refinement-refections-of-a-3rd-year-tl/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">(Chan, 2024b)</a>. My early disposition shows a belief that the influence of a TL was limited to the issues concerning the library only. However, I’ve learned throughout this course that the role of the TL continually needs to adapt <a href="https://charlescchan.wordpress.com/2024/11/11/the-adaptation-of-teacher-librarians/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">(Chan, 2024a)</a> to go beyond the logistics of the library <a href="https://primo.csu.edu.au/permalink/61CSU_INST/15aovd3/cdi_proquest_miscellaneous_57636760" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">(Belisle, 2005)</a>, especially in the areas of collaboration, in order to impact teaching and learning in a school. Through collaboration, TLs can bring their unique set of knowledge and skills as a librarian, as well as previous teaching experience to partner with teachers in impacting instruction, lesson planning, and assessments <a href="https://primo.csu.edu.au/permalink/61CSU_INST/1r8tuj8/alma991013194264602357" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">(Bentley et al., 2016)</a>. My understanding as I approach the end of this course is that for TLs to be responsive and effective, TLs must change their perspective of the role to go beyond the walls of the library, and continually reflect on how to impact the teaching and learning needs of the whole school through collaboration.
            </p>

            {/* Figure 3 */}
            <figure className="my-8">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
                <img 
                  src="/images/figure3.png" 
                  alt="Email Correspondence about Videography Project" 
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="mt-4 text-sm text-slate-500 dark:text-slate-400 text-center italic">
                <span className="font-bold not-italic block mb-1">Figure 3</span>
                Email Correspondence about Videography Project<br/>
                Note: Image Email Correspondence – Videography Project Ideas [Screenshot] by Charles Chan, 2026, property of the author.
              </figcaption>
            </figure>

            <p>
              Evidence of my developing perspective on collaboration can be found in my blogpost “The TL as Collaborator, Steward, and Thinker” <a href="https://charlescchan.wordpress.com/2025/05/15/the-tl-as-collaborator-steward-and-thinker/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">(Chan, 2025c)</a>. As opposed to my earlier disposition which only concerned the library, this post shows a growing understanding that as a collaborator, the TL takes initiative to connect with teachers to understand how to potentially work together to impact teaching and learning. Evidence of this growing perspective can also be found in my current practice as a TL. I reached out to a high school photography teacher in person and discovered she wanted to try teaching a new unit on videography, but didn’t have much experience with making videos. Since videography and photography have been a passion of mine for many years, I offered to collaboratively plan and teach students the skills they would need. Figure 3 is a followup email I sent in response to the teacher’s question regarding ideas for videography projects. By taking the initiative to collaborate, students gain the benefit of learning from teachers with different skill sets, and teachers gain a partner with skills which the subject teacher may not possess <a href="https://www.ascd.org/el/articles/the-school-librarian-your-ultimate-digital-resource" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">(Johnson, 2019)</a>. Together, the TL and subject teacher can make a greater impact on teaching and learning by sharing ideas, skill sets, as well as curriculum and pedagogical knowledge and experience. As I move forward into the future as a TL, my understanding is that the role is one of collaboration; not only does it add value from the perspective of teachers, but it also adds value to the learning experience of students.
            </p>
          </section>

          {/* Section 2 */}
          <section id="leaders">
            <div className="flex items-center gap-3 mb-6 pt-8 border-t border-slate-200 dark:border-slate-800">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
                <Crown size={24} />
              </div>
              <h2 className="font-serif text-3xl text-slate-900 dark:text-white">Teacher Librarians as Leaders</h2>
            </div>

            {/* Figure 4 */}
            <figure className="my-8">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
                <img 
                  src="/images/figure4.png" 
                  alt="Leadership Connections in Current School" 
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="mt-4 text-sm text-slate-500 dark:text-slate-400 text-center italic">
                <span className="font-bold not-italic block mb-1">Figure 4</span>
                Leadership Connections in Current School<br/>
                Note: Image Visual Representation of Leadership in a Local School Context [Diagram] by Charles Chan, 2025, property of the author.
              </figcaption>
            </figure>

            <p className="mb-6">
              Throughout my journey as a TL, I did not consider how leadership fit into the role. In my current school, there are formal leadership positions for technology, curriculum, and community relations (Figure 4), which led me to believe there was not a place for me to be a leader <a href="https://charlescchan.wordpress.com/2025/07/20/how-can-a-teacher-librarian-lead/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">(Chan, 2025e)</a>. However, in my journey during the course, especially through the subject Teacher Librarian as Leader, I developed the understanding of how essential leadership is. Without it, a TL role may be less visible to administrators, who when faced with budget cuts, may conclude the position to be expendable <a href="https://charlescchan.wordpress.com/2025/07/20/how-can-a-teacher-librarian-lead/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">(Weisburg, 2020)</a>. However, with it, a TL can be more visible by taking on initiatives that are important to administrators through using their specific skill set to affect change <a href="https://www.slj.com/story/the-same-difference-mark-ray-asserts-that-principals-and-librarians-have-a-lot-more-in-common-than-you-might-think-and-he-should-know" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">(Ray, 2013)</a>. This happens most effectively when a TL is in frequent contact with a principal regarding school initiatives <a href="https://www.literacyworldwide.org/docs/default-source/where-we-stand/the-essential-leadership-of-school-librarians.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">(Merga et al., 2021, as cited in Ness et al., 2022)</a> who proactively supports the TL in taking on leadership roles <a href="https://primo.csu.edu.au/permalink/61CSU_INST/15aovd3/cdi_proquest_miscellaneous_1023023659" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">(Johnston, 2012)</a>. If a principal perceives a needed initiative that fits the skills and commitment of a TL, through situational leadership they can delegate that role to the TL <a href="https://www.youtube.com/watch?v=pykuvuA-QFU" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">(Expert Program Management [EPM], 2018, 5:52-6:08)</a>. Through this leadership role, a TL can use their strengths and skills to impact teaching and learning <a href="https://docs.google.com/document/d/1sgmL607S0Xf_GHvHFgEVp2BsBOQ-ydvB1h2EG0O8PNM/edit?tab=t.hd07nvworswe#heading=h.jcrxoneb7ypy" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">(Charles Sturt University, n.d.)</a> beyond the one-to-one aforementioned collaborative role to a school-wide level.
            </p>

            {/* Figure 5 */}
            <figure className="my-8">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-900 aspect-video relative group cursor-pointer">
                {!isPlaying ? (
                  <div onClick={() => setIsPlaying(true)} className="absolute inset-0 w-full h-full">
                    <img 
                      src="https://img.youtube.com/vi/pykuvuA-QFU/maxresdefault.jpg" 
                      alt="Situational Leadership Model Explainer" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                        <Play className="text-white ml-1" fill="currentColor" size={32} />
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    className="absolute inset-0 w-full h-full object-cover"
                    src="https://www.youtube.com/embed/pykuvuA-QFU?autoplay=1&rel=0"
                    title="Situational Leadership Model Explainer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
              <figcaption className="mt-4 text-sm text-slate-500 dark:text-slate-400 text-center italic">
                <span className="font-bold not-italic block mb-1">Figure 5</span>
                Situational Leadership Model Explainer<br/>
                Note: From Situational leadership model explained [Video], by Expert Program Management, 2018, YouTube (https://www.youtube.com/watch?v=pykuvuA-QFU). Copyright 2026 by Expert Program Management.
              </figcaption>
            </figure>

            <p className="mb-6">
              Evidence of my growing understanding of TL leadership can be seen in my blog posts and TL practice. In an earlier blog post, I demonstrated a shift in understanding that leadership, including providing professional development, was an important aspect of the TL role, but was unsure how to accomplish it <a href="https://charlescchan.wordpress.com/2025/07/23/initial-reflections-on-teacher-librarian-leadership/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">(Chan, 2025f)</a>. This shift stemmed from the understanding that the TL role needs to be continually renegotiated to fit the current needs of the school and bring clear and visible value to teaching and learning <a href="https://primo.csu.edu.au/permalink/61CSU_INST/1r8tuj8/alma991013194264602357" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">(Bentley et al., 2016)</a>. In my practice, I began putting theory into practice: at the tail end of a staff meeting when the principal brought up the topic of generative AI (GenAI), I raised my hand nervously and told the entire high school staff that I could assist them with GenAI, if they wanted help learning <a href="https://charlescchan.wordpress.com/2025/10/28/real-life-application-of-teacher-librarian-leadership-theory/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">(Chan, 2025i)</a>. This marked a clear shift in my thinking and practice as a TL; in the past I would not have even considered offering training on a subject related to technology, since our school has an Education Technology team. However, I took action based on a new understanding of the TL role, which includes being visible and offering teachers PD on skills I possessed. This eventually led to the principal delegating to me an opportunity to lead a PD session on GenAI, which the middle and high school staff found helpful (Figures 6 and 7). From the course, subject, and this experience, I’ve learned to continually reflect and look for opportunities to connect with administrators and colleagues through leadership roles to impact teaching and learning with the skills and knowledge I have as a TL.
            </p>

            <div className="flex flex-col gap-8 my-8">
              {/* Figure 6 */}
              <figure>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 relative">
                  <img 
                    src="/images/figure6.png" 
                    alt="PD Schedule Snippet" 
                    className="w-full h-auto"
                  />
                </div>
                <figcaption className="mt-4 text-sm text-slate-500 dark:text-slate-400 text-center italic">
                  <span className="font-bold not-italic block mb-1">Figure 6</span>
                  PD Schedule Snippet<br/>
                  Note: Image Secondary PD Schedule [Screenshot] by Charles Chan, 2025, property of the author.
                </figcaption>
              </figure>

              {/* Figure 7 */}
              <figure>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 relative">
                  <img 
                    src="/images/figure7.png" 
                    alt="Certificate of Recognition for Technology PD" 
                    className="w-full h-auto"
                  />
                </div>
                <figcaption className="mt-4 text-sm text-slate-500 dark:text-slate-400 text-center italic">
                  <span className="font-bold not-italic block mb-1">Figure 7</span>
                  Certificate of Recognition for Technology PD<br/>
                  Note: Image Certificate of Recognition for Professional Development [Scan] by Charles Chan, 2025, property of the author.
                </figcaption>
              </figure>
            </div>
          </section>

          {/* Section 3 */}
          <section id="ai">
            <div className="flex items-center gap-3 mb-6 pt-8 border-t border-slate-200 dark:border-slate-800">
              <div className="p-2 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-lg">
                <BrainCircuit size={24} />
              </div>
              <h2 className="font-serif text-3xl text-slate-900 dark:text-white">Teacher Librarians and Generative AI</h2>
            </div>

            <p className="mb-6">
              My first blog post shows a developing understanding that one way for TLs to remain relevant is to adapt and learn how new technologies are impacting teaching and learning <a href="https://charlescchan.wordpress.com/2024/11/11/the-adaptation-of-teacher-librarians/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">(Chan, 2024a)</a>, but it only reveals a broad understanding of the topic. However, through research in my second assessment in Introduction to Teacher Librarianship, I started to move from a general to a more specific conceptualization that GenAI, as a new technology, is reshaping the information search process (ISP) <a href="https://drive.google.com/file/d/1RA0yyZVRCMZ13x-BWBibs0t1UjaNEIkn/view" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">(Chan, 2024c)</a>. GenAI is rapidly reshaping how information is searched for and processed by teachers and students, and this gives TLs the opportunity to integrate their skills and knowledge with information literacy and technology to impact teaching and learning. TLs, experts in both inquiry learning and pedagogy, can support teachers in how to utilize GenAI in redesigning how they teach and how students learn <a href="https://www.tandfonline.com/doi/full/10.1080/24750158.2023.2289093" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">(Oddone et al., 2024)</a>. Acknowledgement of this specific concept in my learning can be found in two later blog posts where I discuss the importance of learning AI as a TL <a href="https://charlescchan.wordpress.com/2025/05/20/the-future-of-the-library/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">(Chan, 2025d)</a>, and then utilizing that expertise in helping teachers and students navigate it <a href="https://charlescchan.wordpress.com/2025/08/07/teacher-librarians-and-ai/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">(Chan, 2025g)</a>. Furthermore, during the Virtual Study Visit, I also learned how GenAI is currently reshaping the librarian’s role in various industries to support their clientele’s ISP <a href="https://drive.google.com/file/d/1p9YI8I2fAGEibnw9CMAHG_7YQH-hpTAf/view" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">(Chan, 2025h)</a>. Clearly, a growing understanding of the importance and impact of GenAI in education and its impact on the TL role has been a key theme throughout my learning through this course. What has been unclear in my blog posts and assessments prior to my professional placement was how this theory could be implemented into practice.
            </p>

            {/* Figure 8 */}
            <figure className="my-8">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
                <img 
                  src="/images/figure8.png" 
                  alt="Nanyang Technological University Library Homepage" 
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="mt-4 text-sm text-slate-500 dark:text-slate-400 text-center italic">
                <span className="font-bold not-italic block mb-1">Figure 8</span>
                Nanyang Technological University Library Homepage<br/>
                Note: From NTU Library [Screenshot], by Nanyang Technological University (NTU), 2026, NTU (https://www.ntu.edu.sg/education/libraries). Copyright 2026 by Nanyang Technological University.
              </figcaption>
            </figure>

            <p className="mb-6">
              In hindsight and reflection, the Virtual Professional Placement at Nanyang Technological University (NTU) Library provided a pivotal experience in understanding how to implement GenAI as a TL into practice. Being asked to create a deliverable on GenAI for NTU librarians to use with university students gave me an opportunity to explore creating with GenAI rather than just consuming information from it <a href="https://docs.google.com/document/d/16UO6qEpL7D1CwVLTfq-FCPGdJRnmwlm4Zg-D8LVW-Vw/edit?tab=t.0#heading=h.kvblulkn6o85" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">(Nanyang Technological University Library [NTU], 2025)</a>. Initially, I planned to create a video on GenAI since I was familiar with videography, but over several weeks during my placement, I chose to learn about and explore GenAI further to see if I could create a more interactive experience for students; this resulted in the NTU Library’s Prompt Engineering for Guided Inquiry tool (Chan, 2025b). This tool combined my understanding of Kuhlthau’s Information Search Process (Kuhlthau et al., 2015) as a librarian, scaffolding in the learning process as a former English teacher, and personal understanding of GenAI. This experience taught me that I could create digital GenAI tools that combined my knowledge and experience as a TL to impact teaching and learning in a practical way. During the iteration process, I frequently updated my principal on the new GenAI tools and skills I had been learning, and this led him to ask me if I could build a GenAI tool for our high school staff; ideally, teachers could use it to generate feedback on integrating questioning strategies with their pre-existing lesson plans. The GenAI tool I ended up developing <a href="https://aistudio.google.com/apps/drive/1NoFdKCbL0YpIAHOpCsJwKLyRhvxBUHyd" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">(Chan, 2025a)</a> created an opportunity for me to collaborate with the AP World History teacher, who became passionate about the tool’s functionality. Eventually this led to the principal asking us to provide PD about the GenAI tool during a high school staff meeting (Figure 9). Reflecting on this experience has made me question how I could potentially move forward as a leader and collaborator regarding GenAI; the possibilities may involve showing teachers how to create or modify their own GenAI tools, or how to use the GenAI tool I created with their lessons effectively. It may also involve teaching students how to critically use and evaluate GenAI in collaboration with teachers <a href="https://www.emerald.com/lhtn/article-abstract/42/2/17/1243385/School-librarians-developing-AI-literacy-for-an-AI?redirectedFrom=fulltext" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">(Hossain, 2025)</a>, as well as teaching them how to create with GenAI. This new understanding of GenAI has expanded my role as a TL, creating a practical way to impact teaching and learning as a leader, collaborator, and information technology specialist.
            </p>

            {/* Figure 9 */}
            <figure className="my-8">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
                <img 
                  src="/images/figure9.png" 
                  alt="Email Correspondence Regarding Staff Meeting PD" 
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="mt-4 text-sm text-slate-500 dark:text-slate-400 text-center italic">
                <span className="font-bold not-italic block mb-1">Figure 9</span>
                Email Correspondence Regarding Staff Meeting PD<br/>
                Note: Image Email from High School Principal Regarding Staff Presentation [Screenshot] by Charles Chan, 2025, property of the author.
              </figcaption>
            </figure>
          </section>

        </div>
      </main>
    </div>
  );
};

export default PartB;
