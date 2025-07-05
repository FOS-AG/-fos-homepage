// FOS Cookie Banner - DSGVO Compliant
class FOSCookieBanner {
    constructor() {
        this.cookieConsent = null;
        this.init();
    }

    init() {
        // Check if consent already given
        if (!this.hasConsent()) {
            this.createBanner();
        }
    }

    createBanner() {
        // Create banner container
        this.cookieConsent = document.createElement('div');
        this.cookieConsent.id = 'cookie-banner';
        this.cookieConsent.className = 'cookie-banner';
        
        // Get current language
        const currentLang = this.getCurrentLanguage();
        
        // Set banner content based on language
        this.cookieConsent.innerHTML = this.getBannerHTML(currentLang);
        
        // Add styles
        this.addStyles();
        
        // Add to page
        document.body.appendChild(this.cookieConsent);
        
        // Setup event listeners
        this.setupEventListeners();
        
        // Show banner with animation
        setTimeout(() => {
            this.cookieConsent.classList.add('show');
        }, 100);
    }

    getBannerHTML(lang) {
        if (lang === 'en') {
            return `
                <div class="cookie-content">
                    <div class="cookie-text">
                        <h3>Cookie Settings</h3>
                        <p>We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. You can customize your preferences in our <a href="datenschutz.html">Privacy Policy</a>.</p>
                    </div>
                    <div class="cookie-buttons">
                        <button class="cookie-btn cookie-btn-secondary" id="cookie-settings">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                            </svg>
                            Settings
                        </button>
                        <button class="cookie-btn cookie-btn-primary" id="cookie-accept-all">
                            Accept All
                        </button>
                    </div>
                </div>
                <div class="cookie-settings" id="cookie-settings-panel" style="display: none;">
                    <h4>Cookie Preferences</h4>
                    <div class="cookie-option">
                        <label class="cookie-toggle">
                            <input type="checkbox" id="cookie-necessary" checked disabled>
                            <span class="toggle-slider"></span>
                        </label>
                        <div class="cookie-option-text">
                            <strong>Necessary Cookies</strong>
                            <p>Required for the website to function properly. Cannot be disabled.</p>
                        </div>
                    </div>
                    <div class="cookie-option">
                        <label class="cookie-toggle">
                            <input type="checkbox" id="cookie-analytics">
                            <span class="toggle-slider"></span>
                        </label>
                        <div class="cookie-option-text">
                            <strong>Analytics Cookies</strong>
                            <p>Help us understand how visitors interact with our website.</p>
                        </div>
                    </div>
                    <div class="cookie-option">
                        <label class="cookie-toggle">
                            <input type="checkbox" id="cookie-marketing">
                            <span class="toggle-slider"></span>
                        </label>
                        <div class="cookie-option-text">
                            <strong>Marketing Cookies</strong>
                            <p>Used to deliver personalized advertisements.</p>
                        </div>
                    </div>
                    <div class="cookie-settings-buttons">
                        <button class="cookie-btn cookie-btn-secondary" id="cookie-save">Save Preferences</button>
                        <button class="cookie-btn cookie-btn-primary" id="cookie-accept-all-settings">Accept All</button>
                    </div>
                </div>
            `;
        } else {
            return `
                <div class="cookie-content">
                    <div class="cookie-text">
                        <h3>Cookie-Einstellungen</h3>
                        <p>Wir verwenden Cookies, um Ihr Browsing-Erlebnis zu verbessern, personalisierte Inhalte bereitzustellen und unseren Traffic zu analysieren. Durch Klicken auf "Alle akzeptieren" stimmen Sie der Verwendung von Cookies zu. Sie können Ihre Einstellungen in unserer <a href="datenschutz.html">Datenschutzerklärung</a> anpassen.</p>
                    </div>
                    <div class="cookie-buttons">
                        <button class="cookie-btn cookie-btn-secondary" id="cookie-settings">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                            </svg>
                            Einstellungen
                        </button>
                        <button class="cookie-btn cookie-btn-primary" id="cookie-accept-all">
                            Alle akzeptieren
                        </button>
                    </div>
                </div>
                <div class="cookie-settings" id="cookie-settings-panel" style="display: none;">
                    <h4>Cookie-Präferenzen</h4>
                    <div class="cookie-option">
                        <label class="cookie-toggle">
                            <input type="checkbox" id="cookie-necessary" checked disabled>
                            <span class="toggle-slider"></span>
                        </label>
                        <div class="cookie-option-text">
                            <strong>Notwendige Cookies</strong>
                            <p>Für die ordnungsgemäße Funktion der Website erforderlich. Kann nicht deaktiviert werden.</p>
                        </div>
                    </div>
                    <div class="cookie-option">
                        <label class="cookie-toggle">
                            <input type="checkbox" id="cookie-analytics">
                            <span class="toggle-slider"></span>
                        </label>
                        <div class="cookie-option-text">
                            <strong>Analyse-Cookies</strong>
                            <p>Helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.</p>
                        </div>
                    </div>
                    <div class="cookie-option">
                        <label class="cookie-toggle">
                            <input type="checkbox" id="cookie-marketing">
                            <span class="toggle-slider"></span>
                        </label>
                        <div class="cookie-option-text">
                            <strong>Marketing-Cookies</strong>
                            <p>Werden verwendet, um personalisierte Werbung zu liefern.</p>
                        </div>
                    </div>
                    <div class="cookie-settings-buttons">
                        <button class="cookie-btn cookie-btn-secondary" id="cookie-save">Einstellungen speichern</button>
                        <button class="cookie-btn cookie-btn-primary" id="cookie-accept-all-settings">Alle akzeptieren</button>
                    </div>
                </div>
            `;
        }
    }

    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .cookie-banner {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgba(20, 33, 61, 0.98);
                color: white;
                padding: 1.5rem;
                z-index: 10000;
                transform: translateY(100%);
                transition: transform 0.3s ease;
                backdrop-filter: blur(10px);
                border-top: 1px solid rgba(199, 161, 90, 0.3);
            }
            
