---
title: "Wahlverzeichnis"
---

## So bereiten Sie ein Wahlverzeichnis vor {#so-bereiten-sie-ein-wahlverzeichnis-vor}

Zu Beginn eines neuen Wahlvorganges müssen Sie Wahlverzeichnisse erstellen, die Ihre IT-Abteilung aus den Studierenden- bzw. Personaldatenbanken herausziehen. Diese liegen Ihnen normalerweise als *Excel*-Tabellen vor, in denen in der ersten Zeile die Feldbezeichner stehen. Am besten bestellen Sie diese Tabellen mit den passenden Feldbezeichnern (→ [Personendaten konfigurieren](./4-8_personendaten.md)).

Zum Import in *uniWAHL* eignen sich

- xls- oder xlsx-Dateien oder
- txt- oder csv-Dateien: *Trennzeichen TAB*

## Format der Wahlverzeichnis-Datei: {#format-der-wahlverzeichnis-datei}

In der Wahlverzeichnis-Datei stehen die Angaben zu einer Person in einer Zeile. In der ersten Zeile stehen die Feldbezeichner: Diese Feldbezeichner können Buchstaben (einschließlich der deutschen Umlaute) und Ziffern sowie die beiden waagerechten Striche „-“ und „_“ enthalten; das erste Zeichen muss ein Buchstabe sein.

Die Felder der Tabelle sind (Groß-/Kleinschreibung und Reihenfolge sind unbedeutend):

Tabelle : Spaltenaufbau des Wahlverzeichnisses
| **Feldbezeichner** | **Alternativen** | **Eintragung** | **nötig** |
|---|---|---|---|
| PersonenNr | PersonenNr, personalnr, matrikelnr, mtknr, MatrNr, MatrNr., Nr, Nr., Matrikel-Nr., Matrikel, Matr.-Nr. | ganze Zahl bis 9 Stellen<br />(bei größeren Zahlen: Tipp nächste Seite) | X |
| Nachname | Name, Zuname, Familienname, Famname | Familienname | X |
| Vorname | Rufname |  | X |
| Titel |  |  | - |
| Geschlecht, Anrede |  | M, W, D, &lt;leer&gt; | - |
| Bereich | Fach | Tätigkeitsbereich oder Studienfach | - |
| Strasse | Institut, Organisation | einschl. Hausnummer | - |
| PLZ |  | Postleitzahl | - |
| Ort | Wohnort | auch: „im Hause“ | - |
| WahlFB |  | Wahl-Fachbereich | - |
| Statusgruppe |  |  | - |

:::warning

**Wichtiger Tipp:**<br /><br />Wenn Sie in einem Wahlvorgang mehrere Wahlverzeichnisse benutzen, passen Sie bitte vorher die Bezeichner an. Wenn Sie auf den Dokumenten z.B. bei den Studierenden das Studienfach und bei den Mitarbeiter:innen die Organisationseinheit angeben müssen, nennen Sie diese Felder in beiden Verzeichnissen z.B. „Bereich“! Das erspart Nachbearbeitungen!

:::

|  |
|---|
| **Hinweis für Administratoren:**<br /><br />**In der Datei uniwahl.ini befindet sich eine Übersetzungstabelle für die Alias-Bezeichnungen. Bitte ändern Sie diese bei Bedarf (nach Beendigung des Programms, vorheriges Backup wird empfohlen!)**<br /><br />**Strasse=\{strasse;straße;str;Strasse;\}**<br /><br />**Ort=\{ort;wohnort;Ort;\}**<br /><br />**PersonenNr=\{PersonenNr;personalnr;matrikelnr;mtknr;MatrNr;Nummer;\}**<br /><br />**PLZ=\{plz;postleitzahl;PLZ;\}**<br /><br />**Geschlecht=\{Geschlecht;geschlecht;geschl;mw;\}**<br /><br />**Nachname=\{name;nachname;zuname;familienname;famname;Nachname;**<br /><br />**Vorname=\{Vorname;vorname;name;rufname;\}**<br /><br />**Titel=\{Titel;titel;\} ** |

Wenn Sie andere Feldbezeichner benötigen, können Sie diese beim Importieren des Wahlverzeichnisses den internen Bezeichnern zuweisen.

:::tip

**Tipp:**<br /><br />Die Personenkennung („Nummer“, „Matrikel-Nr.“, „Mtknr“, „Personal-Nr.“) ist seit uniWAHL Version 5.2 alphanumerisch, darf also Ziffern, Buchstaben und Sonderzeichen enthalten. Sie kann somit sowohl für Mitarbeiter:innen als auch Studierende gleichermaßen genutzt werden.

:::
