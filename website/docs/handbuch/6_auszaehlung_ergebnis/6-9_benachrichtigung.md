---
title: "Benachrichtigung der Gewählten durch Serienbriefe"
---

Wenn Sie bei der Eingabe der Bewerber:innen die Adressen miterfasst haben, ist die Benachrichtigung der gewählten Mitglieder der Gremien ohne Aufwand mit Serienbriefen möglich.

## So erstellen Sie die Serienbrief-Datei: {#so-erstellen-sie-die-serienbrief-datei}

Voraussetzung: Die Wahl ist ausgewertet (mindestens ein Wahlbereich hat den Status 6). Ausgegeben werden nur Kandidat:innen aus Wahlbereichen mit Status 6.

Wählen Sie im Menü `Ausgabe / Benachrichtigung...`.

![](./img/20260324144546.png)
<br />Abb. : Ausgabe der Benachrichtigungen

- Bestimmen Sie im Dialogfenster unter „Gremien“, ob „Alle“ oder nur das „Aktuelle“ Gremium ausgegeben werden soll.
- Bestimmen Sie unter „Kandidat:innen“, wer benachrichtigt werden soll: „Alle“, „Gewählte“, „Nicht gewählte“ oder „Listenführer:innen“. Bei „Listenführer:innen“ werden die Personen auf Platz 1 jeder Liste aller Wahlbereiche mit Listenwahl ausgegeben.
- Wenn Sie unterschiedliche Serienbrief-Vorlagen für die Gewählten und die Nicht-Gewählten benutzen, erstellen Sie getrennte Dateien.
- Das Programm erzeugt im Ordner `ausgabe` des Arbeitsverzeichnisses eine Excel-Datei mit dem Tabellenblatt „Kandidaten“; in dieser befinden sich die Datensätze für die Serienbriefe. Der Dateiname richtet sich nach der Auswahl, z. B. `Benachrichtigung_Gewaehlt_<gremium>.xlsx`, `Benachrichtigung_NichtGewaehlt_<gremium>.xlsx`, `Benachrichtigung_Listenfuehrer_<gremium>.xlsx` bzw. bei „Alle“ Kandidat:innen `Benachrichtigung_Gewaehlt_NichtGewaehlt_<gremium>.xlsx` (`<gremium>` = Kürzel des Gremiums; entfällt bei „Alle“ Gremien).
- Die Datei enthält die Spalten Anrede, Titel, Vorname, Nachname, PersonenNr, Strasse, PLZ, Ort, Bereich, Gremium, Gruppe, Liste, Vertretung und gewählt sowie die beim [Konfigurieren der Personendaten](../4_vorbereitung/4-8_personendaten.md) zusätzlich ausgewählten Datenfelder.

## So erstellen Sie den Serienbrief mit Microsoft Word (.docx): {#so-erstellen-sie-den-serienbrief-mit-microsoft-word-docx}

Am Beispiel von MS-Word wird die Serienbrieferstellung gezeigt:

- Im Ordner `ausgabe` des Arbeitsverzeichnisses befinden sich die Beispielbriefe *Brief_Gewaehlt.docx* und *Brief_NichtGewaehlt.docx* sowie die Beispiel-Adressdateien *Beispiel_Gewaehlt_senat.txt* und *Beispiel_NichtGewaehlt_senat.txt*. Öffnen Sie diese Briefe mit *MS-Word*.
- Rufen Sie mit dem Menü: `Extras / Seriendruck` oder mit der entsprechenden Schaltfläche den Seriendruck-Manager auf.
- Sie sehen, dass in diesem Fall das Hauptdokument *Brief_Gewaehlt.docx* mit der Datenquelle *Beispiel_Gewaehlt_senat.txt* verbunden ist. Für Ihre eigenen Briefe wählen Sie als Datenquelle die erzeugte Datei `Benachrichtigung_….xlsx` (Tabellenblatt „Kandidaten“).
- Mit der Schaltfläche *ABC* schalten Sie zwischen der wirklichen Adresse und den Platzhaltern (Seriendruckfeld) hin und her.
- Mit der Taste `Seriendruckfeld einfügen` können Sie Platzhalter an beliebige Stellen einfügen. Dabei werden Ihnen die in der Datenquelle definierten Feldnamen (Spaltenüberschriften, siehe oben) zur Auswahl angeboten.
- Mit der Taste Bedingungsfeld einfügen können Sie dem Herrn in der Adresse sein „n“ geben: Wenn Anrede Gleich „Herr“, dann einfügen: „n“; oder Wenn Anrede Gleich „Herr“, dann „Sehr geehrter Herr“, sonst „Sehr geehrte Frau“.
- Probieren Sie es doch selbst einmal: Öffnen Sie ein neues Dokument, öffnen Sie den *Seriendruck-Manager* und lassen Sie sich von ihm leiten.

## Serienbriefe mit Libre-/OpenOffice (odt): {#serienbriefe-mit-libre-openoffice-odt}

1. Öffnen Sie die Beispieldatei *Brief_Gewaehlt.odt* oder *Brief_NichtGewaehlt.odt* (im Ordner `ausgabe`) oder erstellen Sie ein neues Serienbrief-Dokument: Menü: `Datei / Neu / Textdokument`.
1. Melden Sie die erzeugte Excel-Datei als Adressdatenquelle an: Menübefehl `Datei / Assistenten / Adressdatenquelle` öffnet den Assistenten:
   - ![](./img/image139.png) andere externe Datenquelle, Weiter →, dann Taste: Einstellungen
   - Datenbank-Typ: Tabellendokument
   - Pfad: die erzeugte Datei `Benachrichtigung_….xlsx` im Ordner `ausgabe` des Arbeitsverzeichnisses
   - Taste: Fertigstellen
   - Taste: Feldzuordnung, z. B. Name: Nachname
   - Taste: Fertigstellen
1. Einfügen von Serienbrief-Feldern
   - Menü: `Ansicht / Datenquellen`, Datenquellen-Browser
   - Doppelklick auf die angemeldete Datenquelle *Benachrichtigung*...
   - Doppelklick auf *Tabellen*, dann auf das Tabellenblatt *Kandidaten*
   - Spaltenkopf (z. B. „Anrede“) an die gewünschte Stelle im Dokument ziehen
1. Bedingungsfelder einfügen (Datenquellen-Browser ist geöffnet): Menü: `Einfügen / Feldbefehl / Andere`: Funktionen / Bedingter Text. Spaltenkopf (z. B. „Anrede“) in das Feld „Bedingung“ ziehen und dahinter schreiben: == „Herr“, Dann: Sehr geehrter Herr, Sonst: Sehr geehrte Frau.
1. Seriendruck ausgeben.
