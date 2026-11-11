---
title: "Export der Daten aus uniWAHL"
---

Diese Funktion ermöglicht die automatische Erzeugung von „Online-Stimmzetteln“, die dieselben Informationen und Texte enthalten müssen wie mögliche Papierstimmzettel. Damit werden Übertragungsfehler bei manueller Erstellung vermieden. Die Ausgabe kann in einer Excel-Tabelle, als xml- oder json-Datei erfolgen, die im Ordner *Arbeitsverzeichnis**/ausgabe* abgelegt werden. Diese können an den Provider weitergegeben werden. Da die Dateien nur die Daten enthalten, die auf den Stimmzetteln erscheinen, unterliegen sie keinem besonderen Datenschutz.

## Export der Daten im JSON-Format {#export-der-daten-im-json-format}

Zur Übergabe an ein uniWAHL Online-Wahlsystem (OWS) können die Konfigurations- und Stimmzettel-Informationen in eine JSON-Datei ausgegeben werden.

Mit dem Menübefehl `OWS / Stimmzettel im JSON-Format erzeugen` bzw. `OWS / Nominierung erzeugen` oder `OWS / Wahlverzeichnisprüfung` wird ein Konfigurationsassistent gestartet, der Sie durch die notwendigen Schritte zur Erstellung einer OWS-Konfigurationsdatei führt.

![Abb. : Wizzard zur Konfiguration der uniWAHL OWS-Anbindung](./img/20260401125123.png)

*Abb. : Wizzard zur Konfiguration der uniWAHL OWS-Anbindung*

Zunächst werden die Wahlparameter in Abstimmung mit Electric Paper konfiguriert:

![](./img/20260518110750.png)<br />Abb. : Konfiguration von uniWAHL OWS

1. **OWS-Version** gibt die genutzte Version des Onlinewahlsystems an (Kompatibilität)
1. **Wahl-ID** (aus uniWAHL OWS) wird fortlaufend in OWS erhöht und hier eingetragen
1. **Authentifizierungsstellen**: Servernamen der genutzten Kryptographie-Stellen
1. **Maximale Logins pro Wähler:in**
1. **Authentifikationsmethode** (Mehrfachauswahl mit gedrückter SHIFT/STRG-Taste):
      - EMAIL / EMAIL_OTP: Die Zugangsdaten werden per E-Mail verschickt.
      - PIN_TAN: Es werden Zugangsdaten (Pin und TAN) in Excel generiert. Die Länge der PIN-TAN-Kombinationen und der genutzte Zeichensatz kann festgelegt werden.
      - SMS / SMS_OTP: Die Zugangsdaten werden per SMS verschickt.
      - USER_AND_PASS: Es werden Zugangsdaten (Benutzer, Passwort) in Excel generiert.
      - SMART_LINK: Es werden parametrisierte URL zur Integration ins Intranet generiert.
      - OPENID: Der Zugang erfolgt mittels Identity Provider.
1. **Demo-Wahlkabine deaktivieren** – deaktiviert die statische URL zur Demo-Wahlkabine
1. **Permanente SmartLinks ausgeben** - erzeugt feste, unveränderliche Direktlinks.
1. **Öffentliche Seite deaktivieren** – deaktiviert die statische URL zur Öffentlichen Seite
1. **SharedSecret für die Wahl** – Schlüssel wird für das SMART Link Verfahren benötigt
1. **Domainname für die Wahl** – Die Domain inkl. der Zugangsdaten werden automatisch in das Ausgabeverzeichnis von uniWAHL geschrieben und können zur Integration bereitgestellt werden.
1. **Pin-Tan-Länge** - Legt die Länge der erzeugten Pin-Tan-Kombinationen (Codes) fest, die aus dem importierten Wahlverzeichnis erzeugt werden (Nur PIN/TAN-Verfahren)
1. **Pin-Tan-Zeichensatz:** enthält alle Zeichen (Wertebereich), die zur Erzeugung von Pin-Tan-Kombinationen (Codes) genutzt werden können
1. **Pin-Bezeichnung**: Für einige Wähler ist der Begriff "PIN" nicht sprechend. Es kann daher eine eigene Bezeichnung (Benutzername, Mitgliedsnummer) hinterlegt werden.
1. **Tan-Bezeichnung**: Für einiger Wähler ist der Begriff "TAN" nicht sprechend. Es kann hier eine eigene Bezeichnung (Passwort, Geburtsdatum) hinterlegt werden.

