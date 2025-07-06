# FOS – Focus on Solutions AG | Corporate Identity Leitfaden

## 🎨 Farbpalette

### Primärfarben
- **Primary Blue:** `#14213d` (Dunkelblau für Hauptelemente)
- **Primary Gold:** `#C7A15A` (Gold für Akzente und CTAs)
- **Secondary Gold:** `#b8944a` (Dunkleres Gold für Hover-Effekte)

### Sekundärfarben
- **Light Blue:** `#1a365d` (Helleres Blau für Gradients)
- **White:** `#ffffff` (Reinweiß)
- **Light Gray:** `#f8f9fa` (Heller Hintergrund)
- **Text Gray:** `#4a5568` (Haupttext)
- **Dark Gray:** `#2d3748` (Sekundärtext)

### Transparenz
- **Overlay:** `rgba(255,255,255,0.1)` (Glaseffekte)
- **Border:** `rgba(199,161,90,0.2)` (Gold-Borders)

## 📝 Typografie

### Schriftart
- **Primary Font:** Inter (Google Fonts)
- **Weights:** 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold)

### Schriftgrößen
- **Hero Title:** 3.5rem (56px) - ExtraBold
- **Section Title:** 2.5rem (40px) - Bold
- **Card Title:** 1.5rem (24px) - SemiBold
- **Body Text:** 1rem (16px) - Regular
- **Small Text:** 0.9rem (14px) - Regular

### Zeilenabstand
- **Tight:** 1.2 (Überschriften)
- **Normal:** 1.6 (Body Text)
- **Loose:** 1.7 (Testimonials)

## 🧩 Komponenten

### Buttons
```css
/* Primary Button */
.cta-btn {
  background: linear-gradient(135deg, #C7A15A, #b8944a);
  color: white;
  padding: 1rem 2rem;
  border-radius: 3rem;
  font-weight: 700;
  box-shadow: 0 4px 16px rgba(199,161,90,0.3);
  transition: all 0.3s ease;
}

/* Secondary Button */
.secondary-btn {
  background: transparent;
  color: #C7A15A;
  border: 2px solid #C7A15A;
  padding: 0.875rem 1.75rem;
  border-radius: 3rem;
  font-weight: 600;
  transition: all 0.3s ease;
}
```

### Cards
```css
/* Feature Card */
.feature-card {
  background: white;
  padding: 2.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.08);
  border: 1px solid rgba(199,161,90,0.1);
  transition: all 0.3s ease;
}

/* Testimonial Card */
.testimonial-card {
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  padding: 2.5rem;
  border-radius: 1.5rem;
  border: 1px solid rgba(199,161,90,0.2);
}
```

### Navigation
```css
/* Navbar */
.navbar {
  background: rgba(20, 33, 61, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(199,161,90,0.2);
}

/* Nav Links */
.nav-links a {
  color: rgba(255,255,255,0.9);
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: #C7A15A;
}
```

## 🎯 Layout & Spacing

### Container
- **Max Width:** 1200px
- **Padding:** 2rem (Mobile), 4rem (Desktop)
- **Margin:** 0 auto (Zentriert)

### Grid System
```css
/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

/* Testimonials Grid */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}
```

### Spacing Scale
- **XS:** 0.5rem (8px)
- **S:** 1rem (16px)
- **M:** 1.5rem (24px)
- **L:** 2rem (32px)
- **XL:** 3rem (48px)
- **XXL:** 4rem (64px)

## 🌟 Effekte & Animationen

### Gradients
```css
/* Hero Background */
.hero {
  background: linear-gradient(135deg, #14213d 0%, #1a365d 100%);
}

/* Gold Gradient */
.gold-gradient {
  background: linear-gradient(135deg, #C7A15A, #b8944a);
}
```

### Transitions
- **Standard:** `0.3s ease`
- **Fast:** `0.2s ease`
- **Slow:** `0.5s ease`

### Hover Effects
```css
/* Card Hover */
.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.12);
}

/* Button Hover */
.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(199,161,90,0.4);
}
```

## 📱 Responsive Design

### Breakpoints
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

### Mobile-First Prinzip
```css
/* Base (Mobile) */
.feature-card {
  padding: 1.5rem;
}

/* Tablet */
@media (min-width: 768px) {
  .feature-card {
    padding: 2rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .feature-card {
    padding: 2.5rem;
  }
}
```

## 🎨 Logo & Assets

### Logo-Varianten
- **Primary:** `fos-logo-big-o-consulting-blue.svg`
- **White:** `fos-logo-consulting.svg`
- **Icon:** `fos-icon-exklusiv.svg`

### Logo-Größen
- **Navbar:** 48px height
- **Footer:** 90px height
- **Hero:** 120px height

### Kundenlogos
- **Height:** 56px (Desktop), 44px (Mobile)
- **Filter:** Grayscale mit Hover-Effekt
- **Animation:** Endlos-Scroll (32s)

## 🔧 Technische Spezifikationen

### Performance
- **Images:** WebP/AVIF mit Fallback
- **Fonts:** Preload kritische Schriftarten
- **CSS:** Minified für Production
- **JS:** Modular und lazy-loaded

### Accessibility
- **Contrast Ratio:** Mindestens 4.5:1
- **Focus States:** Sichtbare Focus-Indikatoren
- **Screen Reader:** ARIA-Labels und semantisches HTML
- **Keyboard Navigation:** Vollständig navigierbar

### SEO
- **Meta Tags:** Vollständige Open Graph und Twitter Cards
- **Structured Data:** Schema.org Markup
- **Canonical URLs:** Korrekte Canonical-Tags
- **Sitemap:** XML Sitemap für alle Seiten

## 📋 Do's & Don'ts

### ✅ Do's
- Verwende die definierte Farbpalette konsistent
- Halte Abstände und Proportionen ein
- Teste auf verschiedenen Bildschirmgrößen
- Verwende semantisches HTML
- Optimiere für Performance

### ❌ Don'ts
- Verwende nicht die Markenfarben für andere Zwecke
- Ignoriere nicht die Mobile-First-Ansatz
- Verwende nicht zu viele verschiedene Schriftgrößen
- Vernachlässige nicht die Accessibility
- Verwende nicht Inline-Styles

## 🚀 Deployment Checklist

### Pre-Deployment
- [ ] Alle Bilder optimiert
- [ ] CSS/JS minified
- [ ] Meta-Tags geprüft
- [ ] Links getestet
- [ ] Mobile-Ansicht geprüft

### Post-Deployment
- [ ] Performance-Test (Lighthouse)
- [ ] Cross-Browser-Test
- [ ] Accessibility-Test
- [ ] SEO-Test
- [ ] PWA-Funktionalität geprüft

---

**Version:** 1.0  
**Letzte Aktualisierung:** Januar 2025  
**Verantwortlich:** FOS Design Team 