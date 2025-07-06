# FOS – Focus on Solutions AG Website

**Version 2.1.0** - Vollständig optimierte und mobile-ready Consulting-Website

## 🚀 **Übersicht**

Die offizielle Website der FOS – Focus on Solutions AG, einer führenden Schweizer Consulting-Firma für Strategieberatung, Coaching und Diagnostik. Die Website bietet eine moderne, responsive und barrierefreie Benutzererfahrung mit umfassenden SEO-Optimierungen.

## ✨ **Neue Features in Version 2.1**

### 📱 **Mobile-Optimierung & Responsivität**
- **Horizontales Scrollen behoben** auf allen Mobile-Geräten
- **Responsive Footer** mit korrekter CI-Farbe (#14213d)
- **Mobile-optimierte Formulare** und Newsletter-Anmeldung
- **Touch-freundliche Navigation** und Buttons
- **Optimierte Bildgrößen** für verschiedene Bildschirmgrößen

### 🌐 **Sprachumschaltung & Internationalisierung**
- **Persistente Sprachwahl** über localStorage
- **Vollständige Übersetzungen** für alle Inhalte
- **EDUQUA-Badge Übersetzungen** (DE/EN)
- **Footer-Texte übersetzt** und lokalisiert
- **Newsletter-Hinweise** in beiden Sprachen

### 🔧 **Technische Verbesserungen**
- **Universeller FAB-Button** auf allen Seiten
- **Kontrast-Optimierungen** für bessere Lesbarkeit
- **Broken Links behoben** in allen HTML-Dateien
- **Impressum mobile-responsive** gemacht
- **Performance-Optimierungen** implementiert

## ✨ **Features in Version 2.0**

### 🔧 **Performance & Optimierung**
- **Service Worker** für Offline-Funktionalität und Caching
- **Lazy Loading** für Bilder und Assets
- **Analytics Integration** mit Cookie-Consent
- **Performance Monitoring** mit Core Web Vitals
- **Asset-Optimierung** (Komprimierung, Minifizierung)

### ♿ **Barrierefreiheit (Accessibility)**
- **WCAG 2.1 AA** Konformität
- **Keyboard Navigation** für alle interaktiven Elemente
- **Screen Reader Support** mit ARIA-Labels
- **Focus Management** und Skip-Links
- **Reduced Motion** Support
- **High Contrast** Mode

### 🔍 **SEO & Suchmaschinenoptimierung**
- **XML Sitemap** mit hreflang-Attributen
- **Robots.txt** für optimiertes Crawling
- **Strukturierte Daten** (Schema.org)
- **Meta-Tags** Optimierung
- **Canonical URLs**

### 🛡️ **Sicherheit & Compliance**
- **DSGVO-konformes Cookie-Banner**
- **Content Security Policy (CSP)**
- **Security Headers** (.htaccess)
- **XSS Protection**
- **HTTPS Enforcement** (vorbereitet)

### 📱 **Responsive Design**
- **Mobile-First** Ansatz
- **Touch-Optimierung**
- **Progressive Web App** Features
- **Offline-Funktionalität**

### 🧪 **Testing & Qualitätssicherung**
- **Automatisierte Tests** (Jest, Cypress)
- **Accessibility Testing** (Pa11y)
- **Performance Testing** (Lighthouse)
- **SEO Validation**
- **Cross-Browser Testing**

## 🛠️ **Technologie-Stack**

### Frontend
- **HTML5** mit semantischer Struktur
- **CSS3** mit Tailwind CSS Framework
- **Vanilla JavaScript** (ES6+)
- **Progressive Web App** Features

### Build Tools
- **Tailwind CSS** für Styling
- **PostCSS** für CSS-Verarbeitung
- **Terser** für JavaScript-Minifizierung
- **ImageMin** für Bildoptimierung

### Testing & Quality
- **Jest** für Unit Tests
- **Cypress** für E2E Tests
- **Pa11y** für Accessibility Tests
- **Lighthouse** für Performance Tests

### Deployment & Monitoring
- **Apache** Server-Konfiguration
- **Service Worker** für Caching
- **Analytics** Integration
- **Error Tracking**

## 📦 **Installation & Setup**

### Voraussetzungen
- Node.js >= 18.0.0
- npm >= 9.0.0
- Git

### Installation
```bash
# Repository klonen
git clone https://github.com/fos-consulting/website.git
cd website

# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
```

### Build-Prozess
```bash
# Produktions-Build erstellen
npm run build

# Tests ausführen
npm run test

# Performance-Analyse
npm run test:performance

# Accessibility-Tests
npm run test:accessibility
```

## 🚀 **Deployment**

### Lokale Entwicklung
```bash
npm run dev          # Startet Live-Server auf Port 3000
npm run build        # Erstellt Produktions-Build
npm run serve        # Startet lokalen Server
```

### Produktions-Deployment
```bash
npm run deploy       # Vollständiger Deploy-Prozess
npm run deploy:upload # Upload zu Server
```

### Monitoring
```bash
npm run monitor      # Uptime & Performance Monitoring
npm run analyze      # Bundle & Performance Analyse
```

## 📁 **Projektstruktur**

```
fos-homepage/
├── index.html              # Startseite
├── about.html              # Über uns
├── services.html           # Leistungen
├── team.html              # Team
├── contact.html           # Kontakt
├── coaching.html          # Coaching
├── strategy.html          # Strategieberatung
├── diagnostics.html       # Diagnostik
├── special-formats.html   # Spezialformate
├── publications.html      # Publikationen
├── login.html            # Login
├── impressum.html        # Impressum
├── datenschutz.html      # Datenschutz
├── agb.html             # AGB
├── 404.html             # 404-Fehlerseite
├── offline.html         # Offline-Seite
├── styles.css           # Haupt-Stylesheet
├── package.json         # NPM-Konfiguration
├── tailwind.config.js   # Tailwind-Konfiguration
├── .htaccess           # Apache-Konfiguration
├── robots.txt          # Robots-Datei
├── sitemap.xml         # XML-Sitemap
├── sw.js              # Service Worker
├── js/                # JavaScript-Dateien
│   ├── language-switcher.js  # Sprachumschaltung
│   ├── contact-form.js       # Kontaktformular
│   ├── cookie-banner.js      # Cookie-Banner
│   ├── analytics.js          # Analytics
│   ├── accessibility.js      # Barrierefreiheit
│   ├── performance.js        # Performance
│   └── tests.js             # Test-Framework
├── assets/            # Assets
│   ├── logos/         # Logos
│   ├── icons/         # Icons
│   └── images/        # Bilder
└── src/              # Source-Dateien
    └── input.css     # Tailwind-Input
```

## 🧪 **Testing**

### Unit Tests
```bash
npm run test:unit      # Jest Unit Tests
```

### E2E Tests
```bash
npm run test:e2e       # Cypress E2E Tests
```

### Accessibility Tests
```bash
npm run test:accessibility  # Pa11y Tests
```

### Performance Tests
```bash
npm run test:performance    # Lighthouse Tests
```

### SEO Tests
```bash
npm run test:seo           # HTML & Sitemap Validation
```

## 🔧 **Konfiguration**

### Tailwind CSS
Die Tailwind-Konfiguration befindet sich in `tailwind.config.js` und enthält:
- Custom Farben (FOS Branding)
- Responsive Breakpoints
- Custom Komponenten
- Performance-Optimierungen

### Service Worker
Der Service Worker (`sw.js`) bietet:
- Offline-Funktionalität
- Asset-Caching
- Background Sync
- Push Notifications

### Analytics
Analytics-Integration mit:
- Google Analytics 4
- Custom Event Tracking
- Cookie-Consent Integration
- Performance Monitoring

## 📊 **Performance-Metriken**

### Core Web Vitals (Zielwerte)
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Lighthouse Scores (Zielwerte)
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

## 🔒 **Sicherheit**

### Implementierte Sicherheitsmaßnahmen
- Content Security Policy (CSP)
- XSS Protection Headers
- CSRF Protection
- Secure Cookie Settings
- HTTPS Enforcement (vorbereitet)

### DSGVO-Compliance
- Cookie-Consent Banner
- Datenschutzerklärung
- Opt-out Mechanismen
- Transparente Datenverarbeitung

## 🌐 **Browser-Support**

### Unterstützte Browser
- Chrome >= 90
- Firefox >= 88
- Safari >= 14
- Edge >= 90

### Progressive Enhancement
- Fallbacks für ältere Browser
- Graceful Degradation
- Feature Detection

## 📈 **Monitoring & Analytics**

### Implementierte Monitoring-Tools
- Google Analytics 4
- Custom Performance Tracking
- Error Tracking
- User Behavior Analytics

### Key Performance Indicators
- Page Load Times
- User Engagement
- Conversion Rates
- Error Rates

## 🤝 **Beitragen**

### Entwicklungsworkflow
1. Fork des Repositories
2. Feature-Branch erstellen
3. Änderungen implementieren
4. Tests ausführen
5. Pull Request erstellen

### Code-Qualität
- ESLint für JavaScript
- Stylelint für CSS
- Prettier für Formatierung
- Husky für Pre-commit Hooks

## 📝 **Changelog**

### Version 2.0.0 (Aktuell)
- ✨ Service Worker für Offline-Funktionalität
- ♿ Umfassende Accessibility-Features
- 🔍 Erweiterte SEO-Optimierungen
- 🛡️ Verbesserte Sicherheitsmaßnahmen
- 🧪 Automatisierte Test-Suite
- 📊 Performance-Monitoring
- 📱 PWA-Features

### Version 1.0.0
- 🎉 Initiale Website-Version
- 📱 Responsive Design
- 🌍 Mehrsprachigkeit
- 📝 Kontaktformular
- 🍪 Cookie-Banner

## 📞 **Support & Kontakt**

### Technischer Support
- **Email**: tech@fos-consulting.ch
- **Issues**: GitHub Issues
- **Dokumentation**: Diese README

### FOS Consulting
- **Website**: https://fos-consulting.ch
- **Email**: info@fos-consulting.ch
- **Telefon**: +41 XX XXX XX XX

## 📄 **Lizenz**

Dieses Projekt ist unter der MIT-Lizenz lizenziert. Siehe [LICENSE](LICENSE) für Details.

## 🙏 **Danksagungen**

- Tailwind CSS Team für das großartige Framework
- Google für Lighthouse und Performance-Tools
- Accessibility-Community für Best Practices
- Open Source Community für die verwendeten Tools

---

**Entwickelt mit ❤️ für FOS – Focus on Solutions AG** 