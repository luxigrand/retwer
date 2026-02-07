// Periodic Table Data - All 118 elements with bilingual names
const periodicTableData = [
    // Period 1
    { number: 1, symbol: 'H', nameEn: 'Hydrogen', nameTr: 'Hidrojen', group: 1, period: 1, category: 'nonmetal' },
    { number: 2, symbol: 'He', nameEn: 'Helium', nameTr: 'Helyum', group: 18, period: 1, category: 'noble-gas' },
    
    // Period 2
    { number: 3, symbol: 'Li', nameEn: 'Lithium', nameTr: 'Lityum', group: 1, period: 2, category: 'alkali-metal' },
    { number: 4, symbol: 'Be', nameEn: 'Beryllium', nameTr: 'Berilyum', group: 2, period: 2, category: 'alkaline-earth' },
    { number: 5, symbol: 'B', nameEn: 'Boron', nameTr: 'Bor', group: 13, period: 2, category: 'metalloid' },
    { number: 6, symbol: 'C', nameEn: 'Carbon', nameTr: 'Karbon', group: 14, period: 2, category: 'nonmetal' },
    { number: 7, symbol: 'N', nameEn: 'Nitrogen', nameTr: 'Azot', group: 15, period: 2, category: 'nonmetal' },
    { number: 8, symbol: 'O', nameEn: 'Oxygen', nameTr: 'Oksijen', group: 16, period: 2, category: 'nonmetal' },
    { number: 9, symbol: 'F', nameEn: 'Fluorine', nameTr: 'Flor', group: 17, period: 2, category: 'halogen' },
    { number: 10, symbol: 'Ne', nameEn: 'Neon', nameTr: 'Neon', group: 18, period: 2, category: 'noble-gas' },
    
    // Period 3
    { number: 11, symbol: 'Na', nameEn: 'Sodium', nameTr: 'Sodyum', group: 1, period: 3, category: 'alkali-metal' },
    { number: 12, symbol: 'Mg', nameEn: 'Magnesium', nameTr: 'Magnezyum', group: 2, period: 3, category: 'alkaline-earth' },
    { number: 13, symbol: 'Al', nameEn: 'Aluminum', nameTr: 'Alüminyum', group: 13, period: 3, category: 'post-transition' },
    { number: 14, symbol: 'Si', nameEn: 'Silicon', nameTr: 'Silisyum', group: 14, period: 3, category: 'metalloid' },
    { number: 15, symbol: 'P', nameEn: 'Phosphorus', nameTr: 'Fosfor', group: 15, period: 3, category: 'nonmetal' },
    { number: 16, symbol: 'S', nameEn: 'Sulfur', nameTr: 'Kükürt', group: 16, period: 3, category: 'nonmetal' },
    { number: 17, symbol: 'Cl', nameEn: 'Chlorine', nameTr: 'Klor', group: 17, period: 3, category: 'halogen' },
    { number: 18, symbol: 'Ar', nameEn: 'Argon', nameTr: 'Argon', group: 18, period: 3, category: 'noble-gas' },
    
    // Period 4
    { number: 19, symbol: 'K', nameEn: 'Potassium', nameTr: 'Potasyum', group: 1, period: 4, category: 'alkali-metal' },
    { number: 20, symbol: 'Ca', nameEn: 'Calcium', nameTr: 'Kalsiyum', group: 2, period: 4, category: 'alkaline-earth' },
    { number: 21, symbol: 'Sc', nameEn: 'Scandium', nameTr: 'Skandiyum', group: 3, period: 4, category: 'transition-metal' },
    { number: 22, symbol: 'Ti', nameEn: 'Titanium', nameTr: 'Titanyum', group: 4, period: 4, category: 'transition-metal' },
    { number: 23, symbol: 'V', nameEn: 'Vanadium', nameTr: 'Vanadyum', group: 5, period: 4, category: 'transition-metal' },
    { number: 24, symbol: 'Cr', nameEn: 'Chromium', nameTr: 'Krom', group: 6, period: 4, category: 'transition-metal' },
    { number: 25, symbol: 'Mn', nameEn: 'Manganese', nameTr: 'Mangan', group: 7, period: 4, category: 'transition-metal' },
    { number: 26, symbol: 'Fe', nameEn: 'Iron', nameTr: 'Demir', group: 8, period: 4, category: 'transition-metal' },
    { number: 27, symbol: 'Co', nameEn: 'Cobalt', nameTr: 'Kobalt', group: 9, period: 4, category: 'transition-metal' },
    { number: 28, symbol: 'Ni', nameEn: 'Nickel', nameTr: 'Nikel', group: 10, period: 4, category: 'transition-metal' },
    { number: 29, symbol: 'Cu', nameEn: 'Copper', nameTr: 'Bakır', group: 11, period: 4, category: 'transition-metal' },
    { number: 30, symbol: 'Zn', nameEn: 'Zinc', nameTr: 'Çinko', group: 12, period: 4, category: 'transition-metal' },
    { number: 31, symbol: 'Ga', nameEn: 'Gallium', nameTr: 'Galyum', group: 13, period: 4, category: 'post-transition' },
    { number: 32, symbol: 'Ge', nameEn: 'Germanium', nameTr: 'Germanyum', group: 14, period: 4, category: 'metalloid' },
    { number: 33, symbol: 'As', nameEn: 'Arsenic', nameTr: 'Arsenik', group: 15, period: 4, category: 'metalloid' },
    { number: 34, symbol: 'Se', nameEn: 'Selenium', nameTr: 'Selenyum', group: 16, period: 4, category: 'nonmetal' },
    { number: 35, symbol: 'Br', nameEn: 'Bromine', nameTr: 'Brom', group: 17, period: 4, category: 'halogen' },
    { number: 36, symbol: 'Kr', nameEn: 'Krypton', nameTr: 'Kripton', group: 18, period: 4, category: 'noble-gas' },
    
    // Period 5
    { number: 37, symbol: 'Rb', nameEn: 'Rubidium', nameTr: 'Rubidyum', group: 1, period: 5, category: 'alkali-metal' },
    { number: 38, symbol: 'Sr', nameEn: 'Strontium', nameTr: 'Stronsiyum', group: 2, period: 5, category: 'alkaline-earth' },
    { number: 39, symbol: 'Y', nameEn: 'Yttrium', nameTr: 'İtriyum', group: 3, period: 5, category: 'transition-metal' },
    { number: 40, symbol: 'Zr', nameEn: 'Zirconium', nameTr: 'Zirkonyum', group: 4, period: 5, category: 'transition-metal' },
    { number: 41, symbol: 'Nb', nameEn: 'Niobium', nameTr: 'Niyobyum', group: 5, period: 5, category: 'transition-metal' },
    { number: 42, symbol: 'Mo', nameEn: 'Molybdenum', nameTr: 'Molibden', group: 6, period: 5, category: 'transition-metal' },
    { number: 43, symbol: 'Tc', nameEn: 'Technetium', nameTr: 'Teknesyum', group: 7, period: 5, category: 'transition-metal' },
    { number: 44, symbol: 'Ru', nameEn: 'Ruthenium', nameTr: 'Rutenyum', group: 8, period: 5, category: 'transition-metal' },
    { number: 45, symbol: 'Rh', nameEn: 'Rhodium', nameTr: 'Rodyum', group: 9, period: 5, category: 'transition-metal' },
    { number: 46, symbol: 'Pd', nameEn: 'Palladium', nameTr: 'Paladyum', group: 10, period: 5, category: 'transition-metal' },
    { number: 47, symbol: 'Ag', nameEn: 'Silver', nameTr: 'Gümüş', group: 11, period: 5, category: 'transition-metal' },
    { number: 48, symbol: 'Cd', nameEn: 'Cadmium', nameTr: 'Kadmiyum', group: 12, period: 5, category: 'transition-metal' },
    { number: 49, symbol: 'In', nameEn: 'Indium', nameTr: 'İndiyum', group: 13, period: 5, category: 'post-transition' },
    { number: 50, symbol: 'Sn', nameEn: 'Tin', nameTr: 'Kalay', group: 14, period: 5, category: 'post-transition' },
    { number: 51, symbol: 'Sb', nameEn: 'Antimony', nameTr: 'Antimon', group: 15, period: 5, category: 'metalloid' },
    { number: 52, symbol: 'Te', nameEn: 'Tellurium', nameTr: 'Tellür', group: 16, period: 5, category: 'metalloid' },
    { number: 53, symbol: 'I', nameEn: 'Iodine', nameTr: 'İyot', group: 17, period: 5, category: 'halogen' },
    { number: 54, symbol: 'Xe', nameEn: 'Xenon', nameTr: 'Ksenon', group: 18, period: 5, category: 'noble-gas' },
    
    // Period 6
    { number: 55, symbol: 'Cs', nameEn: 'Cesium', nameTr: 'Sezyum', group: 1, period: 6, category: 'alkali-metal' },
    { number: 56, symbol: 'Ba', nameEn: 'Barium', nameTr: 'Baryum', group: 2, period: 6, category: 'alkaline-earth' },
    { number: 57, symbol: 'La', nameEn: 'Lanthanum', nameTr: 'Lantan', group: 3, period: 6, category: 'lanthanide' },
    { number: 72, symbol: 'Hf', nameEn: 'Hafnium', nameTr: 'Hafniyum', group: 4, period: 6, category: 'transition-metal' },
    { number: 73, symbol: 'Ta', nameEn: 'Tantalum', nameTr: 'Tantal', group: 5, period: 6, category: 'transition-metal' },
    { number: 74, symbol: 'W', nameEn: 'Tungsten', nameTr: 'Tungsten', group: 6, period: 6, category: 'transition-metal' },
    { number: 75, symbol: 'Re', nameEn: 'Rhenium', nameTr: 'Renyum', group: 7, period: 6, category: 'transition-metal' },
    { number: 76, symbol: 'Os', nameEn: 'Osmium', nameTr: 'Osmiyum', group: 8, period: 6, category: 'transition-metal' },
    { number: 77, symbol: 'Ir', nameEn: 'Iridium', nameTr: 'İridyum', group: 9, period: 6, category: 'transition-metal' },
    { number: 78, symbol: 'Pt', nameEn: 'Platinum', nameTr: 'Platin', group: 10, period: 6, category: 'transition-metal' },
    { number: 79, symbol: 'Au', nameEn: 'Gold', nameTr: 'Altın', group: 11, period: 6, category: 'transition-metal' },
    { number: 80, symbol: 'Hg', nameEn: 'Mercury', nameTr: 'Cıva', group: 12, period: 6, category: 'transition-metal' },
    { number: 81, symbol: 'Tl', nameEn: 'Thallium', nameTr: 'Talyum', group: 13, period: 6, category: 'post-transition' },
    { number: 82, symbol: 'Pb', nameEn: 'Lead', nameTr: 'Kurşun', group: 14, period: 6, category: 'post-transition' },
    { number: 83, symbol: 'Bi', nameEn: 'Bismuth', nameTr: 'Bizmut', group: 15, period: 6, category: 'post-transition' },
    { number: 84, symbol: 'Po', nameEn: 'Polonium', nameTr: 'Polonyum', group: 16, period: 6, category: 'post-transition' },
    { number: 85, symbol: 'At', nameEn: 'Astatine', nameTr: 'Astatin', group: 17, period: 6, category: 'halogen' },
    { number: 86, symbol: 'Rn', nameEn: 'Radon', nameTr: 'Radon', group: 18, period: 6, category: 'noble-gas' },
    
    // Period 7
    { number: 87, symbol: 'Fr', nameEn: 'Francium', nameTr: 'Fransiyum', group: 1, period: 7, category: 'alkali-metal' },
    { number: 88, symbol: 'Ra', nameEn: 'Radium', nameTr: 'Radyum', group: 2, period: 7, category: 'alkaline-earth' },
    { number: 89, symbol: 'Ac', nameEn: 'Actinium', nameTr: 'Aktinyum', group: 3, period: 7, category: 'actinide' },
    { number: 104, symbol: 'Rf', nameEn: 'Rutherfordium', nameTr: 'Rutherfordyum', group: 4, period: 7, category: 'transition-metal' },
    { number: 105, symbol: 'Db', nameEn: 'Dubnium', nameTr: 'Dubniyum', group: 5, period: 7, category: 'transition-metal' },
    { number: 106, symbol: 'Sg', nameEn: 'Seaborgium', nameTr: 'Seaborgyum', group: 6, period: 7, category: 'transition-metal' },
    { number: 107, symbol: 'Bh', nameEn: 'Bohrium', nameTr: 'Bohriyum', group: 7, period: 7, category: 'transition-metal' },
    { number: 108, symbol: 'Hs', nameEn: 'Hassium', nameTr: 'Hassiyum', group: 8, period: 7, category: 'transition-metal' },
    { number: 109, symbol: 'Mt', nameEn: 'Meitnerium', nameTr: 'Meitneriyum', group: 9, period: 7, category: 'transition-metal' },
    { number: 110, symbol: 'Ds', nameEn: 'Darmstadtium', nameTr: 'Darmstadtiyum', group: 10, period: 7, category: 'transition-metal' },
    { number: 111, symbol: 'Rg', nameEn: 'Roentgenium', nameTr: 'Röntgenyum', group: 11, period: 7, category: 'transition-metal' },
    { number: 112, symbol: 'Cn', nameEn: 'Copernicium', nameTr: 'Kopernikyum', group: 12, period: 7, category: 'transition-metal' },
    { number: 113, symbol: 'Nh', nameEn: 'Nihonium', nameTr: 'Nihonyum', group: 13, period: 7, category: 'post-transition' },
    { number: 114, symbol: 'Fl', nameEn: 'Flerovium', nameTr: 'Flerovyum', group: 14, period: 7, category: 'post-transition' },
    { number: 115, symbol: 'Mc', nameEn: 'Moscovium', nameTr: 'Moskovyum', group: 15, period: 7, category: 'post-transition' },
    { number: 116, symbol: 'Lv', nameEn: 'Livermorium', nameTr: 'Livermoryum', group: 16, period: 7, category: 'post-transition' },
    { number: 117, symbol: 'Ts', nameEn: 'Tennessine', nameTr: 'Tennesin', group: 17, period: 7, category: 'halogen' },
    { number: 118, symbol: 'Og', nameEn: 'Oganesson', nameTr: 'Oganesson', group: 18, period: 7, category: 'noble-gas' },
    
    // Lanthanides
    { number: 58, symbol: 'Ce', nameEn: 'Cerium', nameTr: 'Seryum', group: 3, period: 6, category: 'lanthanide' },
    { number: 59, symbol: 'Pr', nameEn: 'Praseodymium', nameTr: 'Praseodim', group: 3, period: 6, category: 'lanthanide' },
    { number: 60, symbol: 'Nd', nameEn: 'Neodymium', nameTr: 'Neodim', group: 3, period: 6, category: 'lanthanide' },
    { number: 61, symbol: 'Pm', nameEn: 'Promethium', nameTr: 'Prometyum', group: 3, period: 6, category: 'lanthanide' },
    { number: 62, symbol: 'Sm', nameEn: 'Samarium', nameTr: 'Samaryum', group: 3, period: 6, category: 'lanthanide' },
    { number: 63, symbol: 'Eu', nameEn: 'Europium', nameTr: 'Europyum', group: 3, period: 6, category: 'lanthanide' },
    { number: 64, symbol: 'Gd', nameEn: 'Gadolinium', nameTr: 'Gadolinyum', group: 3, period: 6, category: 'lanthanide' },
    { number: 65, symbol: 'Tb', nameEn: 'Terbium', nameTr: 'Terbiyum', group: 3, period: 6, category: 'lanthanide' },
    { number: 66, symbol: 'Dy', nameEn: 'Dysprosium', nameTr: 'Disprozyum', group: 3, period: 6, category: 'lanthanide' },
    { number: 67, symbol: 'Ho', nameEn: 'Holmium', nameTr: 'Holmiyum', group: 3, period: 6, category: 'lanthanide' },
    { number: 68, symbol: 'Er', nameEn: 'Erbium', nameTr: 'Erbiyum', group: 3, period: 6, category: 'lanthanide' },
    { number: 69, symbol: 'Tm', nameEn: 'Thulium', nameTr: 'Tulyum', group: 3, period: 6, category: 'lanthanide' },
    { number: 70, symbol: 'Yb', nameEn: 'Ytterbium', nameTr: 'İterbiyum', group: 3, period: 6, category: 'lanthanide' },
    { number: 71, symbol: 'Lu', nameEn: 'Lutetium', nameTr: 'Lutesyum', group: 3, period: 6, category: 'lanthanide' },
    
    // Actinides
    { number: 90, symbol: 'Th', nameEn: 'Thorium', nameTr: 'Toryum', group: 3, period: 7, category: 'actinide' },
    { number: 91, symbol: 'Pa', nameEn: 'Protactinium', nameTr: 'Protaktinyum', group: 3, period: 7, category: 'actinide' },
    { number: 92, symbol: 'U', nameEn: 'Uranium', nameTr: 'Uranyum', group: 3, period: 7, category: 'actinide' },
    { number: 93, symbol: 'Np', nameEn: 'Neptunium', nameTr: 'Neptünyum', group: 3, period: 7, category: 'actinide' },
    { number: 94, symbol: 'Pu', nameEn: 'Plutonium', nameTr: 'Plütonyum', group: 3, period: 7, category: 'actinide' },
    { number: 95, symbol: 'Am', nameEn: 'Americium', nameTr: 'Amerikyum', group: 3, period: 7, category: 'actinide' },
    { number: 96, symbol: 'Cm', nameEn: 'Curium', nameTr: 'Küriyum', group: 3, period: 7, category: 'actinide' },
    { number: 97, symbol: 'Bk', nameEn: 'Berkelium', nameTr: 'Berkeleyum', group: 3, period: 7, category: 'actinide' },
    { number: 98, symbol: 'Cf', nameEn: 'Californium', nameTr: 'Kaliforniyum', group: 3, period: 7, category: 'actinide' },
    { number: 99, symbol: 'Es', nameEn: 'Einsteinium', nameTr: 'Einsteinyum', group: 3, period: 7, category: 'actinide' },
    { number: 100, symbol: 'Fm', nameEn: 'Fermium', nameTr: 'Fermiyum', group: 3, period: 7, category: 'actinide' },
    { number: 101, symbol: 'Md', nameEn: 'Mendelevium', nameTr: 'Mendelevyum', group: 3, period: 7, category: 'actinide' },
    { number: 102, symbol: 'No', nameEn: 'Nobelium', nameTr: 'Nobelyum', group: 3, period: 7, category: 'actinide' },
    { number: 103, symbol: 'Lr', nameEn: 'Lawrencium', nameTr: 'Lawrensiyum', group: 3, period: 7, category: 'actinide' }
];

