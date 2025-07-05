<!-- FOS Logo (blau) -->
<p align="center">
  <img src="assets/logos/fos-logo-consulting-blue.svg" alt="FOS Logo" width="260" />
</p>

# FOS - Focus on Solutions AG Notion Workspace Template

---

<!-- Icon-Logo als Trenner -->
<p align="center">
  <img src="assets/logos/fos-icon-exklusiv.svg" alt="FOS Icon" width="80" />
</p>

## 📋 Workspace-Struktur

### Hauptdatenbanken (Databases)

<!-- Icon-Logo bei Datenbank-Überschriften -->
#### <img src="assets/logos/fos-icon-exklusiv.svg" alt="FOS Icon" width="24" style="vertical-align:middle;"/> 1. 📊 Kunden & Projekte

**Datenbank-Typ:** Full Page Database

**Eigenschaften:**
- **Name** (Title) - Name des Kunden/Projekts
- **Status** (Select) - [Aktiv, Abgeschlossen, Pausiert, Lead]
- **Priorität** (Select) - [Hoch, Mittel, Niedrig]
- **Kategorie** (Multi-Select) - [Coaching, Strategie, Diagnostik, Workshop]
- **Ansprechpartner** (Text) - Name und Position
- **E-Mail** (Email) - Kontakt E-Mail
- **Telefon** (Phone) - Telefonnummer
- **Projektstart** (Date) - Startdatum
- **Projektende** (Date) - Geplantes Enddatum
- **Budget** (Number) - CHF
- **Tags** (Multi-Select) - [FOS, Kunde, Projekt, Follow-up]
- **Notizen** (Text) - Allgemeine Notizen

**Template-Seite:**
```markdown
# 📄 Kundenprofil: [Name]

## 📋 Grundinformationen
- **Status:** [Status]
- **Priorität:** [Priorität]
- **Kategorie:** [Kategorie]
- **Budget:** CHF [Betrag]

## 👥 Kontakte
- **Ansprechpartner:** [Name, Position]
- **E-Mail:** [E-Mail]
- **Telefon:** [Telefon]

## 📅 Projektzeitraum
- **Start:** [Datum]
- **Ende:** [Datum]

## 🎯 Projektziele
- [ ] [Ziel 1]
- [ ] [Ziel 2]
- [ ] [Ziel 3]

## 📝 Projektnotizen
[Freitext für wichtige Informationen]

## 📋 Nächste Schritte
- [ ] [Aufgabe 1] - [Verantwortlicher] - [Deadline]
- [ ] [Aufgabe 2] - [Verantwortlicher] - [Deadline]

## 🔗 Verknüpfte Dokumente
[Links zu relevanten Dokumenten]
```

#### <img src="assets/logos/fos-icon-exklusiv.svg" alt="FOS Icon" width="24" style="vertical-align:middle;"/> 2. 🎯 Coaching Sessions

**Datenbank-Typ:** Full Page Database

**Eigenschaften:**
- **Session-Titel** (Title) - Titel der Session
- **Coachee** (Relation) - Verknüpfung zu Kunden-DB
- **Datum** (Date) - Session-Datum
- **Dauer** (Number) - Minuten
- **Format** (Select) - [Präsenz, Online, Telefon]
- **Session-Nr.** (Number) - X von Y
- **Status** (Select) - [Geplant, Durchgeführt, Nachbereitet]
- **Ziele erreicht** (Checkbox) - Ja/Nein
- **Tags** (Multi-Select) - [Coaching, Session, Follow-up]

