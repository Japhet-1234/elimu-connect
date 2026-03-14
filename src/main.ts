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
    color: 'bg-africa-terracotta'
  },
  {
    id: 'secondary',
    title: 'Secondary School',
    swTitle: 'Shule ya Sekondari',
    desc: 'O-Level and A-Level past papers and notes.',
    swDesc: 'Mitihani ya zamani na notisi za Kidato cha 1 hadi cha 6.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    color: 'bg-africa-gold'
  },
  {
    id: 'kiswahili',
    title: 'Kiswahili & Culture',
    swTitle: 'Kiswahili na Utamaduni',
    desc: 'Fasihi, sarufi, and East African heritage.',
    swDesc: 'Fasihi, sarufi, na urithi wa Afrika Mashariki.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M8 11h8"/><path d="M12 7v8"/></svg>`,
    color: 'bg-africa-green'
  },
  {
    id: 'history',
    title: 'African History',
    swTitle: 'Historia ya Afrika',
    desc: 'From ancient civilizations to modern liberation.',
    swDesc: 'Kutoka ustaarabu wa kale hadi ukombozi wa kisasa.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/><path d="M12 21.8c2.3-2.5 3.5-5.5 3.5-9.8S14.3 2.2 12 2c-2.3.2-3.5 5.2-3.5 9.8s1.2 7.3 3.5 10z"/></svg>`,
    color: 'bg-africa-clay'
  },
  {
    id: 'veta',
    title: 'Vocational Skills',
    swTitle: 'Stadi za Kazi (VETA)',
    desc: 'Practical guides for technical and vocational training.',
    swDesc: 'Miongozo ya vitendo kwa mafunzo ya ufundi na stadi.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    color: 'bg-africa-ebony'
  },
  {
    id: 'college',
    title: 'College & University',
    swTitle: 'Chuo na Chuo Kikuu',
    desc: 'Higher education materials and research guides.',
    swDesc: 'Vifaa vya elimu ya juu na miongozo ya utafiti.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14.5 2 14.5 7.5 20 7.5"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>`,
    color: 'bg-africa-clay'
  }
];

const updates = [
  { id: 1, title: 'NECTA Form Four Results 2025', date: '2 hours ago', type: 'News' },
  { id: 2, title: 'HESLB Loan Applications Phase 1', date: '4 hours ago', type: 'Loans' },
  { id: 3, title: 'New Biology Notes - Form Two', date: '5 hours ago', type: 'Notes' },
  { id: 4, title: 'Mathematics Past Papers 2024', date: '1 day ago', type: 'Exam' },
  { id: 5, title: 'TAMISEMI Selection Results', date: '2 days ago', type: 'Selection' },
  { id: 6, title: 'Scholarship Opportunities in TZ', date: '3 days ago', type: 'News' },
];

const resources = [
  { id: 1, title: 'Mathematics Past Paper 2023', swTitle: 'Mtihani wa Hisabati 2023', category: 'secondary', type: 'Exam', level: 'Form 4' },
  { id: 2, title: 'History: Maji Maji Rebellion', swTitle: 'Historia: Vita vya Maji Maji', category: 'history', type: 'Notes', level: 'Form 2' },
  { id: 3, title: 'Kiswahili: Fasihi Simulizi', swTitle: 'Kiswahili: Fasihi Simulizi', category: 'kiswahili', type: 'Notes', level: 'Form 3' },
  { id: 4, title: 'Biology: Human Nutrition', swTitle: 'Biolojia: Lishe ya Binadamu', category: 'secondary', type: 'Notes', level: 'Form 1' },
  { id: 5, title: 'Geography: East African Rift Valley', swTitle: 'Jiografia: Bonde la Ufa', category: 'secondary', type: 'Notes', level: 'Form 2' },
  { id: 6, title: 'Civics: African Liberation', swTitle: 'Uraia: Ukombozi wa Afrika', category: 'history', type: 'Notes', level: 'Form 4' },
  { id: 7, title: 'English: Oral Skills', swTitle: 'Kiingereza: Stadi za Kuzungumza', category: 'secondary', type: 'Notes', level: 'Form 1' },
  { id: 8, title: 'Physics: Electricity', swTitle: 'Fizikia: Umeme', category: 'secondary', type: 'Notes', level: 'Form 3' },
  { id: 9, title: 'Chemistry: Organic Chemistry', swTitle: 'Kemia: Kemia Hai', category: 'secondary', type: 'Notes', level: 'Form 4' },
  { id: 10, title: 'VETA: Carpentry Basics', swTitle: 'VETA: Misingi ya Useremala', category: 'veta', type: 'Guide', level: 'Level 1' },
];

