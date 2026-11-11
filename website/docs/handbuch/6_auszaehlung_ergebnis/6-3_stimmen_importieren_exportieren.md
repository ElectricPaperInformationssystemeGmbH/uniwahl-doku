---
title: "Stimmen importieren / exportieren"
---

## Auszählung an mehreren Rechnern {#auszaehlung-an-mehreren-rechnern}

Um das Wahlergebnis möglichst schnell nach Schließung der Wahllokale zu ermitteln, kann an mehreren Rechnern ausgezählt werden; die Wahlergebnisse werden anschließend zusammengeführt. Das ist insbesondere dann sinnvoll, wenn an verschiedenen Standorten ausgezählt wird.

## So bereiten Sie die Auszählung an mehreren Rechnern vor: {#so-bereiten-sie-die-auszaehlung-an-mehreren-rechnern-vor}

- Auf jedem der beteiligten Rechner muss das Programm *uniWAHL* installiert sein.
- Ein Rechner wird als zentraler Wahlrechner bestimmt; auf diesem werden die Ergebnisse zusammengeführt.
- Auf jedem Rechner muss der Wahlvorgang (.whl-Datei) in der aktuellen Fassung geladen sein. Dazu speichern Sie auf dem zentralen Wahlrechner die Datei „&lt;IhreWahl&gt;.whl“ auf Datenträger und kopieren diese auf dem gewünschten Rechner in den entsprechenden Ordner.
- Starten Sie auf allen anderen Rechnern *uniWAHL* und laden Sie den aktuellen Vorgang mit dem Menübefehl: *Datei / Öffnen*.

## So führen Sie die Ergebnisse zusammen: {#so-fuehren-sie-die-ergebnisse-zusammen}

- Wenn die Auszählung des Gremiums beendet ist, exportieren Sie das Ergebnis mit dem Menübefehl*: Datei / Exportiere Stimmen.* Es wird eine Datei „*xxx.xml*“ ( xxx = z.B. der Dateiname des Wahlvorgangs) im Ordner *„...\uniwahl\stimmen“* erzeugt.
- Transferieren Sie die Datei auf den zentralen Wahlrechner in den Ordner *„...\uniwahl\stimmen*“.
- Importieren Sie die Stimmen mit dem Menübefehl*: Datei / Importiere Stimmen***.**
- Die importierten Stimmen werden zu den bisherigen Stimmen hinzugezählt.

## Importieren von maschinell ausgezählten Stimmen {#importieren-von-maschinell-ausgezaehlten-stimmen}

Wenn das Auszählen der Stimmen nicht manuell erfolgt, sondern Ihnen mit Hilfe von Zählmaschinen, Beleglesern o.ä. diese Arbeit abgenommen wird, können die hiermit ermittelten Stimmenzahlen direkt in das Programm übernommen werden.

## So importieren Sie die Stimmen: {#so-importieren-sie-die-stimmen}

- Im Menü *Datei* wählen Sie den Menüpunkt *Importiere Stimmen*.
- Geben Sie den Namen der Datei an, die die ausgezählten Stimmen enthält.
- Angaben zum Format der zu importierenden Daten finden Sie in Kapitel: [Formate der Stimmen-Import-/Export-Dateien](../13_formate/index.md).

:::warning

**Bitte beachten!**<br /><br />Speichern Sie vor dem Importieren von Stimmen den Wahlvorgang ab. Dadurch können Sie die Zählung rückgängig machen, wenn aufgrund von fehlerhaftem Datenformat Unstimmigkeiten auftreten.

:::