// Game state
let currentLanguage = localStorage.getItem('language') || 'en';
let difficulty = localStorage.getItem('difficulty') || 'medium';
let timerEnabled = localStorage.getItem('timerEnabled') === 'true';
let score = 0;
let totalQuestions = 0;
let currentStreak = 0;
let bestStreak = parseInt(localStorage.getItem('bestStreak')) || 0;
let currentElement = null;
let selectedAnswer = null;
let timerInterval = null;
let timerSeconds = 30;

// Translations
const translations = {
    en: {
        title: 'Periodic Table Guessing Game',
        score: 'Score:',
        question: 'Which element is this?',
        correct: 'Correct!',
        incorrect: 'Incorrect!',
        correctAnswer: 'Correct answer:',
        streak: 'Streak:',
        difficulty: 'Difficulty:',
        category: 'Category:',
        group: 'Group:',
        period: 'Period:',
        reset: 'Reset Score',
        easy: 'Easy',
        medium: 'Medium',
        hard: 'Hard',
        timer: 'Timer',
        timeUp: 'Time\'s up!',
        enterElement: 'Enter element name...',
        submit: 'Submit'
    },
    tr: {
        title: 'Periyodik Tablo Tahmin Oyunu',
        score: 'Skor:',
        question: 'Bu hangi element?',
        correct: 'Doğru!',
        incorrect: 'Yanlış!',
        correctAnswer: 'Doğru cevap:',
        streak: 'Seri:',
        difficulty: 'Zorluk:',
        category: 'Kategori:',
        group: 'Grup:',
        period: 'Periyot:',
        reset: 'Skoru Sıfırla',
        easy: 'Kolay',
        medium: 'Orta',
        hard: 'Zor',
        timer: 'Zamanlayıcı',
        timeUp: 'Süre doldu!',
        enterElement: 'Element adını girin...',
        submit: 'Gönder'
    }
};

