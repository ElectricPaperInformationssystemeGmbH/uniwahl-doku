---
title: "Benutzerhinweise"
---

### Wie kann ich eine Wahl erstellen? {#wie-kann-ich-eine-wahl-erstellen}

Um eine Wahl zu erstellen, gibt es 3 Wege:
1. Öffnen Sie die Software und wählen Sie "**Neue Wahl beginnen**" (Strg+N) aus dem Menü "Datei". Geben Sie die relevanten Informationen wie den Namen der Wahl, den ersten Wahltag und die Wahlordnung ein. Konfigurieren Sie die Gremien und Wahlbereiche und geben Sie die Kandidierenden und Listen ein, um die Wahl vorzubereiten.
1. Öffnen Sie eine bestehende Wahlprojekt-Datei (WHL) und wählen die Funktion "**Alle Kandidat:innen entfernen**" im Menü "Funktionen" aus, um mit einer bestehenden Gremienstruktur und Wahlordnung zu arbeiten.
1. Legen Sie eine Kandidierendenliste inkl. der Gremienstruktur an (Ein Beispiel finden Sie im Programmpfad von uniWAHL) und nutzen Sie den Menüeintrag "**Datei &gt; Importiere Wahl**".

### Welche Optionen gibt es für die Stimmabgabe? {#welche-optionen-gibt-es-fuer-die-stimmabgabe}

Für die Stimmabgabe gibt es mehrere Optionen: Präsenz-, Brief- und Online-Wahlen (auch an mobilen Endgeräten) werden gleichermaßen unterstützt. Zur Auszählung steht die manuelle Auszählung durch Eingabe in uniWAHL, das scannerbasierte Auszählen (uniSCAN) oder die automatisierte Online-Auszählung (OWS) zur Verfügung.

### Wie erstelle ich eine Auswertung der Wahlergebnisse? {#wie-erstelle-ich-eine-auswertung-der-wahlergebnisse}

Um eine Auswertung der Wahlergebnisse zu erstellen, wählen Sie den entsprechenden Wahlbereich und öffnen Sie die Registerkarte "Zählen und Auswerten". Führen Sie die Auszählung durch, und bestätigen Sie dann die Auswertung (Status 5), sobald alle Stimmen erfasst sind. Die Ergebnisse können dann als Auswerte-Protokoll ausgegeben und gespeichert werden. Anschließend können Sie die Sitzzuteilung durchführen (Status 6 - Grün). Sobald dieser Schritt durchgeführt wurde, lässt sich über das Menü "Ausgabe &gt; Wahlergebnis" die Wahlergebnis-Datei (DOCX) ausgeben.

### Wie speichere ich häufig verwendete Einstellungen als Vorlage? {#wie-speichere-ich-haeufig-verwendete-einstellungen-als-vorlage}

Häufig verwendete Einstellungen können als WHL-Vorlage gespeichert werden, indem Sie die Konfiguration Ihrer Wahl in einer Datei speichern. Über die Menüoption "Datei &gt; Speichern unter" können Gremienstruktur, Wahlordnungs-, Layout-, Text- und Stimmzettel-Parameter gesichert werden, die für zukünftige Wahlen wiederverwendet werden können.

### Wie kann ich die Wahldaten exportieren? {#wie-kann-ich-die-wahldaten-exportieren}

Es gibt verschiedene Ausgaben, die Daten der Wahldatei enthalten:
1. Die **Gremienstruktur** lässt sich über "Ausgabe &gt; Tabelle" extrahieren.
1. Eine **Übersicht der Kandidierenden** kann über "Ausgabe &gt; Tabelle aller Kandidat:innen" exportiert werden.
1. Die **Stimmdaten** innerhalb der Wahlbereiche lassen sich via "Datei &gt; Exportiere Stimmen" in eine XML-Datei exportieren, die u.a. mit MS Excel geöffnet werden kann.
1. Wurde ein **Wahlverzeichnis** importiert und bearbeitet, kann dieses über "Wahlverzeichnis &gt; Exportieren" in XSLX-Dateien geschrieben werden.
1. Um Wahlordnung, Layouts und Texte zu exportieren, kann die jeweiligen Funktion "**Speichern**" im Dialog der Konfigurationselemente genutzt werden.

### Wie passe ich das Layout der Wahldokumente an? {#wie-passe-ich-das-layout-der-wahldokumente-an}

Das Layout des jeweiligen Wahlsystems lässt sich anpassen, indem Sie unter [**Konfiguration &gt; Layout**] die Optionen für die Darstellung von Stimmzetteln, Online-Wahlkabine und Wahldokumenten ändern. Sie können unter anderem die Schriftgröße, Spaltenbreiten und das Papierformat festlegen, als auch die Einstellung zum Layout des Online-Wahlsystems ändern.

### Wie setze ich eine Wahl zurück? {#wie-setze-ich-eine-wahl-zurueck}

Es gibt verschiedene Wege, Wahlgänge zurückzusetzen:
1. Die Funktion "Status zurücksetzen" (Strg+Z) setzt einzelne Wahlbereiche um jeweils einen Status zurück, wenn z.B. die Eingabe eines:r Kandidat:in vergessen wurde (Status 3 &gt; 2).
1. Die Funktion "Alle Kandidat:innen" entfernen setzt komplette Wahldateien (WHL) auf den Ausgangszustand VOR der Wahl zurück, so dass wieder mit der Eingabe der Wahlvorschläge begonnen werden kann.
1. Eine Wahl kann auch zurückgesetzt werden, indem Sie die Wahldatei (WHL) öffnen und den Menüpunkt "Funktionen &gt; Status auf 3 zurücksetzen (Alle Bereiche)" wählen. Dadurch werden alle bisherigen Stimmeinträge und -importe zurückgesetzt, und die Auszählung kann erneut durchgeführt werden.

