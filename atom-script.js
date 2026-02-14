// Atom Structure Page JavaScript

let currentAtomLanguage = localStorage.getItem('atomLanguage') || 'tr';

// Initialize
function initAtomPage() {
    loadAtomLanguagePreference();
    updateAtomLanguageUI();
}

// Load language preference
function loadAtomLanguagePreference() {
    const savedLang = localStorage.getItem('atomLanguage');
    if (savedLang) {
        currentAtomLanguage = savedLang;
        updateLanguageButtons();
    }
}

// Switch language
function switchAtomLanguage(lang) {
    currentAtomLanguage = lang;
    localStorage.setItem('atomLanguage', lang);
    updateLanguageButtons();
    updateAtomLanguageUI();
}

// Update language buttons
function updateLanguageButtons() {
    const trBtn = document.getElementById('lang-tr-atom');
    const enBtn = document.getElementById('lang-en-atom');
    
    if (trBtn && enBtn) {
        trBtn.classList.toggle('active', currentAtomLanguage === 'tr');
        enBtn.classList.toggle('active', currentAtomLanguage === 'en');
    }
}

// Update UI text based on language
function updateAtomLanguageUI() {
    const elements = document.querySelectorAll('[data-tr], [data-en]');
    
    elements.forEach(element => {
        if (currentAtomLanguage === 'tr') {
            if (element.hasAttribute('data-tr')) {
                element.textContent = element.getAttribute('data-tr');
            }
        } else {
            if (element.hasAttribute('data-en')) {
                element.textContent = element.getAttribute('data-en');
            }
        }
    });
    
    // Update HTML content for elements with innerHTML
    const htmlElements = document.querySelectorAll('[data-tr-html], [data-en-html]');
    htmlElements.forEach(element => {
        if (currentAtomLanguage === 'tr') {
            if (element.hasAttribute('data-tr-html')) {
                element.innerHTML = element.getAttribute('data-tr-html');
            }
        } else {
            if (element.hasAttribute('data-en-html')) {
                element.innerHTML = element.getAttribute('data-en-html');
            }
        }
    });
    
    // Update solution buttons
    updateSolutionButtons();
    
    // Recalculate atom if calculator exists
    if (document.getElementById('proton-input')) {
        calculateAtom();
    }
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Atom Calculator
function calculateAtom() {
    const protons = parseInt(document.getElementById('proton-input').value) || 0;
    const neutrons = parseInt(document.getElementById('neutron-input').value) || 0;
    const electrons = parseInt(document.getElementById('electron-input').value) || 0;
    
    // Calculate atomic number (Z)
    const atomicNumber = protons;
    document.getElementById('atomic-number').textContent = atomicNumber;
    
    // Calculate mass number (A)
    const massNumber = protons + neutrons;
    document.getElementById('mass-number').textContent = massNumber;
    
    // Calculate charge
    const charge = protons - electrons;
    const chargeDisplay = charge > 0 ? `+${charge}` : charge < 0 ? `${charge}` : '0';
    document.getElementById('atom-charge').textContent = chargeDisplay;
    
    // Determine ion status
    const ionStatus = document.getElementById('ion-status');
    if (charge === 0) {
        ionStatus.textContent = currentAtomLanguage === 'tr' ? 'Nötr Atom' : 'Neutral Atom';
        ionStatus.style.color = 'var(--success)';
    } else if (charge > 0) {
        ionStatus.textContent = currentAtomLanguage === 'tr' ? `Katyon (+${charge})` : `Cation (+${charge})`;
        ionStatus.style.color = 'var(--error)';
    } else {
        ionStatus.textContent = currentAtomLanguage === 'tr' ? `Anyon (${charge})` : `Anion (${charge})`;
        ionStatus.style.color = 'var(--accent)';
    }
}

// Toggle solution visibility
function toggleSolution(button) {
    const solution = button.nextElementSibling;
    const isVisible = solution.style.display !== 'none';
    
    if (isVisible) {
        solution.style.display = 'none';
        button.textContent = currentAtomLanguage === 'tr' ? 'Çözümü Göster' : 'Show Solution';
    } else {
        solution.style.display = 'block';
        button.textContent = currentAtomLanguage === 'tr' ? 'Çözümü Gizle' : 'Hide Solution';
    }
}

// Update solution toggle buttons text
function updateSolutionButtons() {
    const buttons = document.querySelectorAll('.solution-toggle');
    buttons.forEach(button => {
        const solution = button.nextElementSibling;
        const isVisible = solution && solution.style.display !== 'none';
        if (isVisible) {
            button.textContent = currentAtomLanguage === 'tr' ? 'Çözümü Gizle' : 'Hide Solution';
        } else {
            button.textContent = currentAtomLanguage === 'tr' ? 'Çözümü Göster' : 'Show Solution';
        }
    });
}

// Initialize calculator on page load
function initCalculator() {
    if (document.getElementById('proton-input')) {
        calculateAtom();
    }
}

// Quiz System
let quizCorrect = 0;
let quizWrong = 0;
let currentQuizAnswer = null;
let selectedQuizOption = null;

const quizQuestions = {
    tr: [
        {
            question: "Bir atomun 8 protonu ve 8 elektronu vardır. Bu atomun yükü nedir?",
            options: ["+8", "0", "-8", "+16"],
            correct: 1
        },
        {
            question: "Karbon-12 izotopunun kaç nötronu vardır? (Atom numarası: 6)",
            options: ["6", "12", "18", "8"],
            correct: 0
        },
        {
            question: "Hangi elementin K katmanında 2 elektron vardır?",
            options: ["Hidrojen", "Helyum", "Lityum", "Karbon"],
            correct: 1
        },
        {
            question: "Na⁺ iyonu kaç elektron içerir? (Sodyum atom numarası: 11)",
            options: ["11", "10", "12", "9"],
            correct: 1
        },
        {
            question: "Atom numarası 17 olan klor atomunun L katmanında kaç elektron vardır?",
            options: ["2", "8", "7", "17"],
            correct: 2
        }
    ],
    en: [
        {
            question: "An atom has 8 protons and 8 electrons. What is the charge of this atom?",
            options: ["+8", "0", "-8", "+16"],
            correct: 1
        },
        {
            question: "How many neutrons does Carbon-12 isotope have? (Atomic number: 6)",
            options: ["6", "12", "18", "8"],
            correct: 0
        },
        {
            question: "Which element has 2 electrons in K shell?",
            options: ["Hydrogen", "Helium", "Lithium", "Carbon"],
            correct: 1
        },
        {
            question: "How many electrons does Na⁺ ion contain? (Sodium atomic number: 11)",
            options: ["11", "10", "12", "9"],
            correct: 1
        },
        {
            question: "How many electrons are in the L shell of chlorine atom with atomic number 17?",
            options: ["2", "8", "7", "17"],
            correct: 2
        }
    ]
};

function startQuiz() {
    const questions = quizQuestions[currentAtomLanguage];
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    
    const questionText = document.querySelector('.question-text');
    const optionsContainer = document.querySelector('.quiz-options');
    const submitBtn = document.querySelector('.quiz-submit-btn');
    const feedback = document.querySelector('.quiz-feedback');
    
    questionText.textContent = randomQuestion.question;
    currentQuizAnswer = randomQuestion.correct;
    selectedQuizOption = null;
    
    optionsContainer.innerHTML = '';
    randomQuestion.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'quiz-option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectQuizOption(optionDiv, index);
        optionsContainer.appendChild(optionDiv);
    });
    
    submitBtn.disabled = false;
    feedback.textContent = '';
    feedback.className = 'quiz-feedback';
}

