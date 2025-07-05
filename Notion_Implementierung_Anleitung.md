# 🚀 FOS Notion Workspace - Implementierungsanleitung

## 📋 Vorbereitung

### Benötigte Notion-Features:
- ✅ Notion Pro Account (für erweiterte Features)
- ✅ Team-Workspace (für Kollaboration)
- ✅ Admin-Rechte (für Template-Erstellung)

---

## 🎯 Schritt 1: Workspace-Grundstruktur erstellen

### 1.1 Hauptseiten anlegen
```
🏠 Dashboard
├── 📊 Übersicht & KPIs
├── 📅 Kalender & Termine
├── 📈 Statistiken & Reports
└── 🚀 Quick Actions

📋 Projekte & Kunden
├── 👥 Kunden & Projekte
├── 🎯 Coaching Sessions
├── 📊 Diagnostik & Assessments
└── 🎪 Workshops & Events

📚 Wissensmanagement
├── 📖 Tools & Methoden
├── 📚 Literatur & Quellen
├── 🛠️ Templates & Vorlagen
└── 💡 Ideen & Innovation

💼 Administration
├── 💰 Finanzen & Rechnungen
├── 📞 Kontakte & Netzwerk
├── 📅 Termine & Deadlines
└── 📋 Aufgaben & To-Dos

🎓 EduQua Compliance
├── 📋 Qualitätsmanagement
├── 👥 Dozenten & Trainer
├── 📊 Evaluation & Feedback
└── 📚 Dokumentation

🎯 Persönliche Entwicklung
├── 📈 Ziele & Reflexion
├── 📚 Lernziele & CPD
├── ✅ Erfolge & Meilensteine
└── 🔍 Verbesserungsbereiche
```

### 1.2 Farben & Branding anwenden
- **Primär-Blau:** #14213d
- **Primär-Gold:** #fca311
- **Hintergrund:** #f8f9fa
- **Text:** #22223b

---

## 🗄️ Schritt 2: Hauptdatenbanken erstellen

### 2.1 Kunden & Projekte Database
**Typ:** Full Page Database

**Eigenschaften hinzufügen:**
```
Name (Title) - Name des Kunden/Projekts
Status (Select) - [Aktiv, Abgeschlossen, Pausiert, Lead]
Priorität (Select) - [Hoch, Mittel, Niedrig]
Kategorie (Multi-Select) - [Coaching, Strategie, Diagnostik, Workshop]
Ansprechpartner (Text) - Name und Position
E-Mail (Email) - Kontakt E-Mail
Telefon (Phone) - Telefonnummer
Projektstart (Date) - Startdatum
Projektende (Date) - Geplantes Enddatum
Budget (Number) - CHF
Tags (Multi-Select) - [FOS, Kunde, Projekt, Follow-up, EduQua]
Notizen (Text) - Allgemeine Notizen
EduQua-Kategorie (Select) - [Weiterbildung, Coaching, Beratung]
```

### 2.2 Coaching Sessions Database
**Typ:** Full Page Database

**Eigenschaften hinzufügen:**
```
Session-Titel (Title) - Titel der Session
Coachee (Relation) - Verknüpfung zu Kunden-DB
Datum (Date) - Session-Datum
Dauer (Number) - Minuten
Format (Select) - [Präsenz, Online, Telefon, Hybrid]
Session-Nr. (Number) - X von Y
Status (Select) - [Geplant, Durchgeführt, Nachbereitet]
Ziele erreicht (Checkbox) - Ja/Nein
EduQua-zertifiziert (Checkbox) - Ja/Nein
Dozent (Person) - Verantwortlicher Trainer
Tags (Multi-Select) - [Coaching, Session, Follow-up, EduQua]
```

### 2.3 Workshops & Events Database
**Typ:** Full Page Database

**Eigenschaften hinzufügen:**
```
Workshop-Titel (Title) - Name des Workshops
Datum (Date) - Workshop-Datum
Dauer (Number) - Stunden
Ort (Text) - Adresse oder Online
Teilnehmer-Anzahl (Number) - Anzahl Teilnehmer
Status (Select) - [Geplant, Durchgeführt, Nachbereitet]
Kategorie (Select) - [Workshop, Moderation, Großgruppenformat]
EduQua-zertifiziert (Checkbox) - Ja/Nein
Dozent (Person) - Verantwortlicher Trainer
Teilnehmer-Liste (Multi-Person) - Eingeladene Teilnehmer
Zertifikat-vergeben (Checkbox) - Ja/Nein
Tags (Multi-Select) - [Workshop, Event, Moderation, EduQua]
```

### 2.4 EduQua Compliance Database
**Typ:** Full Page Database