            .cookie-banner.show {
                transform: translateY(0);
            }
            
            .cookie-content {
                max-width: 1200px;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 2rem;
            }
            
            .cookie-text h3 {
                margin: 0 0 0.5rem 0;
                color: #C7A15A;
                font-size: 1.25rem;
            }
            
            .cookie-text p {
                margin: 0;
                line-height: 1.6;
                font-size: 0.95rem;
            }
            
            .cookie-text a {
                color: #C7A15A;
                text-decoration: underline;
            }
            
            .cookie-buttons {
                display: flex;
                gap: 1rem;
                flex-shrink: 0;
            }
            
            .cookie-btn {
                padding: 0.75rem 1.5rem;
                border: none;
                border-radius: 8px;
                font-size: 0.9rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s ease;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            .cookie-btn-primary {
                background: #C7A15A;
                color: white;
            }
            
            .cookie-btn-primary:hover {
                background: #b8944a;
                transform: translateY(-1px);
            }
            
            .cookie-btn-secondary {
                background: transparent;
                color: white;
                border: 1px solid rgba(255, 255, 255, 0.3);
            }
            
            .cookie-btn-secondary:hover {
                background: rgba(255, 255, 255, 0.1);
                border-color: rgba(255, 255, 255, 0.5);
            }
            
            .cookie-settings {
                max-width: 1200px;
                margin: 0 auto;
                padding-top: 1.5rem;
                border-top: 1px solid rgba(255, 255, 255, 0.2);
                margin-top: 1.5rem;
            }
            
            .cookie-settings h4 {
                margin: 0 0 1rem 0;
                color: #C7A15A;
            }
            
            .cookie-option {
                display: flex;
                align-items: flex-start;
                gap: 1rem;
                margin-bottom: 1rem;
                padding: 1rem;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 8px;
            }
            
            .cookie-toggle {
                position: relative;
                display: inline-block;
                width: 50px;
                height: 24px;
                flex-shrink: 0;
            }
            
            .cookie-toggle input {
                opacity: 0;
                width: 0;
                height: 0;
            }
            
            .toggle-slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(255, 255, 255, 0.3);
                transition: 0.3s;
                border-radius: 24px;
            }
            
            .toggle-slider:before {
                position: absolute;
                content: "";
                height: 18px;
                width: 18px;
                left: 3px;
                bottom: 3px;
                background-color: white;
                transition: 0.3s;
                border-radius: 50%;
            }
            
            input:checked + .toggle-slider {
                background-color: #C7A15A;
            }
            
            input:checked + .toggle-slider:before {
                transform: translateX(26px);
            }
            
            input:disabled + .toggle-slider {
                background-color: #666;
                cursor: not-allowed;
            }
            
            .cookie-option-text strong {
                display: block;
                margin-bottom: 0.25rem;
                color: #C7A15A;
            }
            
            .cookie-option-text p {
                margin: 0;
                font-size: 0.9rem;
                line-height: 1.5;
                opacity: 0.9;
            }
            
