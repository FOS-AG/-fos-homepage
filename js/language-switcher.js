// Language Switcher for FOS Website
class LanguageSwitcher {
    constructor() {
        this.currentLanguage = 'de';
        this.init();
    }

    init() {
        this.loadSavedLanguage();
        this.setupEventListeners();
        this.updateAllContent();
    }

    loadSavedLanguage() {
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang && (savedLang === 'de' || savedLang === 'en')) {
            this.currentLanguage = savedLang;
        }
    }

    setupEventListeners() {
        const buttons = document.querySelectorAll('.language-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.textContent.toLowerCase();
                this.switchLanguage(lang);
            });
        });
    }

    switchLanguage(lang) {
        if (lang !== 'de' && lang !== 'en') return;

        this.currentLanguage = lang;
        
        // Update button states
        const buttons = document.querySelectorAll('.language-btn');
        buttons.forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-pressed', 'false');
            if (btn.textContent.toLowerCase() === lang) {
                btn.classList.add('active');
                btn.setAttribute('aria-pressed', 'true');
            }
        });
        
        // Update content
        this.updateAllContent();
        
        // Save preference
        localStorage.setItem('preferredLanguage', lang);
        
        // Update page title and meta tags
        this.updatePageMeta(lang);
    }

    updateAllContent() {
        const germanElements = document.querySelectorAll('.lang-de');
        const englishElements = document.querySelectorAll('.lang-en');
        
        if (this.currentLanguage === 'de') {
            germanElements.forEach(el => el.style.display = '');
            englishElements.forEach(el => el.style.display = 'none');
        } else {
            germanElements.forEach(el => el.style.display = 'none');
            englishElements.forEach(el => el.style.display = '');
        }
        
        this.updateNavigationLanguage();
        this.updateFormPlaceholders();
    }

    updateNavigationLanguage() {
        const navLinks = document.querySelectorAll('[data-de][data-en]');
        navLinks.forEach(link => {
            if (this.currentLanguage === 'de') {
                link.textContent = link.getAttribute('data-de');
            } else {
                link.textContent = link.getAttribute('data-en');
            }
        });
    }

    updateFormPlaceholders() {
        const inputs = document.querySelectorAll('input[data-placeholder-de], input[data-placeholder-en]');
        inputs.forEach(input => {
            const placeholder = this.currentLanguage === 'de' 
                ? input.getAttribute('data-placeholder-de')
                : input.getAttribute('data-placeholder-en');
            if (placeholder) {
                input.placeholder = placeholder;
            }
        });
    }

    updatePageMeta(lang) {
        const title = lang === 'de' 
            ? 'FOS – Focus on Solutions AG | Evidenzbasierte Unternehmensberatung'
            : 'FOS – Focus on Solutions AG | Evidence-based Business Consulting';
        
        const description = lang === 'de'
            ? 'Evidenzbasierte, psychologisch fundierte Beratung für Unternehmen, Führungskräfte und Teams. Executive Coaching, Strategieberatung, Change Management.'
            : 'Evidence-based, psychologically grounded consulting for companies, executives and teams. Executive Coaching, Strategy Consulting, Change Management.';

        document.title = title;
        
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', description);
        }

        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', title);
        }

        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) {
            ogDesc.setAttribute('content', description);
        }

        const twitterTitle = document.querySelector('meta[property="twitter:title"]');
        if (twitterTitle) {
            twitterTitle.setAttribute('content', title);
        }

        const twitterDesc = document.querySelector('meta[property="twitter:description"]');
        if (twitterDesc) {
            twitterDesc.setAttribute('content', description);
        }
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }
}

// Initialize language switcher when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.languageSwitcher = new LanguageSwitcher();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LanguageSwitcher;
} 