// Category translations
const categoryTranslations = {
    en: {
        'alkali-metal': 'Alkali Metal',
        'alkaline-earth': 'Alkaline Earth',
        'transition-metal': 'Transition Metal',
        'post-transition': 'Post-transition Metal',
        'metalloid': 'Metalloid',
        'nonmetal': 'Nonmetal',
        'halogen': 'Halogen',
        'noble-gas': 'Noble Gas',
        'lanthanide': 'Lanthanide',
        'actinide': 'Actinide'
    },
    tr: {
        'alkali-metal': 'Alkali Metal',
        'alkaline-earth': 'Toprak Alkali',
        'transition-metal': 'Geçiş Metali',
        'post-transition': 'Geçiş Sonrası Metal',
        'metalloid': 'Metaloid',
        'nonmetal': 'Ametal',
        'halogen': 'Halojen',
        'noble-gas': 'Soygaz',
        'lanthanide': 'Lantanit',
        'actinide': 'Aktinit'
    }
};

// Initialize the game
function init() {
    loadLanguagePreference();
    loadDifficultyPreference();
    loadTimerPreference();
    renderPeriodicTable();
    setupEventListeners();
    updateUI();
    updateStats();
}

// Load language preference from localStorage
function loadLanguagePreference() {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
        currentLanguage = savedLang;
        updateLanguageButtons();
    }
}

