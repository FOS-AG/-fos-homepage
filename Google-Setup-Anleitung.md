# 🔍 Google Search Console Setup für FOS AG

## Schritt 1: Google Search Console einrichten

### 1.1 Zugang zur Search Console
1. Gehen Sie zu: https://search.google.com/search-console
2. Melden Sie sich mit Ihrem Google-Konto an
3. Klicken Sie auf "Property hinzufügen"

### 1.2 Domain hinzufügen
- **Domain-Prefix**: `https://fos.ag`
- **Verifizierungsmethode wählen**: DNS-Record (empfohlen)

### 1.3 DNS-Verifizierung
Fügen Sie diesen TXT-Record zu Ihrer DNS-Konfiguration hinzu:
```
Name: @
Type: TXT
Value: google-site-verification=IHRE-VERIFICATION-ID
TTL: 3600
```

### 1.4 Verifizierung bestätigen
- Warten Sie bis zu 72 Stunden
- Klicken Sie auf "Verifizieren"
- Status sollte "Erfolgreich" anzeigen

## Schritt 2: Sitemap einreichen

### 2.1 Sitemap-URL eingeben
- Gehen Sie zu "Sitemaps" im linken Menü
- Geben Sie ein: `https://fos.ag/sitemap.xml`
- Klicken Sie auf "Senden"

### 2.2 Status überprüfen
- Status sollte "Erfolgreich" anzeigen
- Anzahl der URLs wird angezeigt

## Schritt 3: Google Analytics 4 einrichten

### 3.1 Property erstellen
1. Gehen Sie zu: https://analytics.google.com/
2. Klicken Sie auf "Erstellen"
3. Property-Typ: "Web"
4. Property-Name: "FOS AG Website"
5. Reporting-Zeitzone: "Europe/Zurich"
6. Währung: "Swiss Franc (CHF)"

### 3.2 Datenströme konfigurieren
1. Website-URL: `https://fos.ag`
2. Stream-Name: "FOS AG Hauptwebsite"
3. Kategorien: "Business"
4. Klicken Sie auf "Stream erstellen"

### 3.3 Measurement ID kopieren
- Kopieren Sie die Measurement ID (G-XXXXXXXXXX)
- Diese wird für das Tracking benötigt

## Schritt 4: Tracking-Code implementieren

### 4.1 Google Analytics Code
Fügen Sie diesen Code in den `<head>` Bereich Ihrer Website ein:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 4.2 Google Site Verification
Ersetzen Sie in Ihrer `index.html`:
```html
<meta name="google-site-verification" content="IHRE-VERIFICATION-ID" />
```

## Schritt 5: Erste Überprüfungen

### 5.1 Indexierungsstatus
- Gehen Sie zu "URL-Prüfung" in der Search Console
- Geben Sie `https://fos.ag` ein
- Klicken Sie auf "URL anfordern"

### 5.2 Performance-Bericht
- Warten Sie 1-2 Tage
- Gehen Sie zu "Performance" in der Search Console
- Überprüfen Sie die ersten Daten

### 5.3 Mobile Usability
- Gehen Sie zu "Mobile Usability"
- Beheben Sie eventuelle Probleme

## Schritt 6: Monitoring einrichten

### 6.1 E-Mail-Benachrichtigungen
- Gehen Sie zu "Einstellungen" → "Präferenzen"
- Aktivieren Sie E-Mail-Benachrichtigungen für:
  - Indexierungsfehler
  - Mobile Usability-Probleme
  - Core Web Vitals

### 6.2 Regelmäßige Überprüfungen
- Täglich: Neue Berichte prüfen
- Wöchentlich: Performance-Analyse
- Monatlich: Vollständige SEO-Überprüfung

## 🎯 Nächste Schritte

Nach der Einrichtung der Google Tools:
1. **Google My Business** erstellen
2. **PageSpeed** optimieren
3. **Content** mit Keywords optimieren
4. **Backlinks** aufbauen

## 📞 Support

Bei Problemen:
- Google Search Console Help: https://support.google.com/webmasters/
- Google Analytics Help: https://support.google.com/analytics/
- DNS-Hosting Support kontaktieren 