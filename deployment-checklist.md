# 🚀 FOS Website - Deployment Checkliste

## 📋 Vor dem Deployment

### ✅ Domain & DNS
- [ ] Domain `fos-consulting.ch` registriert
- [ ] DNS-A-Records konfiguriert
- [ ] CNAME für www-Subdomain eingerichtet
- [ ] MX-Records für E-Mail konfiguriert
- [ ] TXT-Records für SPF/DKIM eingerichtet

### ✅ Hosting & Server
- [ ] Webhosting-Paket aktiviert
- [ ] Server-IP-Adresse erhalten
- [ ] FTP/SSH-Zugang konfiguriert
- [ ] Apache/Nginx installiert
- [ ] PHP-Version kompatibel (falls benötigt)

### ✅ SSL-Zertifikat
- [ ] Let's Encrypt Zertifikat installiert
- [ ] Auto-Renewal konfiguriert
- [ ] HTTPS-Forcierung aktiviert
- [ ] SSL-Test bestanden (SSL Labs)

### ✅ Dateien vorbereitet
- [ ] Alle HTML-Dateien optimiert
- [ ] CSS/JS minifiziert
- [ ] Bilder komprimiert
- [ ] Favicon erstellt
- [ ] robots.txt konfiguriert
- [ ] sitemap.xml generiert

## 🔧 Deployment-Schritte

### 1. Dateien hochladen
```bash
# Via FTP/SFTP
ftp fos-consulting.ch
# Alle Dateien in /public_html/ hochladen

# Oder via rsync
rsync -avz ./ user@fos-consulting.ch:/var/www/html/
```

### 2. Berechtigungen setzen
```bash
chmod 644 *.html *.css *.js
chmod 755 assets/ js/
chmod 600 .htaccess
```

### 3. .htaccess aktivieren
```apache
# HTTPS-Forcierung aktivieren
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### 4. Testen
- [ ] Homepage lädt korrekt
- [ ] Alle Unterseiten funktionieren
- [ ] Bilder werden angezeigt
- [ ] CSS/JS lädt korrekt
- [ ] Kontaktformular funktioniert
- [ ] 404-Seite funktioniert

## 🔍 Post-Deployment Tests

### ✅ Funktionalität
- [ ] Alle Links funktionieren
- [ ] Navigation responsive
- [ ] Kontaktformular sendet E-Mails
- [ ] Cookie-Banner funktioniert
- [ ] Language-Switcher funktioniert
- [ ] Mobile-Ansicht korrekt

### ✅ Performance
- [ ] PageSpeed Score > 90
- [ ] Core Web Vitals grün
- [ ] Ladezeit < 2 Sekunden
- [ ] Bilder optimiert
- [ ] Caching aktiviert

### ✅ SEO
- [ ] Meta-Tags korrekt
- [ ] Structured Data validiert
- [ ] Sitemap erreichbar
- [ ] robots.txt funktioniert
- [ ] Canonical URLs korrekt

### ✅ Sicherheit
- [ ] HTTPS aktiviert
- [ ] Security Headers gesetzt
- [ ] XSS-Schutz aktiv
- [ ] CSRF-Schutz implementiert
- [ ] Sensible Dateien geschützt

## 📊 Analytics & Monitoring

### ✅ Google Services
- [ ] Google Analytics 4 konfiguriert
- [ ] Google Search Console Domain hinzugefügt
- [ ] Sitemap bei Search Console eingereicht
- [ ] Google Tag Manager eingerichtet (optional)

### ✅ Monitoring
- [ ] Uptime-Monitoring aktiviert
- [ ] Performance-Monitoring eingerichtet
- [ ] Error-Logging konfiguriert
- [ ] Backup-Strategie implementiert

## 📧 E-Mail-Konfiguration

### ✅ Google Workspace
- [ ] Domain bei Google Workspace verifiziert
- [ ] MX-Records konfiguriert
- [ ] E-Mail-Adressen erstellt:
  - [ ] info@fos-consulting.ch
  - [ ] kontakt@fos-consulting.ch
  - [ ] admin@fos-consulting.ch

### ✅ E-Mail-Tests
- [ ] Kontaktformular sendet an korrekte Adresse
- [ ] E-Mails werden empfangen
- [ ] Spam-Filter konfiguriert
- [ ] Autoreply eingerichtet

## 🔄 Go-Live Checkliste

### ✅ Finale Tests
- [ ] Alle Browser getestet (Chrome, Firefox, Safari, Edge)
- [ ] Mobile-Geräte getestet
- [ ] Tablet-Ansicht geprüft
- [ ] Druckversion getestet
- [ ] Accessibility-Tests bestanden

### ✅ Dokumentation
- [ ] Deployment-Dokumentation erstellt
- [ ] Wartungsanleitung geschrieben
- [ ] Kontaktdaten dokumentiert
- [ ] Backup-Prozeduren dokumentiert

### ✅ Kommunikation
- [ ] Team über Go-Live informiert
- [ ] Kunden über neue Website informiert
- [ ] Social Media Posts vorbereitet
- [ ] Newsletter-Ankündigung erstellt

## 🚨 Notfall-Plan

### Rollback-Prozedur
```bash
# Backup wiederherstellen
tar -xzf backup-$(date +%Y%m%d).tar.gz -C /var/www/html/

# Oder Git-Rollback
git checkout HEAD~1
git push --force origin main
```

### Kontakte
- **Hosting-Support:** [TELEFON/EMAIL]
- **Domain-Registrar:** [TELEFON/EMAIL]
- **Entwickler:** [TELEFON/EMAIL]
- **Notfall:** [TELEFON]

## 📈 Nach dem Go-Live

### ✅ Monitoring (erste 24h)
- [ ] Uptime überwachen
- [ ] Error-Logs prüfen
- [ ] Performance überwachen
- [ ] Benutzer-Feedback sammeln

### ✅ Optimierungen
- [ ] PageSpeed nach 24h prüfen
- [ ] User-Feedback auswerten
- [ ] Conversion-Tracking aktivieren
- [ ] A/B-Tests vorbereiten

### ✅ Wartung
- [ ] Regelmäßige Backups
- [ ] SSL-Zertifikat-Renewal
- [ ] Software-Updates
- [ ] Performance-Optimierungen

---

**Deployment-Datum:** [DATUM]
**Verantwortlich:** [NAME]
**Status:** [ ] Vorbereitung [ ] Deployment [ ] Abgeschlossen 