// FOS Website Test Suite
class FOSTestSuite {
    constructor() {
        this.tests = [];
        this.results = {
            passed: 0,
            failed: 0,
            total: 0
        };
        this.init();
    }

    init() {
        // Only run tests in development mode
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            this.setupTestUI();
            this.runTests();
        }
    }

    setupTestUI() {
        const testUI = document.createElement('div');
        testUI.id = 'test-ui';
        testUI.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            background: #1a1a1a;
            color: white;
            padding: 15px;
            border-radius: 8px;
            font-family: monospace;
            font-size: 12px;
            z-index: 10000;
            max-width: 300px;
            max-height: 400px;
            overflow-y: auto;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        `;
        document.body.appendChild(testUI);
    }

    updateTestUI() {
        const testUI = document.getElementById('test-ui');
        if (testUI) {
            testUI.innerHTML = `
                <div style="margin-bottom: 10px; font-weight: bold; color: #C7A15A;">
                    🧪 FOS Tests
                </div>
                <div>✅ Passed: ${this.results.passed}</div>
                <div>❌ Failed: ${this.results.failed}</div>
                <div>📊 Total: ${this.results.total}</div>
                <div style="margin-top: 10px; font-size: 10px; color: #888;">
                    ${this.results.failed === 0 ? '🎉 All tests passed!' : '⚠️ Some tests failed'}
                </div>
            `;
        }
    }

    async runTests() {
        console.log('🧪 Starting FOS Test Suite...');
        
        // Core functionality tests
        await this.testLanguageSwitcher();
        await this.testContactForm();
        await this.testCookieBanner();
        await this.testAccessibility();
        await this.testPerformance();
        await this.testResponsiveDesign();
        await this.testSEO();
        await this.testLinks();
        await this.testImages();
        await this.testForms();
        
        this.updateTestUI();
        this.generateReport();
    }

    async testLanguageSwitcher() {
        this.addTest('Language Switcher', async () => {
            const languageSwitcher = window.fosLanguageSwitcher;
            if (!languageSwitcher) {
                throw new Error('Language switcher not initialized');
            }

            // Test language switching
            const currentLang = languageSwitcher.getCurrentLanguage();
            languageSwitcher.switchLanguage('en');
            
            if (languageSwitcher.getCurrentLanguage() !== 'en') {
                throw new Error('Language switch failed');
            }

            // Test language persistence
            languageSwitcher.switchLanguage(currentLang);
            return 'Language switcher working correctly';
        });
    }

    async testContactForm() {
        this.addTest('Contact Form', async () => {
            const form = document.querySelector('#contactForm');
            if (!form) {
                throw new Error('Contact form not found');
            }

            // Test form validation
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.click();
                
                // Check for validation errors
                const errors = form.querySelectorAll('.error');
                if (errors.length === 0) {
                    throw new Error('Form validation not working');
                }
            }

            return 'Contact form validation working';
        });
    }

    async testCookieBanner() {
        this.addTest('Cookie Banner', async () => {
            const cookieBanner = window.fosCookieBanner;
            if (!cookieBanner) {
                throw new Error('Cookie banner not initialized');
            }

            // Test cookie banner functionality
            if (!cookieBanner.isInitialized()) {
                throw new Error('Cookie banner not properly initialized');
            }

            return 'Cookie banner working correctly';
        });
    }

    async testAccessibility() {
        this.addTest('Accessibility', async () => {
            const accessibility = window.fosAccessibility;
            if (!accessibility) {
                throw new Error('Accessibility module not initialized');
            }

            // Test ARIA labels
            const elementsWithAria = document.querySelectorAll('[aria-label]');
            if (elementsWithAria.length === 0) {
                throw new Error('No ARIA labels found');
            }

            // Test focus management
            const focusableElements = document.querySelectorAll('button, a, input, textarea, select');
            let focusableCount = 0;
            focusableElements.forEach(el => {
                if (el.tabIndex >= 0 || el.tagName === 'A' || el.tagName === 'BUTTON') {
                    focusableCount++;
                }
            });

            if (focusableCount === 0) {
                throw new Error('No focusable elements found');
            }

            return `Accessibility: ${focusableCount} focusable elements, ${elementsWithAria.length} ARIA labels`;
        });
    }

    async testPerformance() {
        this.addTest('Performance', async () => {
            const performance = window.fosPerformance;
            if (!performance) {
                throw new Error('Performance module not initialized');
            }

            // Test Core Web Vitals
            const navigation = performance.getEntriesByType('navigation')[0];
            if (navigation) {
                const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
                if (loadTime > 3000) {
                    throw new Error(`Page load time too slow: ${loadTime}ms`);
                }
            }

            // Test image optimization
            const images = document.querySelectorAll('img');
            let optimizedImages = 0;
            images.forEach(img => {
                if (img.loading === 'lazy' || img.decoding === 'async') {
                    optimizedImages++;
                }
            });

            if (optimizedImages === 0 && images.length > 0) {
                throw new Error('No optimized images found');
            }

            return `Performance: ${optimizedImages}/${images.length} optimized images`;
        });
    }

    async testResponsiveDesign() {
        this.addTest('Responsive Design', async () => {
            // Test viewport meta tag
            const viewport = document.querySelector('meta[name="viewport"]');
            if (!viewport) {
                throw new Error('Viewport meta tag missing');
            }

            // Test responsive CSS
            const style = getComputedStyle(document.body);
            const hasResponsiveUnits = style.fontSize.includes('rem') || style.fontSize.includes('em');
            
            if (!hasResponsiveUnits) {
                throw new Error('No responsive units found in CSS');
            }

            // Test mobile menu
            const mobileMenu = document.querySelector('.mobile-menu-btn');
            if (!mobileMenu) {
                throw new Error('Mobile menu button not found');
            }

            return 'Responsive design elements present';
        });
    }

    async testSEO() {
        this.addTest('SEO', async () => {
            // Test meta tags
            const title = document.title;
            if (!title || title.length < 10) {
                throw new Error('Page title too short or missing');
            }

            const description = document.querySelector('meta[name="description"]');
            if (!description || !description.content) {
                throw new Error('Meta description missing');
            }

            const keywords = document.querySelector('meta[name="keywords"]');
            if (!keywords || !keywords.content) {
                throw new Error('Meta keywords missing');
            }

            // Test heading structure
            const h1s = document.querySelectorAll('h1');
            if (h1s.length === 0) {
                throw new Error('No H1 heading found');
            }

            if (h1s.length > 1) {
                throw new Error('Multiple H1 headings found');
            }

            // Test alt attributes
            const images = document.querySelectorAll('img');
            let imagesWithAlt = 0;
            images.forEach(img => {
                if (img.alt) {
                    imagesWithAlt++;
                }
            });

            if (imagesWithAlt < images.length * 0.8) {
                throw new Error('Too many images missing alt attributes');
            }

            return `SEO: ${imagesWithAlt}/${images.length} images with alt text`;
        });
    }

    async testLinks() {
        this.addTest('Links', async () => {
            const links = document.querySelectorAll('a[href]');
            let validLinks = 0;
            let brokenLinks = 0;

            for (let i = 0; i < Math.min(links.length, 10); i++) {
                const link = links[i];
                const href = link.href;

                if (href.startsWith('http')) {
                    try {
                        const response = await fetch(href, { method: 'HEAD' });
                        if (response.ok) {
                            validLinks++;
                        } else {
                            brokenLinks++;
                        }
                    } catch (error) {
                        brokenLinks++;
                    }
                } else {
                    validLinks++;
                }
            }

            if (brokenLinks > 0) {
                throw new Error(`${brokenLinks} broken links found`);
            }

            return `Links: ${validLinks} valid, ${brokenLinks} broken`;
        });
    }

    async testImages() {
        this.addTest('Images', async () => {
            const images = document.querySelectorAll('img');
            let loadedImages = 0;
            let failedImages = 0;

            for (let i = 0; i < Math.min(images.length, 5); i++) {
                const img = images[i];
                if (img.complete && img.naturalHeight !== 0) {
                    loadedImages++;
                } else {
                    failedImages++;
                }
            }

            if (failedImages > 0) {
                throw new Error(`${failedImages} images failed to load`);
            }

            return `Images: ${loadedImages} loaded, ${failedImages} failed`;
        });
    }

    async testForms() {
        this.addTest('Forms', async () => {
            const forms = document.querySelectorAll('form');
            
            forms.forEach(form => {
                // Test form action
                if (!form.action && !form.dataset.noAction) {
                    throw new Error('Form missing action attribute');
                }

                // Test form method
                if (!form.method) {
                    throw new Error('Form missing method attribute');
                }

                // Test required fields
                const requiredFields = form.querySelectorAll('[required]');
                requiredFields.forEach(field => {
                    if (!field.name) {
                        throw new Error('Required field missing name attribute');
                    }
                });
            });

            return `Forms: ${forms.length} forms validated`;
        });
    }

    addTest(name, testFunction) {
        this.tests.push({ name, testFunction });
    }

    async executeTest(test) {
        try {
            const result = await test.testFunction();
            this.results.passed++;
            console.log(`✅ ${test.name}: ${result}`);
            return { success: true, result };
        } catch (error) {
            this.results.failed++;
            console.error(`❌ ${test.name}: ${error.message}`);
            return { success: false, error: error.message };
        } finally {
            this.results.total++;
        }
    }

    async runAllTests() {
        for (const test of this.tests) {
            await this.executeTest(test);
        }
    }

    generateReport() {
        const report = {
            timestamp: new Date().toISOString(),
            results: this.results,
            tests: this.tests.map(test => test.name),
            url: window.location.href,
            userAgent: navigator.userAgent
        };

        console.log('📊 Test Report:', report);
        
        // Store report in localStorage for debugging
        localStorage.setItem('fos-test-report', JSON.stringify(report));
        
        return report;
    }

    // Utility methods
    assert(condition, message) {
        if (!condition) {
            throw new Error(message);
        }
    }

    assertEqual(actual, expected, message) {
        if (actual !== expected) {
            throw new Error(`${message}: expected ${expected}, got ${actual}`);
        }
    }

    assertExists(element, message) {
        if (!element) {
            throw new Error(message);
        }
    }
}

// Initialize test suite when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Only run tests in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        window.fosTestSuite = new FOSTestSuite();
    }
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { FOSTestSuite };
} 