/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Data
const categories = [
  {
    id: 'primary',
    title: 'Primary School',
    swTitle: 'Shule ya Msingi',
    desc: 'Standard 1 to 7 resources and notes.',
    swDesc: 'Rasilimali na notisi za Darasa la 1 hadi la 7.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M8 7h6"/><path d="M8 11h8"/></svg>`,
    color: 'bg-forest-green'
  },
  {
    id: 'secondary',
    title: 'Secondary School',
    swTitle: 'Shule ya Sekondari',
    desc: 'O-Level and A-Level past papers and notes.',
    swDesc: 'Mitihani ya zamani na notisi za Kidato cha 1 hadi cha 6.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    color: 'bg-burnt-orange'
  },
  {
    id: 'college',
    title: 'College & University',
    swTitle: 'Chuo na Chuo Kikuu',
    desc: 'Higher education materials and research guides.',
    swDesc: 'Vifaa vya elimu ya juu na miongozo ya utafiti.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14.5 2 14.5 7.5 20 7.5"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>`,
    color: 'bg-earth-brown'
  }
];

const updates = [
  { id: 1, title: 'NECTA Form Four Results 2025', date: '2 hours ago', type: 'News' },
  { id: 2, title: 'New Biology Notes - Form Two', date: '5 hours ago', type: 'Notes' },
  { id: 3, title: 'Mathematics Past Papers 2024', date: '1 day ago', type: 'Exam' },
  { id: 4, title: 'Scholarship Opportunities in TZ', date: '2 days ago', type: 'News' },
];

// State
let currentLang: 'en' | 'sw' = 'sw';
let searchQuery = '';

// Translations
const translations = {
  en: {
    heroTitle: 'Empower Your Future Through Knowledge',
    heroSubtitle: 'Access the best educational resources in Tanzania, inspired by our heritage.',
    searchPlaceholder: 'Search subjects, notes...',
    categoriesTitle: 'Educational Levels',
    recentTitle: 'Recent Updates',
    footerDesc: 'Elimu Hub African Edition - Bridging the gap between tradition and digital learning.',
    startBtn: 'Start Learning',
    papersBtn: 'View Past Papers',
    viewAll: 'View All Updates',
    noResults: 'No results found',
    explore: 'Explore'
  },
  sw: {
    heroTitle: 'Imarisha Mustakabali Wako Kupitia Maarifa',
    heroSubtitle: 'Pata rasilimali bora zaidi za elimu nchini Tanzania, zilizochochewa na urithi wetu.',
    searchPlaceholder: 'Tafuta masomo, notisi...',
    categoriesTitle: 'Ngazi za Elimu',
    recentTitle: 'Taarifa Mpya',
    footerDesc: 'Elimu Hub Toleo la Kiafrika - Kuziba pengo kati ya mila na ujifunzaji wa kidijitali.',
    startBtn: 'Anza Kujifunza',
    papersBtn: 'Tazama Mitihani',
    viewAll: 'Tazama Zote',
    noResults: 'Hakuna matokeo yaliyopatikana',
    explore: 'Gundua'
  }
};

// DOM Elements
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const langToggle = document.getElementById('lang-toggle');
const searchInputDesktop = document.getElementById('search-input-desktop') as HTMLInputElement;
const searchInputMobile = document.getElementById('search-input-mobile') as HTMLInputElement;
const categoriesGrid = document.getElementById('categories-grid');
const updatesList = document.getElementById('updates-list');
const noResults = document.getElementById('no-results');

// UI Update Functions
function updateTranslations() {
  const t = translations[currentLang];
  
  document.getElementById('hero-title')!.textContent = t.heroTitle;
  document.getElementById('hero-subtitle')!.textContent = t.heroSubtitle;
  document.getElementById('categories-title')!.textContent = t.categoriesTitle;
  document.getElementById('recent-title')!.textContent = t.recentTitle;
  document.getElementById('footer-desc')!.textContent = t.footerDesc;
  document.getElementById('text-start')!.textContent = t.startBtn;
  document.getElementById('text-papers')!.textContent = t.papersBtn;
  document.getElementById('view-all-updates')!.textContent = t.viewAll;
  document.getElementById('no-results')!.querySelector('p')!.textContent = t.noResults;
  
  searchInputDesktop.placeholder = t.searchPlaceholder;
  searchInputMobile.placeholder = t.searchPlaceholder;
  langToggle!.textContent = currentLang === 'en' ? 'KISWAHILI' : 'ENGLISH';
  
  renderCategories();
}

function renderCategories() {
  if (!categoriesGrid) return;
  
  const t = translations[currentLang];
  const filtered = categories.filter(cat => 
    cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.swTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.swDesc.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  categoriesGrid.innerHTML = '';
  
  if (filtered.length === 0) {
    noResults?.classList.remove('hidden');
  } else {
    noResults?.classList.add('hidden');
    filtered.forEach(cat => {
      const card = document.createElement('div');
      card.className = 'group relative overflow-hidden rounded-3xl border-2 border-slate-50 bg-[#FFFBF0] p-8 transition-all hover:border-africa-gold hover:shadow-2xl cursor-pointer';
      card.innerHTML = `
        <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${cat.color} text-white shadow-lg">
          ${cat.icon}
        </div>
        <h3 class="text-2xl font-black text-earth-brown">
          ${currentLang === 'en' ? cat.title : cat.swTitle}
        </h3>
        <p class="mt-4 text-slate-500 font-medium leading-relaxed">
          ${currentLang === 'en' ? cat.desc : cat.swDesc}
        </p>
        <div class="mt-8 flex items-center gap-2 text-sm font-black text-burnt-orange uppercase tracking-widest">
          ${t.explore}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </div>
      `;
      categoriesGrid.appendChild(card);
    });
  }
}

function renderUpdates() {
  if (!updatesList) return;
  
  updatesList.innerHTML = '';
  updates.forEach(update => {
    const item = document.createElement('div');
    item.className = 'flex items-center justify-between p-6 bg-white rounded-2xl border border-slate-100 hover:border-africa-gold transition-all group cursor-pointer';
    item.innerHTML = `
      <div class="flex items-center gap-4">
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-400 group-hover:bg-africa-gold group-hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <div>
          <h4 class="font-bold text-earth-brown">${update.title}</h4>
          <p class="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">
            ${update.type} • ${update.date}
          </p>
        </div>
      </div>
      <svg class="text-slate-300 group-hover:text-africa-gold transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    `;
    updatesList.appendChild(item);
  });
}

// Event Listeners
menuToggle?.addEventListener('click', () => {
  const isOpen = !mobileMenu?.classList.contains('hidden');
  if (isOpen) {
    mobileMenu?.classList.add('hidden');
    menuIcon?.classList.remove('hidden');
    closeIcon?.classList.add('hidden');
  } else {
    mobileMenu?.classList.remove('hidden');
    menuIcon?.classList.add('hidden');
    closeIcon?.classList.remove('hidden');
  }
});

langToggle?.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'sw' : 'en';
  updateTranslations();
});

searchInputDesktop?.addEventListener('input', (e) => {
  searchQuery = (e.target as HTMLInputElement).value;
  renderCategories();
});

searchInputMobile?.addEventListener('input', (e) => {
  searchQuery = (e.target as HTMLInputElement).value;
  renderCategories();
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu?.classList.add('hidden');
    menuIcon?.classList.remove('hidden');
    closeIcon?.classList.add('hidden');
  });
});

// Initial Render
updateTranslations();
renderUpdates();
