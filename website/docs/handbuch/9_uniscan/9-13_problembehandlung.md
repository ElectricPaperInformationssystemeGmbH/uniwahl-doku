---
title: "Problembehandlung"
---

## Debug Modus {#debug-modus}

- Unter Menü `uniSCAN/Einstellungen/Erweitert` wählen Sie Debug-Modus.
- Im Ordner *uniscan/debug* werden für jeden Stimmzettel Bilder mit dem Analyseergebnis abgelegt. Prüfen Sie die Bilder.
- Wenn alles funktioniert, Debug-Modus wieder abschalten!

## Stimmzettel prüfen {#stimmzettel-pruefen}

- Befindet sich für jeden Stimmzettel-Typ (FormID links unten auf dem Stimmzettel) eine xml-Datei mit derselben Nummer als Name im Erkennungsset-Ordner?
- Sind die Stimmzettel maßhaltig ausgedruckt?
Bei PDF-Druck: **Keine** Anpassung der Seitengröße!
Sind pdf- und odt-Ausdrucke identisch? (Fensterscheibentest).
- Ist der Ausdruck kräftig genug?
- Sind die Positionierungs-Ecken und der Barcode nicht beschädigt?

## Beispieldateien testen {#beispieldateien-testen}

- Entpacken Sie die zip-Datei *Gescannte_Stimmzettel.zip* im *archive*-Ordner und kopieren die Datei *„9000-xxx .tiff“* in den *tiff*-Ordner.
- Öffnen Sie die Formular-Datei *9000.xml* mit dem Editor und tragen Sie den richtigen Image-Pfad Ihrer Installation (6. Zeile) ein, damit die Links in dem Importprotokoll die Bilddateien finden.
- Laden DemoWahl.whl aus dem Ordner ...\whl\beispiele.
- Menü uniSCAN/„Vorhandene tiff-Datei analysieren“
