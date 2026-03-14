import React, { useState, useMemo } from 'react';
import { 
  Search, 
  BookOpen, 
  FileText, 
  GraduationCap, 
  Languages, 
  ChevronRight, 
  Download, 
  ExternalLink,
  Menu,
  X,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Translations
const translations = {
  en: {
    title: "Elimu Hub",
    tagline: "Your Gateway to Educational Excellence in Tanzania",
    searchPlaceholder: "Search for notes, past papers, or results...",
    nav: {
      home: "Home",
      notes: "Notes",
      pastPapers: "Past Papers",
      results: "Results",
      about: "About Us"
    },
    hero: {
      title: "Unlock Your Potential with Quality Resources",
      subtitle: "Access thousands of study materials for Primary, Secondary, and High School levels.",
      cta: "Start Learning"
    },
    categories: {
      primary: "Primary School",
      secondary: "O-Level Secondary",
      highSchool: "A-Level High School",
      college: "College & University"
    },
    sections: {
      popular: "Popular Resources",
      recent: "Recently Added",
      levels: "Select Your Level"
    },
    footer: {
      rights: "All rights reserved.",
      contact: "Contact Us"
    }
  },
  sw: {
    title: "Elimu Hub",
    tagline: "Lango Lako la Mafanikio ya Kielimu Tanzania",
    searchPlaceholder: "Tafuta notisi, mitihani iliyopita, au matokeo...",
    nav: {
      home: "Nyumbani",
      notes: "Notisi",
      pastPapers: "Mitihani",
      results: "Matokeo",
      about: "Kuhusu Sisi"
    },
    hero: {
      title: "Fungua Uwezo Wako kwa Rasilimali Bora",
      subtitle: "Pata maelfu ya vifaa vya kujifunzia kwa Shule za Msingi, Sekondari, na Kidato cha Tano na Sita.",
      cta: "Anza Kujifunza"
    },
    categories: {
      primary: "Shule ya Msingi",
      secondary: "Sekondari (O-Level)",
      highSchool: "Kidato cha 5 & 6 (A-Level)",
      college: "Chuo na Chuo Kikuu"
    },
    sections: {
      popular: "Rasilimali Maarufu",
      recent: "Zilizoongezwa Hivi Karibuni",
      levels: "Chagua Ngazi Yako"
    },
    footer: {
      rights: "Haki zote zimehifadhiwa.",
      contact: "Wasiliana Nasi"
    }
  }
};

type Language = 'en' | 'sw';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useMemo(() => translations[lang], [lang]);

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'sw' : 'en');
  };

  const levels = [
    { id: 'primary', name: t.categories.primary, icon: <GraduationCap className="w-6 h-6" />, color: "bg-blue-500" },
    { id: 'secondary', name: t.categories.secondary, icon: <BookOpen className="w-6 h-6" />, color: "bg-emerald-500" },
    { id: 'highschool', name: t.categories.highSchool, icon: <FileText className="w-6 h-6" />, color: "bg-orange-500" },
    { id: 'college', name: t.categories.college, icon: <Globe className="w-6 h-6" />, color: "bg-purple-500" },
  ];

  const popularResources = [
    { title: "Form Four Biology Notes", level: "O-Level", type: "Notes" },
    { title: "Standard Seven Mock Exams 2023", level: "Primary", type: "Past Paper" },
    { title: "Form Six Physics - Mechanics", level: "A-Level", type: "Notes" },
    { title: "Necta Results 2024 - Preview", level: "General", type: "Results" },
  ];

  return (
    <div className="min-height-screen flex flex-col font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 glass border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">
                E
              </div>
              <span className="text-xl font-bold text-brand-blue tracking-tight">
                {t.title}
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">{t.nav.home}</a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">{t.nav.notes}</a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">{t.nav.pastPapers}</a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">{t.nav.results}</a>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button 
                onClick={toggleLang}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 hover:border-brand-blue hover:text-brand-blue transition-all text-sm font-medium"
              >
                <Languages className="w-4 h-4" />
                <span>{lang === 'en' ? 'Swahili' : 'English'}</span>
              </button>
              
              <button 
                className="md:hidden p-2 text-slate-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-3">
                <a href="#" className="block text-base font-medium text-slate-600">{t.nav.home}</a>
                <a href="#" className="block text-base font-medium text-slate-600">{t.nav.notes}</a>
                <a href="#" className="block text-base font-medium text-slate-600">{t.nav.pastPapers}</a>
                <a href="#" className="block text-base font-medium text-slate-600">{t.nav.results}</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-50 rounded-full blur-3xl opacity-50" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6"
            >
              {t.hero.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl mx-auto relative mb-12"
            >
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input 
                type="text" 
                placeholder={t.searchPlaceholder}
                className="w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-100 rounded-2xl shadow-sm focus:border-brand-blue focus:ring-0 transition-all text-slate-900"
              />
              <button className="absolute right-3 top-2 bottom-2 px-6 bg-brand-blue text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                {lang === 'en' ? 'Search' : 'Tafuta'}
              </button>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-brand-blue text-white rounded-full font-bold shadow-lg shadow-blue-200 hover:scale-105 transition-transform">
                {t.hero.cta}
              </button>
              <button className="px-8 py-3 bg-white text-brand-blue border-2 border-brand-blue rounded-full font-bold hover:bg-blue-50 transition-colors">
                {t.nav.pastPapers}
              </button>
            </div>
          </div>
        </section>

        {/* Levels Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">{t.sections.levels}</h2>
                <div className="h-1 w-20 bg-brand-blue rounded-full" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {levels.map((level) => (
                <motion.div 
                  key={level.id}
                  whileHover={{ y: -5 }}
                  className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-brand-blue transition-all cursor-pointer"
                >
                  <div className={`w-12 h-12 ${level.color} rounded-xl flex items-center justify-center text-white mb-4 shadow-lg`}>
                    {level.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-blue transition-colors">
                    {level.name}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4">
                    {lang === 'en' ? 'Access notes, exams and more.' : 'Pata notisi, mitihani na zaidi.'}
                  </p>
                  <div className="flex items-center text-brand-blue text-sm font-bold">
                    <span>{lang === 'en' ? 'Explore' : 'Chunguza'}</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Resources */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl font-bold text-slate-900">{t.sections.popular}</h2>
              <button className="text-brand-blue font-bold text-sm flex items-center gap-1">
                {lang === 'en' ? 'View All' : 'Ona Zote'}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {popularResources.map((res, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100 hover:border-brand-blue transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 group-hover:text-brand-blue transition-colors">{res.title}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-medium px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md">{res.level}</span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs text-slate-400">{res.type}</span>
                      </div>
                    </div>
                  </div>
                  <button className="p-2 text-slate-400 hover:text-brand-blue transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-brand-blue rounded flex items-center justify-center text-white font-bold">
                  E
                </div>
                <span className="text-xl font-bold tracking-tight">
                  {t.title}
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t.tagline}
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">{lang === 'en' ? 'Quick Links' : 'Viungo vya Haraka'}</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">{t.nav.notes}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.nav.pastPapers}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.nav.results}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.nav.about}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">{t.footer.contact}</h4>
              <p className="text-sm text-slate-400 mb-4">
                Email: info@elimuhub.co.tz<br />
                Phone: +255 700 000 000
              </p>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors cursor-pointer">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors cursor-pointer">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
            <p>© {new Date().getFullYear()} {t.title}. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