// Load difficulty preference from localStorage
function loadDifficultyPreference() {
    const savedDifficulty = localStorage.getItem('difficulty');
    if (savedDifficulty) {
        difficulty = savedDifficulty;
        document.getElementById('difficulty-select').value = difficulty;
    }
}

// Load timer preference from localStorage
function loadTimerPreference() {
    const savedTimer = localStorage.getItem('timerEnabled');
    if (savedTimer === 'true') {
        timerEnabled = true;
        document.getElementById('timer-checkbox').checked = true;
        document.getElementById('timer-display').style.display = 'flex';
    }
}

// Render the periodic table
function renderPeriodicTable() {
    const table = document.getElementById('periodic-table');
    table.innerHTML = '';
    
    // Create a map for quick element lookup
    const elementMap = new Map();
    periodicTableData.forEach(element => {
        elementMap.set(element.number, element);
    });
    
    // Standard periodic table layout
    // Period 1: H (1) at group 1, He (2) at group 18
    // Period 2: Li (3) to Ne (10)
    // Period 3: Na (11) to Ar (18)
    // Period 4: K (19) to Kr (36)
    // Period 5: Rb (37) to Xe (54)
    // Period 6: Cs (55), Ba (56), then gap, then Hf (72) to Rn (86)
    // Period 7: Fr (87), Ra (88), then gap, then Rf (104) to Og (118)
    
    // Period 1
    addElementOrEmpty(table, elementMap.get(1), 1, 1);
    for (let g = 2; g <= 17; g++) addEmptyCell(table);
    addElementOrEmpty(table, elementMap.get(2), 1, 18);
    
    // Period 2
    for (let num = 3; num <= 10; num++) {
        const element = elementMap.get(num);
        if (element) {
            const cell = createElementCell(element);
            table.appendChild(cell);
        } else {
            addEmptyCell(table);
        }
    }
    
    // Period 3
    for (let num = 11; num <= 18; num++) {
        const element = elementMap.get(num);
        if (element) {
            const cell = createElementCell(element);
            table.appendChild(cell);
        } else {
            addEmptyCell(table);
        }
    }
    
    // Period 4
    for (let num = 19; num <= 36; num++) {
        const element = elementMap.get(num);
        if (element) {
            const cell = createElementCell(element);
            table.appendChild(cell);
        } else {
            addEmptyCell(table);
        }
    }
    
    // Period 5
    for (let num = 37; num <= 54; num++) {
        const element = elementMap.get(num);
        if (element) {
            const cell = createElementCell(element);
            table.appendChild(cell);
        } else {
            addEmptyCell(table);
        }
    }
    
    // Period 6: Cs (55), Ba (56), then gap for lanthanides, then Hf (72) to Rn (86)
    addElementOrEmpty(table, elementMap.get(55), 6, 1);
    addElementOrEmpty(table, elementMap.get(56), 6, 2);
    // Gap for lanthanides (15 empty cells)
    for (let i = 0; i < 15; i++) addEmptyCell(table);
    // Continue with Hf (72) to Rn (86)
    for (let num = 72; num <= 86; num++) {
        const element = elementMap.get(num);
        if (element) {
            const cell = createElementCell(element);
            table.appendChild(cell);
        } else {
            addEmptyCell(table);
        }
    }
    
    // Period 7: Fr (87), Ra (88), then gap for actinides, then Rf (104) to Og (118)
    addElementOrEmpty(table, elementMap.get(87), 7, 1);
    addElementOrEmpty(table, elementMap.get(88), 7, 2);
    // Gap for actinides (15 empty cells)
    for (let i = 0; i < 15; i++) addEmptyCell(table);
    // Continue with Rf (104) to Og (118)
    for (let num = 104; num <= 118; num++) {
        const element = elementMap.get(num);
        if (element) {
            const cell = createElementCell(element);
            table.appendChild(cell);
        } else {
            addEmptyCell(table);
        }
    }
    
    // Add lanthanides row (La 57 to Lu 71)
    // Add 2 empty cells before lanthanides
    addEmptyCell(table);
    addEmptyCell(table);
    for (let num = 57; num <= 71; num++) {
        const element = elementMap.get(num);
        if (element) {
            const cell = createElementCell(element);
            table.appendChild(cell);
        } else {
            addEmptyCell(table);
        }
    }
    
    // Add actinides row (Ac 89 to Lr 103)
    // Add 2 empty cells before actinides
    addEmptyCell(table);
    addEmptyCell(table);
    for (let num = 89; num <= 103; num++) {
        const element = elementMap.get(num);
        if (element) {
            const cell = createElementCell(element);
            table.appendChild(cell);
        } else {
            addEmptyCell(table);
        }
    }
}

