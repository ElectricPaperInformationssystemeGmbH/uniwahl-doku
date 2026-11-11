---
title: "uniSCAN - Schritt für Schritt"
---

Diese Anleitung beschreibt den Prozess der Scanverarbeitung mit uniSCAN.

Lesen Sie bitte *vor* dem Erstellen der Stimmzettel zum Einscannen diese Anleitung aufmerksam durch.

#### uniSCAN-Verfahren {#uniscan-verfahren}

![](./img/image3.png)
- Mit uniWAHL und dem Modul uniSCAN werden eingescannte Stimmzettel automatisch anhand eines sog. OMR-Verfahrens ausgewertet.
- Das Verfahren analysiert die Schwärzung innerhalb der Ankreuzkästchen und in deren Umgebung. Dadurch werden Markierungen neben dem Kästchen, aus denen der Wählerwille erkennbar ist, als gültige Stimmen erkannt.
- Das Verfahren ist sehr empfindlich und erkennt auch schwache Markierungen.
- Handschriftliche Bemerkungen auf den Stimmzetteln, die diese ungültig machen, können erkannt werden.

#### Betriebsarten von uniSCAN {#betriebsarten-von-uniscan}

**A: Online-Modus**

Der (Einzug-)Scanner ist *direkt (per USB)* an dem uniWAHL-Computer angeschlossen:
- Im Scan-Programm setzen Sie als Zielordner: [**../uniscan/tiff**] in Ihrem Arbeitsverzeichnis.
- Menü [**uniSCAN**] wählen Sie: [**Warten auf Scans im Tiff-Ordner**] und [**Abwarten bis Stapel Fertig**].
- Wenn der Stapel fertig gescannt ist, geben das Startsignal zum Analysieren durch Klick auf [**OK**].

**B: Offline-Modus**

Sie benutzen einen *externen Scanner*, z.B. an verschiedenen Standorten:

- Transferieren Sie die Tiff-Dateien per USB-Stick, eMail oder Netzlaufwerk in den Ordner [**.../uniscan/tiff**] in Ihrem Arbeitsverzeichnis auf dem uniWAHL-Rechner.
- Wenn Sie vorher im Menü uniSCAN gewählt haben: [**Warten auf Scans im Tiff-Ordner**] und
- [**Sofort starten**], analysiert uniSCAN die dort abgelegten Dateien sofort.
- Oder: Sie arbeiten die Stapel nacheinander ab, indem Sie im Menü [**uniSCAN / Analysiere vorhandene Tiff-Datei**] wählen.

uniSCAN wird direkt in uniWAHL ausgeführt. Es ist wichtig, dass beim Einlesen der Stimmzettel die Wahlprojekt-Datei (Endung *.WHL) geöffnet ist, aus der die Stimmzettel ursprünglich erzeugt wurden. Arbeiten Sie am besten nur mit *einer* WHL-Datei, um Kontextwechsel zu vermeiden.

## Erster Test - Ausprobieren mit Beispieldateien {#erster-test-ausprobieren-mit-beispieldateien}

- Starten Sie uniWAHL. Öffnen Sie die **DemoWahl.whl** (...\whl\beispiele).
- Öffnen Sie das Menü [**uniSCAN / Einstellungen**].
- Testen Sie zuerst *ohne* die Häkchen bei [**Unerlaubte Zusätze suchen**] und [**Markierung durch Schwärzung löschen**].
- Klicken Sie auf [**uniSCAN / Analysiere vorhandene Tiff-Datei**].
- Wählen Sie den Stapel: ..\uniscan\archive\9000-DemoWahl-Senat-Prof-Teststapel.tif
- Warten Sie bis das Auspacken und die Analyse fertig sind: Der Fortschrittsbalken wird grün.
- Klick auf [**Analyse / Testen**]: Kontrollieren Sie das Import-Protokoll (Auszählungsprotokoll).
- Wiederholen Sie die Analyse mit Häkchen bei [Unerlaubte Zusätze suchen] und [Markierung durch Schwärzung löschen].
Sie werden feststellen, dass je nach Einstellung geänderte Ergebnisse vorliegen können.

## Arbeitsverzeichnis einstellen {#arbeitsverzeichnis-einstellen}

![](./img/20260416112007.png)

Bei dem *uniSCAN*-Verfahren wird in dem Arbeitsverzeichnis ein Ordner „uniscan" angelegt, falls er noch nicht existiert, der die folgenden Ordner enthält:

**archive**: Hier werden die Bilddateien der Stimmzettel-Stapel nach der Analyse abgelegt.

**debug**: Im Debug-Modus werden hier die Debug-Dateien abgelegt.

**formular**: Formularbeschreibungsdateien

**img**: Bilddateien der einzelnen Stimmzettel

**nonforms**: Nicht analysierbare Stapel

**result**: *uniSCAN* schreibt die Ergebnisse hinein.

**stimmzettel**: Stimmzettel im odt- bzw. docx-Format,

