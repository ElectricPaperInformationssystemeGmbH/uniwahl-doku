---
title: "Typische Herausforderungen"
---

### Wie kann ich eine Wahl bei fehlerhafter Konfiguration nachträglich anpassen? {#wie-kann-ich-eine-wahl-bei-fehlerhafter-konfiguration-nachtraeglich-anpassen}

Eine Wahl kann nachträglich angepasst werden, indem Sie die Wahlordnungskonfiguration öffnen und entsprechende Änderungen vornehmen. Dies kann beispielsweise die Änderung von Losentscheid oder Sitzzuteilung betreffen. Beachten Sie jedoch, dass dies nur möglich ist, solange die Wahl noch nicht abgeschlossen (Status 6) ist.

### Was mache ich, wenn eine Wahl plötzlich abstürzt oder einfriert? {#was-mache-ich-wenn-eine-wahl-ploetzlich-abstuerzt-oder-einfriert}

Falls die Software abstürzt, sollten Sie diese neu starten und die zuletzt gesicherte Version der Wahldatei (WHL) wiederherstellen. uniWAHL erstellt während der Bearbeitung alle 5 Minuten automatisch Sicherungskopien, die Sie über "**Funktionen &gt; Sicherungskopien &gt; frühere Sicherung laden**" wieder herstellen können. Stellen Sie zudem sicher, dass regelmäßige Backups des Computers durchgeführt werden, um Datenverlust durch Hardwaredefekte zu vermeiden.

### Warum werden meine Wahlverzeichnisse nicht korrekt importiert? {#warum-werden-meine-wahlverzeichnisse-nicht-korrekt-importiert}

Dies kann passieren, wenn die Wahlverzeichnisse nicht im korrekten Format vorliegen. Die Excel-Dateien sollten keinerlei Formatierungen enthalten. Überprüfen Sie auch, ob die Spaltenbezeichnungen und die Formatierung der Daten (z. B. CSV, Excel) den Vorgaben von uniWAHL (keine Leer- und Sonderzeichen) entsprechen. Nutzen Sie die Funktion zum Import von Wahlverzeichnissen und stellen Sie sicher, dass alle Pflichtfelder korrekt zugeordnet sind.

### Wie behebe ich Probleme bei der Stimmzettelerfassung (uniSCAN)? {#wie-behebe-ich-probleme-bei-der-stimmzettelerfassung-uniscan}

Vergewissern Sie sich, dass der Scanner richtig konfiguriert ist und die Scan-Software korrekt eingestellt ist. Überprüfen Sie, ob der Scanner im Schwarz-Weiß-Modus und mit einer Auflösung von mindestens 200-300 dpi arbeitet. Stellen Sie sicher, dass der TIFF-Multipage-Modus aktiviert ist​. Bitte beachten Sie zudem die uniSCAN-Anleitung unter "uniSCAN &gt; Schritt für Schritt".

### Was tun, wenn die Wahlergebnisse nicht korrekt angezeigt werden? {#was-tun-wenn-die-wahlergebnisse-nicht-korrekt-angezeigt-werden}

Überprüfen Sie, ob alle Stimmen korrekt gezählt wurden und keine Stimmzettel fehlen. Falls erforderlich, führen Sie eine Nachzählung der Stimmen durch und überprüfen Sie die Auswertungs- bzw. Importprotokolle von uniSCAN oder uniWAHL OWS. Achten Sie darauf, dass die Sitzzuteilung korrekt nach den Wahlregeln erfolgt ist, indem Sie die Wahlordnungskonfiguration nochmals kontrollieren.

### Wie kann ich eine versehentlich gelöschte Wahl wiederherstellen? {#wie-kann-ich-eine-versehentlich-geloeschte-wahl-wiederherstellen}

Gelöschte Wahlen können aus Backups wiederhergestellt werden. uniWAHL bewahrt im Arbeitsverzeichnis ​(Datei &gt; Arbeitsverzeichnis öffnen) Sicherungskopien im Ordner "\whl\temp" auf. Bitte prüfen Sie, ob dort noch eine Sicherungskopie der Wahl vorliegt.

### Was mache ich, wenn uniWAHL beim Start lange lädt oder eine Fehlermeldung anzeigt? {#was-mache-ich-wenn-uniwahl-beim-start-lange-laedt-oder-eine-fehlermeldung-anzeigt}

Überprüfen Sie zunächst, ob alle notwendigen Systemvoraussetzungen erfüllt sind, einschließlich der korrekten Installation der Lizenzdatei. Lange Ladezeiten oder Fehler beim Programmstart weisen meist auf Verbindungsprobleme hin. Prüfen Sie daher bitte, ob die genutzten Netzwerkpfade (Laufwerke) und notwendigen Online-Services (Update- und Preview-Server) erreichbar sind. Bei anhaltenden Problemen kann es hilfreich sein, das Arbeitsverzeichnis neu festzulegen oder den internen IT-Support zu kontaktieren (Freigaben).

### Wie kann ich die Wahlordnung bei laufender Wahl ändern? {#wie-kann-ich-die-wahlordnung-bei-laufender-wahl-aendern}