// Helper function to add element or empty cell
function addElementOrEmpty(table, element, period, group) {
    if (element && element.period === period && element.group === group) {
        const cell = createElementCell(element);
        table.appendChild(cell);
    } else {
        addEmptyCell(table);
    }
}

// Helper function to add empty cell
function addEmptyCell(table) {
    const emptyCell = document.createElement('div');
    emptyCell.className = 'element-cell empty';
    table.appendChild(emptyCell);
}

// Create an element cell
function createElementCell(element) {
    const cell = document.createElement('div');
    cell.className = `element-cell ${element.category}`;
    cell.dataset.elementNumber = element.number;
    
    const number = document.createElement('div');
    number.className = 'element-number';
    number.textContent = element.number;
    
    const symbol = document.createElement('div');
    symbol.className = 'element-symbol';
    symbol.textContent = element.symbol;
    
    cell.appendChild(number);
    cell.appendChild(symbol);
    
    cell.addEventListener('click', () => handleElementClick(element));
    
    return cell;
}

// Handle element click
function handleElementClick(element) {
    currentElement = element;
    selectedAnswer = null;
    showQuestionModal(element);
}

// Show question modal with options or text input based on difficulty
function showQuestionModal(element) {
    const modal = document.getElementById('question-modal');
    const modalSymbol = document.getElementById('modal-symbol');
    const modalNumber = document.getElementById('modal-number');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const textInputContainer = document.getElementById('text-input-container');
    const elementInput = document.getElementById('element-input');
    const feedback = document.getElementById('feedback');
    const elementInfo = document.getElementById('element-info');
    
    // Set modal content
    modalSymbol.textContent = element.symbol;
    modalNumber.textContent = element.number;
    questionText.textContent = translations[currentLanguage].question;
    
    // Clear previous content
    optionsContainer.innerHTML = '';
    feedback.textContent = '';
    feedback.className = 'feedback';
    elementInfo.style.display = 'none';
    elementInput.value = '';
    selectedAnswer = null;
    
    if (difficulty === 'hard') {
        // Hard mode: Show text input
        optionsContainer.style.display = 'none';
        textInputContainer.style.display = 'flex';
        elementInput.disabled = false;
        elementInput.placeholder = translations[currentLanguage].enterElement;
        const submitBtn = document.getElementById('submit-answer');
        submitBtn.textContent = translations[currentLanguage].submit;
        submitBtn.disabled = false;
        elementInput.focus();
        
        // Clear previous event listeners by cloning
        const newInput = elementInput.cloneNode(true);
        elementInput.parentNode.replaceChild(newInput, elementInput);
        document.getElementById('element-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleTextAnswer();
            }
        });
    } else {
        // Easy/Medium mode: Show multiple choice options
        optionsContainer.style.display = 'flex';
        textInputContainer.style.display = 'none';
        
        // Generate options (4 for easy, 8 for medium)
        const options = generateOptions(element);
        
        // Clear previous options
        optionsContainer.innerHTML = '';
        
        // Create option buttons
        options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = currentLanguage === 'tr' ? option.nameTr : option.nameEn;
            button.dataset.elementNumber = option.number;
            
            button.addEventListener('click', () => handleAnswerClick(button, option));
            
            optionsContainer.appendChild(button);
        });
    }
    
    modal.classList.add('show');
    
    // Start timer if enabled
    if (timerEnabled) {
        startTimer();
    }
}