            .cookie-settings-buttons {
                display: flex;
                gap: 1rem;
                justify-content: flex-end;
                margin-top: 1.5rem;
            }
            
            @media (max-width: 768px) {
                .cookie-content {
                    flex-direction: column;
                    text-align: center;
                }
                
                .cookie-buttons {
                    width: 100%;
                    justify-content: center;
                }
                
                .cookie-btn {
                    flex: 1;
                    justify-content: center;
                }
                
                .cookie-option {
                    flex-direction: column;
                    text-align: left;
                }
                
                .cookie-settings-buttons {
                    flex-direction: column;
                }
            }
        `;
        document.head.appendChild(style);
    }

    setupEventListeners() {
        // Accept all cookies
        document.getElementById('cookie-accept-all').addEventListener('click', () => {
            this.acceptAllCookies();
        });

        // Show settings panel
        document.getElementById('cookie-settings').addEventListener('click', () => {
            this.toggleSettingsPanel();
        });

        // Save preferences
        document.getElementById('cookie-save').addEventListener('click', () => {
            this.savePreferences();
        });

        // Accept all from settings
        document.getElementById('cookie-accept-all-settings').addEventListener('click', () => {
            this.acceptAllCookies();
        });
    }

    toggleSettingsPanel() {
        const settingsPanel = document.getElementById('cookie-settings-panel');
        const isVisible = settingsPanel.style.display !== 'none';
        
        if (isVisible) {
            settingsPanel.style.display = 'none';
        } else {
            settingsPanel.style.display = 'block';
        }
    }

    acceptAllCookies() {
        const consent = {
            necessary: true,
            analytics: true,
            marketing: true,
            timestamp: new Date().toISOString(),
            version: '1.0'
        };
        
        this.saveConsent(consent);
        this.hideBanner();
        this.initializeServices(consent);
    }

    savePreferences() {
        const consent = {
            necessary: true, // Always true
            analytics: document.getElementById('cookie-analytics').checked,
            marketing: document.getElementById('cookie-marketing').checked,
            timestamp: new Date().toISOString(),
            version: '1.0'
        };
        
        this.saveConsent(consent);
        this.hideBanner();
        this.initializeServices(consent);
    }

    saveConsent(consent) {
        localStorage.setItem('fos-cookie-consent', JSON.stringify(consent));
        
        // Also set a cookie for server-side access
        const expires = new Date();
        expires.setFullYear(expires.getFullYear() + 1);
        document.cookie = `fos-cookie-consent=${JSON.stringify(consent)}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
    }

    hasConsent() {
        const consent = localStorage.getItem('fos-cookie-consent');
        if (consent) {
            try {
                const parsed = JSON.parse(consent);
                // Check if consent is not older than 1 year
                const consentDate = new Date(parsed.timestamp);
                const oneYearAgo = new Date();
                oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
                
                if (consentDate > oneYearAgo) {
                    this.initializeServices(parsed);
                    return true;
                }
            } catch (e) {
                console.error('Error parsing cookie consent:', e);
            }
        }
        return false;
    }

    hideBanner() {
        if (this.cookieConsent) {
            this.cookieConsent.classList.remove('show');
            setTimeout(() => {
                if (this.cookieConsent.parentNode) {
                    this.cookieConsent.parentNode.removeChild(this.cookieConsent);
                }
            }, 300);
        }
    }

    initializeServices(consent) {
        // Initialize analytics if consented
        if (consent.analytics) {
            this.initializeAnalytics();
        }
        
        // Initialize marketing if consented
        if (consent.marketing) {
            this.initializeMarketing();
        }
    }

    initializeAnalytics() {
        // Google Analytics initialization
        if (typeof gtag !== 'undefined') {
            gtag('consent', 'update', {
                'analytics_storage': 'granted'
            });
        }
        
        // Custom analytics tracking
        console.log('Analytics cookies enabled');
    }

    initializeMarketing() {
        // Marketing pixel initialization
        console.log('Marketing cookies enabled');
    }

    getCurrentLanguage() {
        return window.fosLanguageSwitcher ? window.fosLanguageSwitcher.getCurrentLanguage() : 'de';
    }

    // Public method to check if specific cookie type is allowed
    isAllowed(cookieType) {
        const consent = localStorage.getItem('fos-cookie-consent');
        if (consent) {
            try {
                const parsed = JSON.parse(consent);
                return parsed[cookieType] === true;
            } catch (e) {
                return false;
            }
        }
        return false;
    }
}

// Initialize cookie banner when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.fosCookieBanner = new FOSCookieBanner();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { FOSCookieBanner };
} 