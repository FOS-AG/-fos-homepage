// FOS Performance Optimization
class FOSPerformance {
    constructor() {
        this.init();
    }

    init() {
        this.setupLazyLoading();
        this.setupImageOptimization();
        this.setupFontLoading();
        this.setupResourceHints();
        this.setupServiceWorker();
        this.setupCaching();
        this.setupCriticalCSS();
    }

    setupLazyLoading() {
        // Lazy load images
        this.lazyLoadImages();
        
        // Lazy load iframes
        this.lazyLoadIframes();
        
        // Intersection Observer for better performance
        this.setupIntersectionObserver();
    }

    lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for older browsers
            images.forEach(img => {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
            });
        }
    }

    lazyLoadIframes() {
        const iframes = document.querySelectorAll('iframe[data-src]');
        
        if ('IntersectionObserver' in window) {
            const iframeObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const iframe = entry.target;
                        iframe.src = iframe.dataset.src;
                        iframe.classList.remove('lazy');
                        iframeObserver.unobserve(iframe);
                    }
                });
            });

            iframes.forEach(iframe => iframeObserver.observe(iframe));
        }
    }

    setupIntersectionObserver() {
        // Optimize animations with Intersection Observer
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        
        if ('IntersectionObserver' in window) {
            const animationObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            animatedElements.forEach(element => {
                animationObserver.observe(element);
            });
        }
    }

    setupImageOptimization() {
        // Add responsive images
        this.addResponsiveImages();
        
        // Add WebP support
        this.addWebPSupport();
        
        // Optimize existing images
        this.optimizeExistingImages();
    }

    addResponsiveImages() {
        const images = document.querySelectorAll('img[data-srcset]');
        
        images.forEach(img => {
            if (img.dataset.srcset) {
                img.srcset = img.dataset.srcset;
            }
            
            if (img.dataset.sizes) {
                img.sizes = img.dataset.sizes;
            }
        });
    }

    addWebPSupport() {
        const style = document.createElement('style');
        style.textContent = `
            .webp .hero-bg {
                background-image: url('assets/images/hero-bg.webp');
            }
            
            .no-webp .hero-bg {
                background-image: url('assets/images/hero-bg.jpg');
            }
        `;
        document.head.appendChild(style);

        // Check WebP support
        this.checkWebPSupport();
    }

    checkWebPSupport() {
        const webP = new Image();
        webP.onload = webP.onerror = function () {
            const isSupported = webP.height === 2;
            document.documentElement.classList.add(isSupported ? 'webp' : 'no-webp');
        };
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    }

    optimizeExistingImages() {
        const images = document.querySelectorAll('img:not([data-src])');
        
        images.forEach(img => {
            // Add loading="lazy" for images below the fold
            if (!this.isAboveTheFold(img)) {
                img.loading = 'lazy';
            }
            
            // Add decoding="async" for better performance
            img.decoding = 'async';
        });
    }

    isAboveTheFold(element) {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight;
    }

    setupFontLoading() {
        // Preload critical fonts
        this.preloadFonts();
        
        // Optimize font loading
        this.optimizeFontLoading();
    }

    preloadFonts() {
        const fontLinks = [
            'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
        ];

        fontLinks.forEach(href => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'style';
            link.href = href;
            document.head.appendChild(link);
        });
    }

    optimizeFontLoading() {
        // Add font-display: swap to Google Fonts
        const style = document.createElement('style');
        style.textContent = `
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
            
            /* Font loading optimization */
            .font-loading {
                font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            }
            
            .fonts-loaded {
                font-family: 'Inter', system-ui, sans-serif;
            }
        `;
        document.head.appendChild(style);

        // Check when fonts are loaded
        document.fonts.ready.then(() => {
            document.documentElement.classList.add('fonts-loaded');
        });
    }

    setupResourceHints() {
        // Add DNS prefetch for external domains
        const externalDomains = [
            'https://fonts.googleapis.com',
            'https://fonts.gstatic.com',
            'https://www.googletagmanager.com'
        ];

        externalDomains.forEach(domain => {
            const link = document.createElement('link');
            link.rel = 'dns-prefetch';
            link.href = domain;
            document.head.appendChild(link);
        });

        // Add preconnect for critical resources
        const criticalDomains = [
            'https://fonts.googleapis.com',
            'https://fonts.gstatic.com'
        ];

        criticalDomains.forEach(domain => {
            const link = document.createElement('link');
            link.rel = 'preconnect';
            link.href = domain;
            document.head.appendChild(link);
        });
    }

    setupServiceWorker() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                        console.log('SW registered: ', registration);
                    })
                    .catch(registrationError => {
                        console.log('SW registration failed: ', registrationError);
                    });
            });
        }
    }

    setupCaching() {
        // Add cache headers for static assets
        this.addCacheHeaders();
        
        // Implement browser caching strategy
        this.implementCachingStrategy();
    }

    addCacheHeaders() {
        // This would be handled by the server
        // For now, we'll add meta tags for cache control
        const meta = document.createElement('meta');
        meta.httpEquiv = 'Cache-Control';
        meta.content = 'public, max-age=31536000';
        document.head.appendChild(meta);
    }

    implementCachingStrategy() {
        // Cache API for offline support
        if ('caches' in window) {
            this.cacheCriticalResources();
        }
    }

    async cacheCriticalResources() {
        const criticalResources = [
            '/',
            '/styles.css',
            '/js/language-switcher.js',
            '/assets/logos/fos-icon-exklusiv.svg'
        ];

        try {
            const cache = await caches.open('fos-critical-v1');
            await cache.addAll(criticalResources);
        } catch (error) {
            console.log('Caching failed:', error);
        }
    }

    setupCriticalCSS() {
        // Inline critical CSS
        this.inlineCriticalCSS();
        
        // Defer non-critical CSS
        this.deferNonCriticalCSS();
    }

    inlineCriticalCSS() {
        // This would be done during build process
        // For now, we'll add critical styles inline
        const criticalStyles = `
            /* Critical CSS for above-the-fold content */
            .hero {
                background: var(--gradient-hero);
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .navbar {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                z-index: 1000;
                background: var(--glass);
                backdrop-filter: var(--glass-blur);
            }
        `;

        const style = document.createElement('style');
        style.textContent = criticalStyles;
        document.head.appendChild(style);
    }

    deferNonCriticalCSS() {
        // Load non-critical CSS asynchronously
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = 'styles.css';
        link.onload = () => {
            link.rel = 'stylesheet';
        };
        document.head.appendChild(link);
    }

    // Performance monitoring
    measurePerformance() {
        // Measure Core Web Vitals
        this.measureLCP();
        this.measureFID();
        this.measureCLS();
        
        // Custom performance metrics
        this.measureCustomMetrics();
    }

    measureLCP() {
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                console.log('LCP:', lastEntry.startTime);
            });
            observer.observe({ entryTypes: ['largest-contentful-paint'] });
        }
    }

    measureFID() {
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach(entry => {
                    console.log('FID:', entry.processingStart - entry.startTime);
                });
            });
            observer.observe({ entryTypes: ['first-input'] });
        }
    }

    measureCLS() {
        if ('PerformanceObserver' in window) {
            let clsValue = 0;
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach(entry => {
                    if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                    }
                });
                console.log('CLS:', clsValue);
            });
            observer.observe({ entryTypes: ['layout-shift'] });
        }
    }

    measureCustomMetrics() {
        // Measure time to interactive
        window.addEventListener('load', () => {
            setTimeout(() => {
                const tti = performance.now();
                console.log('Time to Interactive:', tti);
            }, 0);
        });
    }

    // Public methods
    optimizeImages() {
        this.setupImageOptimization();
    }

    preloadResource(url) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = url;
        document.head.appendChild(link);
    }

    // Utility methods
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Initialize performance optimizations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.fosPerformance = new FOSPerformance();
    
    // Measure performance after page load
    window.addEventListener('load', () => {
        setTimeout(() => {
            window.fosPerformance.measurePerformance();
        }, 1000);
    });
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { FOSPerformance };
} 