**Eigenschaften hinzufügen:**
```
Titel (Title) - Name des Compliance-Dokuments
Kategorie (Select) - [Qualitätsmanagement, Dozenten, Evaluation, Dokumentation]
Status (Select) - [In Bearbeitung, Überprüft, Genehmigt, Überfällig]
Verantwortlicher (Person) - Zuständige Person
Deadline (Date) - Fälligkeitsdatum
EduQua-Standard (Select) - [Standard 1, Standard 2, Standard 3, Standard 4]
Dokument-Typ (Select) - [Richtlinie, Verfahren, Formular, Bericht]
Version (Number) - Dokumentversion
Tags (Multi-Select) - [EduQua, Compliance, Qualität]
```

---

## 🔗 Schritt 3: Verknüpfungen einrichten

### 3.1 Relations erstellen
1. **Kunden ↔ Coaching Sessions**
   - In Kunden-DB: "Coaching Sessions" (Relation)
   - In Coaching-DB: "Kunde" (Relation)

2. **Kunden ↔ Workshops**
   - In Kunden-DB: "Workshops" (Relation)
   - In Workshops-DB: "Kunden" (Relation)

3. **Dozenten ↔ Sessions/Workshops**
   - In Coaching-DB: "Dozent" (Person)
   - In Workshops-DB: "Dozent" (Person)

### 3.2 Rollup-Eigenschaften hinzufügen
```
Kunden-DB:
- "Anzahl Sessions" (Rollup von Coaching-DB)
- "Anzahl Workshops" (Rollup von Workshops-DB)
- "Gesamtbudget" (Rollup von Budget)

Coaching-DB:
- "Kunden-Name" (Rollup von Kunden-DB)
- "Kunden-Status" (Rollup von Kunden-DB)
```

---

## 📝 Schritt 4: Templates erstellen

### 4.1 Coaching Session Template
**In Coaching-DB → Templates → New Template**

```markdown
# 📅 Coaching Session: [Titel]

## 📋 Session-Details
- **Coachee:** [Name]
- **Datum:** [Datum]
- **Dauer:** [Zeit] Minuten
- **Format:** [Format]
- **Session:** [X] von [Y]
- **Dozent:** [Name]

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

## 🎓 EduQua-Compliance
- **EduQua-zertifiziert:** [Ja/Nein]
- **Qualitätsstandards eingehalten:** [Ja/Nein]
- **Dokumentation vollständig:** [Ja/Nein]
```

### 4.2 Workshop Template
**In Workshops-DB → Templates → New Template**

```markdown
# 🎪 Workshop: [Titel]

## 📋 Workshop-Details
- **Datum:** [Datum]
- **Dauer:** [Zeit] Stunden
- **Ort:** [Adresse/Online]
- **Teilnehmer:** [Anzahl] Personen
- **Dozent:** [Name]

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

## 🎓 EduQua-Compliance
- **EduQua-zertifiziert:** [Ja/Nein]
- **Qualitätsstandards eingehalten:** [Ja/Nein]
- **Teilnehmer-Evaluation:** [Link zu Evaluation]
- **Zertifikat vergeben:** [Ja/Nein]
```

---

## 🎓 Schritt 5: EduQua-Compliance einrichten

### 5.1 Qualitätsmanagement-Seite
**Neue Seite: "🎓 EduQua Qualitätsmanagement"**

```markdown
# 🎓 EduQua Qualitätsmanagement

## 📋 Qualitätsstandards
### Standard 1: Strategie und Politik
- [ ] Qualitätsstrategie definiert
- [ ] Qualitätspolitik dokumentiert
- [ ] Qualitätsziele festgelegt

### Standard 2: Kundenorientierung
- [ ] Kundenbedürfnisse analysiert
- [ ] Kundenzufriedenheit gemessen
- [ ] Feedback-System implementiert

### Standard 3: Personal
- [ ] Dozenten-Qualifikationen dokumentiert
- [ ] Weiterbildung der Dozenten geplant
- [ ] Personalentwicklung implementiert

### Standard 4: Prozesse
- [ ] Bildungsprozesse definiert
- [ ] Qualitätskontrolle implementiert
- [ ] Kontinuierliche Verbesserung

## 📊 Qualitätskennzahlen
- **Kundenzufriedenheit:** [%]
- **Teilnehmer-Erfolgsquote:** [%]
- **Dozenten-Qualifikation:** [%]
- **Prozess-Effizienz:** [%]

## 📅 Qualitätsaudits
- [ ] Internes Audit (Quartal)
- [ ] Externes Audit (Jahr)
- [ ] EduQua-Audit (alle 3 Jahre)
```

### 5.2 Dozenten-Database
**Neue Database: "👥 Dozenten & Trainer"**

