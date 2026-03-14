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
    { title: "Form Four Biology Notes", level: "O-Level", type: "Notes", downloads: "1.2k" },
    { title: "Standard Seven Mock Exams 2023", level: "Primary", type: "Past Paper", downloads: "850" },
    { title: "Form Six Physics - Mechanics", level: "A-Level", type: "Notes", downloads: "2.1k" },
    { title: "Necta Results 2024 - Preview", level: "General", type: "Results", downloads: "5.4k" },
  ];

  const recentResources = [
    { title: "Civics Form 2 - Human Rights", date: "2 hours ago", size: "1.2MB" },
    { title: "English Grammar Guide", date: "5 hours ago", size: "4.5MB" },
    { title: "Maths Form 1 - Algebra", date: "1 day ago", size: "2.1MB" },
  ];

  const stats = [
    { label: lang === 'en' ? 'Resources' : 'Rasilimali', value: '15k+' },
    { label: lang === 'en' ? 'Active Students' : 'Wanafunzi', value: '50k+' },
    { label: lang === 'en' ? 'Schools' : 'Shule', value: '200+' },
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
      <header className="sticky top-0 z-50 glass border-b-4 border-brand-earth/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="w-12 h-12 bg-brand-earth rounded-2xl flex items-center justify-center text-brand-cream font-serif font-bold text-2xl shadow-lg border-2 border-brand-ochre rotate-3">
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
            </motion.div>

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
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-brand-earth bg-white hover:bg-brand-earth hover:text-white transition-all text-xs font-black tracking-widest"
              >
                <Languages className="w-4 h-4" />
                <span>{lang === 'en' ? 'SWAHILI' : 'ENGLISH'}</span>
              </button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex px-6 py-2.5 bg-brand-terracotta text-white rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-brand-terracotta/20"
              >
                {lang === 'en' ? 'Join Now' : 'Jiunge Sasa'}
              </motion.button>

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
        <section className="relative pt-32 pb-24 overflow-hidden african-border-top">
          <div className="absolute inset-0 pattern-bg opacity-30 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-brand-terracotta/10 rounded-[100%] blur-3xl -z-10" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-6 py-2 mb-8 rounded-full bg-brand-earth/5 text-brand-earth text-xs font-black uppercase tracking-[0.3em] border border-brand-earth/10"
            >
              <Globe className="w-4 h-4 text-brand-terracotta" />
              {t.tagline}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-9xl font-serif font-bold text-brand-earth leading-[0.9] mb-8 tracking-tighter"
            >
              {t.hero.title.split(' ').map((word, i) => (
                <span key={i} className={i % 2 === 1 ? 'italic text-brand-terracotta' : ''}>
                  {word}{' '}
                </span>
              ))}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-brand-earth/70 font-serif italic max-w-2xl mx-auto mb-12 leading-relaxed"
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
                className="w-full pl-16 pr-40 py-6 bg-white border-2 border-brand-earth/20 rounded-2xl shadow-xl focus:border-brand-terracotta focus:ring-0 transition-all text-brand-earth text-lg font-bold placeholder:text-brand-earth/30"
              />
              <button className="absolute right-2 top-2 bottom-2 px-8 bg-brand-earth text-brand-cream rounded-xl font-black text-sm hover:bg-brand-terracotta transition-all shadow-lg uppercase tracking-widest">
                {lang === 'en' ? 'Search' : 'Tafuta'}
              </button>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-serif font-bold text-brand-terracotta mb-1">{stat.value}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-brand-earth/40">{stat.label}</div>
                </motion.div>
              ))}
            </div>

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
        <section className="py-32 bg-brand-cream relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-terracotta/5 rounded-full blur-3xl -z-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-center text-center mb-20">
              <div className="text-xs font-black text-brand-terracotta uppercase tracking-[0.4em] mb-4">{lang === 'en' ? 'Start Your Journey' : 'Anza Safari Yako'}</div>
              <h2 className="text-6xl font-serif font-bold text-brand-earth mb-6">{t.sections.levels}</h2>
              <div className="h-1.5 w-32 bg-brand-ochre rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {levels.map((level, i) => (
                <motion.div 
                  key={level.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group p-10 rounded-[2.5rem] border-2 border-brand-earth/5 bg-white hover:shadow-2xl hover:border-brand-terracotta/20 transition-all cursor-pointer text-center relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-earth/5 rounded-bl-[5rem] -z-10 group-hover:bg-brand-terracotta/5 transition-colors" />
                  <div className={`w-20 h-20 ${level.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-8 shadow-xl group-hover:scale-110 transition-transform`}>
                    {level.icon}
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-brand-earth mb-4 group-hover:text-brand-terracotta transition-colors">
                    {level.name}
                  </h3>
                  <p className="text-brand-earth/60 font-medium mb-8 leading-relaxed">
                    {lang === 'en' ? 'Access curated notes, past papers and results.' : 'Pata notisi, mitihani na matokeo yaliyochaguliwa.'}
                  </p>
                  <div className="inline-flex items-center gap-2 text-brand-terracotta font-black text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                    <span>{lang === 'en' ? 'Explore' : 'Chunguza'}</span>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-32 bg-brand-earth text-brand-cream relative overflow-hidden">
          <div className="absolute inset-0 zig-zag-bg opacity-10 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="text-xs font-black text-brand-ochre uppercase tracking-[0.4em] mb-6">{lang === 'en' ? 'Our Value' : 'Thamani Yetu'}</div>
                <h2 className="text-6xl font-serif font-bold mb-8 leading-tight">
                  {lang === 'en' ? 'Empowering the Next Generation of Tanzanian Scholars' : 'Kuwezesha Kizazi Kijacho cha Wasomi wa Tanzania'}
                </h2>
                <p className="text-xl text-brand-cream/70 font-serif italic mb-12 leading-relaxed">
                  {lang === 'en' 
                    ? 'We provide more than just notes. We provide a path to excellence through accessible, high-quality educational resources.' 
                    : 'Tunatoa zaidi ya notisi tu. Tunatoa njia ya kuelekea kwenye ubora kupitia rasilimali za elimu zinazopatikana na zenye ubora wa juu.'}
                </p>
                <div className="space-y-6">
                  {[
                    { title: lang === 'en' ? 'Verified Content' : 'Maudhui Yaliyothibitishwa', desc: lang === 'en' ? 'All materials are reviewed by experienced teachers.' : 'Vifaa vyote vinakaguliwa na walimu wenye uzoefu.' },
                    { title: lang === 'en' ? 'Free Access' : 'Upatikanaji wa Bure', desc: lang === 'en' ? 'Education should be accessible to everyone, regardless of their background.' : 'Elimu inapaswa kupatikana kwa kila mtu, bila kujali asili yake.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-brand-terracotta flex-shrink-0 flex items-center justify-center font-bold text-xl">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-2xl font-serif font-bold mb-2">{item.title}</h4>
                        <p className="text-brand-cream/50 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-[4rem] overflow-hidden border-8 border-brand-ochre/20 shadow-2xl rotate-3">
                  <img 
                    src="https://picsum.photos/seed/education-africa/800/800" 
                    alt="Students studying" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-terracotta rounded-[3rem] p-8 shadow-2xl -rotate-6 flex flex-col justify-center border-4 border-brand-cream/20">
                  <div className="text-5xl font-serif font-bold mb-2">98%</div>
                  <div className="text-xs font-black uppercase tracking-widest opacity-70">
                    {lang === 'en' ? 'Student Satisfaction' : 'Kuridhika kwa Wanafunzi'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Resources */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
              <div className="text-center md:text-left">
                <div className="text-xs font-black text-brand-terracotta uppercase tracking-[0.3em] mb-4">{lang === 'en' ? 'Top Rated' : 'Zilizokadiriwa Juu'}</div>
                <h2 className="text-5xl font-serif font-bold text-brand-earth mb-4">{t.sections.popular}</h2>
                <div className="h-1.5 w-24 bg-brand-olive rounded-full mx-auto md:mx-0" />
              </div>
              <button className="px-8 py-4 bg-brand-earth text-brand-cream rounded-2xl font-black flex items-center gap-2 hover:bg-brand-terracotta transition-all shadow-xl group">
                {lang === 'en' ? 'View All Resources' : 'Ona Rasilimali Zote'}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {popularResources.map((res, i) => {
                const download = downloads[i];
                return (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col p-10 bg-brand-cream rounded-[2.5rem] border-2 border-brand-earth/5 hover:border-brand-terracotta/20 hover:shadow-2xl transition-all group relative overflow-hidden"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-8">
                        <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-brand-terracotta border-2 border-brand-terracotta/10 shadow-inner group-hover:rotate-3 transition-transform">
                          <FileText className="w-10 h-10" />
                        </div>
                        <div>
                          <h4 className="text-3xl font-serif font-bold text-brand-earth group-hover:text-brand-terracotta transition-colors leading-tight">{res.title}</h4>
                          <div className="flex items-center gap-4 mt-4">
                            <span className="text-[10px] font-black px-4 py-1.5 bg-brand-olive text-white rounded-full uppercase tracking-wider">{res.level}</span>
                            <span className="w-1.5 h-1.5 bg-brand-earth/20 rounded-full" />
                            <span className="text-[10px] font-black text-brand-earth/40 uppercase tracking-widest">{res.type}</span>
                            <span className="w-1.5 h-1.5 bg-brand-earth/20 rounded-full" />
                            <span className="text-[10px] font-black text-brand-terracotta uppercase tracking-widest">{res.downloads} downloads</span>
                          </div>
                        </div>
                      </div>
                      <button 
                        onClick={() => simulateDownload(i)}
                        disabled={download?.isDownloading}
                        className={`w-16 h-16 flex items-center justify-center rounded-2xl transition-all shadow-lg ${
                          download?.isDownloading 
                            ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                            : 'bg-brand-earth text-brand-cream hover:bg-brand-terracotta hover:scale-110'
                        }`}
                      >
                        {download?.isDownloading ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          >
                            <Globe className="w-8 h-8" />
                          </motion.div>
                        ) : (
                          <Download className="w-8 h-8" />
                        )}
                      </button>
                    </div>

                    {/* Download Progress Overlay */}
                    <AnimatePresence>
                      {download && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 pt-6 border-t-2 border-brand-earth/5 overflow-hidden"
                        >
                          <div className="flex justify-between items-center mb-3">
                            <span className="text-xs font-black text-brand-earth uppercase tracking-widest flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full ${download.progress >= 100 ? 'bg-green-500' : 'bg-brand-terracotta animate-pulse'}`} />
                              {download.progress >= 100 
                                ? (lang === 'en' ? 'Complete!' : 'Imekamilika!') 
                                : (lang === 'en' ? 'Downloading...' : 'Inapakua...')}
                            </span>
                            <span className="text-xs font-black text-brand-terracotta">
                              {Math.round(download.progress)}%
                            </span>
                          </div>
                          <div className="w-full h-3 bg-white rounded-full overflow-hidden border border-brand-earth/10">
                            <motion.div 
                              className="h-full bg-brand-terracotta"
                              initial={{ width: 0 }}
                              animate={{ width: `${download.progress}%` }}
                            />
                          </div>
                          {download.isDownloading && (
                            <div className="mt-3 text-right">
                              <span className="text-[10px] font-black text-brand-earth/30 uppercase tracking-widest">
                                {lang === 'en' ? 'Est. time:' : 'Muda uliosalia:'} {download.timeLeft}s
                              </span>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Recently Added Section */}
        <section className="py-24 bg-brand-earth relative overflow-hidden">
          <div className="absolute inset-0 zig-zag-bg opacity-5 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
              <div className="lg:col-span-1">
                <div className="text-xs font-black text-brand-ochre uppercase tracking-[0.3em] mb-4">{lang === 'en' ? 'Stay Updated' : 'Pata Habari'}</div>
                <h2 className="text-6xl font-serif font-bold text-brand-cream mb-8 leading-tight">{t.sections.recent}</h2>
                <p className="text-brand-cream/60 font-serif italic text-xl mb-10 leading-relaxed">
                  {lang === 'en' 
                    ? 'Fresh study materials uploaded daily to keep your learning journey on track.' 
                    : 'Vifaa vipya vya kujifunzia huongezwa kila siku ili kuendeleza safari yako ya elimu.'}
                </p>
                <button className="px-10 py-4 bg-brand-terracotta text-white rounded-2xl font-black hover:bg-brand-ochre transition-all shadow-2xl">
                  {lang === 'en' ? 'Browse All New' : 'Vinjari Vipya Zote'}
                </button>
              </div>
              
              <div className="lg:col-span-2 space-y-6">
                {recentResources.map((res, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-brand-terracotta/20 rounded-2xl flex items-center justify-center text-brand-terracotta">
                        <FileText className="w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="text-xl font-serif font-bold text-brand-cream mb-1 group-hover:text-brand-ochre transition-colors">{res.title}</h4>
                        <div className="flex items-center gap-4">
                          <span className="text-[10px] font-black text-brand-cream/40 uppercase tracking-widest">{res.date}</span>
                          <span className="w-1 h-1 bg-white/20 rounded-full" />
                          <span className="text-[10px] font-black text-brand-cream/40 uppercase tracking-widest">{res.size}</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-cream group-hover:bg-brand-terracotta transition-all">
                      <ChevronRight className="w-6 h-6" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-earth text-brand-cream relative overflow-hidden african-border-top">
        <div className="absolute inset-0 pattern-bg opacity-5 pointer-events-none" />
        
        {/* Newsletter Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 border-b border-white/5">
          <div className="bg-brand-terracotta rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 zig-zag-bg opacity-10 pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                  {lang === 'en' ? 'Never Miss an Update' : 'Usipitwe na Habari'}
                </h3>
                <p className="text-white/70 font-serif italic text-lg">
                  {lang === 'en' 
                    ? 'Subscribe to our newsletter to receive the latest study materials and news.' 
                    : 'Jiunge na jarida letu ili kupata vifaa vya hivi karibuni vya kujifunzia na habari.'}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder={lang === 'en' ? 'Enter your email' : 'Ingiza barua pepe yako'}
                  className="flex-grow px-8 py-5 bg-white rounded-2xl text-brand-earth font-bold focus:ring-4 focus:ring-brand-ochre/30 transition-all"
                />
                <button className="px-10 py-5 bg-brand-earth text-white rounded-2xl font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl">
                  {lang === 'en' ? 'Subscribe' : 'Jiunge'}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
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