// Start timer
function startTimer() {
    timerSeconds = 30;
    const timerDisplay = document.getElementById('timer-display');
    const timerTime = document.getElementById('timer-time');
    
    timerTime.textContent = timerSeconds;
    timerDisplay.className = 'timer-display';
    
    timerInterval = setInterval(() => {
        timerSeconds--;
        timerTime.textContent = timerSeconds;
        
        // Visual feedback for time running out
        if (timerSeconds <= 5) {
            timerDisplay.className = 'timer-display danger';
        } else if (timerSeconds <= 10) {
            timerDisplay.className = 'timer-display warning';
        }
        
        if (timerSeconds <= 0) {
            stopTimer();
            handleTimeUp();
        }
    }, 1000);
}

// Stop timer
function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

// Handle time up
function handleTimeUp() {
    if (difficulty === 'hard') {
        // Hard mode: disable text input
        const elementInput = document.getElementById('element-input');
        const submitBtn = document.getElementById('submit-answer');
        if (elementInput) elementInput.disabled = true;
        if (submitBtn) submitBtn.disabled = true;
    } else {
        // Easy/Medium mode: disable option buttons
        const allButtons = document.querySelectorAll('.option-btn');
        allButtons.forEach(btn => btn.disabled = true);
        
        // Mark correct answer
        allButtons.forEach(btn => {
            const btnElementNum = parseInt(btn.dataset.elementNumber);
            if (btnElementNum === currentElement.number) {
                btn.classList.add('correct');
            }
        });
    }
    
    // Update stats
    totalQuestions++;
    currentStreak = 0;
    
    // Show feedback
    const feedback = document.getElementById('feedback');
    feedback.textContent = translations[currentLanguage].timeUp;
    feedback.className = 'feedback incorrect';
    
    // Show element info
    showElementInfo(currentElement);
    
    updateStats();
    
    // Auto-close after 2 seconds
    setTimeout(() => {
        closeModal();
    }, 2000);
}