**Template-Seite:**
```markdown
# 📅 Coaching Session: [Titel]

## 📋 Session-Details
- **Coachee:** [Name]
- **Datum:** [Datum]
- **Dauer:** [Zeit] Minuten
- **Format:** [Format]
- **Session:** [X] von [Y]

## 🎯 Session-Ziele
- [ ] [Ziel 1]
- [ ] [Ziel 2]

## 💭 Besprochene Themen
- [Thema 1]
- [Thema 2]
- [Thema 3]

## 🔍 Erkenntnisse & Insights
- [Erkenntnis 1]
- [Erkenntnis 2]

## 📋 Vereinbarte Maßnahmen
- [ ] [Maßnahme 1] - [Deadline]
- [ ] [Maßnahme 2] - [Deadline]

## 📝 Notizen für nächste Session
[Freitext für wichtige Punkte]

## 📊 Session-Bewertung
- **Ziele erreicht:** [Ja/Nein]
- **Coachee-Zufriedenheit:** [1-5]
- **Eigene Bewertung:** [1-5]
```

#### <img src="assets/logos/fos-icon-exklusiv.svg" alt="FOS Icon" width="24" style="vertical-align:middle;"/> 3. 📊 Diagnostik & Assessments

**Datenbank-Typ:** Full Page Database

**Eigenschaften:**
- **Assessment-Titel** (Title) - Name des Assessments
- **Teilnehmer** (Relation) - Verknüpfung zu Kunden-DB
- **Datum** (Date) - Durchführungsdatum
- **Verfahren** (Select) - [Persönlichkeitstest, Kompetenzanalyse, Team-Assessment, 360°]
- **Dauer** (Number) - Minuten
- **Status** (Select) - [Geplant, Durchgeführt, Ausgewertet, Bericht erstellt]
- **Ergebnis-Datei** (Files) - PDF/Excel-Upload
- **Tags** (Multi-Select) - [Diagnostik, Assessment, Analyse]

**Template-Seite:**
```markdown
# 🔬 Assessment: [Titel]

## 📋 Assessment-Details
- **Teilnehmer:** [Name]
- **Datum:** [Datum]
- **Verfahren:** [Verfahren]
- **Dauer:** [Zeit] Minuten

## 📈 Ergebnisse
### Kompetenzbereiche
- **Kompetenz 1:** [Bewertung/Score]
- **Kompetenz 2:** [Bewertung/Score]
- **Kompetenz 3:** [Bewertung/Score]

### Stärken
- [Stärke 1]
- [Stärke 2]

### Entwicklungsbereiche
- [Entwicklungsbereich 1]
- [Entwicklungsbereich 2]

## 💡 Empfehlungen
- [Empfehlung 1]
- [Empfehlung 2]

## 📋 Follow-up Maßnahmen
- [ ] [Maßnahme 1]
- [ ] [Maßnahme 2]

## 📎 Anhänge
[Ergebnis-Dateien und Dokumentation]
```

#### <img src="assets/logos/fos-icon-exklusiv.svg" alt="FOS Icon" width="24" style="vertical-align:middle;"/> 4. 🎪 Workshops & Events

**Datenbank-Typ:** Full Page Database

**Eigenschaften:**
- **Workshop-Titel** (Title) - Name des Workshops
- **Datum** (Date) - Workshop-Datum
- **Dauer** (Number) - Stunden
- **Ort** (Text) - Adresse oder Online
- **Teilnehmer-Anzahl** (Number) - Anzahl Teilnehmer
- **Status** (Select) - [Geplant, Durchgeführt, Nachbereitet]
- **Kategorie** (Select) - [Workshop, Moderation, Großgruppenformat]
- **Tags** (Multi-Select) - [Workshop, Event, Moderation]

