// Accessibility Features for FOS Website
class AccessibilityManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupSkipLinks();
        this.setupFocusManagement();
        this.setupKeyboardNavigation();
        this.setupMobileMenuAccessibility();
        this.setupARIALabels();
        this.setupColorContrast();
    }

    setupSkipLinks() {
        const skipLinks = document.querySelectorAll('.skip-link');
        skipLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.focus();
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    setupFocusManagement() {
        // Trap focus in modal dialogs
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                const activeElement = document.activeElement;
                const modal = activeElement.closest('.modal, .fab-container.open');
                
                if (modal) {
                    const focusableElements = modal.querySelectorAll(
                        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                    );
                    
                    if (focusableElements.length === 0) return;
                    
                    const firstElement = focusableElements[0];
                    const lastElement = focusableElements[focusableElements.length - 1];
                    
                    if (e.shiftKey) {
                        if (activeElement === firstElement) {
                            e.preventDefault();
                            lastElement.focus();
                        }
                    } else {
                        if (activeElement === lastElement) {
                            e.preventDefault();
                            firstElement.focus();
                        }
                    }
                }
            }
        });

        // Announce dynamic content changes
        this.setupLiveRegions();
    }

    setupLiveRegions() {
        // Create live region for announcements
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        liveRegion.style.cssText = `
            position: absolute;
            left: -10000px;
            width: 1px;
            height: 1px;
            overflow: hidden;
        `;
        document.body.appendChild(liveRegion);
        
        window.announceToScreenReader = (message) => {
            liveRegion.textContent = message;
            setTimeout(() => {
                liveRegion.textContent = '';
            }, 1000);
        };
    }

    setupKeyboardNavigation() {
        // Enhanced keyboard navigation for navigation menu
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    link.click();
                }
            });
        });

        // Keyboard navigation for language switcher
        const languageButtons = document.querySelectorAll('.language-btn');
        languageButtons.forEach(btn => {
            btn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    btn.click();
                }
            });
        });

        // Escape key to close modals and menus
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });
    }

    closeAllModals() {
        // Close FAB menu
        const fabContainer = document.getElementById('fabContainer');
        if (fabContainer && fabContainer.classList.contains('open')) {
            fabContainer.classList.remove('open');
            const fabMainBtn = document.getElementById('fabMainBtn');
            if (fabMainBtn) {
                fabMainBtn.setAttribute('aria-expanded', 'false');
            }
        }

        // Close mobile menu
        const navLinks = document.getElementById('nav-links');
        if (navLinks && navLinks.classList.contains('mobile-active')) {
            navLinks.classList.remove('mobile-active');
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            if (mobileMenuBtn) {
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        }
    }

    setupMobileMenuAccessibility() {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.getElementById('nav-links');
        
        if (mobileMenuBtn && navLinks) {
            mobileMenuBtn.addEventListener('click', () => {
                const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
                mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
                navLinks.classList.toggle('mobile-active');
                
                // Announce menu state
                const message = !isExpanded ? 'Navigation menu opened' : 'Navigation menu closed';
                if (window.announceToScreenReader) {
                    window.announceToScreenReader(message);
                }
            });
        }
    }

    setupARIALabels() {
        // Add missing ARIA labels
        const images = document.querySelectorAll('img:not([alt])');
        images.forEach(img => {
            if (!img.alt) {
                img.alt = 'Decorative image';
            }
        });

        // Add ARIA labels to interactive elements
        const buttons = document.querySelectorAll('button:not([aria-label])');
        buttons.forEach(btn => {
            if (!btn.textContent.trim() && !btn.getAttribute('aria-label')) {
                // Try to infer label from context
                const icon = btn.querySelector('svg');
                if (icon) {
                    const iconClass = icon.className.baseVal || '';
                    if (iconClass.includes('menu')) {
                        btn.setAttribute('aria-label', 'Toggle navigation menu');
                    } else if (iconClass.includes('close')) {
                        btn.setAttribute('aria-label', 'Close');
                    }
                }
            }
        });
    }

    setupColorContrast() {
        // Check and improve color contrast for better accessibility
        const checkContrast = () => {
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div');
            textElements.forEach(element => {
                const style = window.getComputedStyle(element);
                const color = style.color;
                const backgroundColor = style.backgroundColor;
                
                // Simple contrast check (can be enhanced with actual contrast calculation)
                if (color && backgroundColor) {
                    // Add contrast class if needed
                    if (this.needsContrastImprovement(color, backgroundColor)) {
                        element.classList.add('high-contrast');
                    }
                }
            });
        };

        // Run contrast check after page load
        setTimeout(checkContrast, 1000);
    }

    needsContrastImprovement(color, backgroundColor) {
        // Simplified contrast check - in a real implementation, 
        // you would calculate the actual contrast ratio
        return false; // Placeholder
    }

    // Utility method to make elements focusable
    makeFocusable(element) {
        if (element && !element.hasAttribute('tabindex')) {
            element.setAttribute('tabindex', '0');
        }
    }

    // Utility method to announce page changes
    announcePageChange(pageTitle) {
        if (window.announceToScreenReader) {
            window.announceToScreenReader(`Page loaded: ${pageTitle}`);
        }
    }
}

// Initialize accessibility manager when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.accessibilityManager = new AccessibilityManager();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AccessibilityManager;
} 