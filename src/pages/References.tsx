import React from 'react';
import Navbar from '../components/Navbar';
import { Book, Search } from 'lucide-react';
import { EditableText, AdminControls } from '../components/Editable';

const References = () => {
  const references = [
    {
      id: "ref1",
      author: "Australian Library and Information Association.",
      year: "2016",
      title: "ALIA/ASLA policy on school library resource provision",
      source: "https://www.alia.org.au/about-alia/policies-standards-and-guidelines/school-library-resource-provision"
    },
    {
      id: "ref2",
      author: "Floridi, L.",
      year: "2014",
      title: "The 4th revolution: How the infosphere is reshaping human reality",
      source: "Oxford University Press"
    },
    {
      id: "ref3",
      author: "Kuhlthau, C. C., Maniotes, L. K., & Caspari, A. K.",
      year: "2015",
      title: "Guided inquiry: Learning in the 21st century (2nd ed.)",
      source: "Libraries Unlimited"
    },
    {
      id: "ref4",
      author: "Loertscher, D. V., & Koechlin, C.",
      year: "2014",
      title: "Climbing to excellence: Defining characteristics of successful learning commons",
      source: "Knowledge Quest, 42(4), 14–15"
    },
    {
      id: "ref5",
      author: "Oddone, K.",
      year: "2022",
      title: "Teachers as learners: Personal learning networks",
      source: "In S. K. W. Chu et al. (Eds.), 21st century skills development through inquiry-based learning (pp. 145–162). Springer"
    },
    {
      id: "ref6",
      author: "Valenza, J. K.",
      year: "2010",
      title: "Manifesto for 21st century school librarians",
      source: "Teacher Librarian"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 noise-bg font-sans">
      <Navbar />
      <AdminControls />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-slate-500 font-bold tracking-widest uppercase text-xs mb-4 block">Works Cited</span>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-slate-900 dark:text-white mb-6">
            <EditableText id="refs.title" defaultText="References" />
          </h1>
          
          {/* Decorative Search Bar */}
          <div className="max-w-md mx-auto relative mt-8 opacity-60">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <div className="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-slate-700 rounded-xl leading-5 bg-white dark:bg-slate-900 text-slate-300 placeholder-slate-300 focus:outline-none focus:bg-white sm:text-sm">
              Search bibliography...
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
          {references.map((ref, index) => (
            <div 
              key={index}
              className="p-8 border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 text-slate-300 group-hover:text-blue-500 transition-colors">
                  <Book size={20} />
                </div>
                <div className="text-slate-700 dark:text-slate-300 leading-relaxed pl-8 -indent-8">
                  <span className="font-semibold text-slate-900 dark:text-white"><EditableText id={`refs.${ref.id}.author`} defaultText={ref.author} /></span> (<EditableText id={`refs.${ref.id}.year`} defaultText={ref.year} />). <span className="italic"><EditableText id={`refs.${ref.id}.title`} defaultText={ref.title} /></span>. <EditableText id={`refs.${ref.id}.source`} defaultText={ref.source} />.
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default References;
