// FOS Language Switcher - Centralized Language Management
class FOSLanguageSwitcher {
    constructor() {
        this.currentLanguage = 'de';
        this.init();
    }

    init() {
        // Load saved language preference
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang && (savedLang === 'de' || savedLang === 'en')) {
            this.currentLanguage = savedLang;
        }
        
        // Apply language on page load
        this.applyLanguage(this.currentLanguage);
        
        // Set up event listeners
        this.setupEventListeners();
        
        // Update UI to reflect current language
        this.updateLanguageButtons();
    }

    setupEventListeners() {
        // Language button clicks
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('language-btn')) {
                const lang = e.target.textContent.toLowerCase();
                this.switchLanguage(lang);
            }
        });

        // Mobile menu toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }
    }

    switchLanguage(lang) {
        if (lang !== 'de' && lang !== 'en') return;
        
        this.currentLanguage = lang;
        this.applyLanguage(lang);
        this.updateLanguageButtons();
        this.saveLanguagePreference(lang);
    }

    applyLanguage(lang) {
        // Show/hide language-specific content
        const germanElements = document.querySelectorAll('.lang-de');
        const englishElements = document.querySelectorAll('.lang-en');
        
        if (lang === 'de') {
            germanElements.forEach(el => {
                el.style.display = '';
                el.classList.remove('hidden');
            });
            englishElements.forEach(el => {
                el.style.display = 'none';
                el.classList.add('hidden');
            });
        } else {
            germanElements.forEach(el => {
                el.style.display = 'none';
                el.classList.add('hidden');
            });
            englishElements.forEach(el => {
                el.style.display = '';
                el.classList.remove('hidden');
            });
        }
        
        // Update navigation links
        this.updateNavigationLanguage(lang);
        
        // Update document language attribute
        document.documentElement.lang = lang;
        
        // Update page title if available
        this.updatePageTitle(lang);
    }

    updateNavigationLanguage(lang) {
        const navLinks = document.querySelectorAll('[data-de][data-en]');
        navLinks.forEach(link => {
            if (lang === 'de') {
                link.textContent = link.getAttribute('data-de');
            } else {
                link.textContent = link.getAttribute('data-en');
            }
        });
    }

    updatePageTitle(lang) {
        const titleElement = document.querySelector('title');
        if (titleElement) {
            const currentTitle = titleElement.textContent;
            // Simple title switching logic - can be enhanced
            if (lang === 'en' && currentTitle.includes('FOS')) {
                // Keep English titles as they are, or implement specific switching
            }
        }
    }

    updateLanguageButtons() {
        const buttons = document.querySelectorAll('.language-btn');
        buttons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.textContent.toLowerCase() === this.currentLanguage) {
                btn.classList.add('active');
            }
        });
    }

    saveLanguagePreference(lang) {
        localStorage.setItem('preferredLanguage', lang);
    }

    toggleMobileMenu() {
        const navLinks = document.getElementById('nav-links');
        if (navLinks) {
            navLinks.classList.toggle('mobile-active');
        }
    }

    // Utility method to get current language
    getCurrentLanguage() {
        return this.currentLanguage;
    }

    // Utility method to check if element should be visible
    isElementVisible(element) {
        const lang = this.currentLanguage;
        if (element.classList.contains(`lang-${lang}`)) {
            return !element.classList.contains('hidden') && element.style.display !== 'none';
        }
        return false;
    }
}

// Navbar scroll effect
function setupNavbarScroll() {
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language switcher
    window.fosLanguageSwitcher = new FOSLanguageSwitcher();
    
    // Setup navbar scroll effect
    setupNavbarScroll();
    
    // Setup smooth scroll animations
    setupSmoothScrollAnimations();
});

// Smooth scroll animations
function setupSmoothScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .service-card, .team-card, .publication-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// FAB Contact Menu Functions
function setupFABMenu() {
    const fabContainer = document.getElementById('fabContainer');
    const fabMainBtn = document.getElementById('fabMainBtn');
    
    if (fabMainBtn) {
        fabMainBtn.addEventListener('click', toggleFabMenu);
    }
}

function toggleFabMenu() {
    const fabContainer = document.getElementById('fabContainer');
    if (fabContainer) {
        fabContainer.classList.toggle('open');
    }
}

function openWhatsApp() {
    const phone = '+41441234567';
    const currentLang = window.fosLanguageSwitcher ? window.fosLanguageSwitcher.getCurrentLanguage() : 'de';
    let message = currentLang === 'de'
        ? 'Hallo FOS Team, ich interessiere mich für Ihre evidenzbasierte, psychologisch fundierte Beratung.'
        : 'Hello FOS Team, I am interested in your evidence-based, psychologically grounded consulting.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`,'_blank');
    toggleFabMenu();
}

function openEmail() {
    const currentLang = window.fosLanguageSwitcher ? window.fosLanguageSwitcher.getCurrentLanguage() : 'de';
    let subject = currentLang === 'de' ? 'Anfrage evidenzbasierte Beratung' : 'Evidence-based Consulting Inquiry';
    let body = currentLang === 'de'
        ? 'Sehr geehrtes FOS Team,%0D%0Aich interessiere mich für Ihre evidenzbasierte, psychologisch fundierte Beratung.'
        : 'Dear FOS Team,%0D%0AI am interested in your evidence-based, psychologically grounded consulting.';
    window.open(`mailto:info@fos-ag.ch?subject=${subject}&body=${body}`);
    toggleFabMenu();
}

function openTelegram() {
    const phone = '+41441234567';
    const currentLang = window.fosLanguageSwitcher ? window.fosLanguageSwitcher.getCurrentLanguage() : 'de';
    let message = currentLang === 'de'
        ? 'Hallo FOS Team, ich interessiere mich für Ihre evidenzbasierte, psychologisch fundierte Beratung.'
        : 'Hello FOS Team, I am interested in your evidence-based, psychologically grounded consulting.';
    window.open(`https://t.me/${phone}?text=${encodeURIComponent(message)}`,'_blank');
    toggleFabMenu();
}

// Initialize FAB menu when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setupFABMenu();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { FOSLanguageSwitcher };
} 