function selectQuizOption(element, index) {
    // Remove previous selection
    document.querySelectorAll('.quiz-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    element.classList.add('selected');
    selectedQuizOption = index;
}

function checkQuizAnswer() {
    if (selectedQuizOption === null) {
        const feedback = document.querySelector('.quiz-feedback');
        feedback.textContent = currentAtomLanguage === 'tr' ? 'Lütfen bir seçenek seçin!' : 'Please select an option!';
        feedback.className = 'quiz-feedback incorrect';
        return;
    }
    
    const options = document.querySelectorAll('.quiz-option');
    const submitBtn = document.querySelector('.quiz-submit-btn');
    const feedback = document.querySelector('.quiz-feedback');
    
    submitBtn.disabled = true;
    
    options.forEach((opt, index) => {
        opt.onclick = null; // Disable clicking
        if (index === currentQuizAnswer) {
            opt.classList.add('correct');
        } else if (index === selectedQuizOption && index !== currentQuizAnswer) {
            opt.classList.add('incorrect');
        }
    });
    
    if (selectedQuizOption === currentQuizAnswer) {
        quizCorrect++;
        feedback.textContent = currentAtomLanguage === 'tr' ? 'Doğru! Tebrikler!' : 'Correct! Congratulations!';
        feedback.className = 'quiz-feedback correct';
    } else {
        quizWrong++;
        feedback.textContent = currentAtomLanguage === 'tr' ? 'Yanlış! Tekrar deneyin.' : 'Wrong! Try again.';
        feedback.className = 'quiz-feedback incorrect';
    }
    
    document.getElementById('quiz-correct').textContent = quizCorrect;
    document.getElementById('quiz-wrong').textContent = quizWrong;
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        initAtomPage();
        initCalculator();
        if (document.querySelector('.quiz-container')) {
            startQuiz();
        }
    });
} else {
    initAtomPage();
    initCalculator();
    if (document.querySelector('.quiz-container')) {
        startQuiz();
    }
}