// State
let currentLang: 'en' | 'sw' = 'sw';
let searchQuery = '';

// Translations
const translations = {
  en: {
    heroTitle: 'Empower Your Future Through Knowledge',
    heroSubtitle: 'Access the best educational resources in Tanzania.',
    searchPlaceholder: 'Search subjects, notes...',
    categoriesTitle: 'Educational Levels',
    recentTitle: 'Recent Updates',
    footerDesc: 'Elimu Hub - Bridging the gap in digital learning.',
    startBtn: 'Start Learning',
    papersBtn: 'View Past Papers',
    viewAll: 'View All Updates',
    noResults: 'No results found',
    explore: 'Explore',
    searchResults: 'Search Results',
    clear: 'Clear'
  },
  sw: {
    heroTitle: 'Imarisha Mustakabali Wako Kupitia Maarifa',
    heroSubtitle: 'Pata rasilimali bora zaidi za elimu nchini Tanzania.',
    searchPlaceholder: 'Tafuta masomo, notisi...',
    categoriesTitle: 'Ngazi za Elimu',
    recentTitle: 'Taarifa Mpya',
    footerDesc: 'Elimu Hub - Kuziba pengo la ujifunzaji wa kidijitali.',
    startBtn: 'Anza Kujifunza',
    papersBtn: 'Tazama Mitihani',
    viewAll: 'Tazama Zote',
    noResults: 'Hakuna matokeo yaliyopatikana',
    explore: 'Gundua',
    searchResults: 'Matokeo ya Utafutaji',
    clear: 'Futa'
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
const searchInputHero = document.getElementById('search-input-hero') as HTMLInputElement;
const categoriesGrid = document.getElementById('categories-grid');
const searchResultsSection = document.getElementById('search-results-section');
const searchResultsGrid = document.getElementById('search-results-grid');
const searchResultsTitle = document.getElementById('search-results-title');
const clearSearchBtn = document.getElementById('clear-search');
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
  if (searchResultsTitle) searchResultsTitle.textContent = t.searchResults;
  if (clearSearchBtn) clearSearchBtn.textContent = t.clear;
  
  searchInputDesktop.placeholder = t.searchPlaceholder;
  searchInputMobile.placeholder = t.searchPlaceholder;
  if (searchInputHero) searchInputHero.placeholder = t.searchPlaceholder;
  langToggle!.textContent = currentLang === 'en' ? 'KISWAHILI' : 'ENGLISH';
  
  renderCategories();
}

function renderCategories() {
  if (!categoriesGrid) return;
  
  const t = translations[currentLang];
  
  // Show/Hide search results section
  if (searchQuery.length > 0) {
    searchResultsSection?.classList.remove('hidden');
    renderSearchResults();
  } else {
    searchResultsSection?.classList.add('hidden');
  }

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
      card.className = 'bento-card group';
      card.innerHTML = `
        <div class="mb-8 flex h-20 w-20 items-center justify-center rounded-[1.5rem] ${cat.color} text-white shadow-xl group-hover:scale-110 transition-transform duration-500">
          ${cat.icon}
        </div>
        <h3 class="text-3xl font-black text-africa-ebony group-hover:text-africa-terracotta transition-colors">
          ${currentLang === 'en' ? cat.title : cat.swTitle}
        </h3>
        <p class="mt-4 text-africa-clay font-medium leading-relaxed text-lg">
          ${currentLang === 'en' ? cat.desc : cat.swDesc}
        </p>
        <div class="mt-10 flex items-center gap-3 text-sm font-black text-africa-terracotta uppercase tracking-[0.2em]">
          ${t.explore}
          <svg class="group-hover:translate-x-2 transition-transform" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
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
    item.className = 'flex items-center justify-between p-6 bg-white rounded-2xl border border-africa-gold/10 hover:border-africa-terracotta transition-all group cursor-pointer';
    item.innerHTML = `
      <div class="flex items-center gap-4">
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-africa-cream text-africa-clay group-hover:bg-africa-terracotta group-hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <div>
          <h4 class="font-bold text-africa-ebony">${update.title}</h4>
          <p class="text-xs text-africa-clay font-bold uppercase tracking-widest mt-1">
            ${update.type} • ${update.date}
          </p>
        </div>
      </div>
      <svg class="text-africa-clay group-hover:text-africa-terracotta transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    `;
    updatesList.appendChild(item);
  });
}