Zur direkten Übergabe an uniWAHL OWS kann ein pseudonymes Wähler:innenverzeichnis (in .XLS oder .XLSX) direkt eingelesen werden. Dieser Schritt ist optional und kann auch später direkt im OWS nachgezogen werden.

**Je nach Authentifikationsmethode werde verschiedene Textfelder zum Ausfüllen ausgewählt.**

![Abb. : Pseudonymes Wähler:innenverzeichnis einlesen und Ablagepfad definieren](./img/20260401132034.png)

*Abb. : Pseudonymes Wähler:innenverzeichnis einlesen und Ablagepfad definieren*

![Abb. : Pseudonymes Wähler:innenverzeichnis einlesen und Ablagepfad definieren](./img/20260401132045.png)

*Abb. : Pseudonymes Wähler:innenverzeichnis einlesen und Ablagepfad definieren*

Der Ablagepfad der Übergabedatei (JSON) lässt sich im unteren Feld definieren.

Die Schlüsselfelder zur Wähler:innengruppenkodierung können direkt aus dem Wähler:innenverzeichnis importiert und hinterlegt werden. Dieser Schritt ist (optional) nur dann notwendig, wenn ein pseudonymes Wähler:innenverzeichnis direkt übertragen werden soll.

![Abb. : Spaltenbezeichner zuordnen](./img/image223.png)

*Abb. : Spaltenbezeichner zuordnen*

Die Felder PIN und TAN können individuellen Spalten der Importdatei zugeordnet werden, so ist der Import vordefinierter PIN/TAN-Kombinationen in die JSON-Datei möglich.

![Abb. : Wahlkonfiguration im JSON-Format ausgeben](./img/image224.png)

*Abb. : Wahlkonfiguration im JSON-Format ausgeben*

Die Konfigurationsdatei wird anschließend ausgegeben und im Arbeitsverzeichnis abgelegt. Die Datei wird zusätzlich in Ihrer Standard-Anwendung für json-Dateien Browser dargestellt.

## Ausgabe als Excel-Tabelle (End of life) {#ausgabe-als-excel-tabelle-end-of-life}

Mit dem Menübefehl: „*eWAHL / Stimmzettel im XLSX-Format erzeugen*“ wird eine Arbeitsmappe erzeugt, die alle für die Stimmzettel benötigten Daten enthält.

Wählen Sie den Ausgabeordner und Dateinamen. Std.: „*ausgabe/Sz2Excel..“*

Jeder Stimmzettel wird in einer eigenen Tabelle (sheet) mit den Namen *GremienNr-GruppenNr.*. dargestellt

![Abb. : Stimmzettel als Excel ausgeben](./img/image216.png)

*Abb. : Stimmzettel als Excel ausgeben*

![Abb. : Aufbau der Excel-Tabelle](./img/image217.png)

*Abb. : Aufbau der Excel-Tabelle*

![](./img/image218.png)

<br />Abb. : Bei Mehrheitswahl oder bei Listenwahl mit Einzelbewerbern: Typ: „Einzelbewerber“

## Export der Stimmzetteldaten in XML (End of life) {#export-der-stimmzetteldaten-in-xml-end-of-life}

Zur Übergabe an ein Online-Wahlsystem können die Stimmzettel-Informationen in eine xml-Datei ausgegeben werden. Es wird dringend empfohlen, auch eine Excel-Ausgabe zu erzeugen, da diese übersichtlicher ist und Fehler leichter gefunden werden können.

Mit dem Menübefehl: „*eWAHL / Stimmzettel im XML-Format erzeugen*“ wird eine xml-Datei erzeugt, die alle für die Stimmzettel benötigten Daten enthält.

Wählen Sie den Ausgabeordner und Dateinamen. Std.: „*ausgabe/Sz2xml..“*

Die Datei wird in Ihrem Browser dargestellt, wenn er entsprechend konfiguriert ist. (Abb.)

![Abb. : Stimmzettel als XML-Datei](./img/image219.png)

*Abb. : Stimmzettel als XML-Datei*

| **Das Format der xml-Stimmzetteldateien ist [hier](../13_formate/index.md) beschrieben.** |
|---|