**Template-Seite:**
```markdown
# 🎪 Workshop: [Titel]

## 📋 Workshop-Details
- **Datum:** [Datum]
- **Dauer:** [Zeit] Stunden
- **Ort:** [Adresse/Online]
- **Teilnehmer:** [Anzahl] Personen

## 🎯 Lernziele
- [Lernziel 1]
- [Lernziel 2]
- [Lernziel 3]

## 📅 Agenda
| Zeit | Aktivität | Beschreibung |
|------|-----------|--------------|
| 09:00-09:15 | Begrüßung | [Beschreibung] |
| 09:15-10:30 | [Aktivität] | [Beschreibung] |
| 10:30-10:45 | Pause | [Beschreibung] |
| 10:45-12:00 | [Aktivität] | [Beschreibung] |

## 📦 Benötigte Materialien
- [ ] [Material 1]
- [ ] [Material 2]
- [ ] [Material 3]

## 👥 Teilnehmerliste
- [Teilnehmer 1]
- [Teilnehmer 2]
- [Teilnehmer 3]

## 📝 Workshop-Protokoll
### Durchgeführte Aktivitäten
- [Aktivität 1] - [Ergebnis]
- [Aktivität 2] - [Ergebnis]

### Wichtige Erkenntnisse
- [Erkenntnis 1]
- [Erkenntnis 2]

### Nächste Schritte
- [ ] [Schritt 1] - [Verantwortlicher]
- [ ] [Schritt 2] - [Verantwortlicher]
```

#### 5. 📚 Wissensmanagement
**Datenbank-Typ:** Full Page Database

**Eigenschaften:**
- **Titel** (Title) - Name des Tools/Methode/Idee
- **Kategorie** (Select) - [Tool, Methode, Idee, Literatur]
- **Anwendungsbereich** (Multi-Select) - [Coaching, Strategie, Diagnostik, Workshop]
- **Status** (Select) - [In Entwicklung, Getestet, Implementiert, Archiviert]
- **Tags** (Multi-Select) - [Tool, Methode, Idee, Literatur]

**Template-Seite:**
```markdown
# 📖 [Titel]

## 📋 Grundinformationen
- **Kategorie:** [Kategorie]
- **Anwendungsbereich:** [Bereiche]
- **Status:** [Status]

## 🎯 Zweck & Beschreibung
[Beschreibung des Tools/Methode/Idee]

## 📋 Anwendung
### Wann einsetzen?
[Einsatzmöglichkeiten]

### Schritt-für-Schritt Anleitung
1. [Schritt 1]
2. [Schritt 2]
3. [Schritt 3]

## 💡 Tipps & Tricks
- [Tipp 1]
- [Tipp 2]

## 📚 Weiterführende Literatur
- [Quelle 1]
- [Quelle 2]

## 🔗 Verknüpfungen
[Links zu verwandten Tools/Methoden]
```

#### 6. 💰 Finanzen & Rechnungen
**Datenbank-Typ:** Table Database

**Eigenschaften:**
- **Rechnungsnr.** (Title) - Rechnungsnummer
- **Kunde** (Relation) - Verknüpfung zu Kunden-DB
- **Datum** (Date) - Rechnungsdatum
- **Betrag** (Number) - CHF
- **Leistung** (Text) - Beschreibung
- **Status** (Select) - [Offen, Bezahlt, Überfällig]
- **Zahlungsfrist** (Date) - Fälligkeitsdatum
- **Tags** (Multi-Select) - [Rechnung, Finanzen]

#### 7. 📞 Kontakte & Netzwerk
**Datenbank-Typ:** Table Database

**Eigenschaften:**
- **Name** (Title) - Vor- und Nachname
- **Position** (Text) - Berufsbezeichnung
- **Unternehmen** (Text) - Firmenname
- **E-Mail** (Email) - E-Mail-Adresse
- **Telefon** (Phone) - Telefonnummer
- **LinkedIn** (URL) - LinkedIn-Profil
- **Kontaktaufnahme** (Date) - Datum der ersten Kontaktaufnahme
- **Status** (Select) - [Lead, Kontakt, Kunde, Partner]
- **Tags** (Multi-Select) - [Kontakt, Netzwerk, Lead]

### 📁 Seiten-Struktur

