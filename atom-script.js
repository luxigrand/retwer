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
    
    // Update modal if open
    if (currentModel) {
        const title = document.getElementById('model-title');
        const description = document.getElementById('model-description');
        const data = modelData[currentModel];
        if (title && description && data) {
            title.textContent = currentAtomLanguage === 'tr' ? data.title.tr : data.title.en;
            description.textContent = currentAtomLanguage === 'tr' ? data.description.tr : data.description.en;
        }
    }
    
    // Update Democritus popup if open
    const democritusPopup = document.getElementById('democritus-popup');
    if (democritusPopup && democritusPopup.classList.contains('show')) {
        updateDemocritusPopupLanguage();
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

// Atom Model Modal System
let currentModel = null;
let isAnimating = true;
let modelZoom = 1;

const modelData = {
    democritus: {
        title: { tr: 'Demokritos Atom Teorisi (MÖ 460-370)', en: "Democritus' Atomic Theory (460-370 BC)" },
        description: {
            tr: 'Demokritos, antik Yunan filozofu ve atom teorisinin ilk öncülerinden biridir. "Atomos" (bölünemez) terimini kullanarak, tüm maddenin görünmez, bölünemez ve ebedi parçacıklardan oluştuğunu öne sürmüştür. Atomların farklı şekil, boyut ve ağırlıklara sahip olduğunu ve boşlukta hareket ettiğini düşünmüştür. Bu teori, modern atom teorisinin temelini oluşturmuştur.',
            en: 'Democritus, an ancient Greek philosopher and one of the first pioneers of atomic theory. Using the term "atomos" (indivisible), he proposed that all matter consists of invisible, indivisible, and eternal particles. He believed atoms have different shapes, sizes, and weights, and move in empty space. This theory laid the foundation for modern atomic theory.'
        }
    },
    dalton: {
        title: { tr: 'Dalton Atom Modeli (1803)', en: "Dalton's Atomic Model (1803)" },
        description: {
            tr: 'John Dalton\'ın atom modeli, atomların bölünemez ve yok edilemez küreler olduğunu öne sürer. Aynı elementin tüm atomları özdeştir ve farklı elementlerin atomları farklı kütle ve özelliklere sahiptir. Bu model, kimyasal reaksiyonların atomların yeniden düzenlenmesi olduğunu açıklar.',
            en: 'John Dalton\'s atomic model proposes that atoms are indivisible and indestructible spheres. All atoms of the same element are identical, and atoms of different elements have different masses and properties. This model explains that chemical reactions are rearrangements of atoms.'
        }
    },
    thomson: {
        title: { tr: 'Thomson Atom Modeli (1897)', en: "Thomson's Atomic Model (1897)" },
        description: {
            tr: 'J.J. Thomson\'ın "Üzümlü Kek Modeli" olarak bilinen atom modeli, atomun pozitif yüklü bir küre olduğunu ve içinde negatif yüklü elektronların dağınık halde bulunduğunu öne sürer. Bu model, elektronun keşfinden sonra geliştirilmiştir.',
            en: 'J.J. Thomson\'s "Plum Pudding Model" proposes that the atom is a positively charged sphere with negatively charged electrons scattered throughout. This model was developed after the discovery of the electron.'
        }
    },
    rutherford: {
        title: { tr: 'Rutherford Atom Modeli (1911)', en: "Rutherford's Atomic Model (1911)" },
        description: {
            tr: 'Ernest Rutherford\'ın altın folyo deneyi sonucunda geliştirdiği model, atomun merkezinde küçük, yoğun ve pozitif yüklü bir çekirdek olduğunu gösterir. Elektronlar çekirdek etrafında geniş bir alanda döner. Atomun büyük kısmı boş alandır.',
            en: 'Ernest Rutherford\'s model, developed from the gold foil experiment, shows that the atom has a small, dense, positively charged nucleus at its center. Electrons orbit around the nucleus in a large area. Most of the atom is empty space.'
        }
    },
    bohr: {
        title: { tr: 'Bohr Atom Modeli (1913)', en: "Bohr's Atomic Model (1913)" },
        description: {
            tr: 'Niels Bohr\'un modeli, elektronların belirli enerji seviyelerinde (katmanlarda) döndüğünü öne sürer. Elektronlar enerji alarak üst katmana çıkabilir veya enerji yayarak alt katmana inebilir. Bu model, hidrojen atomunun spektrumunu başarıyla açıklar.',
            en: 'Niels Bohr\'s model proposes that electrons orbit in specific energy levels (shells). Electrons can jump to higher shells by absorbing energy or fall to lower shells by emitting energy. This model successfully explains the hydrogen atom spectrum.'
        }
    },
    modern: {
        title: { tr: 'Modern Atom Modeli (1920+)', en: 'Modern Atomic Model (1920+)' },
        description: {
            tr: 'Kuantum mekaniğine dayanan modern atom modeli, elektronların belirli orbitallerde bulunduğunu ve konumlarının olasılık bulutları ile ifade edildiğini öne sürer. Elektronlar hem parçacık hem de dalga özelliği gösterir. Heisenberg belirsizlik ilkesi geçerlidir.',
            en: 'The modern atomic model, based on quantum mechanics, proposes that electrons exist in specific orbitals and their positions are expressed as probability clouds. Electrons exhibit both particle and wave properties. Heisenberg uncertainty principle applies.'
        }
    }
};

function openModelModal(modelType) {
    // Special pop-up for Democritus
    if (modelType === 'democritus') {
        openDemocritusPopup();
        return;
    }
    
    currentModel = modelType;
    const modal = document.getElementById('model-modal');
    const title = document.getElementById('model-title');
    const description = document.getElementById('model-description');
    const container = document.getElementById('model-container');
    
    // Stop any ongoing animations
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
    
    const data = modelData[modelType];
    title.textContent = currentAtomLanguage === 'tr' ? data.title.tr : data.title.en;
    description.textContent = currentAtomLanguage === 'tr' ? data.description.tr : data.description.en;
    
    // Clear container and reset state
    container.innerHTML = '';
    modelZoom = 1;
    container.style.transform = `scale(${modelZoom})`;
    currentRotation = { x: 0, y: 0 };
    velocity = { x: 0, y: 0 };
    isDragging = false;
    isInertiaActive = false;
    
    // Render model
    renderModel(modelType, container);
    
    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function openDemocritusPopup() {
    const popup = document.getElementById('democritus-popup');
    const container = document.getElementById('democritus-model-container');
    
    // Stop any ongoing animations
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
    
    // Clear container and reset state
    container.innerHTML = '';
    modelZoom = 1;
    container.style.transform = `scale(${modelZoom})`;
    currentRotation = { x: 0, y: 0 };
    velocity = { x: 0, y: 0 };
    isDragging = false;
    isInertiaActive = false;
    
    // Render Democritus model
    renderModel('democritus', container);
    
    // Update language-specific content
    updateDemocritusPopupLanguage();
    
    // Show popup
    popup.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeDemocritusPopup() {
    const popup = document.getElementById('democritus-popup');
    popup.classList.remove('show');
    document.body.style.overflow = '';
    
    // Cleanup animations
    const container = document.getElementById('democritus-model-container');
    const oldModel = container.querySelector('.interactive-model');
    if (oldModel && oldModel._cleanup4D) {
        oldModel._cleanup4D();
    }
}

function updateDemocritusPopupLanguage() {
    const elements = document.querySelectorAll('#democritus-popup [data-tr], #democritus-popup [data-en]');
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
}

function closeModelModal() {
    const modal = document.getElementById('model-modal');
    modal.classList.remove('show');
    document.body.style.overflow = '';
    currentModel = null;
    isAnimating = true;
}

function renderModel(modelType, container) {
    switch(modelType) {
        case 'democritus':
            renderDemocritusModel(container);
            break;
        case 'dalton':
            renderDaltonModel(container);
            break;
        case 'thomson':
            renderThomsonModel(container);
            break;
        case 'rutherford':
            renderRutherfordModel(container);
            break;
        case 'bohr':
            renderBohrModel(container);
            break;
        case 'modern':
            renderModernModel(container);
            break;
    }
}

function renderDaltonModel(container) {
    const model = document.createElement('div');
    model.className = 'dalton-model interactive-model';
    model.setAttribute('draggable', 'true');
    const label = currentAtomLanguage === 'tr' ? 'Atom' : 'Atom';
    const info = currentAtomLanguage === 'tr' ? 'Bölünemez Küre' : 'Indivisible Sphere';
    model.innerHTML = `
        <div class="model-label">${label}</div>
        <div class="dalton-sphere">
            <div class="sphere-highlight"></div>
        </div>
        <div class="model-info">${info}</div>
    `;
    container.appendChild(model);
    setupModelInteractivity(model);
}

function renderThomsonModel(container) {
    const model = document.createElement('div');
    model.className = 'thomson-model interactive-model';
    model.setAttribute('draggable', 'true');
    const label = currentAtomLanguage === 'tr' ? 'Üzümlü Kek Modeli' : 'Plum Pudding Model';
    const info = currentAtomLanguage === 'tr' ? 'Pozitif Küre + Elektronlar' : 'Positive Sphere + Electrons';
    model.innerHTML = `
        <div class="model-label">${label}</div>
        <div class="thomson-sphere">
            <div class="positive-charge-label">+</div>
            <div class="thomson-electron" data-electron="1">
                <span class="electron-label">e</span>
            </div>
            <div class="thomson-electron" data-electron="2">
                <span class="electron-label">e</span>
            </div>
            <div class="thomson-electron" data-electron="3">
                <span class="electron-label">e</span>
            </div>
            <div class="thomson-electron" data-electron="4">
                <span class="electron-label">e</span>
            </div>
            <div class="thomson-electron" data-electron="5">
                <span class="electron-label">e</span>
            </div>
        </div>
        <div class="model-info">${info}</div>
    `;
    container.appendChild(model);
    setupModelInteractivity(model);
    setupElectronDrag(model);
}

function renderRutherfordModel(container) {
    const model = document.createElement('div');
    model.className = 'rutherford-model interactive-model';
    model.setAttribute('draggable', 'true');
    const label = currentAtomLanguage === 'tr' ? 'Çekirdek + Yörünge' : 'Nucleus + Orbit';
    const nucleusLabel = currentAtomLanguage === 'tr' ? 'Çekirdek' : 'Nucleus';
    const emptySpace = currentAtomLanguage === 'tr' ? 'Boş Alan' : 'Empty Space';
    const info = currentAtomLanguage === 'tr' ? 'Küçük Çekirdek, Geniş Yörünge' : 'Small Nucleus, Wide Orbit';
    model.innerHTML = `
        <div class="model-label">${label}</div>
        <div class="rutherford-nucleus">
            <div class="nucleus-label">${nucleusLabel}</div>
            <div class="proton-count">P+</div>
        </div>
        <div class="rutherford-electron" data-electron="1">
            <span class="electron-label">e</span>
        </div>
        <div class="rutherford-electron" data-electron="2">
            <span class="electron-label">e</span>
        </div>
        <div class="rutherford-electron" data-electron="3">
            <span class="electron-label">e</span>
        </div>
        <div class="empty-space-indicator">${emptySpace}</div>
        <div class="model-info">${info}</div>
    `;
    container.appendChild(model);
    setupModelInteractivity(model);
}

function renderBohrModel(container) {
    const model = document.createElement('div');
    model.className = 'bohr-model interactive-model';
    model.setAttribute('draggable', 'true');
    const label = currentAtomLanguage === 'tr' ? 'Enerji Katmanları' : 'Energy Levels';
    const nucleusLabel = currentAtomLanguage === 'tr' ? 'Çekirdek' : 'Nucleus';
    const kShell = currentAtomLanguage === 'tr' ? 'K Katmanı' : 'K Shell';
    const lShell = currentAtomLanguage === 'tr' ? 'L Katmanı' : 'L Shell';
    const info = currentAtomLanguage === 'tr' ? 'Belirli Enerji Seviyeleri' : 'Definite Energy Levels';
    model.innerHTML = `
        <div class="model-label">${label}</div>
        <div class="bohr-nucleus">
            <div class="nucleus-label">${nucleusLabel}</div>
        </div>
        <div class="bohr-shell bohr-shell-k">
            <div class="shell-label">${kShell}</div>
            <div class="bohr-electron" data-electron="1">
                <span class="electron-label">e</span>
            </div>
        </div>
        <div class="bohr-shell bohr-shell-l">
            <div class="shell-label">${lShell}</div>
            <div class="bohr-electron" data-electron="2">
                <span class="electron-label">e</span>
            </div>
            <div class="bohr-electron" data-electron="3">
                <span class="electron-label">e</span>
            </div>
        </div>
        <div class="model-info">${info}</div>
    `;
    container.appendChild(model);
    setupModelInteractivity(model);
}

function renderModernModel(container) {
    const model = document.createElement('div');
    model.className = 'modern-model interactive-model';
    model.setAttribute('draggable', 'true');
    const label = currentAtomLanguage === 'tr' ? 'Olasılık Bulutu' : 'Probability Cloud';
    const nucleusLabel = currentAtomLanguage === 'tr' ? 'Çekirdek' : 'Nucleus';
    const orbital1 = currentAtomLanguage === 'tr' ? 'Orbital 1' : 'Orbital 1';
    const orbital2 = currentAtomLanguage === 'tr' ? 'Orbital 2' : 'Orbital 2';
    const orbital3 = currentAtomLanguage === 'tr' ? 'Orbital 3' : 'Orbital 3';
    const info = currentAtomLanguage === 'tr' ? 'Kuantum Mekaniği' : 'Quantum Mechanics';
    model.innerHTML = `
        <div class="model-label">${label}</div>
        <div class="modern-nucleus">
            <div class="nucleus-label">${nucleusLabel}</div>
        </div>
        <div class="probability-cloud probability-cloud-1">
            <div class="cloud-label">${orbital1}</div>
        </div>
        <div class="probability-cloud probability-cloud-2">
            <div class="cloud-label">${orbital2}</div>
        </div>
        <div class="probability-cloud probability-cloud-3">
            <div class="cloud-label">${orbital3}</div>
        </div>
        <div class="model-info">${info}</div>
    `;
    container.appendChild(model);
    setupModelInteractivity(model);
}

// Model interactivity setup - Advanced 3D with momentum
let isDragging = false;
let currentRotation = { x: 0, y: 0 };
let velocity = { x: 0, y: 0 };
let lastMousePos = { x: 0, y: 0 };
let lastTime = 0;
let animationFrameId = null;
let isInertiaActive = false;

function setupModelInteractivity(model) {
    let startX, startY, initialRotationX, initialRotationY;
    let lastMoveTime = 0;
    let lastMoveX = 0;
    let lastMoveY = 0;
    let mouseX = 0, mouseY = 0;
    let lightAngle = 0;
    let timeOffset = 0;
    
    // Reset rotation when model changes
    currentRotation = { x: 0, y: 0 };
    velocity = { x: 0, y: 0 };
    timeOffset = Date.now();
    
    // Create dynamic light element
    const lightElement = document.createElement('div');
    lightElement.className = 'dynamic-light';
    model.appendChild(lightElement);
    
    // Create parallax layers
    const parallaxLayer1 = document.createElement('div');
    parallaxLayer1.className = 'parallax-layer parallax-layer-1';
    model.appendChild(parallaxLayer1);
    
    const parallaxLayer2 = document.createElement('div');
    parallaxLayer2.className = 'parallax-layer parallax-layer-2';
    model.appendChild(parallaxLayer2);
    
    const applyRotation = () => {
        // Limit rotation angles for better UX
        currentRotation.x = Math.max(-90, Math.min(90, currentRotation.x));
        currentRotation.y = currentRotation.y % 360;
        
        // Calculate dynamic lighting based on rotation
        const lightX = Math.sin(currentRotation.y * Math.PI / 180) * 50;
        const lightY = Math.sin(currentRotation.x * Math.PI / 180) * 50;
        
        // Calculate time-based animation (4th dimension)
        const currentTime = (Date.now() - timeOffset) / 1000;
        const timeRotation = currentTime * 0.5; // Slow rotation over time
        
        // Apply 3D transform with perspective and time
        model.style.transform = `
            perspective(3000px)
            rotateX(${currentRotation.x}deg)
            rotateY(${currentRotation.y + timeRotation}deg)
            rotateZ(${Math.sin(currentTime) * 2}deg)
            translateZ(0px)
        `;
        
        // Update dynamic lighting
        const lightIntensity = 0.5 + Math.sin(currentTime * 2) * 0.3;
        lightElement.style.background = `
            radial-gradient(
                circle at ${50 + lightX}% ${50 + lightY}%,
                rgba(255, 255, 255, ${lightIntensity * 0.4}) 0%,
                rgba(74, 158, 255, ${lightIntensity * 0.2}) 30%,
                transparent 70%
            )
        `;
        lightElement.style.opacity = lightIntensity;
        
        // Update parallax layers (4D depth effect)
        const parallaxDepth1 = Math.sin(currentTime * 0.8) * 20;
        const parallaxDepth2 = Math.cos(currentTime * 0.6) * 15;
        parallaxLayer1.style.transform = `translateZ(${parallaxDepth1}px)`;
        parallaxLayer2.style.transform = `translateZ(${parallaxDepth2}px)`;
        
        // Update shadows based on rotation (4D lighting)
        const shadowX = Math.sin(currentRotation.y * Math.PI / 180) * 30;
        const shadowY = Math.sin(currentRotation.x * Math.PI / 180) * 30;
        model.style.filter = `
            drop-shadow(${shadowX}px ${shadowY}px 40px rgba(0, 0, 0, 0.6))
            drop-shadow(${-shadowX * 0.5}px ${-shadowY * 0.5}px 20px rgba(74, 158, 255, 0.4))
        `;
    };
    
    const startDrag = (clientX, clientY) => {
        if (isInertiaActive) {
            cancelAnimationFrame(animationFrameId);
            isInertiaActive = false;
            velocity = { x: 0, y: 0 };
        }
        isDragging = true;
        startX = clientX;
        startY = clientY;
        initialRotationX = currentRotation.x;
        initialRotationY = currentRotation.y;
        lastMoveTime = Date.now();
        lastMoveX = clientX;
        lastMoveY = clientY;
        model.style.cursor = 'grabbing';
        model.style.transition = 'none';
    };
    
    const updateDrag = (clientX, clientY) => {
        if (!isDragging) return;
        
        const now = Date.now();
        const deltaTime = now - lastMoveTime;
        
        if (deltaTime > 0) {
            const deltaX = clientX - startX;
            const deltaY = clientY - startY;
            
            // Calculate velocity for momentum
            const moveDeltaX = clientX - lastMoveX;
            const moveDeltaY = clientY - lastMoveY;
            velocity.y = (moveDeltaX / deltaTime) * 16.67; // Normalize to 60fps
            velocity.x = -(moveDeltaY / deltaTime) * 16.67;
            
            // Apply rotation with smooth sensitivity
            currentRotation.y = initialRotationY + deltaX * 0.6;
            currentRotation.x = initialRotationX - deltaY * 0.6;
            
            applyRotation();
            
            lastMoveTime = now;
            lastMoveX = clientX;
            lastMoveY = clientY;
        }
    };
    
    const endDrag = () => {
        if (!isDragging) return;
        isDragging = false;
        model.style.cursor = 'grab';
        
        // Apply momentum/inertia
        if (Math.abs(velocity.x) > 0.1 || Math.abs(velocity.y) > 0.1) {
            isInertiaActive = true;
            const friction = 0.95;
            
            const animateInertia = () => {
                if (!isInertiaActive) return;
                
                // Apply velocity
                currentRotation.y += velocity.y;
                currentRotation.x += velocity.x;
                
                // Apply friction
                velocity.x *= friction;
                velocity.y *= friction;
                
                applyRotation();
                
                // Stop when velocity is too low
                if (Math.abs(velocity.x) < 0.1 && Math.abs(velocity.y) < 0.1) {
                    isInertiaActive = false;
                    velocity = { x: 0, y: 0 };
                } else {
                    animationFrameId = requestAnimationFrame(animateInertia);
                }
            };
            
            animationFrameId = requestAnimationFrame(animateInertia);
        }
    };
    
    // Mouse events
    model.addEventListener('mousedown', (e) => {
        if (e.target.closest('.control-btn') || 
            e.target.closest('.model-label') || 
            e.target.closest('.model-info')) return;
        e.preventDefault();
        startDrag(e.clientX, e.clientY);
    });
    
    document.addEventListener('mousemove', (e) => {
        updateDrag(e.clientX, e.clientY);
        
        // Update mouse position for dynamic lighting (4D effect)
        const container = document.getElementById('model-container');
        if (container) {
            const rect = container.getBoundingClientRect();
            mouseX = ((e.clientX - rect.left) / rect.width) * 100;
            mouseY = ((e.clientY - rect.top) / rect.height) * 100;
            
            // Update light position based on mouse
            lightAngle = Math.atan2(mouseY - 50, mouseX - 50) * 180 / Math.PI;
        }
    });
    
    document.addEventListener('mouseup', () => {
        endDrag();
    });
    
    // Touch events
    model.addEventListener('touchstart', (e) => {
        if (e.target.closest('.control-btn')) return;
        e.preventDefault();
        const touch = e.touches[0];
        startDrag(touch.clientX, touch.clientY);
    });
    
    document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const touch = e.touches[0];
        updateDrag(touch.clientX, touch.clientY);
    });
    
    document.addEventListener('touchend', (e) => {
        e.preventDefault();
        endDrag();
    });
    
    // Prevent context menu on long press
    model.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
    
    // Initial setup
    model.style.cursor = 'grab';
    model.style.transformStyle = 'preserve-3d';
    model.style.willChange = 'transform, filter';
    model.style.backfaceVisibility = 'hidden';
    applyRotation();
    
    // Start 4D animation loop
    let animationRunning = true;
    const animate4D = () => {
        if (!animationRunning) return;
        
        if (!isDragging && !isInertiaActive) {
            // Subtle continuous rotation (time dimension - 4D)
            const currentTime = (Date.now() - timeOffset) / 1000;
            currentRotation.y += 0.03 * Math.sin(currentTime * 0.1);
            currentRotation.x += 0.01 * Math.cos(currentTime * 0.15);
        }
        
        applyRotation();
        requestAnimationFrame(animate4D);
    };
    
    // Start the 4D animation
    animate4D();
    
    // Store cleanup function
    model._cleanup4D = () => {
        animationRunning = false;
    };
    
    // Add hover effect
    model.addEventListener('mouseenter', () => {
        if (!isDragging) {
            model.style.transition = 'transform 0.2s ease-out, filter 0.2s ease-out';
        }
    });
    
    model.addEventListener('mouseleave', () => {
        if (!isDragging && !isInertiaActive) {
            model.style.transition = 'transform 0.3s ease-out, filter 0.3s ease-out';
        }
    });
}

function setupElectronDrag(model) {
    const electrons = model.querySelectorAll('.thomson-electron');
    electrons.forEach((electron, index) => {
        electron.style.cursor = 'move';
        let isElectronDragging = false;
        let startPos = { x: 0, y: 0 };
        
        electron.addEventListener('mousedown', (e) => {
            e.stopPropagation();
            isElectronDragging = true;
            startPos.x = e.clientX - electron.offsetLeft;
            startPos.y = e.clientY - electron.offsetTop;
            electron.style.zIndex = '100';
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!isElectronDragging) return;
            const sphere = model.querySelector('.thomson-sphere');
            const sphereRect = sphere.getBoundingClientRect();
            const containerRect = model.getBoundingClientRect();
            
            let x = e.clientX - containerRect.left - startPos.x;
            let y = e.clientY - containerRect.top - startPos.y;
            
            // Keep electron within sphere bounds
            const radius = sphereRect.width / 2;
            const centerX = sphereRect.left + radius - containerRect.left;
            const centerY = sphereRect.top + radius - containerRect.top;
            
            const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
            if (distance > radius - 15) {
                const angle = Math.atan2(y - centerY, x - centerX);
                x = centerX + (radius - 15) * Math.cos(angle);
                y = centerY + (radius - 15) * Math.sin(angle);
            }
            
            electron.style.left = x + 'px';
            electron.style.top = y + 'px';
            electron.style.animation = 'none';
        });
        
        document.addEventListener('mouseup', () => {
            if (isElectronDragging) {
                isElectronDragging = false;
                electron.style.zIndex = '';
                electron.style.animation = '';
            }
        });
    });
}

