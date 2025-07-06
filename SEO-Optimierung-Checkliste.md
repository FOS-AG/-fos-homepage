# 🚀 FOS Homepage - SEO-Optimierung Checkliste

## ✅ **Bereits implementiert:**
- [x] Meta-Tags (Title, Description, Keywords)
- [x] Open Graph Tags für Social Media
- [x] Twitter Cards
- [x] Canonical URLs
- [x] XML Sitemap
- [x] Robots.txt
- [x] Structured Data (Schema.org)
- [x] Responsive Design
- [x] Fast Loading (CSS/JS optimiert)

## 🚨 **KRITISCH - Sofort zu beheben:**

### 1. **Google Search Console einrichten**
```bash
# 1. Gehen Sie zu: https://search.google.com/search-console
# 2. Domain hinzufügen: fos.ag
# 3. Verifizierung über DNS-Record oder HTML-Tag
# 4. Sitemap einreichen: https://fos.ag/sitemap.xml
```

### 2. **Google Analytics 4 konfigurieren**
```bash
# 1. Gehen Sie zu: https://analytics.google.com/
# 2. Neues Property erstellen für fos.ag
# 3. Measurement ID kopieren (G-XXXXXXXXXX)
# 4. In js/analytics.js ersetzen:
#    GA_MEASUREMENT_ID → G-XXXXXXXXXX
```

### 3. **Google Site Verification**
```html
<!-- In index.html bereits vorbereitet - ID einsetzen: -->
<meta name="google-site-verification" content="IHRE-VERIFICATION-ID" />
```

## 🔧 **Technische SEO-Optimierungen:**

### 4. **PageSpeed optimieren**
```bash
# Testen Sie Ihre Seite:
# https://pagespeed.web.dev/
# Ziel: >90 Punkte
```

### 5. **Core Web Vitals**
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms  
- [ ] CLS (Cumulative Layout Shift) < 0.1

### 6. **Mobile-First Indexing**
- [ ] Mobile-Responsive Design ✓
- [ ] Touch-friendly Buttons ✓
- [ ] Readable Font Sizes ✓

## 📝 **Content-Optimierung:**

### 7. **Keyword-Strategie**
**Primäre Keywords:**
- "Unternehmensberatung Zürich"
- "Executive Coaching Schweiz"
- "Strategieberatung"
- "Change Management"
- "Führungskräfteentwicklung"

**Sekundäre Keywords:**
- "FOS Consulting"
- "Focus on Solutions"
- "Evidenzbasierte Beratung"
- "Organisationspsychologie"

### 8. **Content-Struktur**
- [ ] H1-Tag pro Seite (nur einer!)
- [ ] H2-H6 Hierarchie
- [ ] Alt-Tags für alle Bilder
- [ ] Interne Verlinkung

### 9. **Local SEO**
- [ ] Google My Business erstellen
- [ ] NAP-Konsistenz (Name, Address, Phone)
- [ ] Lokale Keywords integrieren

## 🌐 **Domain & Hosting:**

### 10. **SSL-Zertifikat**
```bash
# Überprüfen Sie: https://www.ssllabs.com/ssltest/
# Ziel: A+ Rating
```

### 11. **DNS-Konfiguration**
```bash
# A-Records:
fos.ag.     IN  A   [IHRE-SERVER-IP]
www.fos.ag. IN  A   [IHRE-SERVER-IP]

# CNAME:
www.fos.ag. IN  CNAME   fos.ag.
```

### 12. **301-Weiterleitung**
```apache
# .htaccess - www zu non-www:
RewriteEngine On
RewriteCond %{HTTP_HOST} ^www\.fos\.ag [NC]
RewriteRule ^(.*)$ https://fos.ag/$1 [L,R=301]
```

## 📊 **Monitoring & Tracking:**

### 13. **Google Search Console**
- [ ] Indexierungsstatus überwachen
- [ ] Crawl-Fehler beheben
- [ ] Performance-Berichte analysieren
- [ ] Mobile Usability prüfen

### 14. **Google Analytics 4**
- [ ] Conversion-Tracking einrichten
- [ ] E-commerce Tracking (falls relevant)
- [ ] Custom Events definieren
- [ ] Zielgruppen erstellen

### 15. **Externe Tools**
- [ ] Uptime-Monitoring (UptimeRobot)
- [ ] Performance-Monitoring (GTmetrix)
- [ ] SEO-Monitoring (Screaming Frog)

## 🔍 **On-Page SEO Details:**

### 16. **Meta-Tags pro Seite**
```html
<!-- Beispiel für coaching.html -->
<title>Executive Coaching Zürich | FOS Consulting</title>
<meta name="description" content="Professionelles Executive Coaching in Zürich. Individuelle Führungskräfteentwicklung mit evidenzbasierter Methodik. Jetzt Beratung anfragen.">
<meta name="keywords" content="Executive Coaching Zürich, Führungskräfteentwicklung, Leadership Coaching Schweiz">
```

### 17. **Structured Data erweitern**
```json
{
  "@type": "Service",
  "name": "Executive Coaching",
  "provider": {
    "@type": "Organization",
    "name": "FOS Consulting"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Switzerland"
  }
}
```

### 18. **Bild-Optimierung**
- [ ] WebP-Format verwenden
- [ ] Lazy Loading implementieren
- [ ] Komprimierung optimieren
- [ ] Alt-Tags mit Keywords

## 📈 **Off-Page SEO:**

### 19. **Backlink-Strategie**
- [ ] LinkedIn Company Page
- [ ] Xing Unternehmensprofil
- [ ] Branchenverzeichnisse
- [ ] Gastartikel auf relevanten Blogs

### 20. **Social Media**
- [ ] LinkedIn Posts mit Website-Links
- [ ] Xing Updates
- [ ] Twitter/X Präsenz
- [ ] YouTube Channel (falls Videos vorhanden)

## 🎯 **Prioritätenliste:**

### **Woche 1 (KRITISCH):**
1. Google Search Console einrichten
2. Google Analytics 4 konfigurieren
3. Google Site Verification
4. Sitemap bei Google einreichen

### **Woche 2:**
1. PageSpeed optimieren
2. Core Web Vitals verbessern
3. Google My Business erstellen
4. Lokale SEO optimieren

### **Woche 3:**
1. Content mit Keywords optimieren
2. Interne Verlinkung verbessern
3. Alt-Tags für Bilder
4. Monitoring einrichten

### **Woche 4:**
1. Backlink-Strategie starten
2. Social Media Präsenz aufbauen
3. Conversion-Tracking
4. Performance-Analyse

## 📞 **Nächste Schritte:**

1. **Sofort:** Google Search Console einrichten
2. **Heute:** Google Analytics 4 Property erstellen
3. **Diese Woche:** PageSpeed testen und optimieren
4. **Nächste Woche:** Content-Strategie entwickeln

## 🔗 **Nützliche Tools:**
- **SEO-Test:** https://www.seoreviewtools.com/
- **PageSpeed:** https://pagespeed.web.dev/
- **Mobile Test:** https://search.google.com/test/mobile-friendly
- **Structured Data Test:** https://search.google.com/test/rich-results
- **Core Web Vitals:** https://web.dev/measure/

---

**Wichtig:** SEO braucht Zeit! Erwarten Sie erste Ergebnisse nach 4-8 Wochen. 