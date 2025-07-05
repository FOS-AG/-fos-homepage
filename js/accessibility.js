// FOS Accessibility Enhancement
class FOSAccessibility {
    constructor() {
        this.init();
    }

    init() {
        this.setupKeyboardNavigation();
        this.setupARIALabels();
        this.setupFocusManagement();
        this.setupSkipLinks();
        this.setupColorContrast();
        this.setupScreenReaderSupport();
        this.setupReducedMotion();
    }

    setupKeyboardNavigation() {
        // Make all interactive elements keyboard accessible
        const interactiveElements = document.querySelectorAll('button, a, input, textarea, select, [tabindex]');
        
        interactiveElements.forEach(element => {
            // Ensure proper tabindex
            if (!element.hasAttribute('tabindex') && !element.disabled) {
                element.setAttribute('tabindex', '0');
            }

            // Add keyboard event listeners
            element.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    element.click();
                }
            });

            // Add focus indicators
            element.addEventListener('focus', () => {
                element.classList.add('focus-visible');
            });

            element.addEventListener('blur', () => {
                element.classList.remove('focus-visible');
            });
        });

        // Handle escape key for modals and menus
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.handleEscapeKey();
            }
        });
    }

    setupARIALabels() {
        // Add ARIA labels to elements that need them
        const elements = [
            { selector: '.mobile-menu-btn', label: 'Toggle navigation menu' },
            { selector: '.language-btn', label: 'Switch language' },
            { selector: '.fab-main', label: 'Open contact options' },
            { selector: '.fab-action', label: 'Contact via' },
            { selector: '.btn', label: 'Button' }
        ];

        elements.forEach(({ selector, label }) => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                if (!element.getAttribute('aria-label')) {
                    element.setAttribute('aria-label', label);
                }
            });
        });

        // Add role attributes
        this.addRoleAttributes();
    }

    addRoleAttributes() {
        // Navigation
        const nav = document.querySelector('nav');
        if (nav) nav.setAttribute('role', 'navigation');

        // Main content
        const main = document.querySelector('main') || document.querySelector('.hero');
        if (main) main.setAttribute('role', 'main');

        // Banner
        const header = document.querySelector('header') || document.querySelector('.hero');
        if (header) header.setAttribute('role', 'banner');

        // Content info
        const footer = document.querySelector('footer');
        if (footer) footer.setAttribute('role', 'contentinfo');

        // Form elements
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.setAttribute('role', 'form');
        });

        // Buttons
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            if (!button.getAttribute('role')) {
                button.setAttribute('role', 'button');
            }
        });
    }

    setupFocusManagement() {
        // Trap focus in modals (if any)
        this.setupFocusTrap();

        // Return focus when modals close
        this.setupFocusReturn();

        // Skip to main content
        this.setupSkipToContent();
    }

    setupFocusTrap() {
        // This would be used for modals or dropdowns
        const modals = document.querySelectorAll('[role="dialog"], .modal');
        
        modals.forEach(modal => {
            const focusableElements = modal.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            modal.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            e.preventDefault();
                            lastElement.focus();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            e.preventDefault();
                            firstElement.focus();
                        }
                    }
                }
            });
        });
    }

    setupFocusReturn() {
        // Store the element that had focus before modal opened
        let previousActiveElement = null;

        // This would be triggered when modals open/close
        document.addEventListener('modalOpen', () => {
            previousActiveElement = document.activeElement;
        });

        document.addEventListener('modalClose', () => {
            if (previousActiveElement) {
                previousActiveElement.focus();
            }
        });
    }

    setupSkipLinks() {
        // Create skip links
        const skipLinks = [
            { href: '#main-content', text: 'Skip to main content' },
            { href: '#navigation', text: 'Skip to navigation' },
            { href: '#footer', text: 'Skip to footer' }
        ];

        const skipContainer = document.createElement('div');
        skipContainer.className = 'skip-links';
        skipContainer.setAttribute('role', 'navigation');
        skipContainer.setAttribute('aria-label', 'Skip links');

        skipLinks.forEach(link => {
            const skipLink = document.createElement('a');
            skipLink.href = link.href;
            skipLink.textContent = link.text;
            skipLink.className = 'skip-link';
            skipContainer.appendChild(skipLink);
        });

        // Insert at the beginning of body
        document.body.insertBefore(skipContainer, document.body.firstChild);

        // Add corresponding IDs to elements
        const mainContent = document.querySelector('main') || document.querySelector('.hero');
        if (mainContent) mainContent.id = 'main-content';

        const navigation = document.querySelector('nav');
        if (navigation) navigation.id = 'navigation';

        const footer = document.querySelector('footer');
        if (footer) footer.id = 'footer';
    }

    setupColorContrast() {
        // Add high contrast mode support
        this.addHighContrastMode();
        
        // Add color scheme preference support
        this.addColorSchemeSupport();
    }

    addHighContrastMode() {
        const style = document.createElement('style');
        style.textContent = `
            @media (prefers-contrast: high) {
                * {
                    border-color: currentColor !important;
                }
                
                .btn, button {
                    border: 2px solid currentColor !important;
                }
                
                .card {
                    border: 2px solid currentColor !important;
                }
            }
        `;
        document.head.appendChild(style);
    }

    addColorSchemeSupport() {
        const style = document.createElement('style');
        style.textContent = `
            @media (prefers-color-scheme: dark) {
                :root {
                    --background: #1a1a1a;
                    --text: #ffffff;
                    --primary-blue: #4a90e2;
                    --primary-gold: #ffd700;
                }
            }
        `;
        document.head.appendChild(style);
    }

    setupScreenReaderSupport() {
        // Add screen reader only text
        this.addScreenReaderText();
        
        // Add live regions for dynamic content
        this.addLiveRegions();
        
        // Add descriptive text for images
        this.addImageDescriptions();
    }

    addScreenReaderText() {
        const srOnlyStyle = document.createElement('style');
        srOnlyStyle.textContent = `
            .sr-only {
                position: absolute;
                width: 1px;
                height: 1px;
                padding: 0;
                margin: -1px;
                overflow: hidden;
                clip: rect(0, 0, 0, 0);
                white-space: nowrap;
                border: 0;
            }
            
            .sr-only-focusable:focus {
                position: static;
                width: auto;
                height: auto;
                overflow: visible;
                clip: auto;
                white-space: normal;
            }
        `;
        document.head.appendChild(srOnlyStyle);
    }

    addLiveRegions() {
        // Add live regions for status messages
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        liveRegion.id = 'live-region';
        document.body.appendChild(liveRegion);
    }

    addImageDescriptions() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.alt && !img.getAttribute('aria-label')) {
                // Add descriptive alt text based on context
                const context = this.getImageContext(img);
                img.setAttribute('alt', context);
            }
        });
    }

    getImageContext(img) {
        // Generate context-aware alt text
        const src = img.src.toLowerCase();
        const className = img.className.toLowerCase();
        
        if (src.includes('logo')) return 'Company logo';
        if (src.includes('icon')) return 'Icon';
        if (className.includes('hero')) return 'Hero image';
        if (className.includes('team')) return 'Team member photo';
        
        return 'Image';
    }

    setupReducedMotion() {
        const style = document.createElement('style');
        style.textContent = `
            @media (prefers-reduced-motion: reduce) {
                *,
                *::before,
                *::after {
                    animation-duration: 0.01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.01ms !important;
                    scroll-behavior: auto !important;
                }
            }
        `;
        document.head.appendChild(style);
    }

    handleEscapeKey() {
        // Close mobile menu
        const mobileMenu = document.querySelector('.nav-links.mobile-active');
        if (mobileMenu) {
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            if (mobileMenuBtn) mobileMenuBtn.click();
        }

        // Close FAB menu
        const fabContainer = document.getElementById('fabContainer');
        if (fabContainer && fabContainer.classList.contains('open')) {
            fabContainer.classList.remove('open');
        }

        // Close any open modals
        const modals = document.querySelectorAll('[role="dialog"][aria-hidden="false"]');
        modals.forEach(modal => {
            modal.setAttribute('aria-hidden', 'true');
        });
    }

    // Public methods
    announceToScreenReader(message) {
        const liveRegion = document.getElementById('live-region');
        if (liveRegion) {
            liveRegion.textContent = message;
        }
    }

    setFocus(element) {
        if (element && typeof element.focus === 'function') {
            element.focus();
        }
    }

    // Utility method to check if user prefers reduced motion
    prefersReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    // Utility method to check if user prefers high contrast
    prefersHighContrast() {
        return window.matchMedia('(prefers-contrast: high)').matches;
    }
}

// Initialize accessibility when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.fosAccessibility = new FOSAccessibility();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { FOSAccessibility };
} 