// Fisher-Yates shuffle algorithm for better randomization
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Normalize text for comparison (lowercase, trim, remove accents)
function normalizeText(text) {
    if (!text) return '';
    return text.toLowerCase().trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Remove accents
        .replace(/[^\w\s]/g, ''); // Remove special characters
}

// Calculate Levenshtein distance between two strings
function levenshteinDistance(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;
    
    if (len1 === 0) return len2;
    if (len2 === 0) return len1;
    
    const matrix = [];
    
    for (let i = 0; i <= len1; i++) {
        matrix[i] = [i];
    }
    
    for (let j = 0; j <= len2; j++) {
        matrix[0][j] = j;
    }
    
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1,     // deletion
                    matrix[i][j - 1] + 1,     // insertion
                    matrix[i - 1][j - 1] + 1  // substitution
                );
            }
        }
    }
    
    return matrix[len1][len2];
}

// Check if user input matches element name (fuzzy matching)
function matchesElementName(userInput, element) {
    const normalizedInput = normalizeText(userInput);
    const normalizedNameEn = normalizeText(element.nameEn);
    const normalizedNameTr = normalizeText(element.nameTr);
    
    // Exact match (case-insensitive)
    if (normalizedInput === normalizedNameEn || normalizedInput === normalizedNameTr) {
        return true;
    }
    
    // Calculate distances
    const distanceEn = levenshteinDistance(normalizedInput, normalizedNameEn);
    const distanceTr = levenshteinDistance(normalizedInput, normalizedNameTr);
    
    // Allow up to 2 character differences for small typos
    // Also consider the length of the word - allow 1 typo per 5 characters
    const maxDistance = Math.max(2, Math.floor(Math.min(normalizedNameEn.length, normalizedNameTr.length) / 5));
    
    return distanceEn <= maxDistance || distanceTr <= maxDistance;
}

// Generate options based on difficulty
// Easy: 4 options (1 correct + 3 wrong)
// Medium: 8 options (1 correct + 7 wrong)
// Hard: null (text input mode)
function generateOptions(correctElement) {
    if (difficulty === 'hard') {
        // Hard mode: no options, user types the answer
        return null;
    }
    
    let wrongElements;
    let numWrongOptions;
    
    if (difficulty === 'easy') {
        // Easy: 4 options total (1 correct + 3 wrong)
        numWrongOptions = 3;
        // Wrong answers from completely different categories
        wrongElements = periodicTableData.filter(e => 
            e.number !== correctElement.number &&
            e.category !== correctElement.category
        );
    } else {
        // Medium: 8 options total (1 correct + 7 wrong)
        numWrongOptions = 7;
        // Wrong answers from different groups (but can be same category)
        wrongElements = periodicTableData.filter(e => 
            e.number !== correctElement.number &&
            e.group !== correctElement.group
        );
    }
    
    // Shuffle wrong elements and pick needed amount
    const shuffledWrong = shuffleArray(wrongElements);
    const selectedWrong = shuffledWrong.slice(0, numWrongOptions);
    
    // Combine correct answer with wrong answers
    const allOptions = [correctElement, ...selectedWrong];
    
    // Shuffle all options using Fisher-Yates for true randomization
    return shuffleArray(allOptions);
}

// Handle answer click
function handleAnswerClick(button, selectedElement) {
    if (selectedAnswer !== null) return; // Already answered
    
    selectedAnswer = selectedElement;
    const isCorrect = selectedElement.number === currentElement.number;
    
    // Disable all buttons
    const allButtons = document.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.disabled = true);
    
    // Mark correct/incorrect
    allButtons.forEach(btn => {
        const btnElementNum = parseInt(btn.dataset.elementNumber);
        if (btnElementNum === currentElement.number) {
            btn.classList.add('correct');
        } else if (btnElementNum === selectedElement.number && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });
    
    // Update score and streak
    totalQuestions++;
    if (isCorrect) {
        score++;
        currentStreak++;
        if (currentStreak > bestStreak) {
            bestStreak = currentStreak;
            localStorage.setItem('bestStreak', bestStreak);
        }
    } else {
        currentStreak = 0;
    }
    
    // Show feedback
    const feedback = document.getElementById('feedback');
    if (isCorrect) {
        feedback.textContent = translations[currentLanguage].correct;
        feedback.className = 'feedback correct';
    } else {
        const correctName = currentLanguage === 'tr' ? currentElement.nameTr : currentElement.nameEn;
        feedback.textContent = `${translations[currentLanguage].incorrect} ${translations[currentLanguage].correctAnswer} ${correctName}`;
        feedback.className = 'feedback incorrect';
    }
    
    // Show element information
    showElementInfo(currentElement);
    
    // Update stats
    updateStats();
    
    // Auto-close after 3 seconds (longer to read info)
    setTimeout(() => {
        closeModal();
    }, 3000);
}

