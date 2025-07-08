# 🔧 Technische SEO-Optimierungen für FOS AG

## 🚨 **KRITISCHE TECHNISCHE PROBLEME**

### 1. **Google Site Verification** ⭐⭐⭐⭐⭐
**Problem:** Verification-ID ist nicht eingesetzt
**Lösung:** In `index.html` Zeile 30 aktualisieren

```html
<!-- Aktuell: -->
<meta name="google-site-verification" content="IHRE-GOOGLE-VERIFICATION-ID" />

<!-- Ersetzen Sie mit Ihrer echten ID aus der Search Console -->
<meta name="google-site-verification" content="abc123def456..." />
```

### 2. **PageSpeed Optimierung** ⭐⭐⭐⭐⭐
**Ziel:** >90 Punkte bei PageSpeed Insights

#### 2.1 Bilder optimieren
```bash
# WebP-Format verwenden
# Aktuelle Bilder komprimieren
# Lazy Loading implementieren
```

#### 2.2 CSS/JS minifizieren
```bash
# CSS minifizieren
# JavaScript minifizieren
# Unnötige Code entfernen
```

#### 2.3 Caching aktivieren
```apache
# .htaccess hinzufügen:
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType image/png "access plus 1 month"
    ExpiresByType image/jpg "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 month"
    ExpiresByType image/gif "access plus 1 month"
    ExpiresByType image/svg+xml "access plus 1 month"
</IfModule>
```

### 3. **Core Web Vitals** ⭐⭐⭐⭐
**Ziele:**
- LCP (Largest Contentful Paint) < 2.5s
- FID (First Input Delay) < 100ms
- CLS (Cumulative Layout Shift) < 0.1

#### 3.1 LCP optimieren
```html
<!-- Kritische CSS inline einbinden -->
<style>
/* Wichtigste Styles hier */
</style>

<!-- Bilder mit width/height Attributen -->
<img src="logo.png" width="200" height="100" alt="FOS AG Logo">
```

#### 3.2 FID optimieren
```javascript
// JavaScript asynchron laden
<script async src="js/analytics.js"></script>
<script defer src="js/contact-form.js"></script>
```

#### 3.3 CLS vermeiden
```css
/* Platzhalter für Bilder */
.image-placeholder {
    aspect-ratio: 16/9;
    background: #f0f0f0;
}
```

## 📱 **MOBILE OPTIMIERUNG**

### 4. **Mobile-First Design** ⭐⭐⭐⭐
**Status:** ✅ Bereits implementiert
**Überprüfung:**
1. https://search.google.com/test/mobile-friendly
2. URL eingeben: `https://fos.ag`
3. Probleme beheben

### 5. **Touch-Targets** ⭐⭐⭐
```css
/* Buttons mindestens 44px hoch */
.btn {
    min-height: 44px;
    min-width: 44px;
    padding: 12px 24px;
}
```

### 6. **Viewport Meta Tag** ⭐⭐⭐
```html
<!-- Bereits korrekt in index.html -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## 🔍 **STRUKTURIERTE DATEN**

### 7. **Schema.org erweitern** ⭐⭐⭐⭐
**Status:** ✅ Bereits implementiert
**Erweiterungen:**

#### 7.1 FAQ Schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was ist Executive Coaching?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Executive Coaching ist eine individuelle Begleitung von Führungskräften..."
      }
    }
  ]
}
```

#### 7.2 Service Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Executive Coaching",
  "provider": {
    "@type": "Organization",
    "name": "FOS AG"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Switzerland"
  },
  "serviceType": "Leadership Development"
}
```

## 🌐 **DOMAIN & HOSTING**

### 8. **SSL-Zertifikat** ⭐⭐⭐⭐⭐
**Überprüfung:** https://www.ssllabs.com/ssltest/
**Ziel:** A+ Rating

### 9. **DNS-Konfiguration** ⭐⭐⭐⭐
```bash
# A-Records prüfen:
fos.ag.     IN  A   [IHRE-SERVER-IP]
www.fos.ag. IN  A   [IHRE-SERVER-IP]

# CNAME für www:
www.fos.ag. IN  CNAME   fos.ag.
```

### 10. **301-Weiterleitung** ⭐⭐⭐⭐
```apache
# .htaccess - www zu non-www:
RewriteEngine On
RewriteCond %{HTTP_HOST} ^www\.fos\.ag [NC]
RewriteRule ^(.*)$ https://fos.ag/$1 [L,R=301]

# HTTP zu HTTPS:
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## 📊 **ANALYTICS & TRACKING**

### 11. **Google Analytics 4** ⭐⭐⭐⭐
**Status:** ✅ Bereits konfiguriert
**Erweiterungen:**

#### 11.1 Conversion Tracking
```javascript
// Formular-Submission Tracking
gtag('event', 'form_submit', {
    'form_id': 'contact_form',
    'form_name': 'Kontaktformular'
});

// Button-Click Tracking
gtag('event', 'button_click', {
    'button_text': 'Kostenloses Erstgespräch',
    'button_location': 'hero_section'
});
```

#### 11.2 Custom Events
```javascript
// Scroll-Tracking
gtag('event', 'scroll', {
    'scroll_depth': '75%',
    'page': window.location.pathname
});

// Time-on-Page Tracking
gtag('event', 'engagement', {
    'time_on_page': timeSpent,
    'page': window.location.pathname
});
```

### 12. **Search Console Monitoring** ⭐⭐⭐⭐⭐
**Regelmäßige Überprüfungen:**
- Indexierungsstatus
- Crawl-Fehler
- Mobile Usability
- Core Web Vitals
- Performance-Berichte

## 🎯 **IMPLEMENTIERUNGSPLAN**

### **Woche 1: Kritische Fixes**
1. Google Site Verification (5 Min)
2. PageSpeed testen (10 Min)
3. SSL-Zertifikat prüfen (5 Min)
4. DNS-Konfiguration überprüfen (10 Min)

### **Woche 2: Performance**
1. Bilder optimieren (30 Min)
2. CSS/JS minifizieren (30 Min)
3. Caching aktivieren (15 Min)
4. Core Web Vitals messen (10 Min)

### **Woche 3: Erweiterungen**
1. Schema.org erweitern (30 Min)
2. Analytics Events hinzufügen (30 Min)
3. Mobile Optimierung (20 Min)
4. Monitoring einrichten (15 Min)

## 📈 **ERWARTETE VERBESSERUNGEN**

### PageSpeed:
- **Vorher:** ~70-80 Punkte
- **Nachher:** >90 Punkte

### Core Web Vitals:
- **LCP:** < 2.5s
- **FID:** < 100ms
- **CLS:** < 0.1

### SEO-Ranking:
- **Indexierung:** 1-2 Wochen
- **Erste Rankings:** 4-8 Wochen
- **Stabile Positionen:** 3-6 Monate

## 🆘 **PROBLEM-LÖSUNGEN**

### PageSpeed zu langsam:
1. Bilder komprimieren
2. CSS/JS minifizieren
3. Caching aktivieren
4. CDN verwenden

### Core Web Vitals Probleme:
1. LCP: Kritische Ressourcen optimieren
2. FID: JavaScript optimieren
3. CLS: Layout-Shifts vermeiden

### Indexierungsprobleme:
1. Sitemap erneut einreichen
2. URL-Prüfung durchführen
3. Robots.txt überprüfen
4. DNS-Einstellungen kontrollieren 