function renderSearchResults() {
  if (!searchResultsGrid) return;
  
  const filtered = resources.filter(res => 
    res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    res.swTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    res.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    res.level.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  searchResultsGrid.innerHTML = '';
  
  if (filtered.length === 0) {
    searchResultsGrid.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-400 font-bold">
        Hakuna rasilimali zilizopatikana kwa "${searchQuery}"
      </div>
    `;
    return;
  }
  
  filtered.forEach(res => {
    const card = document.createElement('div');
    card.className = 'bento-card group p-6';
    card.innerHTML = `
      <div class="flex items-start justify-between mb-6">
        <div class="p-4 rounded-2xl bg-africa-cream text-africa-terracotta group-hover:bg-africa-terracotta group-hover:text-white transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14.5 2 14.5 7.5 20 7.5"/></svg>
        </div>
        <span class="text-xs font-black uppercase tracking-widest px-3 py-1.5 bg-africa-gold/10 rounded-lg text-africa-clay border border-africa-gold/20">
          ${res.type}
        </span>
      </div>
      <h4 class="text-xl font-black text-africa-ebony group-hover:text-africa-terracotta transition-colors leading-tight">
        ${currentLang === 'en' ? res.title : res.swTitle}
      </h4>
      <div class="mt-4 pt-4 border-t border-africa-gold/10 flex items-center justify-between">
        <p class="text-xs text-africa-clay font-black uppercase tracking-widest">
          ${res.level} • ${res.category}
        </p>
        <svg class="text-africa-gold opacity-0 group-hover:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </div>
    `;
    searchResultsGrid.appendChild(card);
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

clearSearchBtn?.addEventListener('click', () => {
  searchQuery = '';
  searchInputDesktop.value = '';
  searchInputMobile.value = '';
  if (searchInputHero) searchInputHero.value = '';
  renderCategories();
});

searchInputDesktop?.addEventListener('input', (e) => {
  searchQuery = (e.target as HTMLInputElement).value;
  renderCategories();
});

searchInputMobile?.addEventListener('input', (e) => {
  searchQuery = (e.target as HTMLInputElement).value;
  renderCategories();
});

searchInputHero?.addEventListener('input', (e) => {
  searchQuery = (e.target as HTMLInputElement).value;
  renderCategories();
  
  // Scroll to categories on search if not already there
  if (searchQuery.length > 2) {
    document.getElementById('notes')?.scrollIntoView({ behavior: 'smooth' });
  }
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

// Trending Tags
document.querySelectorAll('.trending-tag').forEach(tag => {
  tag.addEventListener('click', () => {
    const query = tag.textContent || '';
    searchQuery = query;
    if (searchInputHero) searchInputHero.value = query;
    if (searchInputDesktop) searchInputDesktop.value = query;
    if (searchInputMobile) searchInputMobile.value = query;
    renderCategories();
    document.getElementById('search-results-section')?.scrollIntoView({ behavior: 'smooth' });
  });
});