### Wie richte ich eine Briefwahl mit uniWAHL ein? {#wie-richte-ich-eine-briefwahl-mit-uniwahl-ein}

Die Briefwahl wird eingerichtet, indem Sie im Wahlverzeichnis die entsprechenden Personen markieren, die die Briefwahl beantragt haben. Anschließend können Briefwahldatei erstellt und ausgegeben werden. Alle Daten werden in einer Datei gespeichert und können für Serienbriefe verwendet werden. Im Arbeitsverzeichnis von uniWAHL finden sich Vorlagen für Briefwahldokumente, die sich mit der Serienbrieffunktion von MS Word und der Serienbriefdatei auffüllen lassen.

### Kann ich eine Wahl nachträglich bearbeiten? {#kann-ich-eine-wahl-nachtraeglich-bearbeiten}

Ja, die Wahldatei lässt sich auch nachträglich bearbeiten, allerdings werden Parameter wie Kandidierendendaten festgeschrieben und sind unveränderlich z.B. in uniSCAN- oder OWS-Rohdaten gespeichert. Alle Änderungen an einer bestehenden WL-Datei werden zudem im Logbuch von uniWAHL gespeichert.

### Wie kann ich Wahltermine festlegen und verwalten? {#wie-kann-ich-wahltermine-festlegen-und-verwalten}

Wahltermine werden im Wahlordnungs-Dialog relativ zum ersten Wahltag festgelegt, indem Sie zunächst den ersten Tag des Wahlzeitraums (im Wahl-Dialog) bestimmen. Die Termine können dann im Register "Terminplanung" relativ zum Wahlzeitraum eingegeben und nach Bedarf angepasst werden. Die Texte der angezeigten Termine lassen sich in der "Konfiguration &gt; Textbausteine" ändern. Sie können einen aktuellen Terminplan dann immer wieder über "**Ausgabe &gt; Terminplan**" ausgeben, indem Sie nur noch den ersten Wahltag (im Wahl-Dialog) anpassen.

### Wie kann ich eine mehrsprachige Wahl organisieren? {#wie-kann-ich-eine-mehrsprachige-wahl-organisieren}

Um die Mehrsprachigkeit zu nutzen, können Sie beim Erstellen der Stimmzettel verschiedene Sprachversionen in den Textbausteinen hinzufügen. Zunächst müssen die gewünschten Sprachen in der Wahlordnungskonfiguration aktiviert werden (STRG+Auswahl oder Umschalt+Auswahl). Anschließend müssen für die "Wahlbezeichnung", "Gremiennamen" und "Wahlbereichsnamen" manuelle Übersetzungen in den jeweiligen Dialogen hinzugefügt werden. Dies erfolgt durch Ausfüllen der Eingabefelder. Anschließend können mehrsprachigen Stimmzettel ausgegeben werden, indem Sie "Ausgabe &gt; Stimmzettel" aufrufen oder die Live-Preview des Online-Wahlsystem (inkl. Sprachauswahl) benutzen. Für jede in der Wahlordnung angewählte Sprache wird eine eigene Ausgabe des Stimmzettels im Arbeitsverzeichnis von uniWAHL erstellt. Sind mehrere Sprachen aktiv, wird in "Konfiguration &gt; Textbausteine" auch ein zusätzliches Textfeld für die jeweilige Sprache angezeigt, dort können Text angepasst werden.

### Wie erfasse ich Stimmen, z.B. aus der Briefwahl? {#wie-erfasse-ich-stimmen-z-b-aus-der-briefwahl}

Stimmen aus der Briefwahl werden erfasst, indem die Stimmzettel eingescannt und über uniSCAN in das System importiert werden. Alternativ können die Stimmen manuell im Zählfenster erfasst werden, indem Sie die Stimmenzahlen für jede Kandidat:in eingeben.

### Was muss ich tun, um eine Wahl abzuschließen? {#was-muss-ich-tun-um-eine-wahl-abzuschliessen}

Um eine Wahl abzuschließen, müssen alle Stimmen gezählt und die Auswertung sowie Sitzzuteilung verifiziert sein. Nach der Auswertung können die Wahlergebnisse veröffentlicht und die Wahl offiziell beendet werden.

### Wie verwalte ich Stimmzettel für verschiedene Wahlgruppen? {#wie-verwalte-ich-stimmzettel-fuer-verschiedene-wahlgruppen}

Per se entspricht jeder Wahlbereich in uniWAHL einem eigenen Stimmzettel. Stimmzettel können so für verschiedene Wahlgruppen individuell erstellt und verwaltet werden, indem Sie in der Konfiguration separate Wahlordnungsparameter und Layouts für jede Gruppe festlegen. Dies ermöglicht es, Stimmzettel nach den spezifischen Anforderungen jeder Satzung bzw. Wahlordnung zu gestalten. Stimmzettel können bestimmten Wahlgruppen zugewiesen werden, indem Sie Wähler:innengruppen im Wahlbereich hinterlegen, die Sie später auch im Wahlverzeichnis als Gruppe aufführen. Ein:e Wähler:in kann auch mehreren Wahlgruppen (ergo mehrere Stimmzettel erhalten) zugeordnet werden, indem die Wähler:innengruppen aus verschiedenen Wahlbereichen im Wahlverzeichnis hinzugefügt werden.
