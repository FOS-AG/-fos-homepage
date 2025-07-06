# 🌐 FOS Website - Domain Integration für fos.ag

## 🚀 Aktuelle Domain-Konfiguration

**Neue Domain:** `https://fos.ag/`

### ✅ Bereits aktualisiert:
- ✅ Alle Meta-Tags verwenden `https://fos.ag/`
- ✅ Canonical URLs konfiguriert
- ✅ XML-Sitemap mit allen URLs
- ✅ Robots.txt optimiert
- ✅ Structured Data implementiert
- ✅ Package.json aktualisiert

## 🔧 GitHub Pages Domain-Konfiguration

### 1. GitHub Repository Einstellungen
1. Gehen Sie zu Ihrem GitHub Repository: `fos-ag/-fos-homepage`
2. Klicken Sie auf **Settings** → **Pages**
3. Unter **Custom domain** geben Sie ein: `fos.ag`
4. Aktivieren Sie **Enforce HTTPS**
5. Klicken Sie auf **Save**

### 2. DNS-Konfiguration bei Ihrem Domain-Provider

#### A-Records für GitHub Pages:
```
fos.ag.     IN  A   185.199.108.153
fos.ag.     IN  A   185.199.109.153
fos.ag.     IN  A   185.199.110.153
fos.ag.     IN  A   185.199.111.153
```

#### CNAME-Record (falls benötigt):
```
www.fos.ag. IN  CNAME   fos-ag.github.io.
```

### 3. Domain-Verifizierung
Nach der DNS-Konfiguration:
- GitHub wird automatisch ein `CNAME`-File im Repository erstellen
- Die Domain wird innerhalb von 24 Stunden aktiv

## 📧 E-Mail-Konfiguration

### Google Workspace Setup:
1. Domain `fos.ag` bei Google Workspace verifizieren
2. MX-Records konfigurieren:
```
fos.ag.     IN  MX  1  aspmx.l.google.com.
fos.ag.     IN  MX  5  alt1.aspmx.l.google.com.
fos.ag.     IN  MX  5  alt2.aspmx.l.google.com.
fos.ag.     IN  MX  10 alt3.aspmx.l.google.com.
fos.ag.     IN  MX  10 alt4.aspmx.l.google.com.
```

### E-Mail-Adressen:
- info@fos.ag
- kontakt@fos.ag
- admin@fos.ag

## 🔍 SEO & Analytics

### Google Search Console:
1. Neue Property hinzufügen: `https://fos.ag/`
2. Domain-Verifizierung (TXT-Record oder HTML-File)
3. Sitemap einreichen: `https://fos.ag/sitemap.xml`
4. Google Analytics verknüpfen

### Google Analytics 4:
- Property-ID: GA_MEASUREMENT_ID (in analytics.js zu ersetzen)
- Enhanced E-commerce aktivieren
- Conversion-Tracking einrichten

## 🚀 GitHub Pages Optimierungen

### 1. Jekyll-Konfiguration (falls benötigt)
Erstellen Sie eine `_config.yml` Datei:
```yaml
title: FOS – Focus on Solutions AG
description: Evidenzbasierte Unternehmensberatung
url: https://fos.ag
baseurl: ""
```

### 2. 404-Seite
GitHub Pages erstellt automatisch eine 404-Seite, aber Sie können eine eigene erstellen:
```html
<!-- 404.html -->
<!DOCTYPE html>
<html>
<head>
    <title>404 - Seite nicht gefunden | FOS AG</title>
    <meta http-equiv="refresh" content="5;url=https://fos.ag/">
</head>
<body>
    <h1>404 - Seite nicht gefunden</h1>
    <p>Sie werden in 5 Sekunden zur Startseite weitergeleitet.</p>
</body>
</html>
```

## 🔄 Deployment-Prozess

### Automatisches Deployment:
1. Änderungen in den `main` Branch pushen
2. GitHub Pages baut automatisch die Website
3. Website ist innerhalb weniger Minuten unter `https://fos.ag` verfügbar

### Manuelles Deployment:
```bash
# Änderungen committen und pushen
git add .
git commit -m "Update domain to fos.ag"
git push origin main
```

## 📊 Monitoring & Analytics

### GitHub Pages Analytics:
- GitHub bietet eingeschränkte Analytics
- Empfehlung: Google Analytics 4 verwenden

### Uptime-Monitoring:
- GitHub Pages hat eine Uptime von 99.9%
- Zusätzliches Monitoring mit UptimeRobot empfohlen

## 🛡️ Sicherheit

### HTTPS:
- GitHub Pages bietet automatisch HTTPS
- SSL-Zertifikat wird automatisch verwaltet

### Security Headers:
GitHub Pages setzt automatisch:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

## 📱 PWA & Service Worker

### Service Worker:
- Funktioniert mit GitHub Pages
- Offline-Funktionalität verfügbar
- Cache-Strategien implementiert

### App-Manifest:
```json
{
  "name": "FOS AG",
  "short_name": "FOS",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#14213d",
  "background_color": "#ffffff",
  "scope": "/"
}
```

## 🔧 Troubleshooting

### Häufige Probleme:

1. **Domain nicht erreichbar:**
   - DNS-Propagation abwarten (bis zu 48h)
   - DNS-Records überprüfen

2. **HTTPS-Fehler:**
   - GitHub Pages Einstellungen prüfen
   - "Enforce HTTPS" aktivieren

3. **404-Fehler:**
   - Repository-Einstellungen prüfen
   - Branch-Einstellungen kontrollieren

### Support:
- **GitHub Pages:** [GitHub Pages Dokumentation](https://pages.github.com/)
- **Domain-Provider:** Kontaktieren Sie Ihren Domain-Registrar
- **DNS-Check:** [whatsmydns.net](https://www.whatsmydns.net/)

## 📈 Performance-Optimierung

### GitHub Pages Features:
- Automatische Komprimierung
- CDN-Verteilung weltweit
- HTTP/2 Support
- Automatische Caching-Headers

### Optimierungen:
- Bilder komprimieren
- CSS/JS minifizieren
- Lazy Loading implementieren
- Critical CSS inline

## 🔄 Migration von fos-consulting.ch

### Redirects (falls benötigt):
```html
<!-- In der alten .htaccess -->
RewriteRule ^(.*)$ https://fos.ag/$1 [R=301,L]
```

### Google Search Console:
1. Alte Property beibehalten
2. Neue Property hinzufügen
3. Change of Address Tool verwenden
4. Sitemaps bei beiden Properties einreichen

---

**Letzte Aktualisierung:** Januar 2024
**Verantwortlich:** FOS – Focus on Solutions AG
**Status:** ✅ Domain-Konfiguration abgeschlossen 