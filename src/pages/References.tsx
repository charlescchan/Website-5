import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Book, Search } from 'lucide-react';
import { EditableText, AdminControls } from '../components/Editable';

const References = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const references = [
    "Australian Library and Information Association, & Australian School Library Association. (2004). Standards of professional excellence for teacher librarians. Australian Library and Information Association. https://read.alia.org.au/alia-asla-standards-professional-excellence-teacher-librarians",
    "Belisle, C.-A. H. (2005). The teacher as leader: Transformational leadership and the professional teacher or teacher-librarian. School Libraries in Canada, 24(3). https://primo.csu.edu.au/permalink/61CSU_INST/15aovd3/cdi_proquest_miscellaneous_57636760",
    "Bentley, E., Pavey, S., Shaper, S., Todd, S., & Webb, C. (2016). The innovative school librarian (S. Markless, Ed.; 2nd ed.). Facet. https://primo.csu.edu.au/permalink/61CSU_INST/1r8tuj8/alma991013194264602357",
    "Chan, C. (2024a, November 11). The adaptation of teacher librarians. Charles’ TL Reflective Journal. https://charlescchan.wordpress.com/2024/11/11/the-adaptation-of-teacher-librarians/",
    "Chan, C. (2024b, November 19). A journey of refinement: Reflections of a 3rd year TL. Charles’ TL Reflective Journal. https://charlescchan.wordpress.com/2024/11/19/a-journey-of-refinement-refections-of-a-3rd-year-tl/",
    "Chan, C. (2024c, December 29). Discussion essay [Assessment 2]. ETL401, Google Drive. https://drive.google.com/file/d/1RA0yyZVRCMZ13x-BWBibs0t1UjaNEIkn/view",
    "Chan, C. (2025a). HS lesson planner: AI-assisted teacher-led design. AI Studio. https://aistudio.google.com/apps/drive/1NoFdKCbL0YpIAHOpCsJwKLyRhvxBUHyd",
    "Chan, C. (2025b). NTU Library’s prompt engineering for guided inquiry. GitHub. https://charlescchan.github.io/NTUPromptEngineering/",
    "Chan, C. (2025c, May 15). The TL as collaborator, steward, and thinker. Charles’ TL Reflective Journal. https://charlescchan.wordpress.com/2025/05/15/the-tl-as-collaborator-steward-and-thinker/",
    "Chan, C. (2025d, May 20). The future of the library. Charles’ TL Reflective Journal. https://charlescchan.wordpress.com/2025/05/20/the-future-of-the-library/",
    "Chan, C. (2025e, July 20). How can a teacher librarian lead? Charles’ TL Reflective Journal. https://charlescchan.wordpress.com/2025/07/20/how-can-a-teacher-librarian-lead/",
    "Chan, C. (2025f, July 23). Initial reflections on teacher librarian leadership. Charles’ TL Reflective Journal. https://charlescchan.wordpress.com/2025/07/23/initial-reflections-on-teacher-librarian-leadership/",
    "Chan, C. (2025g, August 7). Teacher librarians and AI. Charles’ TL Reflective Journal. https://charlescchan.wordpress.com/2025/08/07/teacher-librarians-and-ai/",
    "Chan, C. (2025h, October 7). Assessment 2: Study visit report and reflection [Assessment 2]. ETL512, Google Drive. https://drive.google.com/file/d/1p9YI8I2fAGEibnw9CMAHG_7YQH-hpTAf/view",
    "Chan, C. (2025i, October 28). Real-life application of teacher librarian leadership theory. Charles’ TL Reflective Journal. https://charlescchan.wordpress.com/2025/10/28/real-life-application-of-teacher-librarian-leadership-theory/",
    "Charles Sturt University. (n.d.).Activity 2.3 Leadership Style Characteristics [Class activity]. ETL504, Brightspace. https://docs.google.com/document/d/1sgmL607S0Xf_GHvHFgEVp2BsBOQ-ydvB1h2EG0O8PNM/edit?usp=sharing",
    "Expert Program Management. [EPM]. (2018, November 21). Situational leadership model explained [Video]. YouTube. https://www.youtube.com/watch?v=pykuvuA-QFU",
    "Hossain, Z. (2025). School librarians developing AI literacy for an AI-driven future: Leveraging the AI Citizenship Framework with scope and sequence. Library Hi Tech News, 42(2), 17–21. https://doi.org/10.1108/LHTN-10-2024-0186",
    "Johnson, D. (2019). The school librarian: Your ultimate digital resource. Educational Leadership, 76(5). https://www.ascd.org/el/articles/the-school-librarian-your-ultimate-digital-resource",
    "Johnson, P. (2018). Fundamentals of collection development and management (4th ed.). ALA Editions.",
    "Johnston, M. P. (2012). Connecting teacher librarians for technology integration leadership. School Libraries Worldwide, 18(1), 18–33. https://primo.csu.edu.au/permalink/61CSU_INST/15aovd3/cdi_proquest_miscellaneous_1023023659",
    "Kuhlthau, C. C., Caspari, A. K., & Maniotes, L. K. (2015). Guided inquiry: Learning in the 21st century (2nd ed.). Libraries Unlimited.",
    "Nanyang Technological University. (n.d.). NTU Library. Nanyang Technological University. https://www.ntu.edu.sg/education/libraries",
    "Nanyang Technological University Library. (2025, November 10). Charles Chan – Schedule for NTU virtual placement [Placement schedule]. ETL512, Google Drive. https://docs.google.com/document/d/16UO6qEpL7D1CwVLTfq-FCPGdJRnmwlm4Zg-D8LVW-Vw/edit?usp=sharing",
    "Ness, M., Merga, M. K., Torres, J. E., & Chambre, S. J. (2022). The essential leadership of school librarians. International Literacy Association. https://www.literacyworldwide.org/docs/default-source/where-we-stand/the-essential-leadership-of-school-librarians.pdf",
    "Oddone, K., Garrison, K., & Gagen-Spriggs, K. (2024). Navigating generative AI: The teacher librarian’s role in cultivating ethical and critical practices. Journal of the Australian Library and Information Association, 73(1), 3–26. https://doi.org/10.1080/24750158.2023.2289093",
    "Ray, M. (2013, January 31). Making the principal connection.School Library Journal. https://www.slj.com/story/the-same-difference-mark-ray-asserts-that-principals-and-librarians-have-a-lot-more-in-common-than-you-might-think-and-he-should-know",
    "Weisburg, H. K. (2020). Leadership: There is no other option. Synergy, 18(1). https://slav.vic.edu.au/index.php/Synergy/article/view/369/364"
  ];

  const filteredReferences = references.filter(ref => 
    ref.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to detect and linkify URLs in text
  const renderReference = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    
    return (
      <span>
        {parts.map((part, i) => {
          if (part.match(urlRegex)) {
            return (
              <a 
                key={i} 
                href={part} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 dark:text-blue-400 hover:underline break-all"
              >
                {part}
              </a>
            );
          }
          return part;
        })}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 noise-bg font-sans">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-slate-500 font-bold tracking-widest uppercase text-xs mb-4 block">Works Cited</span>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-slate-900 dark:text-white mb-6">
            References
          </h1>
          
          {/* Decorative Search Bar */}
          <div className="max-w-md mx-auto relative mt-8 group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-slate-700 rounded-xl leading-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-base font-medium shadow-sm transition-all appearance-none"
              placeholder="Search bibliography..."
              autoComplete="off"
            />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
          {filteredReferences.length > 0 ? (
            filteredReferences.map((ref, index) => (
              <div 
                key={index}
                className="p-8 border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-slate-300 group-hover:text-blue-500 transition-colors shrink-0">
                    <Book size={20} />
                  </div>
                  <div className="text-slate-700 dark:text-slate-300 leading-relaxed pl-8 -indent-8">
                    {renderReference(ref)}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-12 text-center text-slate-500">
              No references found matching your search.
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default References;