// Handle text answer for hard mode
function handleTextAnswer() {
    if (selectedAnswer !== null || !currentElement) return; // Already answered or no element
    
    const elementInput = document.getElementById('element-input');
    const userInput = elementInput.value.trim();
    
    if (!userInput) {
        return; // Empty input
    }
    
    // Disable input
    elementInput.disabled = true;
    selectedAnswer = true;
    
    // Check if answer is correct using fuzzy matching
    const isCorrect = matchesElementName(userInput, currentElement);
    
    // Update score and streak
    totalQuestions++;
    if (isCorrect) {
        score++;
        currentStreak++;
        if (currentStreak > bestStreak) {
            bestStreak = currentStreak;
            localStorage.setItem('bestStreak', bestStreak);
        }
    } else {
        currentStreak = 0;
    }
    
    // Show feedback
    const feedback = document.getElementById('feedback');
    const submitBtn = document.getElementById('submit-answer');
    submitBtn.disabled = true;
    
    if (isCorrect) {
        feedback.textContent = translations[currentLanguage].correct;
        feedback.className = 'feedback correct';
    } else {
        const correctName = currentLanguage === 'tr' ? currentElement.nameTr : currentElement.nameEn;
        feedback.textContent = `${translations[currentLanguage].incorrect} ${translations[currentLanguage].correctAnswer} ${correctName}`;
        feedback.className = 'feedback incorrect';
    }
    
    // Show element information
    showElementInfo(currentElement);
    
    // Update stats
    updateStats();
    
    // Auto-close after 3 seconds
    setTimeout(() => {
        closeModal();
    }, 3000);
}

// Show element information
function showElementInfo(element) {
    const elementInfo = document.getElementById('element-info');
    const categoryLabel = document.getElementById('info-category-label');
    const categoryValue = document.getElementById('info-category');
    const groupLabel = document.getElementById('info-group-label');
    const groupValue = document.getElementById('info-group');
    const periodLabel = document.getElementById('info-period-label');
    const periodValue = document.getElementById('info-period');
    
    categoryLabel.textContent = translations[currentLanguage].category;
    categoryValue.textContent = categoryTranslations[currentLanguage][element.category] || element.category;
    
    groupLabel.textContent = translations[currentLanguage].group;
    groupValue.textContent = element.group;
    
    periodLabel.textContent = translations[currentLanguage].period;
    periodValue.textContent = element.period;
    
    elementInfo.style.display = 'block';
}

// Close modal
function closeModal() {
    stopTimer();
    const modal = document.getElementById('question-modal');
    modal.classList.remove('show');
    currentElement = null;
    selectedAnswer = null;
    
    // Hide element info
    document.getElementById('element-info').style.display = 'none';
    
    // Reset text input
    const elementInput = document.getElementById('element-input');
    const submitBtn = document.getElementById('submit-answer');
    if (elementInput) {
        elementInput.value = '';
        elementInput.disabled = false;
    }
    if (submitBtn) {
        submitBtn.disabled = false;
    }
}

// Update stats display
function updateStats() {
    document.getElementById('score').textContent = score;
    document.getElementById('total').textContent = totalQuestions;
    document.getElementById('streak').textContent = currentStreak;
    
    // Calculate and display accuracy
    const accuracy = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
    document.getElementById('accuracy').textContent = `(${accuracy}%)`;
}

// Setup event listeners
function setupEventListeners() {
    // Language toggle buttons
    document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));
    document.getElementById('lang-tr').addEventListener('click', () => switchLanguage('tr'));
    
    // Difficulty selector
    document.getElementById('difficulty-select').addEventListener('change', (e) => {
        difficulty = e.target.value;
        localStorage.setItem('difficulty', difficulty);
    });
    
    // Timer checkbox
    document.getElementById('timer-checkbox').addEventListener('change', (e) => {
        timerEnabled = e.target.checked;
        localStorage.setItem('timerEnabled', timerEnabled);
        const timerDisplay = document.getElementById('timer-display');
        if (timerEnabled) {
            timerDisplay.style.display = 'flex';
        } else {
            timerDisplay.style.display = 'none';
            stopTimer();
        }
    });
    
    // Reset button
    document.getElementById('reset-btn').addEventListener('click', resetScore);
    
    // Submit answer button for hard mode
    document.getElementById('submit-answer').addEventListener('click', handleTextAnswer);
    
    // Close modal button
    document.getElementById('close-modal').addEventListener('click', closeModal);
    
    // Close modal on outside click
    document.getElementById('question-modal').addEventListener('click', (e) => {
        if (e.target.id === 'question-modal') {
            closeModal();
        }
    });
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Reset score
function resetScore() {
    if (confirm(currentLanguage === 'tr' ? 
        'Skoru sıfırlamak istediğinize emin misiniz?' : 
        'Are you sure you want to reset your score?')) {
        score = 0;
        totalQuestions = 0;
        currentStreak = 0;
        updateStats();
    }
}

// Switch language
function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updateLanguageButtons();
    updateUI();
    renderPeriodicTable(); // Re-render to update element names
}

// Update language buttons
function updateLanguageButtons() {
    document.getElementById('lang-en').classList.toggle('active', currentLanguage === 'en');
    document.getElementById('lang-tr').classList.toggle('active', currentLanguage === 'tr');
}

// Update UI text
function updateUI() {
    document.getElementById('game-title').textContent = translations[currentLanguage].title;
    document.getElementById('score-label').textContent = translations[currentLanguage].score;
    document.getElementById('streak-label').textContent = translations[currentLanguage].streak;
    document.getElementById('difficulty-label').textContent = translations[currentLanguage].difficulty;
    document.getElementById('timer-label-text').textContent = translations[currentLanguage].timer;
    
    // Update difficulty select options
    const difficultySelect = document.getElementById('difficulty-select');
    difficultySelect.options[0].text = translations[currentLanguage].easy;
    difficultySelect.options[1].text = translations[currentLanguage].medium;
    difficultySelect.options[2].text = translations[currentLanguage].hard;
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
