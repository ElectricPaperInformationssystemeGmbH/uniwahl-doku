#!/usr/bin/env node
// Prüft die Weiterleitungsliste gegen die gebaute Website.
//
// Für jede alte Seiten-ID des bisherigen Online-Handbuchs steht in
// weiterleitungen.tsv die Zieladresse relativ zur Website (ohne baseUrl).
// Das Skript prüft, dass jedes Ziel als gebaute Seite unter website/build/
// existiert, und dass die Liste formal stimmt (Kopfzeile, zwei Spalten,
// keine doppelte ID, sortiert). Bei einem Fehler endet es mit Code 1.
//
// Aufruf aus der Wurzel des Repos, nach `npm run build` in website/:
//   node weiterleitungen/pruefen.mjs [build-verzeichnis]
//
// Keine Abhängigkeiten außer Node.js.

import {existsSync, readFileSync, statSync} from 'node:fs';
import {dirname, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const hier = dirname(fileURLToPath(import.meta.url));
const liste = join(hier, 'weiterleitungen.tsv');
const build = resolve(process.argv[2] ?? join(hier, '..', 'website', 'build'));
const KOPF = 'wiki_id\tziel';

const fehler = [];

if (!existsSync(join(build, 'index.html'))) {
  console.error(`Kein Bau-Ergebnis unter ${build}. Erst "npm run build" in website/ ausführen.`);
  process.exit(1);
}

const text = readFileSync(liste, 'utf8');
if (text.includes('\r')) fehler.push('Die Liste enthält CR-Zeichen; erwartet sind LF-Zeilenenden.');
if (!text.endsWith('\n')) fehler.push('Die Liste endet nicht mit einem Zeilenumbruch.');

const zeilen = text.replace(/\n$/, '').split('\n');
if (zeilen[0] !== KOPF) fehler.push(`Kopfzeile ist "${zeilen[0]}", erwartet "${KOPF.replace('\t', '\\t')}".`);

// Liefert die Datei, als die Docusaurus (trailingSlash: false) die Adresse baut.
function seitendatei(ziel) {
  if (ziel === '/') return join(build, 'index.html');
  const pfad = join(build, ...ziel.slice(1).split('/'));
  for (const kandidat of [`${pfad}.html`, join(pfad, 'index.html')]) {
    if (existsSync(kandidat) && statSync(kandidat).isFile()) return kandidat;
  }
  return null;
}

const gesehen = new Set();
let vorher = null;
let eintraege = 0;
for (const [i, zeile] of zeilen.slice(1).entries()) {
  const nr = i + 2;
  const spalten = zeile.split('\t');
  if (spalten.length !== 2 || !spalten[0] || !spalten[1]) {
    fehler.push(`Zeile ${nr}: erwartet zwei nicht leere Spalten, gefunden "${zeile}".`);
    continue;
  }
  const [id, ziel] = spalten;
  eintraege++;
  if (gesehen.has(id)) fehler.push(`Zeile ${nr}: ID "${id}" kommt mehrfach vor.`);
  gesehen.add(id);
  if (vorher !== null && id < vorher) fehler.push(`Zeile ${nr}: "${id}" steht nicht in sortierter Reihenfolge.`);
  vorher = id;
  if (!/^\/[^\s?#]*$/.test(ziel) || (ziel !== '/' && ziel.endsWith('/')) || ziel.includes('//')) {
    fehler.push(`Zeile ${nr}: Ziel "${ziel}" ist keine Adresse der Form /bereich/seite.`);
    continue;
  }
  if (!seitendatei(ziel)) fehler.push(`Zeile ${nr}: Ziel "${ziel}" (für "${id}") ist keine gebaute Seite.`);
}

if (eintraege === 0) fehler.push('Die Liste enthält keine Einträge.');

if (fehler.length > 0) {
  console.error(`Weiterleitungsliste fehlerhaft (${fehler.length} Fehler):`);
  for (const f of fehler) console.error(`  - ${f}`);
  process.exit(1);
}
console.log(`Weiterleitungsliste in Ordnung: ${eintraege} Einträge, alle Ziele gebaut.`);