#### Hauptseiten
```markdown
🏠 Dashboard
├── 📊 Übersicht
├── 📅 Kalender
├── 📈 Statistiken
└── 🚀 Quick Actions

📋 Projekte
├── 📊 Kunden & Projekte (Database)
├── 🎯 Coaching Sessions (Database)
├── 📊 Diagnostik & Assessments (Database)
└── 🎪 Workshops & Events (Database)

📚 Wissen
├── 📖 Wissensmanagement (Database)
├── 📚 Literatur
├── 🛠️ Tools & Templates
└── 💡 Ideen & Inspiration

💼 Administration
├── 💰 Finanzen & Rechnungen (Database)
├── 📞 Kontakte & Netzwerk (Database)
├── 📅 Termine
└── 📋 Aufgaben

🎯 Persönliche Entwicklung
├── 📈 Ziele & Reflexion
├── 📚 Lernziele
├── ✅ Erfolge
└── 🔍 Verbesserungsbereiche
```

### 🎨 Design & Branding

#### Farben (Custom Properties)
- **Primär-Blau:** #14213d
- **Primär-Gold:** #fca311
- **Hintergrund:** #f8f9fa
- **Text:** #22223b

#### Icons
- 📊 Dashboard & Übersicht
- 👥 Kunden & Projekte
- 🎯 Coaching
- 📊 Diagnostik
- 🎪 Workshops
- 📚 Wissen
- 💼 Administration
- 🎯 Entwicklung

### 🔧 Automatisierungen (Optional)

#### 1. Automatische Erinnerungen
- Follow-up Termine für Coaching Sessions
- Zahlungsfristen für Rechnungen
- Workshop-Vorbereitungen

#### 2. Verknüpfungen
- Kunden automatisch mit Sessions verknüpfen
- Projekte mit Rechnungen verknüpfen
- Tools mit Anwendungsbereichen verknüpfen

#### 3. Templates
- Coaching Session Template
- Workshop Planung Template
- Assessment Protokoll Template
- Projektnotizen Template

### 📱 Mobile Optimierung
- Responsive Layouts für alle Datenbanken
- Mobile-freundliche Formulare
- Touch-optimierte Navigation

### 🔒 Datenschutz & Sicherheit
- DSGVO-konforme Datenspeicherung
- Verschlüsselte Datenübertragung
- Regelmäßige Backups
- Zugriffsberechtigungen für Team-Mitglieder

---

## 🚀 Implementierung in Notion

### Schritt 1: Workspace erstellen
1. Neues Notion-Workspace erstellen
2. Hauptseiten nach der Struktur anlegen
3. Farben und Icons anpassen

### Schritt 2: Datenbanken erstellen
1. Jede Datenbank als Full Page Database erstellen
2. Eigenschaften entsprechend der Vorlage konfigurieren
3. Templates für jede Datenbank erstellen

### Schritt 3: Verknüpfungen einrichten
1. Relations zwischen Datenbanken erstellen
2. Rollup-Eigenschaften für bessere Übersicht
3. Formeln für automatische Berechnungen

### Schritt 4: Automatisierungen
1. Reminder für wichtige Termine
2. Automatische Verknüpfungen
3. Template-Buttons für häufige Aktionen

### Schritt 5: Team-Zugriff
1. Team-Mitglieder einladen
2. Berechtigungen vergeben
3. Workflows definieren

---

## 💡 Tipps für effektive Nutzung

### 1. Konsistente Namensgebung
- Verwenden Sie einheitliche Präfixe für bessere Suche
- Nutzen Sie Tags systematisch
- Erstellen Sie Namenskonventionen für Dateien

### 2. Regelmäßige Wartung
- Wöchentliche Reviews der aktiven Projekte
- Monatliche Archivierung abgeschlossener Projekte
- Quartalsweise Überprüfung der Ziele

### 3. Suchoptimierung
- Nutzen Sie die Volltextsuche aktiv
- Erstellen Sie Saved Views für häufige Abfragen
- Verwenden Sie Filter für bessere Übersicht

### 4. Team-Kollaboration
- Definieren Sie klare Verantwortlichkeiten
- Nutzen Sie Comments für Feedback
- Erstellen Sie Shared Templates

---

**Kontakt für Support:**
📧 info@fos-ag.ch
📱 +41 44 123 45 67
🌐 www.fos-ag.ch 