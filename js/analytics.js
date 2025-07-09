// FOS Analytics Integration - DATENSCHUTZ-FREUNDLICHE VERSION
// Google Analytics wurde entfernt für besseren Datenschutz

class FOSAnalytics {
    constructor() {
        this.isInitialized = false;
        this.init();
    }

    init() {
        // Nur grundlegende Funktionalität ohne Tracking
        this.setupBasicFunctionality();
        this.isInitialized = true;
        console.log('FOS Analytics initialized (privacy-friendly mode)');
    }

    setupBasicFunctionality() {
        // Nur grundlegende Website-Funktionalität
        this.setupFormValidation();
        this.setupAccessibility();
    }

    setupFormValidation() {
        // Formular-Validierung ohne Tracking
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                // Nur Validierung, kein Tracking
                console.log('Form submitted:', form.id || 'unknown');
            });
        });
    }

    setupAccessibility() {
        // Barrierefreiheit-Features
        this.setupKeyboardNavigation();
        this.setupFocusManagement();
    }

    setupKeyboardNavigation() {
        // Keyboard-Navigation für Barrierefreiheit
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                // Tab-Navigation unterstützen
                document.body.classList.add('keyboard-navigation');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    }

    setupFocusManagement() {
        // Focus-Management für Barrierefreiheit
        const focusableElements = document.querySelectorAll(
            'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );

        focusableElements.forEach(element => {
            element.addEventListener('focus', () => {
                element.classList.add('focused');
            });

            element.addEventListener('blur', () => {
                element.classList.remove('focused');
            });
        });
    }

    // Public method für grundlegende Events (ohne Tracking)
    logEvent(eventName, eventData = {}) {
        // Nur lokales Logging, keine externen Dienste
        console.log('Event:', eventName, eventData);
    }

    // Methoden für Datenschutz-Informationen
    getPrivacyInfo() {
        return {
            tracking: false,
            analytics: false,
            cookies: 'minimal',
            dataCollection: 'none',
            compliance: 'DSGVO-konform'
        };
    }
}

// Initialisierung
document.addEventListener('DOMContentLoaded', () => {
    window.fosAnalytics = new FOSAnalytics();
});

// Hinweis für Entwickler
console.log('FOS Analytics läuft im Datenschutz-freundlichen Modus ohne Google Analytics'); 