Eine Änderung der Wahlordnung während einer laufenden Wahl ist nur eingeschränkt möglich. Insbesondere die Stimmzettelkonfiguration wird an uniSCAN bzw. das Online-Wahlsystem übergeben. Die Konfiguration der Wahlordnung sollte daher vor dem Start vollständig abgeschlossen sein, um nachträgliche Änderungen zu vermeiden​.

### Warum erscheinen bestimmte Kandidaten nicht auf den Stimmzetteln? {#warum-erscheinen-bestimmte-kandidaten-nicht-auf-den-stimmzetteln}

Die Wahlvorschläge müssen korrekt im System erfasst und den entsprechenden Wahlgruppen bzw. Wahlbereichen zugeordnet werden. Stellen Sie sicher, dass alle Kandidierenden erfasst und in den richtigen Wahlbereichen eingeben wurden​.

### Wie kann ich die automatische Sitzverteilung korrigieren? {#wie-kann-ich-die-automatische-sitzverteilung-korrigieren}

Falls die Sitzverteilung fehlerhaft ist, kann sie zurückgesetzt und angepasst werden, bevor die Ergebnisse erneut finalisiert werden. Setzen Sie den betroffenen Wahlbereich durch "Status zurücksetzen (STRG+Z)" zurück. Überprüfen Sie die Wahlordnung und führen Sie die Sitzverteilung erneut durch.

### Was tun, wenn die Firewall den Zugriff auf uniWAHL Downloads blockiert? {#was-tun-wenn-die-firewall-den-zugriff-auf-uniwahl-downloads-blockiert}

Konfigurieren Sie die Firewall so, dass uniWAHL als vertrauenswürdige Anwendung erkannt wird. Stellen Sie sicher, dass der Datenverkehr für den genutzten Port und den Downloadserver freigegeben ist​.

### Wie behebe ich Probleme beim Export der Wahldokumente? {#wie-behebe-ich-probleme-beim-export-der-wahldokumente}

Überprüfen Sie die Einstellungen für das Office-Format (Konfiguration &gt; Office-Format) und stellen Sie sicher, dass alle erforderlichen Programme (z.B. OpenOffice oder Adobe Acrobat) installiert und korrekt konfiguriert sind​.

### Meine Lizenzdatei wird nicht erkannt oder läuft ab? {#meine-lizenzdatei-wird-nicht-erkannt-oder-laeuft-ab}

Die Lizenzdatei muss korrekt im System hinterlegt und mit der richtigen Dateierweiterung (.lic) gespeichert sein. Stellen Sie sicher, dass die Lizenzdatei nicht beschädigt ist und dass sie im richtigen Verzeichnis "C:\Benutzer\&lt;Nutzername&gt;\uniwahl" gespeichert wurde​. Wenn Ihre Datei beschädigt ist oder abläuft, fordern Sie bitte eine neue Lizenzdatei über den uniWAHL Support (support@electricpaper.de) an.

### Warum werden Wahlgruppen nicht korrekt zugeordnet? {#warum-werden-wahlgruppen-nicht-korrekt-zugeordnet}

Überprüfen Sie vor jeder Online-Wahl unbedingt die Wahlgruppen-Zuordnung über Menü "OWS &gt; Wähler:innengruppe kontrollieren" und in den Wahlverzeichnissen und stellen Sie sicher, dass alle Wähler:innen den richtigen Gruppen zugeordnet sind. Fehlerhafte Zuordnungen können durch eine Nachbearbeitung des Wahlverzeichnisses oder der Kodierung in uniWAHL behoben werden.

### Warum können sich Wähler*innen in der Online-Wahlkabine nicht anmelden? {#warum-koennen-sich-waehler-innen-in-der-online-wahlkabine-nicht-anmelden}

Die Zugangsdaten zur Online-Wahl werden von unseren Election Managern ins uniWAHL Online-Wahlsystem hochgeladen. Ein erneutes Login mit fehlerfreien Zugangsdaten ist jederzeit möglich, der Stimmabgabe wird mit "Stimmabgabe verbraucht" markiert, sobald Stimmzettel abgegeben wurden. Sollten sich Wahlberechtigte nicht anmelden können, kann das verschiedene Ursachen haben:
1. Der Wahlzeitraum ist noch nicht geöffnet oder bereits geschlossen. Diese Termine sind der Wahlbekanntmachung zu entnehmen.
1. Die Person ist nicht wahlberechtigt und verfügt daher über keine Zugangsdaten. Dies lässt sich durch Prüfung des Wahlverzeichnisses herausfinden.
1. Die Zugangsdaten wurden fehlerhaft eingegeben. Eventuell wurde ein Zeichen falsch eingegeben oder die Feststelltaste o.ä. ist aktiviert. Bei mehrmalig fehlerhafter Eingabe bitte die Zugangsdaten kontrollieren.
1. Die Zugangsdaten waren bei Übergabe an Electric Paper fehlerhaft und konnten daher nicht korrekt im System hinterlegt werden. Die Person muss auf Antrag der Wahlleitung entfernt und mit korrekten Zugangsdaten erneut hinzugefügt werden.
1. Die Person wurde auf Antrag der Wahlleitung deaktiviert oder aus dem System gelöscht.
1. Es liegt ein technisches Problem am Server vor. Das lässt sich prüfen, indem andere, als korrekt bekannte, Zugangsdaten eingegeben bzw. aufgerufen werden.
