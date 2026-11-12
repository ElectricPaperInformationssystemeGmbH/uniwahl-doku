---
title: "Wahlberechtigte zählen"
---

Für die Feststellung des Wahlergebnisses muss die genaue Zahl der Wahlberechtigten bestimmt werden. Diese kann sich während des Wahlvorgangs durch Zu- und Abgänge oder durch Wechsel des Wahlbereichs geändert haben.

Der Assistent zum Zählen der Wahlberechtigten lässt sich auf zwei Wegen starten:

- Im Dialogfenster des Wahlbereichs über die Schaltfläche **…zählen** neben dem Eingabefeld für die Anzahl der Wahlberechtigten. Dieser Weg zählt die Wahlberechtigten für den jeweiligen Wahlbereich.
- Über den Menübefehl `Funktionen > Wahlberechtigte zählen` beziehungsweise `Funktionen > Wahlberechtigte zählen (alle Bereiche)`. Zweiteres durchläuft alle Wahlbereiche in einem Schritt und trägt die ermittelten Zahlen automatisch ein, sodass eine manuelle Eingabe in jedem einzelnen Wahlbereich entfällt.

:::tip

Bei Betriebsratswahlen u.a. werden wahlberechtigte Männer und Frauen in getrennten Feldern aufgeführt und gezählt. Hierfür werden Feldbezeichner wie „Geschlecht“ verwendet. (vgl. [Weitere Gremien](../4_vorbereitung/4-8_weitere_gremien.md))

:::

## Im Wahlbereich {#im-wahlbereich}

![Abb.: Wahlberechtigte zählen](./img/20260324141724.png)

*Abb.: Wahlberechtigte zählen*

Im Dialogfenster des Wahlbereichs befindet sich neben dem Eingabefeld für die Anzahl der Wahlberechtigten ein Tastenfeld **„...zählen“**. Damit wird ein Assistent gestartet.

**Vorbereitung**: Zuerst erscheint eine Bestätigungsfrage, die die Funktion kurz erklärt; bestätigen Sie mit `OK`. Danach wird nach dem Wahlverzeichnis gefragt, das durchgezählt werden soll (Excel-Datei „.xls“ oder „.xlsx“). Dieses wird im Ordner „waehler“ im Arbeitsverzeichnis gesucht. Enthält die Excel-Datei mehrere Tabellen, wählen Sie im Dialog „Tabelle auswählen“ die gewünschte Tabelle aus.

![Abb. : Auswahl der Felder](./img/20260324142704.png)

*Abb. : Auswahl der Felder*

**1. Schritt: Auswahl der Felder:**

Angezeigt werden alle in dem Wahlverzeichnis (in der ersten Zeile) gefundenen Felder. Wählen Sie die Bezeichner für die Spalten aus, die für die Zählung benutzt werden sollen. Sie werden durch Doppelklick oder Taste `Auswählen` in die rechte Liste übernommen. Die Reihenfolge und die Anzahl sind beliebig.

Wenn Sie z.B. die Studierenden einer bestimmten Fakultät zählen wollen, wählen Sie in dem Beispiel die Felder `Statusgruppe` und `Bereich`. Wenn Sie zusätzlich die weiblichen und männlichen Wahlberechtigten angeben müssen, nehmen Sie noch `Geschlecht` hinzu.

![Abb. : Auswahl der Attribute](./img/20260324143806.png)

*Abb. : Auswahl der Attribute*

Klicken Sie auf `Weiter`.

**2. Schritt: Auswahl der Attribute:** Für jedes vorher ausgewählte Feld erscheint eine Liste der gefundenen Einträge. Markieren Sie in jeder Liste einen Eintrag.

`Weiter`

**3. Schritt:** Die ermittelte Anzahl der Wahlberechtigten der gewählten Gruppe wird angezeigt.

Klicken Sie auf `Fertig` .

Die ermittelte Zahl kann direkt in die Daten des Wahlbereichs übernommen werden: `Ja`

Danach sollten Sie mit `OK` die Daten des Wahlbereichs sichern.

**Nachtrag:** Wenn Sie im 3. Schritt `zurück` sagen, können Sie eine neue Auswahl vornehmen. Sie müssen die ermittelten Zahlen notieren und nachher in den jeweiligen Wahlbereichen nachtragen.

## Im Menü "Funktionen" {#im-menue-funktionen}

![Abb.: Menüeinträge](./img/20260706163925.png)

*Abb.: Menüeinträge*

**1. Wahlberechtigte zählen**

Dieser Eintrag ruft den oben beschriebenen Assistenten auf (gilt pro Wahlbereich) ohne Wählergruppen-Codes.

**2. Wahlberechtigte zählen (alle Bereiche)**

Dieser Eintrag ruft einen Assistenten für alle Wahlbereiche auf. Der erste Schritt beschreibt den Ablauf.

![Abb.: Beschreibung des Assistent](./img/20260706164545.png)

*Abb.: Beschreibung des Assistent*

Es wird ein **Wahlverzeichnis mit Wählergruppen** als Excel-Datei (XLSX) benötigt. Sie können dafür die Funktion `OWS / Wahlverzeichnis kodieren` nutzen (siehe [Wähler:innengruppen](../10_ows/10-4_waehler_innengruppen.md)), wenn Ihr Wahlverzeichnis nicht bereits über eine solche Spalte verfügt.

- Wählen Sie das Wahlverzeichnis (XLSX) aus.

![](./img/20260706165248.png)

- Ordnen Sie der Spalte, die die Wählergruppenzuordnung enthält, in der rechten Spalte den Schlüsselnamen „Wählergruppe“ zu.

![](./img/20260706165743.png)

- Kontrollieren Sie die Zahlen pro Wahlbereich. Gelb markiert sind doppelte und leere Werte, rot markiert Wählergruppen, die im Wahlverzeichnis nicht vorkommen; beides sind Warnungen. Die Zahlen der Wahlberechtigten können Sie direkt in der Tabelle ändern. Mit `Fertig` werden die Werte in alle Wahlbereiche übernommen.

![](./img/20260706165902.png)