**tiff**: In diesem Ordner erwartet *uniSCAN* die gescannten tiff-Dateien zur Analyse; dieser muss als Zielordner des Scanprogramms angegeben werden.

**Hinweis**: Während der Analyse der Stimmzettel werden viele Grafik-Dateien erzeugt und abgelegt. Wenn das Arbeitsverzeichnis auf einem Netzlaufwerk liegt, kann es zu Geschwindigkeitsverlusten kommen.
Abb.: uniSCAN Arbeitsverzeichnis
- uniSCAN legt Dokumente (Scan-Dateien, Protokolle, XML-Erkennungssets, Debug-Stimmzettel) im Arbeitsverzeichnis von uniWAHL im Ordner [uniscan] ab.
- Starten Sie uniWAHL.
- Öffnen Sie eine bestehende whl-Datei bzw. nutzen Sie eine Kopie zum Testen.
- Über den Menübefehl [**Konfiguration / Arbeitsverzeichnis**] stellen Sie das Arbeitsverzeichnis ein. Dabei werden die benötigten Unterverzeichnisse automatisch eingerichtet und die Testdateien dort hinterlegt.
- Prüfen Sie die oben beschriebene Ordner-Struktur von uniSCAN.

Legen Sie vor einem neuen Wahlvorgang ein neues Verzeichnis an. Ändern Sie während der Bearbeitung des Wahlvorgangs das Arbeitsverzeichnis möglichst nicht mehr.

## Stimmzettel erstellen {#stimmzettel-erstellen}

Die uniSCAN-Stimmzettel werden im DOCX- oder ODT-Format erzeugt, so dass Microsoft Word bzw. OpenOffice oder LibreOffice installiert sein muss.

- Aktivieren Sie im Menü [**Ausgabe / Stimmzettel**] oder im Dialog [**Layout**] die Option [**Stimmzettel zum Einscannen**] und starten Sie die Ausgabe.
- Beachten Sie den „Achtung!“-Dialog! Wenn der Stimmzettel in Ordnung ist, beantworten Sie: „Soll er in dieser Form übernommen werden?“ ***unbedingt*** mit [Ja].
- Erst jetzt wird die Formular-ID vergeben und die XML-Erkennungsdatei in den [**formular**]-Ordner geschrieben. Prüfen Sie, ob sich zu jeder Stimmzettel-ID (auf dem Stimmzettel links unten) eine entsprechende XML-Datei dort befindet.

Ändern Sie während eines Wahlvorgangs die Formular-ID ***nicht*** manuell!
Ändern Sie Scan-Markierungen (Eckwinkel, Barcodes, Kästchen) ***nicht*** manuell nachträglich in Microsoft Word, OpenOffice oder LibreOffice!
Geben Sie nur Stimmzettel an Wählende aus, deren Formular-ID Sie vorher geprüft und mit denen Sie wenigstens einen **Test-Scan** durchgeführt haben!

&gt; Für die folgenden Tests empfehlen wir zunächst die Erstellung einer **Sicherungskopie** Ihrer whl-Datei über das Menü [**Datei / Speichern unter**…] – neuer Dateiname.

## Scan-Programm einrichten {#scan-programm-einrichten}

- Starten Sie Ihr Scan-Programm. Wählen Sie die TWAIN Quelle: &lt;Ihr Scanner&gt;.
- Nehmen Sie die Einstellungen vor:
   - Mehrere Bilder **Multipage-TIF**
   - Ziel-Dateiname: Beliebig wählbar
   - Ziel-Ordner: **.../uniscan/tiff**
   - Format: **TIF**
   - TIFF-Multipage eine Datei pro Stapel speichern
- Passen Sie die Optionen an:
   - Komprimierung: z.B.„CCITT Fax 4‟ erzeugt die kleinsten Dateien
- Passen Sie im Scanner-Dialog an:
   - **Schwarz-Weiß-Modus** (1 bit pro Pixel, ***nicht*** grau!)
   - **200 - 300 dpi**
   - **Papierformat A4** etc.
   - **Duplex** (doppelseitig scannen, **leere Seiten entfernen**)
   - Bei farbigem Papier ggf. **Blindfarbenfilterung** („Color-Dropout“)
- Klicken Sie auf [Scannen] oder richten Sie die Software so ein, dass Sie direkt am Scanner per Tastendruck einscannen können.

## Test: Leere Stimmzettel {#test-leere-stimmzettel}

- Erstellen Sie einen Stapel mit je einem leeren Stimmzettel her und nennen ihn z.B. „Leer“ oder „Referenzstimmzettel“. Scannen Sie ihn in den [**uniscan/tiff**]-Ordner.
- Entfernen Sie vorher in uniWAHL unter [**uniSCAN / Eigenschaften**] das Häkchen bei [**Unerlaubte Zusätze suchen**].
- Analysieren und testen (***nicht*** importieren) der TIF-Dateien. Alle Stimmzettel müssen ungültig sein.

## Referenz-Stimmzettel vorbereiten (optional) {#referenz-stimmzettel-vorbereiten-optional}

