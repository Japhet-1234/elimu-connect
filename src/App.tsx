/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  BookOpen, 
  Wifi, 
  Library, 
  Globe, 
  GraduationCap, 
  Smartphone, 
  ChevronRight,
  Menu,
  X,
  Award,
  ShieldCheck,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Language = 'en' | 'sw';

interface Content {
  demo: string;
  nav: {
    home: string;
    resources: string;
    guide: string;
    impact: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  sdg: {
    title: string;
    desc: string;
  };
  resources: {
    title: string;
    categories: {
      title: string;
      desc: string;
      icon: any;
    }[];
  };
  guide: {
    title: string;
    steps: {
      title: string;
      desc: string;
    }[];
  };
  impact: {
    title: string;
    stats: {
      label: string;
      value: string;
    }[];
  };
  footer: string;
}

const translations: Record<Language, Content> = {
  en: {
    demo: "DEMO VERSION - FOR PRESENTATION ONLY",
    nav: {
      home: "Home",
      resources: "Library",
      guide: "Connect",
      impact: "Impact"
    },
    hero: {
      badge: "UN SDG 4: Quality Education",
      title: "Digital Inclusion Hub: Tanzania",
      subtitle: "Bridging the digital divide through localized offline learning. A United Nations-aligned initiative for community empowerment in East Africa.",
      cta: "Access Resources"
    },
    sdg: {
      title: "Aligned with SDG 4",
      desc: "Ensuring inclusive and equitable quality education and promoting lifelong learning opportunities for all in Tanzania."
    },
    resources: {
      title: "Learning Library",
      categories: [
        {
          title: "Secondary Education",
          desc: "Tanzanian curriculum (O-Level/A-Level) study materials and past NECTA papers.",
          icon: GraduationCap
        },
        {
          title: "Vocational Skills",
          desc: "Practical training in sustainable farming, tailoring, and local entrepreneurship.",
          icon: BookOpen
        },
        {
          title: "Digital Literacy",
          desc: "Essential computer skills for the modern Tanzanian workforce.",
          icon: Smartphone
        },
        {
          title: "Health & Hygiene",
          desc: "Community health awareness, nutrition, and clean water education.",
          icon: ShieldCheck
        }
      ]
    },
    guide: {
      title: "Local Server Connection",
      steps: [
        {
          title: "Find Signal",
          desc: "Locate the 'UN_Learning_Hub' Wi-Fi signal at your local community center."
        },
        {
          title: "Connect Free",
          desc: "No password or data required. Simply connect and open your browser."
        },
        {
          title: "Start Learning",
          desc: "Access the 'elimu.local' portal to download books and watch tutorials."
        }
      ]
    },
    impact: {
      title: "Our Local Impact",
      stats: [
        { label: "Active Students", value: "3,200+" },
        { label: "Digital Books", value: "8,500+" },
        { label: "Village Hubs", value: "15" },
        { label: "SDG Progress", value: "85%" }
      ]
    },
    footer: "© 2026 UN Digital Inclusion Hub - Tanzania Demo. Supporting Sustainable Development Goals."
  },
  sw: {
    demo: "TOLEO LA MAJARIBIO - KWA AJILI YA MAONYESHO TU",
    nav: {
      home: "Mwanzo",
      resources: "Maktaba",
      guide: "Unganisha",
      impact: "Matokeo"
    },
    hero: {
      badge: "UN SDG 4: Elimu Bora",
      title: "Kituo cha Ujumuishaji wa Kidijitali: Tanzania",
      subtitle: "Kuziba pengo la kidijitali kupitia ujifunzaji wa ndani nje ya mtandao. Mpango unaoendana na Umoja wa Mataifa kwa ajili ya uwezeshaji wa jamii Afrika Mashariki.",
      cta: "Pata Rasilimali"
    },
    sdg: {
      title: "Inaendana na SDG 4",
      desc: "Kuhakikisha elimu bora inayojumuisha wote na yenye usawa na kukuza fursa za kujifunza maisha yote kwa wote nchini Tanzania."
    },
    resources: {
      title: "Maktaba ya Mafunzo",
      categories: [
        {
          title: "Elimu ya Sekondari",
          desc: "Vifaa vya kusomea mtaala wa Tanzania (O-Level/A-Level) na mitihani ya zamani ya NECTA.",
          icon: GraduationCap
        },
        {
          title: "Ujuzi wa Amali",
          desc: "Mafunzo ya vitendo katika kilimo endelevu, ushonaji, na ujasiriamali wa ndani.",
          icon: BookOpen
        },
        {
          title: "Ujuzi wa Kidijitali",
          desc: "Ujuzi muhimu wa kompyuta kwa ajili ya nguvu kazi ya kisasa ya Tanzania.",
          icon: Smartphone
        },
        {
          title: "Afya na Usafi",
          desc: "Uelewa wa afya ya jamii, lishe, na elimu ya maji safi.",
          icon: ShieldCheck
        }
      ]
    },
    guide: {
      title: "Uunganishaji wa Seva ya Ndani",
      steps: [
        {
          title: "Tafuta Mawimbi",
          desc: "Tafuta mawimbi ya Wi-Fi ya 'UN_Learning_Hub' kwenye kituo chako cha jamii."
        },
        {
          title: "Unganisha Bure",
          desc: "Hakuna nenosiri au data inahitajika. Unganisha tu na ufungue kivinjari chako."
        },
        {
          title: "Anza Kujifunza",
          desc: "Ingia kwenye tovuti ya 'elimu.local' kupakua vitabu na kutazama mafunzo."
        }
      ]
    },
    impact: {
      title: "Matokeo Yetu ya Ndani",
      stats: [
        { label: "Wanafunzi Hai", value: "3,200+" },
        { label: "Vitabu vya Kidijitali", value: "8,500+" },
        { label: "Vituo vya Vijijini", value: "15" },
        { label: "Maendeleo ya SDG", value: "85%" }
      ]
    },
    footer: "© 2026 Kituo cha UN cha Ujumuishaji Kidijitali - Tanzania Demo. Kusaidia Malengo ya Maendeleo Endelevu."
  }
};

export default function App() {
  const [lang, setLang] = useState<Language>('sw');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const content = translations[lang];

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'sw' : 'en');
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-un-blue/20 selection:text-un-dark">
      {/* Demo Banner */}
      <div className="bg-africa-terracotta py-1 text-center text-[10px] font-bold tracking-widest text-white">
        {content.demo}
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b-4 border-africa-ochre bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-un-blue text-white shadow-lg">
              <Globe size={28} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black leading-tight tracking-tighter text-un-dark sm:text-xl">
                DIGITAL INCLUSION
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-africa-terracotta uppercase">
                Tanzania Hub
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#home" className="text-xs font-bold text-slate-600 uppercase tracking-wider hover:text-un-blue">{content.nav.home}</a>
            <a href="#resources" className="text-xs font-bold text-slate-600 uppercase tracking-wider hover:text-un-blue">{content.nav.resources}</a>
            <a href="#guide" className="text-xs font-bold text-slate-600 uppercase tracking-wider hover:text-un-blue">{content.nav.guide}</a>
            <a href="#impact" className="text-xs font-bold text-slate-600 uppercase tracking-wider hover:text-un-blue">{content.nav.impact}</a>
            
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 rounded-lg border-2 border-un-blue px-4 py-1.5 text-xs font-black text-un-blue transition-all hover:bg-un-blue hover:text-white"
            >
              <Award size={14} />
              {lang === 'en' ? 'KISWAHILI' : 'ENGLISH'}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-un-dark"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      <main className="bg-pattern-african">
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 rounded-md bg-un-blue/10 px-3 py-1 text-xs font-black text-un-blue uppercase tracking-wider">
                  <ShieldCheck size={14} />
                  {content.hero.badge}
                </div>
                <h1 className="mt-6 text-4xl font-black leading-[1.1] text-slate-900 sm:text-6xl">
                  {content.hero.title}
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
                  {content.hero.subtitle}
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <button className="flex items-center justify-center gap-2 rounded-lg bg-un-blue px-8 py-4 text-sm font-black text-white shadow-xl shadow-un-blue/20 transition-all hover:bg-un-dark">
                    {content.hero.cta}
                    <ChevronRight size={18} />
                  </button>
                  <div className="flex items-center gap-3 rounded-lg border-2 border-slate-200 bg-white px-6 py-4">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Sustainable_Development_Goal_4.png" alt="SDG 4" className="h-10 w-10 object-contain" referrerPolicy="no-referrer" />
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{content.sdg.title}</p>
                      <p className="text-xs font-bold text-slate-700">{lang === 'en' ? 'Quality Education' : 'Elimu Bora'}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-africa-ochre/20 blur-2xl" />
                <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-un-blue/20 blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl">
                  <img 
                    src="https://picsum.photos/seed/tanzania-school/800/1000" 
                    alt="Education in Tanzania" 
                    className="aspect-[4/5] w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-un-dark/80 to-transparent p-8 text-white">
                    <p className="text-sm font-bold italic opacity-90">"Elimu ni ufunguo wa maisha"</p>
                    <p className="mt-1 text-xs font-black uppercase tracking-widest">- Tanzania Proverb</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SDG Alignment Info */}
        <section className="bg-un-blue py-12 text-white">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <Award size={40} className="text-africa-ochre" />
              <div className="max-w-2xl">
                <h2 className="text-xl font-black uppercase tracking-tighter sm:text-2xl">{content.sdg.title}</h2>
                <p className="mt-2 text-sm font-medium text-un-blue-50 opacity-90">{content.sdg.desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Library */}
        <section id="resources" className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 border-l-8 border-africa-terracotta pl-6">
              <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">
                {content.resources.title}
              </h2>
              <p className="mt-2 text-lg font-bold text-africa-terracotta/80">
                {lang === 'en' ? 'Community-focused learning paths' : 'Njia za kujifunza zinazolenga jamii'}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {content.resources.categories.map((cat, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-2xl border-2 border-slate-100 bg-white p-8 transition-all hover:border-un-blue hover:shadow-xl">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 text-un-blue group-hover:bg-un-blue group-hover:text-white">
                    <cat.icon size={28} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900">{cat.title}</h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-slate-500">
                    {cat.desc}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-xs font-black text-un-blue uppercase tracking-widest">
                    {lang === 'en' ? 'Explore' : 'Gundua'}
                    <ChevronRight size={14} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Connection Guide */}
        <section id="guide" className="bg-slate-900 py-24 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-black sm:text-4xl">{content.guide.title}</h2>
                <div className="mt-12 space-y-12">
                  {content.guide.steps.map((step, idx) => (
                    <div key={idx} className="flex gap-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border-2 border-africa-ochre text-xl font-black text-africa-ochre">
                        0{idx + 1}
                      </div>
                      <div>
                        <h4 className="text-lg font-black uppercase tracking-tight text-white">{step.title}</h4>
                        <p className="mt-2 text-sm font-medium text-slate-400">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-3xl border-4 border-africa-ochre p-4">
                <div className="absolute -right-8 -top-8 hidden h-32 w-32 items-center justify-center rounded-full bg-africa-terracotta text-center text-[10px] font-black uppercase leading-tight text-white lg:flex">
                  100%<br/>OFFLINE<br/>ACCESS
                </div>
                <img 
                  src="https://picsum.photos/seed/tanzania-tech/800/600" 
                  alt="Tech in Tanzania" 
                  className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Impact Counter */}
        <section id="impact" className="border-y-8 border-africa-ochre bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {content.impact.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center border-x border-slate-100 px-4 text-center">
                  <span className="text-5xl font-black tracking-tighter text-un-blue">
                    {stat.value}
                  </span>
                  <span className="mt-4 text-[10px] font-black uppercase tracking-[0.2em] text-africa-terracotta">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Disclaimer */}
        <section className="bg-slate-50 py-12">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <div className="flex items-center justify-center gap-2 text-africa-terracotta">
              <Info size={20} />
              <h3 className="text-sm font-black uppercase tracking-widest">{lang === 'en' ? 'Demo Information' : 'Habari za Demo'}</h3>
            </div>
            <p className="mt-4 text-xs font-bold leading-relaxed text-slate-400">
              {lang === 'en' 
                ? "This is a demonstration website created to showcase the potential of localized digital inclusion hubs in Tanzania. It is designed to run on low-power servers like Raspberry Pi to provide free educational content to remote communities."
                : "Hii ni tovuti ya maonyesho iliyoundwa kuonyesha uwezo wa vituo vya ujumuishaji wa kidijitali nchini Tanzania. Imeundwa kufanya kazi kwenye seva zenye nguvu ndogo kama Raspberry Pi ili kutoa maudhui ya elimu ya bure kwa jamii za mbali."}
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-un-dark py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-3">
              <Globe size={24} className="text-africa-ochre" />
              <span className="text-lg font-black tracking-tighter">UN DIGITAL HUB <span className="text-africa-ochre">TZ</span></span>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">
              {content.footer}
            </p>
            <div className="flex gap-4">
              <div className="h-8 w-8 rounded bg-white/10" />
              <div className="h-8 w-8 rounded bg-white/10" />
              <div className="h-8 w-8 rounded bg-white/10" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
