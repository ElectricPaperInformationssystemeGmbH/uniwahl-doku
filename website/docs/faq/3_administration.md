---
title: "Systemadministration"
---

### Welche technischen Anforderungen hat uniWAHL? {#welche-technischen-anforderungen-hat-uniwahl}

uniWAHL erfordert ein Microsoft Windows Betriebssystem bis Windows 11, einen 64-Bit-Prozessor mit mindestens 1,5 GHz (empfohlen wird ein 4-Kern-Prozessor), 2 GB Arbeitsspeicher (empfohlen 16 GB für uniSCAN) und etwa 1 GB freien Festplattenspeicher. Außerdem werden OpenOffice/LibreOffice oder Microsoft Word ab Version 2010 sowie der Adobe Acrobat Reader benötigt.

### Wie konfiguriere ich die Datenbankanbindung für uniWAHL? {#wie-konfiguriere-ich-die-datenbankanbindung-fuer-uniwahl}

uniWAHL verfügt über kein Datenbank-System, sondern arbeitet mit proprietären Dateiformaten (WHL, WVZ, TV), die zumeist XML-basiert sind (ähnlich MS Office). Sie können externe Wählerdateien über Excel-Tabellen, CSV- oder TXT-Dateien importieren und in das interne Format (.wvz) umwandeln. Diese Dateien müssen vorab vorbereitet und ins System geladen werden​.

### Welche Firewall-Einstellungen sind erforderlich? {#welche-firewall-einstellungen-sind-erforderlich}

Um uniWAHL reibungslos zu betreiben, sollte sichergestellt werden, dass die Firewall den Datenverkehr der Anwendung nicht blockiert (Automatisiertes Update, Live-Vorschau der Online-Wahlkabine). Es kann notwendig sein, uniWAHL als vertrauenswürdige Anwendung zu konfigurieren und den Zugriff auf den genutzten Download-Server (download.electricpaper.de) und Preview-Server (preview.gremienwahlen.de) zuzulassen.

### Wie richte ich ein Backup für das System ein? {#wie-richte-ich-ein-backup-fuer-das-system-ein}

Ein Backup des Systems kann durch regelmäßige Sicherungen des Arbeitsverzeichnisses von uniWAHL erfolgen. Vor einem Update sollte stets eine valide Datensicherung aller relevanten Wahlprojektdaten angelegt werden, um Datenverlust zu vermeiden.

### Wie kann ich Benutzerkonten verwalten? {#wie-kann-ich-benutzerkonten-verwalten}

uniWAHL ist als Einplatzsystem konzipiert und verfügt aktuell über keine Benutzerverwaltung. Der Einsatz eines Dokumentenmanagement-System inkl. Dateiversionierung wird empfohlen.

### Wie aktualisiere ich die Software auf die neueste Version? {#wie-aktualisiere-ich-die-software-auf-die-neueste-version}

uniWAHL führt beim Start automatisch eine Update-Prüfung durch. Wenn ein Update verfügbar ist, wird es zum Download angeboten. Wird der Download angenommen, wird die aktuelle .jar-Datei ins Programmverzeichnis von uniWAHL geschrieben und die Anwendung wird beim Neustart aktualisiert.

### Wie überprüfe ich die Systemlast und Performance von uniWAHL? {#wie-ueberpruefe-ich-die-systemlast-und-performance-von-uniwahl}

Die Systemlast und Performance können durch Überwachung der CPU- und Speicherauslastung des Servers bzw. Computers überprüft werden, auf dem uniWAHL installiert ist. Besonders bei großen Wahlen empfiehlt es sich, die Ressourcenverteilung regelmäßig zu kontrollieren (Import, Export, Verarbeitung großer Datenbestände).

### Welche Logs speichert uniWAHL und wie kann ich sie einsehen? {#welche-logs-speichert-uniwahl-und-wie-kann-ich-sie-einsehen}

Ein technisches Log (Java-Ausgaben) wird im Programmpfad C:\Benutzer\&lt;Nutzername&gt;\uniwahl als "uniwahl.log" gespeichert. uniWAHL speichert zudem Protokolldateien, die alle relevanten Aktivitäten während des Wahlprozesses aufzeichnen. Diese Logs können im Arbeitsverzeichnis unter „logbuch“ eingesehen werden, um den Wahlablauf zu überprüfen.

### Wie überprüfe ich die Integrität der installierten Software? {#wie-ueberpruefe-ich-die-integritaet-der-installierten-software}

uniWAHL-Setups und .jar-Dateien sind hersteller-signiert. Die Integrität der installierten Software wird zusätzlich durch regelmäßige Updates unter Verwendung von Original-Lizenzdateien sichergestellt. Zusätzliche Sicherheit bietet die verschlüsselte Speicherung von Wahl- und Wählerdaten.

### Welche Hardware-Ressourcen werden für große Wahlen benötigt? {#welche-hardware-ressourcen-werden-fuer-grosse-wahlen-benoetigt}

uniWAHL verarbeitet Daten in-memory. Für große Wahlen empfiehlt sich daher ein leistungsstarker Server mit mindestens 16 GB RAM und einem modernen Prozessor mit mehreren Kernen, um die Verarbeitung großer Datenmengen und die schnelle Auswertung der Stimmzettel zu gewährleisten.

### Welche Authentifizierungsmethoden zur Online-Wahl gibt es und wie werden die eingerichtet? {#welche-authentifizierungsmethoden-zur-online-wahl-gibt-es-und-wie-werden-die-eingerichtet}

Die Online-Wahl mit uniWAHL unterstützt verschiedene Authentifizierungsmethoden, wie z.B. Passwort-basierte Authentifizierung (PIN/TAN, E-Mail) oder die Nutzung von institutionellen Anmeldedaten (Identity Management) via Smart Link oder OpenID. Diese Optionen können in der Konfiguration des Online-Wahlsystems eingerichtet und parallel genutzt werden.