Referenz-Stimmzettel (Leere Exemplare im Original-Scan) werden benötigt, wenn man unerlaubte Zusätze suchen will: Zusätzlich werden auch andere Parameter der Stimmzettel wie die Größe der Analysebereiche hierüber bestimmt.
- Menü [**uniSCAN / Referenzstimmzettel vorbereiten**]: Geben Sie den vorher eingescannten Stapel leerer Stimmzettel an, er wurde nach der Analyse in den [**uniscan/archive**]-Ordner kopiert.
- Setzen Sie nun ggf. das Häkchen bei [**Unerlaubte Zusätze suchen**], wenn Sie diese Option nutzen wollen.

## Test: Ausgefüllte Stimmzettel {#test-ausgefuellte-stimmzettel}

- Stellen Sie einen Stapel mit mehreren Stimmzetteln von allen Typen her und füllen Sie diese aus. Probieren Sie typische Markierungen am Stimmzettel aus.
- Scannen Sie die Stimmzettel mit einem Scanprogramm (siehe oben) ein.
- Menü [**uniSCAN / Analysiere vorhandene Tiff-Datei**]: Bitte ***nur*** auf [**Teste Stimmen**] klicken, damit keine Stimmen etc. übernommen werden.
- Kontrollieren Sie im Auszählungsprotokoll die analysierten Stimmen und die ungültigen Stimmzettel.
Passen Sie die Einstellungen in uniWAHL in [**uniSCAN / Einstellungen**] so an, dass die Ergebnisse im Auszählungsprotokoll den gescannten Bilddateien entsprechen (z.B. Schwärzungsgrad, Korrekturen vorhanden, Bildrauschen vorhanden). ***Erst dann*** importieren Sie die Stapel!

## Problembehandlung {#problembehandlung}

1. **Stimmzettel konnte nicht gelesen werden**
   1. Ist für jeden Stimmzettel-Typ (FormID links unten auf dem Stimmzettel) eine xml-Datei mit derselben Nummer als Name im [**uniscan**uniscan/tiff**] verschoben werden.

Der Import der Dateien (siehe oben) über den [..**/uniscan/tiff**]-Ordner erfolgt getrennt nach den oben beschriebenen Verarbeitungen (gültig / ungültig).

Während der Verarbeitung werden die uniSCAN-Einstellungen vor dem Import an die jeweiligen Scan-Dateien angepasst:

- Unerlaubte Zusätze suchen (Warnungen ausgeben)
- Markierungen durch Schwärzung löschen (Korrekturen zulassen ja/nein)
- Schwellwerte der Schwarzabdeckung (&lt;3-6% leer, &lt;10-15% Sichtprüfung, &gt;80-90% Korrektur, wenn akiviert)
- Wenn im Debug-Modus verarbeitet wird, werden alle Stimmzettel als Einzeldateien im Ordner […**/uniscan/debug**] mit Erkennungsmarken und Schwellwerten abgelegt
- Keine Seitenkorrektur, kein Entrauschen (Nur bei Scanproblemen)

Nach der Verarbeitung werden die Tiff-Dateien automatisch in […**/uniscan/archive**] abgelegt.

Die manuelle Verifikation wird anhand der Auszählungsprotokolle in HTML durchgeführt. Diese können mit handschriftlichen Ergänzungen versehen werden, um die manuellen Änderungen nachtäglich zu belegen.

Es sollten folgende Warnungen und Fehler unbedingt behandelt werden:

- **NonForms** (nicht erkannte Formulare) – Leere Rückseiten, Barcode zerstört, Seite verdreht - Diese müssen erneut gescannt oder manuell in uniWAHL eingegeben werden, wenn lesbar
- **Alle Warnungen – z.B. Unerlaubte Zusätze in Gültige gefunden** – Handschriftliche Anmerkung wurde übersehen – Stimmzettel manuell als „Ungültig“ erfassen, „Gültige“ verringern / „Ungültige“ im Wahlbereich erhöhen
- **Fehlerhaft als gültig erkannter Stimmzettel**, obwohl dieser als „ungültig“ vorsortiert war – z.B. rein technisch gültiger Stimmzettel aus Briefwahl aber ohne Wahlschein - Stimmen in uniWAHL manuell entfernen, „Gültige“ verringern / „Ungültige“ erhöhen
- **Fehlerhaft als ungültig erkannter Stimmzettel** – z.B. Kreuzung zu schwach oder Kreuzung durch mehrere Kästchen - Stimmen in uniWAHL manuell ergänzen, „Gültige“ erhöhen / „Ungültige“ verringern
- **Fehlerhaft markierte Kästchen** durch Falzen, Farbreste bei dunklem Papier und Verunreinigung der Scan-Leiste - Diese müssen eventuell erneut gescannt werden

## Anlage - Merkblatt zur Vorsortierung für Wahlhelfende {#anlage-merkblatt-zur-vorsortierung-fuer-wahlhelfende}

![](./img/20240902173951.png)
