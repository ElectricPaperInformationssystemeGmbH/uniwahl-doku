---
title: "Zurücksetzen des Bearbeitungsstatus"
---

Sollten Ihnen fundamentale Fehler bei der Bearbeitung eines Wahlbereichs unterlaufen sein, können Sie den Bearbeitungsstatus dieses Wahlbereichs, der im Gruppenfenster laufend dargestellt wird, zurücksetzen.

- Wählen Sie den zu bearbeitenden Wahlbereich im Navigationsbereich per Doppelklick aus.
- Wählen Sie dann im Menü `Funktionen / Status zurücksetzen` (STRG + Z).
- Sie werden bei jedem Zurücksetzen gefragt, ob Sie diesen Schritt wirklich durchführen wollen.
- Wenn Sie bestätigen, wird die Statuszahl für die bearbeitete Gruppe um 1 zurückgesetzt.
   - Status 6 -&gt; 5: Die Auswertung wird widerrufen, Losverfahren werden zurückgesetzt.
   - Status 5 -&gt; 4: Der Abschluss der Auszählung wird widerufen.
   - Status 4 -&gt; 3: Die Stimmen werden entfernt.
   - Status 3 -&gt; 2: Der Abschluss der Wahlvorschlagsbearbeitung wird widerrufen.
   - Status 2 -&gt; 1: Die Kandidierenden und das Wahlverfahren werden entfernt.

:::warning

Erstellen Sie vor der Durchführung dieser Aktion bitte eine Datensicherung, indem Sie die WHL-Datei via "**Datei &gt; Speichern unter...**" unter einem anderen Namen sichern.
Wurde die Auswertung schon durchgeführt (Status = 6), muss vor einer Änderung der Wahl die **Genehmigung der Wahlleitung** eingeholt werden.

:::

## Status auf 3 zurücksetzen (Alle Bereiche) {#status-auf-3-zuruecksetzen-alle-bereiche}

Diese Funktion dient dazu, alle zuvor eingegebenen Stimm- oder Auszählungsdaten innerhalb sämtlicher Wahlbereiche eines Wahlprojekts vollständig zu löschen. Sie ermöglicht es, sämtliche manuell oder durch Importe eingegebenen Stimmen und Zwischenergebnisse über alle definierten Wahlbereiche hinweg zu löschen und somit die Stimmen zu entfernen. uniWAHL blendet bei der Aktivierung dieser Funktion einen Bestätigungsdialog ein, um eine unbeabsichtigte Datenlöschung zu verhindern. Der Hinweistext lautet:
„Hierbei werden alle eingegebenen Stimmen gelöscht. Wollen Sie das?“ Das macht deutlich, dass es sich um eine vollständige Rücksetzung der Wahldateneingabe handelt.

Typische Anwendungsfälle für diese Funktion:

- Ein Testlauf wurde abgeschlossen, nun soll die produktive Erfassung beginnen.
- Es wurden fehlerhafte oder unvollständige Importdaten eingespielt, die vor einer Korrektur entfernt werden müssen.
- Eine neue Zählung wurde erforderlich und alle vorherigen Werte sollen gelöscht werden.
- Eine Schulung wurde mit Beispieldaten durchgeführt und diese sollen nun bereinigt werden.
