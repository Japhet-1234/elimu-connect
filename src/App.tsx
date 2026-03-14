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

  const [downloads, setDownloads] = useState<Record<number, { progress: number; timeLeft: number; isDownloading: boolean }>>({});

  const simulateDownload = (index: number) => {
    if (downloads[index]?.isDownloading) return;

    setDownloads(prev => ({
      ...prev,
      [index]: { progress: 0, timeLeft: 10, isDownloading: true }
    }));

    let progress = 0;
    const duration = 5000; // 5 seconds simulation
    const interval = 100;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      progress += increment;
      const remainingPercent = 100 - progress;
      const timeLeft = Math.max(0, Math.ceil((remainingPercent / 100) * 5));

      if (progress >= 100) {
        clearInterval(timer);
        setDownloads(prev => ({
          ...prev,
          [index]: { progress: 100, timeLeft: 0, isDownloading: false }
        }));
        // Reset after a delay
        setTimeout(() => {
          setDownloads(prev => {
            const next = { ...prev };
            delete next[index];
            return next;
          });
        }, 2000);
      } else {
        setDownloads(prev => ({
          ...prev,
          [index]: { progress, timeLeft, isDownloading: true }
        }));
      }
    }, interval);
  };

  return (
    <div className="min-height-screen flex flex-col font-sans bg-brand-cream relative">
      <div className="absolute inset-0 pattern-bg pointer-events-none" />
      
      {/* Navigation */}
      <header className="sticky top-0 z-50 glass border-b-4 border-brand-ochre">
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
              <a href="#" className="text-sm font-black text-brand-earth hover:text-brand-terracotta transition-colors uppercase tracking-wider">{t.nav.home}</a>
              <a href="#" className="text-sm font-black text-brand-earth hover:text-brand-terracotta transition-colors uppercase tracking-wider">{t.nav.notes}</a>
              <a href="#" className="text-sm font-black text-brand-earth hover:text-brand-terracotta transition-colors uppercase tracking-wider">{t.nav.pastPapers}</a>
              <a href="#" className="text-sm font-black text-brand-earth hover:text-brand-terracotta transition-colors uppercase tracking-wider">{t.nav.results}</a>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button 
                onClick={toggleLang}
                className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-brand-earth bg-white hover:bg-brand-terracotta hover:text-white transition-all text-sm font-black text-brand-earth"
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
              className="md:hidden bg-brand-cream border-b-4 border-brand-ochre overflow-hidden"
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
              className="inline-block px-6 py-2 mb-8 rounded-full bg-brand-earth text-brand-cream text-xs font-black uppercase tracking-[0.3em] shadow-xl"
            >
              {t.tagline}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-serif font-bold text-brand-earth leading-tight mb-8"
            >
              {t.hero.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-3xl text-brand-earth font-serif italic max-w-3xl mx-auto mb-12"
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
                <Search className="h-8 w-8 text-brand-terracotta" />
              </div>
              <input 
                type="text" 
                placeholder={t.searchPlaceholder}
                className="w-full pl-16 pr-6 py-8 bg-white border-4 border-brand-earth rounded-3xl shadow-2xl shadow-brand-earth/20 focus:border-brand-terracotta focus:ring-0 transition-all text-brand-earth text-xl font-bold placeholder:text-brand-earth/40"
              />
              <button className="absolute right-4 top-4 bottom-4 px-10 bg-brand-terracotta text-white rounded-2xl font-black text-lg hover:bg-brand-ochre transition-all shadow-lg shadow-brand-terracotta/30">
                {lang === 'en' ? 'Search' : 'Tafuta'}
              </button>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-12 py-5 bg-brand-olive text-white rounded-full font-black text-lg shadow-2xl shadow-brand-olive/40 hover:scale-105 transition-transform border-b-4 border-black/20">
                {t.hero.cta}
              </button>
              <button className="px-12 py-5 bg-white text-brand-earth border-4 border-brand-earth rounded-full font-black text-lg hover:bg-brand-cream transition-colors shadow-xl">
                {t.nav.pastPapers}
              </button>
            </div>
          </div>
        </section>

        {/* Levels Grid */}
        <section className="py-24 bg-brand-ochre/10 border-y-8 border-brand-earth/10 relative">
          <div className="absolute inset-0 pattern-bg opacity-20 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="text-5xl font-serif font-bold text-brand-earth mb-4">{t.sections.levels}</h2>
              <div className="h-2 w-32 bg-brand-terracotta rounded-full shadow-sm" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {levels.map((level) => (
                <motion.div 
                  key={level.id}
                  whileHover={{ y: -15, rotate: -1 }}
                  className="group p-10 rounded-[3rem] border-4 border-brand-earth bg-white hover:shadow-[0_20px_50px_rgba(69,26,3,0.2)] transition-all cursor-pointer text-center"
                >
                  <div className={`w-24 h-24 ${level.color} rounded-3xl flex items-center justify-center text-white mx-auto mb-8 shadow-2xl rotate-6 group-hover:rotate-0 transition-transform border-4 border-white/20`}>
                    {level.icon}
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-brand-earth mb-4 group-hover:text-brand-terracotta transition-colors">
                    {level.name}
                  </h3>
                  <p className="text-brand-earth font-medium mb-8 leading-relaxed opacity-80">
                    {lang === 'en' ? 'Access notes, exams and more.' : 'Pata notisi, mitihani na zaidi.'}
                  </p>
                  <div className="inline-flex items-center text-brand-terracotta font-black text-lg group-hover:gap-3 transition-all">
                    <span>{lang === 'en' ? 'Explore' : 'Chunguza'}</span>
                    <ChevronRight className="w-6 h-6" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Resources */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-5xl font-serif font-bold text-brand-earth mb-4">{t.sections.popular}</h2>
                <div className="h-2 w-24 bg-brand-olive rounded-full mx-auto md:mx-0" />
              </div>
              <button className="px-8 py-3 bg-brand-earth text-brand-cream rounded-full font-black flex items-center gap-2 hover:bg-brand-terracotta transition-all shadow-lg">
                {lang === 'en' ? 'View All' : 'Ona Zote'}
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {popularResources.map((res, i) => {
                const download = downloads[i];
                return (
                  <div key={i} className="flex flex-col p-8 bg-brand-cream rounded-[2rem] border-4 border-brand-earth/10 hover:border-brand-terracotta hover:shadow-2xl transition-all group relative overflow-hidden">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-8">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-terracotta border-2 border-brand-terracotta/20 shadow-inner">
                          <FileText className="w-8 h-8" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-serif font-bold text-brand-earth group-hover:text-brand-terracotta transition-colors">{res.title}</h4>
                          <div className="flex items-center gap-4 mt-3">
                            <span className="text-xs font-black px-4 py-1.5 bg-brand-olive text-white rounded-full uppercase tracking-wider">{res.level}</span>
                            <span className="w-2 h-2 bg-brand-earth/20 rounded-full" />
                            <span className="text-xs font-black text-brand-earth/50 uppercase tracking-widest">{res.type}</span>
                          </div>
                        </div>
                      </div>
                      <button 
                        onClick={() => simulateDownload(i)}
                        disabled={download?.isDownloading}
                        className={`w-14 h-14 flex items-center justify-center rounded-full transition-all shadow-md ${
                          download?.isDownloading 
                            ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                            : 'bg-white text-brand-earth border-2 border-brand-earth/10 hover:bg-brand-terracotta hover:text-white hover:border-brand-terracotta'
                        }`}
                      >
                        {download?.isDownloading ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          >
                            <Globe className="w-7 h-7" />
                          </motion.div>
                        ) : (
                          <Download className="w-7 h-7" />
                        )}
                      </button>
                    </div>

                    {/* Download Progress Overlay */}
                    <AnimatePresence>
                      {download && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="mt-4 pt-4 border-t-2 border-brand-earth/5"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-black text-brand-earth uppercase tracking-widest">
                              {download.progress >= 100 
                                ? (lang === 'en' ? 'Complete!' : 'Imekamilika!') 
                                : (lang === 'en' ? 'Downloading...' : 'Inapakua...')}
                            </span>
                            <span className="text-sm font-black text-brand-terracotta">
                              {Math.round(download.progress)}%
                            </span>
                          </div>
                          <div className="w-full h-4 bg-white rounded-full overflow-hidden border-2 border-brand-earth/10">
                            <motion.div 
                              className="h-full bg-brand-terracotta"
                              initial={{ width: 0 }}
                              animate={{ width: `${download.progress}%` }}
                            />
                          </div>
                          {download.isDownloading && (
                            <div className="mt-2 text-right">
                              <span className="text-[10px] font-black text-brand-earth/40 uppercase tracking-widest">
                                {lang === 'en' ? 'Est. time:' : 'Muda uliosalia:'} {download.timeLeft}s
                              </span>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-earth text-brand-cream py-24 relative overflow-hidden african-border-top">
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
