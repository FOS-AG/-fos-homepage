// FAB (Floating Action Button) Kontaktmenü für FOS Website
// Universelle Implementierung für alle Seiten

class FabMenu {
    constructor() {
        this.fabContainer = null;
        this.fabMainBtn = null;
        this.init();
    }

    init() {
        // Warte bis DOM geladen ist
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupFab());
        } else {
            this.setupFab();
        }
    }

    setupFab() {
        this.fabContainer = document.getElementById('fabContainer');
        this.fabMainBtn = document.getElementById('fabMainBtn');

        if (!this.fabContainer || !this.fabMainBtn) {
            console.warn('FAB Container oder Button nicht gefunden');
            return;
        }

        this.setupEventListeners();
    }

    setupEventListeners() {
        // Close FAB menu when clicking outside
        document.addEventListener('click', (event) => {
            if (!this.fabContainer.contains(event.target)) {
                this.closeFab();
            }
        });

        // Close FAB menu on escape key
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                this.closeFab();
            }
        });
    }

    toggleFab() {
        if (!this.fabContainer) return;
        
        this.fabContainer.classList.toggle('open');
        const isOpen = this.fabContainer.classList.contains('open');
        if (this.fabMainBtn) {
            this.fabMainBtn.setAttribute('aria-expanded', isOpen);
        }
    }

    closeFab() {
        if (!this.fabContainer) return;
        this.fabContainer.classList.remove('open');
        if (this.fabMainBtn) {
            this.fabMainBtn.setAttribute('aria-expanded', 'false');
        }
    }

    openWhatsApp() {
        const message = encodeURIComponent('Hallo FOS Team, ich interessiere mich für Ihre Beratungsleistungen.');
        window.open(`https://wa.me/41783007446?text=${message}`, '_blank');
        this.closeFab();
    }

    openEmail() {
        window.open('mailto:info@fos.ag?subject=Anfrage%20Beratungsleistungen', '_blank');
        this.closeFab();
    }

    openTelegram() {
        window.open('https://t.me/fos_ag', '_blank');
        this.closeFab();
    }
}

// Globale Funktionen für onclick-Attribute
function toggleFabMenu() {
    if (window.fabMenu) {
        window.fabMenu.toggleFab();
    }
}

function openWhatsApp() {
    if (window.fabMenu) {
        window.fabMenu.openWhatsApp();
    }
}

function openEmail() {
    if (window.fabMenu) {
        window.fabMenu.openEmail();
    }
}

function openTelegram() {
    if (window.fabMenu) {
        window.fabMenu.openTelegram();
    }
}

// Initialisiere FAB Menu
document.addEventListener('DOMContentLoaded', function() {
    window.fabMenu = new FabMenu();
});

// Export für Module-System
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FabMenu;
} 