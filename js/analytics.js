// FOS Analytics Integration
class FOSAnalytics {
    constructor() {
        this.isInitialized = false;
        this.init();
    }

    init() {
        // Wait for cookie banner to be ready
        if (window.fosCookieBanner) {
            this.checkConsent();
        } else {
            // Fallback: check after a short delay
            setTimeout(() => this.checkConsent(), 1000);
        }
    }

    checkConsent() {
        if (window.fosCookieBanner && window.fosCookieBanner.isAllowed('analytics')) {
            this.initializeAnalytics();
        }
    }

    initializeAnalytics() {
        if (this.isInitialized) return;

        // Google Analytics 4
        this.loadGoogleAnalytics();
        
        // Custom tracking
        this.setupCustomTracking();
        
        this.isInitialized = true;
        console.log('FOS Analytics initialized');
    }

    loadGoogleAnalytics() {
        // Google Analytics 4
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-1JXFPB8SJM';
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-1JXFPB8SJM', {
            'anonymize_ip': true,
            'cookie_flags': 'SameSite=None;Secure'
        });

        window.gtag = gtag;
    }

    setupCustomTracking() {
        // Track page views
        this.trackPageView();

        // Track form submissions
        this.trackFormSubmissions();

        // Track button clicks
        this.trackButtonClicks();

        // Track scroll depth
        this.trackScrollDepth();

        // Track time on page
        this.trackTimeOnPage();
    }

    trackPageView() {
        const pageData = {
            page_title: document.title,
            page_location: window.location.href,
            page_referrer: document.referrer,
            language: this.getCurrentLanguage()
        };

        this.sendEvent('page_view', pageData);
    }

    trackFormSubmissions() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                const formData = {
                    form_id: form.id || 'unknown',
                    form_action: form.action,
                    language: this.getCurrentLanguage()
                };
                this.sendEvent('form_submit', formData);
            });
        });
    }

    trackButtonClicks() {
        const buttons = document.querySelectorAll('button, .btn, a[role="button"]');
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const buttonData = {
                    button_text: button.textContent.trim(),
                    button_id: button.id || 'unknown',
                    button_class: button.className,
                    language: this.getCurrentLanguage()
                };
                this.sendEvent('button_click', buttonData);
            });
        });
    }

    trackScrollDepth() {
        let maxScroll = 0;
        const scrollThresholds = [25, 50, 75, 90];

        window.addEventListener('scroll', () => {
            const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            
            if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
                
                scrollThresholds.forEach(threshold => {
                    if (scrollPercent >= threshold && maxScroll < threshold + 10) {
                        this.sendEvent('scroll_depth', {
                            depth: threshold,
                            page: window.location.pathname
                        });
                    }
                });
            }
        });
    }

    trackTimeOnPage() {
        const startTime = Date.now();
        
        window.addEventListener('beforeunload', () => {
            const timeOnPage = Math.round((Date.now() - startTime) / 1000);
            this.sendEvent('time_on_page', {
                seconds: timeOnPage,
                page: window.location.pathname
            });
        });
    }

    sendEvent(eventName, eventData) {
        if (!this.isInitialized) return;

        // Send to Google Analytics
        if (window.gtag) {
            window.gtag('event', eventName, eventData);
        }

        // Send to custom analytics endpoint
        this.sendToCustomAnalytics(eventName, eventData);
    }

    async sendToCustomAnalytics(eventName, eventData) {
        try {
            const data = {
                event: eventName,
                data: eventData,
                timestamp: new Date().toISOString(),
                session_id: this.getSessionId(),
                user_agent: navigator.userAgent
            };

            // Send to analytics endpoint (if configured)
            // await fetch('/api/analytics', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(data)
            // });

            // For now, just log to console
            console.log('Analytics Event:', data);
        } catch (error) {
            console.error('Analytics error:', error);
        }
    }

    getSessionId() {
        let sessionId = sessionStorage.getItem('fos_session_id');
        if (!sessionId) {
            sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            sessionStorage.setItem('fos_session_id', sessionId);
        }
        return sessionId;
    }

    getCurrentLanguage() {
        return window.fosLanguageSwitcher ? window.fosLanguageSwitcher.getCurrentLanguage() : 'de';
    }

    // Public method to track custom events
    trackCustomEvent(eventName, eventData = {}) {
        this.sendEvent(eventName, eventData);
    }
}

// Initialize analytics when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.fosAnalytics = new FOSAnalytics();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { FOSAnalytics };
} 