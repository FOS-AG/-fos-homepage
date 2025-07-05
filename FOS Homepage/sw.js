// FOS Service Worker
const CACHE_NAME = 'fos-cache-v1';
const STATIC_CACHE = 'fos-static-v1';
const DYNAMIC_CACHE = 'fos-dynamic-v1';

// Critical resources to cache immediately
const CRITICAL_RESOURCES = [
    '/',
    '/index.html',
    '/styles.css',
    '/js/language-switcher.js',
    '/js/contact-form.js',
    '/js/cookie-banner.js',
    '/assets/logos/fos-icon-exklusiv.svg',
    '/assets/logos/fos-logo-big-o-consulting-blue.svg'
];

// Static assets to cache
const STATIC_RESOURCES = [
    '/about.html',
    '/services.html',
    '/team.html',
    '/contact.html',
    '/coaching.html',
    '/strategy.html',
    '/diagnostics.html',
    '/special-formats.html',
    '/publications.html',
    '/impressum.html',
    '/datenschutz.html',
    '/agb.html',
    '/login.html',
    '/js/analytics.js',
    '/js/accessibility.js',
    '/js/performance.js'
];

// Install event - cache critical resources
self.addEventListener('install', event => {
    console.log('Service Worker installing...');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Caching critical resources');
                return cache.addAll(CRITICAL_RESOURCES);
            })
            .then(() => {
                console.log('Service Worker installed');
                return self.skipWaiting();
            })
            .catch(error => {
                console.error('Service Worker install failed:', error);
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    console.log('Service Worker activating...');
    
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheName !== CACHE_NAME && 
                            cacheName !== STATIC_CACHE && 
                            cacheName !== DYNAMIC_CACHE) {
                            console.log('Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                console.log('Service Worker activated');
                return self.clients.claim();
            })
    );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip non-GET requests
    if (request.method !== 'GET') {
        return;
    }

    // Skip external requests
    if (url.origin !== self.location.origin) {
        return;
    }

    // Handle different types of requests
    if (isHTMLRequest(request)) {
        event.respondWith(handleHTMLRequest(request));
    } else if (isCSSRequest(request)) {
        event.respondWith(handleCSSRequest(request));
    } else if (isJSRequest(request)) {
        event.respondWith(handleJSRequest(request));
    } else if (isImageRequest(request)) {
        event.respondWith(handleImageRequest(request));
    } else {
        event.respondWith(handleOtherRequest(request));
    }
});

// Handle HTML requests
async function handleHTMLRequest(request) {
    try {
        // Try network first
        const networkResponse = await fetch(request);
        
        if (networkResponse.ok) {
            // Cache the response
            const cache = await caches.open(DYNAMIC_CACHE);
            cache.put(request, networkResponse.clone());
            return networkResponse;
        }
    } catch (error) {
        console.log('Network failed for HTML:', error);
    }

    // Fallback to cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
        return cachedResponse;
    }

    // Fallback to offline page
    return caches.match('/offline.html');
}

// Handle CSS requests
async function handleCSSRequest(request) {
    // Check cache first
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
        return cachedResponse;
    }

    try {
        // Try network
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open(STATIC_CACHE);
            cache.put(request, networkResponse.clone());
            return networkResponse;
        }
    } catch (error) {
        console.log('Network failed for CSS:', error);
    }

    return new Response('/* CSS not available */', {
        headers: { 'Content-Type': 'text/css' }
    });
}

// Handle JS requests
async function handleJSRequest(request) {
    // Check cache first
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
        return cachedResponse;
    }

    try {
        // Try network
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open(STATIC_CACHE);
            cache.put(request, networkResponse.clone());
            return networkResponse;
        }
    } catch (error) {
        console.log('Network failed for JS:', error);
    }

    return new Response('// JS not available', {
        headers: { 'Content-Type': 'application/javascript' }
    });
}

// Handle image requests
async function handleImageRequest(request) {
    // Check cache first
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
        return cachedResponse;
    }

    try {
        // Try network
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open(DYNAMIC_CACHE);
            cache.put(request, networkResponse.clone());
            return networkResponse;
        }
    } catch (error) {
        console.log('Network failed for image:', error);
    }

    // Return a placeholder image or empty response
    return new Response('', {
        status: 404,
        statusText: 'Image not found'
    });
}

// Handle other requests
async function handleOtherRequest(request) {
    try {
        // Try network first
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open(DYNAMIC_CACHE);
            cache.put(request, networkResponse.clone());
            return networkResponse;
        }
    } catch (error) {
        console.log('Network failed for other request:', error);
    }

    // Check cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
        return cachedResponse;
    }

    return new Response('Resource not available', {
        status: 404,
        statusText: 'Not Found'
    });
}

// Helper functions
function isHTMLRequest(request) {
    return request.headers.get('accept').includes('text/html');
}

function isCSSRequest(request) {
    return request.url.endsWith('.css') || 
           request.headers.get('accept').includes('text/css');
}

function isJSRequest(request) {
    return request.url.endsWith('.js') || 
           request.headers.get('accept').includes('application/javascript');
}

function isImageRequest(request) {
    return request.url.match(/\.(jpg|jpeg|png|gif|svg|webp)$/i) ||
           request.headers.get('accept').includes('image/');
}

// Background sync for offline form submissions
self.addEventListener('sync', event => {
    if (event.tag === 'background-sync') {
        event.waitUntil(doBackgroundSync());
    }
});

async function doBackgroundSync() {
    try {
        // Get stored form data
        const formData = await getStoredFormData();
        
        if (formData) {
            // Send form data to server
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Clear stored form data
                await clearStoredFormData();
                console.log('Background sync successful');
            }
        }
    } catch (error) {
        console.error('Background sync failed:', error);
    }
}

// Store form data for offline submission
async function storeFormData(formData) {
    const cache = await caches.open(DYNAMIC_CACHE);
    await cache.put('/offline-form-data', new Response(JSON.stringify(formData)));
}

// Get stored form data
async function getStoredFormData() {
    const cache = await caches.open(DYNAMIC_CACHE);
    const response = await cache.match('/offline-form-data');
    
    if (response) {
        return response.json();
    }
    
    return null;
}

// Clear stored form data
async function clearStoredFormData() {
    const cache = await caches.open(DYNAMIC_CACHE);
    await cache.delete('/offline-form-data');
}

// Push notifications (if needed)
self.addEventListener('push', event => {
    const options = {
        body: event.data ? event.data.text() : 'New message from FOS',
        icon: '/assets/logos/fos-icon-exklusiv.svg',
        badge: '/assets/logos/fos-icon-exklusiv.svg',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'explore',
                title: 'View',
                icon: '/assets/logos/fos-icon-exklusiv.svg'
            },
            {
                action: 'close',
                title: 'Close',
                icon: '/assets/logos/fos-icon-exklusiv.svg'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('FOS - Focus on Solutions', options)
    );
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
    event.notification.close();

    if (event.action === 'explore') {
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});

// Message handling
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'STORE_FORM_DATA') {
        event.waitUntil(storeFormData(event.data.formData));
    }
}); 