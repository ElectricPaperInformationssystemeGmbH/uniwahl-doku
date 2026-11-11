---
title: "Losentscheid, Erzeugung von Zufallszahlen"
---

## Automatischer Losentscheid {#automatischer-losentscheid}

Bei gleicher Stimmenzahl mehrerer Bewerber (Mehrheitswahl) und bei gleicher Teilzahl bzw. Zahlenbruchteil (Verhältniswahl) entscheidet das Los. Wenn **Wahlordnung / Allgemein / Computer soll losen** gewählt wurde, übernimmt das Programm diese Aufgabe. Dafür werden nach einem gängigen Verfahren *Zufalls­zahlen* erzeugt,

*Die zufällige Reihung von Personen/Listen erfolgt dadurch, dass jedem Element eine Zufallszahl zwischen 0 und 1 zugeordnet wird, die dann nach Größe sortiert werden. Die (Pseudo-)Zufallszahlen werden durch die Java-Funktion Math.random() erzeugt, die als Startwert die Zeitmessung in Millisekunden benutzt und die Zahlen durch sog. lineare Kongruenzen ermittelt. [Donald E. Knuth, The Art of Computer Programming]*

## Manueller Losentscheid {#manueller-losentscheid}

Bei den Losentscheiden müssen mehrere Kandidat:innen oder Listen mit derselben Stimmenzahl oder demselben Stimmenanteil in eine zufällige Reihenfolge gebracht werden. Das bedeutet, dass aus einer Menge von Elementen bestimmt werden muss, welches den 1. Platz, den 2. usw. bekommt. Aus einer Menge von z.B. 4 Elementen wird zuerst eines für den 1. Platz gelost, dann aus einer Menge der verbliebenen drei das für den 2. Platz usw.. Das Programm fragt den Benutzer jedes Mal, welches Element den nächsten Rang erhält; er muss also aus einer Menge jeweils ein Element auslosen. Für den Benutzer ist nicht zu sehen, um welche Kandidat:innen oder Listen es sich dabei gerade handelt.

| **Tipp**<br /><br />**Das Programm stellt eine Reihenfolge für alle Kandidat:innen her, nicht nur beim letzten Sitz. Wenn nach der Wahlordnung eine Person das Los werfen soll, könnten Sie zuerst das Programm losen lassen und dann im Wahlergebnis ansehen, ob um den letzten Sitz gelost wurde, was ausdrücklich erwähnt wird. Diese Fälle könnte die Wahlleitung händisch wiederholen, und das Ergebnis wird manuell korrigiert.** |
|---|

| **Tipp**<br /><br />**Für die zufällige Auswahl eines Elementes eignet sich am einfachsten ein gewöhnlicher Würfel.<br />(mod = modulo-Funktion = ganzzahliger Rest)**<br /> | a = Anzahl Elemente | x = gewürfelt: ergibt |  | 2 | **x mod a** : ungerade: **1**, gerade: **2**, |  | 3 | **x mod a** : 1 und 4 : **1**, 2 und 5: **2**, 3 und 6: **3** |  | 4, 5 oder 6 | ergibt gewürfelte Zahl, zu große Zahlen wiederholen | <br /><br />**Eine größere Anzahl von Elementen ist äußerst unwahrscheinlich.** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
