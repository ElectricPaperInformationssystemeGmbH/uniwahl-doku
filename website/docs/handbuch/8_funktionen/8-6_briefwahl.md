---
title: "Briefwahl"
---

*uniWAHL* unterstützt die Durchführung der Briefwahl mit folgenden Funktionen:

## Briefwählende übertragen {#briefwaehlende-uebertragen}

Im Menü unter `Wahlverzeichnis / Briefwählende übertragen` können Sie Briefwählende zwischen Wahlverzeichnissen übertragen.

Wenn während der Wahlvorbereitung das Wahlverzeichnis geändert wurde, kann man mit dieser Funktion die Briefwahlwünsche den Personen im neuen Verzeichnis übergeben. Dazu müssen das alte und das neue Wahlverzeichnis geöffnet sein. Die Personen werden über Nach- und Vorname einander zugeordnet.

## Abgleichen

Falls gleiche Namen vorkommen, kann mit `Wahlverzeichnis / Abgleichen` eine Liste erstellt werden, in der die zu dem Namen in den beiden Wahlverzeichnissen stehenden Daten (P.-Nr, Bereich, Straße) aufgeführt werden.

## Person als Briefwähler:in markieren {#person-als-briefwaehler-in-markieren}

Mit dem Menübefehl: *Wahlverzeichnis / Person suchen/bearbeiten* wird der Dialog zum Bearbeiten der Personendaten geöffnet. Suchen Sie die Person, die die Briefwahl beantragt hat, und markieren Sie das Ankreuzfeld „Briefwahl beantragt“. Die Markierung „Brief verschickt" besagt, ob der Brief verschickt wurde.

Die neue Adresse wird in die Adressfelder eingetragen. Soll die Adresse erhalten bleiben, legen Sie unter `Konfiguration / Personendaten` mit dem Knopf „Neues Feld“ zwei neue Felder an, z. B. „B-Strasse“ und „B-PLZ-Ort“, in die Sie die Briefwahl-Adresse eintragen.

## Briefwahlunterlagen versenden {#briefwahlunterlagen-versenden}

Zum Versenden der Briefwahlunterlagen erstellen Sie mit dem Menü­befehl: `Wahlverzeichnis / Briefwahldatei ausgeben` eine Tabelle, in der die Daten aller Personen, die die Briefwahl beantragt haben und noch keinen Brief geschickt bekommen haben, verzeichnet sind. Diese Tabelle kann als Datenquelle für Serienbriefe zum Zusenden der Briefwahlunterlagen verwendet werden. Sie wird in den Ordner „...\waehler“ geschrieben und hat den Namen `<wvz>-Briefwähler.xlsx` (`<wvz>` = Name des Wahlverzeichnisses). Ist diese Datei bereits vorhanden, heißt die neue Datei `<wvz>-Briefwähler-2.xlsx` usw. Im Demo-Arbeitsverzeichnis (`DemoWahl\waehler`) finden Sie eine Beispieldatei für einen Serienbrief an die Briefwähler:innen, `Beispiel-Briefwahlunterlagen.docx`, und eine passende Datenquelle, `Beispiel-Briefwähler.xlsx`. Wird eine Briefwahldatei ausgegeben, wird dieses bei den Personen markiert.

## Exportieren zu Wahlraum

Mit `Wahlverzeichnis / Exportieren zu Wahlraum` erstellen Sie eine Excel-Datei mit den Wählerdaten zum Import in die Software uniWAHL Wahlraum. Der Assistent „Wählerverzeichnis nach Wahlraum exportieren“ führt durch folgende Schritte:

1. Wählen Sie unter „Verfügbare Wählerverzeichnisse“ eines der geöffneten Wahlverzeichnisse aus und geben Sie unter „Dateiname“ den Namen der Exportdatei an (vorgeschlagen: `Wahlraum-Wählerverzeichnis.xlsx`). Ist kein Wahlverzeichnis geöffnet, brechen Sie ab und öffnen zunächst eines.
2. Ordnen Sie in der Tabelle jedem „Wahlraum Bezeichner“ (z. B. „Nachname“, „Vorname“, „Personalnummer“, „Briefwahl“) den passenden uniWAHL-„Personenbezeichner“ zu. Die uniWAHL-Felder für Nachname, Vorname und Personennummer müssen dabei verwendet werden.
3. Die Datei wird geschrieben; der Ordner wird angezeigt, und beim Fertigstellen wird die Datei geöffnet.
