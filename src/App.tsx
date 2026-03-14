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
    { id: 'primary', name: t.categories.primary, icon: <GraduationCap className="w-6 h-6" />, color: "bg-brand-olive" },
    { id: 'secondary', name: t.categories.secondary, icon: <BookOpen className="w-6 h-6" />, color: "bg-brand-terracotta" },
    { id: 'highschool', name: t.categories.highSchool, icon: <FileText className="w-6 h-6" />, color: "bg-brand-ochre" },
    { id: 'college', name: t.categories.college, icon: <Globe className="w-6 h-6" />, color: "bg-brand-earth" },
  ];

  const popularResources = [
    { title: "Form Four Biology Notes", level: "O-Level", type: "Notes" },
    { title: "Standard Seven Mock Exams 2023", level: "Primary", type: "Past Paper" },
    { title: "Form Six Physics - Mechanics", level: "A-Level", type: "Notes" },
    { title: "Necta Results 2024 - Preview", level: "General", type: "Results" },
  ];

  return (
    <div className="min-height-screen flex flex-col font-sans bg-brand-cream relative">
      <div className="absolute inset-0 pattern-bg pointer-events-none" />
      
      {/* Navigation */}
      <header className="sticky top-0 z-50 glass border-b border-brand-earth/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-brand-earth rounded-full flex items-center justify-center text-brand-cream font-serif font-bold text-2xl shadow-lg border-2 border-brand-ochre">
                E
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-brand-earth leading-none">
                  {t.title}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-terracotta">
                  Tanzania
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
              <a href="#" className="text-sm font-bold text-brand-earth/70 hover:text-brand-terracotta transition-colors uppercase tracking-wider">{t.nav.home}</a>
              <a href="#" className="text-sm font-bold text-brand-earth/70 hover:text-brand-terracotta transition-colors uppercase tracking-wider">{t.nav.notes}</a>
              <a href="#" className="text-sm font-bold text-brand-earth/70 hover:text-brand-terracotta transition-colors uppercase tracking-wider">{t.nav.pastPapers}</a>
              <a href="#" className="text-sm font-bold text-brand-earth/70 hover:text-brand-terracotta transition-colors uppercase tracking-wider">{t.nav.results}</a>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button 
                onClick={toggleLang}
                className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-brand-terracotta/20 bg-white/50 hover:bg-brand-terracotta hover:text-white transition-all text-sm font-bold text-brand-terracotta"
              >
                <Languages className="w-4 h-4" />
                <span>{lang === 'en' ? 'SW' : 'EN'}</span>
              </button>
              
              <button 
                className="md:hidden p-2 text-brand-earth"
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
              className="md:hidden bg-brand-cream border-b border-brand-earth/10 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                <a href="#" className="block text-lg font-serif font-bold text-brand-earth">{t.nav.home}</a>
                <a href="#" className="block text-lg font-serif font-bold text-brand-earth">{t.nav.notes}</a>
                <a href="#" className="block text-lg font-serif font-bold text-brand-earth">{t.nav.pastPapers}</a>
                <a href="#" className="block text-lg font-serif font-bold text-brand-earth">{t.nav.results}</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1.5 mb-8 rounded-full bg-brand-terracotta/10 border border-brand-terracotta/20 text-brand-terracotta text-xs font-bold uppercase tracking-[0.3em]"
            >
              {t.tagline}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif font-bold text-brand-earth leading-tight mb-8"
            >
              {t.hero.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-brand-earth/70 font-serif italic max-w-3xl mx-auto mb-12"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl mx-auto relative mb-16"
            >
              <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-brand-terracotta" />
              </div>
              <input 
                type="text" 
                placeholder={t.searchPlaceholder}
                className="w-full pl-16 pr-6 py-6 bg-white border-4 border-brand-earth/5 rounded-3xl shadow-2xl shadow-brand-earth/5 focus:border-brand-terracotta focus:ring-0 transition-all text-brand-earth text-lg font-medium placeholder:text-brand-earth/30"
              />
              <button className="absolute right-3 top-3 bottom-3 px-8 bg-brand-terracotta text-white rounded-2xl font-bold hover:bg-brand-ochre transition-all shadow-lg shadow-brand-terracotta/30">
                {lang === 'en' ? 'Search' : 'Tafuta'}
              </button>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-10 py-4 bg-brand-olive text-white rounded-full font-bold shadow-xl shadow-brand-olive/20 hover:scale-105 transition-transform">
                {t.hero.cta}
              </button>
              <button className="px-10 py-4 bg-white text-brand-earth border-2 border-brand-earth/10 rounded-full font-bold hover:bg-brand-cream transition-colors">
                {t.nav.pastPapers}
              </button>
            </div>
          </div>
        </section>

        {/* Levels Grid */}
        <section className="py-24 bg-white/50 backdrop-blur-sm border-y border-brand-earth/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-brand-earth mb-4">{t.sections.levels}</h2>
              <div className="h-1.5 w-24 bg-brand-terracotta rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {levels.map((level) => (
                <motion.div 
                  key={level.id}
                  whileHover={{ y: -10 }}
                  className="group p-8 rounded-[2.5rem] border-2 border-brand-earth/5 bg-white hover:bg-brand-cream hover:shadow-2xl hover:border-brand-terracotta/30 transition-all cursor-pointer text-center"
                >
                  <div className={`w-20 h-20 ${level.color} rounded-3xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl rotate-3 group-hover:rotate-0 transition-transform`}>
                    {level.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-brand-earth mb-3 group-hover:text-brand-terracotta transition-colors">
                    {level.name}
                  </h3>
                  <p className="text-brand-earth/60 mb-6 leading-relaxed">
                    {lang === 'en' ? 'Access notes, exams and more.' : 'Pata notisi, mitihani na zaidi.'}
                  </p>
                  <div className="inline-flex items-center text-brand-terracotta font-bold group-hover:gap-2 transition-all">
                    <span>{lang === 'en' ? 'Explore' : 'Chunguza'}</span>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Resources */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-4xl font-serif font-bold text-brand-earth mb-2">{t.sections.popular}</h2>
                <div className="h-1 w-20 bg-brand-olive rounded-full" />
              </div>
              <button className="text-brand-terracotta font-bold flex items-center gap-2 hover:gap-3 transition-all">
                {lang === 'en' ? 'View All' : 'Ona Zote'}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularResources.map((res, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-white rounded-3xl border border-brand-earth/5 hover:border-brand-terracotta/30 hover:shadow-lg transition-all group">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-brand-cream rounded-2xl flex items-center justify-center text-brand-terracotta border border-brand-terracotta/10">
                      <FileText className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-xl font-serif font-bold text-brand-earth group-hover:text-brand-terracotta transition-colors">{res.title}</h4>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-xs font-bold px-3 py-1 bg-brand-olive/10 text-brand-olive rounded-full uppercase tracking-wider">{res.level}</span>
                        <span className="w-1 h-1 bg-brand-earth/20 rounded-full" />
                        <span className="text-xs font-bold text-brand-earth/40 uppercase tracking-wider">{res.type}</span>
                      </div>
                    </div>
                  </div>
                  <button className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-cream text-brand-earth/40 hover:bg-brand-terracotta hover:text-white transition-all">
                    <Download className="w-6 h-6" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-earth text-brand-cream py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-ochre via-brand-olive to-brand-terracotta" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-brand-cream rounded-full flex items-center justify-center text-brand-earth font-serif font-bold text-xl">
                  E
                </div>
                <span className="text-2xl font-serif font-bold tracking-tight">
                  {t.title}
                </span>
              </div>
              <p className="text-brand-cream/60 font-serif italic text-lg leading-relaxed">
                "{t.tagline}"
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-8 uppercase tracking-[0.2em] text-brand-terracotta">{lang === 'en' ? 'Quick Links' : 'Viungo vya Haraka'}</h4>
              <ul className="space-y-4 text-brand-cream/70 font-medium">
                <li><a href="#" className="hover:text-brand-terracotta transition-colors">{t.nav.notes}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.nav.pastPapers}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.nav.results}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.nav.about}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-8 uppercase tracking-[0.2em] text-brand-terracotta">{t.footer.contact}</h4>
              <p className="text-brand-cream/70 font-medium mb-6 leading-relaxed">
                Email: info@elimuhub.co.tz<br />
                Phone: +255 700 000 000
              </p>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-terracotta transition-all cursor-pointer border border-white/10">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-terracotta transition-all cursor-pointer border border-white/10">
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 text-center text-sm text-brand-cream/30 font-bold uppercase tracking-widest">
            <p>© {new Date().getFullYear()} {t.title}. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