**Eigenschaften:**
```
Name (Title) - Vor- und Nachname
Position (Text) - Berufsbezeichnung
E-Mail (Email) - Kontakt E-Mail
Telefon (Phone) - Telefonnummer
Qualifikation (Multi-Select) - [Coaching, Strategie, Diagnostik, Workshop]
EduQua-zertifiziert (Checkbox) - Ja/Nein
Zertifikate (Files) - Qualifikationsnachweise
Weiterbildung (Date) - Letzte Weiterbildung
Status (Select) - [Aktiv, Inaktiv, Bewerbung]
Tags (Multi-Select) - [Dozent, Trainer, EduQua]
```

---

## 📊 Schritt 6: Dashboard erstellen

### 6.1 Haupt-Dashboard
**Seite: "🏠 Dashboard"**

```markdown
# 🏠 FOS Dashboard

## 📊 Übersicht
- **Aktive Projekte:** [Anzahl]
- **Offene Sessions:** [Anzahl]
- **Geplante Workshops:** [Anzahl]
- **EduQua-Compliance:** [%]

## 📅 Heute
- [Termin 1]
- [Termin 2]
- [Termin 3]

## 🚀 Quick Actions
- [Neue Coaching Session]
- [Neuen Workshop planen]
- [Kunde hinzufügen]
- [EduQua-Check]

## 📈 Statistiken
- **Monatliche Umsatz:** CHF [Betrag]
- **Kundenzufriedenheit:** [%]
- **EduQua-Standards:** [% erfüllt]
```

### 6.2 Database Views erstellen
**Für jede Database:**

1. **Table View** - Übersicht
2. **Board View** - Nach Status
3. **Calendar View** - Nach Datum
4. **Gallery View** - Visuelle Übersicht

---

## 🔧 Schritt 7: Automatisierungen

### 7.1 Reminder einrichten
```
Coaching Sessions:
- 1 Tag vor Session: Erinnerung an Dozent
- 1 Woche nach Session: Follow-up

Workshops:
- 1 Woche vor Workshop: Material-Check
- 1 Tag nach Workshop: Evaluation

EduQua:
- Monatlich: Qualitätscheck
- Quartal: Internes Audit
- Jahr: Externes Audit
```

### 7.2 Formeln hinzufügen
```
Kunden-DB:
- "Projekt-Dauer" = dateBetween(now(), prop("Projektstart"), "days")
- "Budget-Status" = if(prop("Budget") > 10000, "Hoch", "Standard")

Coaching-DB:
- "Session-Status" = if(now() > prop("Datum"), "Überfällig", "Aktiv")
```

---

## 👥 Schritt 8: Team-Zugriff

### 8.1 Berechtigungen vergeben
```
Admin (Sie):
- Vollzugriff auf alle Bereiche
- Template-Erstellung
- Team-Verwaltung

Dozenten:
- Zugriff auf eigene Sessions/Workshops
- Kunden-Daten (nur eigene)
- EduQua-Dokumentation

Assistenten:
- Kunden-Daten (Lesen)
- Termine verwalten
- Finanzen (nur Lesen)
```

### 8.2 Workflows definieren
```
Neue Coaching Session:
1. Dozent erstellt Session
2. Admin genehmigt
3. Kunde wird informiert
4. Session wird durchgeführt
5. Evaluation wird gesendet

Neuer Workshop:
1. Workshop wird geplant
2. EduQua-Check wird durchgeführt
3. Material wird vorbereitet
4. Teilnehmer werden eingeladen
5. Workshop wird durchgeführt
6. Zertifikate werden vergeben
```

---

## ✅ Schritt 9: Testing & Optimierung

### 9.1 Test-Szenarien
```
1. Neue Coaching Session erstellen
2. Workshop planen und durchführen
3. EduQua-Compliance prüfen
4. Team-Kollaboration testen
5. Mobile-Nutzung testen
```

### 9.2 Optimierungen
```
- Templates anpassen
- Views optimieren
- Automatisierungen erweitern
- Team-Feedback einholen
```

---

## 🎯 Nächste Schritte

### Sofort umsetzen:
1. ✅ Workspace erstellen
2. ✅ Hauptdatenbanken anlegen
3. ✅ Templates erstellen
4. ✅ Team einladen

### In den nächsten Wochen:
1. 📊 Daten migrieren
2. 🔧 Automatisierungen einrichten
3. 👥 Team schulen
4. 📈 Optimierungen vornehmen

### Für EduQua-Zertifizierung:
1. 🎓 Qualitätsmanagement implementieren
2. 📋 Dokumentation vervollständigen
3. 📊 Kennzahlen definieren
4. 🔍 Audit vorbereiten

---

**Support & Hilfe:**
📧 info@fos-ag.ch
📱 +41 44 123 45 67
🌐 www.fos-ag.ch

**EduQua-Kontakt:**
🌐 www.eduqua.ch
📧 info@eduqua.ch 