function toggleAnimation() {
    isAnimating = !isAnimating;
    const container = document.getElementById('model-container');
    const btn = document.getElementById('play-pause-btn');
    const span = btn.querySelector('span');
    
    if (isAnimating) {
        container.style.animationPlayState = 'running';
        span.textContent = currentAtomLanguage === 'tr' ? 'Duraklat' : 'Pause';
        btn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16"/>
                <rect x="14" y="4" width="4" height="16"/>
            </svg>
            <span>${span.textContent}</span>
        `;
    } else {
        container.style.animationPlayState = 'paused';
        span.textContent = currentAtomLanguage === 'tr' ? 'Oynat' : 'Play';
        btn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
            <span>${span.textContent}</span>
        `;
    }
    
    // Pause all animations in model
    const animations = container.querySelectorAll('*');
    animations.forEach(el => {
        if (isAnimating) {
            el.style.animationPlayState = 'running';
        } else {
            el.style.animationPlayState = 'paused';
        }
    });
}

function resetModel() {
    const container = document.getElementById('model-container');
    
    // Stop any ongoing animations
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
    
    // Cleanup 4D animations
    const oldModel = container.querySelector('.interactive-model');
    if (oldModel && oldModel._cleanup4D) {
        oldModel._cleanup4D();
    }
    
    container.innerHTML = '';
    modelZoom = 1;
    container.style.transform = `scale(${modelZoom})`;
    currentRotation = { x: 0, y: 0 };
    velocity = { x: 0, y: 0 };
    isDragging = false;
    isInertiaActive = false;
    
    if (currentModel) {
        renderModel(currentModel, container);
    }
    isAnimating = true;
    const btn = document.getElementById('play-pause-btn');
    const span = btn.querySelector('span');
    span.textContent = currentAtomLanguage === 'tr' ? 'Duraklat' : 'Pause';
    btn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16"/>
            <rect x="14" y="4" width="4" height="16"/>
        </svg>
        <span>${span.textContent}</span>
    `;
}

function zoomModel(direction) {
    const container = document.getElementById('model-container');
    if (direction === 'in') {
        modelZoom = Math.min(modelZoom + 0.2, 2);
    } else {
        modelZoom = Math.max(modelZoom - 0.2, 0.5);
    }
    container.style.transform = `scale(${modelZoom})`;
    container.style.transition = 'transform 0.3s ease';
}

// Close modal on outside click
document.addEventListener('click', function(e) {
    const modal = document.getElementById('model-modal');
    if (e.target === modal) {
        closeModelModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModelModal();
    }
});

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
