# FOS Website - Domain Integration Guide

## 🚀 Aktuelle Domain-Konfiguration

**Primäre Domain:** `https://fos-consulting.ch/`

### Bereits implementiert:
- ✅ Alle Meta-Tags verwenden korrekte Domain
- ✅ Canonical URLs konfiguriert
- ✅ XML-Sitemap mit allen URLs
- ✅ Robots.txt optimiert
- ✅ Structured Data implementiert
- ✅ .htaccess mit URL-Rewriting
- ✅ Performance-Optimierungen

## 🔧 DNS-Konfiguration (Hosting-Provider)

### A-Records:
```
fos-consulting.ch.     IN  A   [IHRE-SERVER-IP]
www.fos-consulting.ch. IN  A   [IHRE-SERVER-IP]
```

### CNAME-Records:
```
www.fos-consulting.ch. IN  CNAME   fos-consulting.ch.
```

### MX-Records (E-Mail):
```
fos-consulting.ch.     IN  MX  10  mail.fos-consulting.ch.
```

### TXT-Records:
```
fos-consulting.ch.     IN  TXT  "v=spf1 include:_spf.google.com ~all"
fos-consulting.ch.     IN  TXT  "google-site-verification=IHRE-VERIFICATION-ID"
```

## 🔒 SSL-Zertifikat

### Let's Encrypt (kostenlos):
```bash
# Certbot Installation
sudo apt-get install certbot python3-certbot-apache

# SSL-Zertifikat erstellen
sudo certbot --apache -d fos-consulting.ch -d www.fos-consulting.ch

# Auto-Renewal
sudo crontab -e
# Fügen Sie hinzu: 0 12 * * * /usr/bin/certbot renew --quiet
```

### Kommerzielles SSL:
- DigiCert, GlobalSign, oder Comodo
- Wildcard-Zertifikat für Subdomains

## 🌐 Subdomain-Konfiguration

### Empfohlene Subdomains:
```
api.fos-consulting.ch      # API-Endpoints
mail.fos-consulting.ch     # E-Mail-Server
blog.fos-consulting.ch     # Blog/News
admin.fos-consulting.ch    # Admin-Bereich
```

## 📧 E-Mail-Konfiguration

### Google Workspace Setup:
1. Domain bei Google Workspace verifizieren
2. MX-Records konfigurieren
3. SPF, DKIM, DMARC einrichten

### E-Mail-Adressen:
- info@fos-consulting.ch
- kontakt@fos-consulting.ch
- admin@fos-consulting.ch

## 🔍 SEO & Analytics

### Google Search Console:
1. Domain hinzufügen: `https://fos-consulting.ch/`
2. Sitemap einreichen: `https://fos-consulting.ch/sitemap.xml`
3. Google Analytics verknüpfen

### Google Analytics 4:
- Property-ID: GA_MEASUREMENT_ID (in analytics.js zu ersetzen)
- Enhanced E-commerce aktivieren
- Conversion-Tracking einrichten

## 🚀 Performance-Optimierung

### CDN-Konfiguration:
```javascript
// Cloudflare oder AWS CloudFront
const CDN_DOMAIN = 'cdn.fos-consulting.ch';
```

### Image-Optimierung:
```html
<!-- WebP mit Fallback -->
<picture>
    <source srcset="image.webp" type="image/webp">
    <img src="image.jpg" alt="Beschreibung">
</picture>
```

## 🔧 Deployment-Checkliste

### Vor dem Go-Live:
- [ ] DNS-Records konfiguriert
- [ ] SSL-Zertifikat installiert
- [ ] .htaccess aktiviert
- [ ] Google Analytics konfiguriert
- [ ] Sitemap bei Google Search Console eingereicht
- [ ] 404-Seite getestet
- [ ] Mobile-Responsiveness geprüft
- [ ] PageSpeed optimiert

### Monitoring:
- [ ] Uptime-Monitoring (UptimeRobot)
- [ ] Performance-Monitoring (Lighthouse CI)
- [ ] SEO-Monitoring (Google Search Console)
- [ ] Security-Monitoring (SSL Labs)

## 🛡️ Sicherheit

### Security Headers (bereits in .htaccess):
- X-XSS-Protection
- X-Content-Type-Options
- X-Frame-Options
- Content-Security-Policy
- Referrer-Policy

### Backup-Strategie:
```bash
# Automatisches Backup
0 2 * * * tar -czf /backups/fos-$(date +\%Y\%m\%d).tar.gz /var/www/fos-consulting.ch/
```

## 📱 Mobile & PWA

### Service Worker (bereits implementiert):
- Offline-Funktionalität
- Cache-Strategien
- Push-Notifications (optional)

### App-Manifest:
```json
{
  "name": "FOS Consulting",
  "short_name": "FOS",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#14213d",
  "background_color": "#ffffff"
}
```

## 🔄 Continuous Integration

### GitHub Actions Workflow:
```yaml
name: Deploy to Production
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Server
        run: |
          npm run build
          rsync -avz dist/ user@server:/var/www/fos-consulting.ch/
```

## 📊 Monitoring & Analytics

### Tools:
- **Uptime:** UptimeRobot, Pingdom
- **Performance:** Google PageSpeed Insights, GTmetrix
- **SEO:** Google Search Console, Screaming Frog
- **Analytics:** Google Analytics 4, Hotjar

### KPIs:
- Page Load Time: < 2 Sekunden
- Core Web Vitals: Grün
- Uptime: > 99.9%
- SEO-Score: > 90%

## 🆘 Support & Wartung

### Kontakte:
- **Hosting:** [IHRE-HOSTING-FIRMA]
- **Domain:** [IHRE-DOMAIN-REGISTRAR]
- **SSL:** Let's Encrypt / [SSL-PROVIDER]
- **Analytics:** Google Analytics Support

### Wartungsfenster:
- **Zeit:** Sonntags 02:00-04:00 Uhr
- **Benachrichtigung:** 24h vorher
- **Backup:** Vor jeder Wartung

---

**Letzte Aktualisierung:** Januar 2024
**Verantwortlich:** FOS – Focus on Solutions AG 