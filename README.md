# uniwahl-doku

## Zweck

Dieses Repo enthält die Anwenderdokumentation von uniWAHL. Daraus entsteht automatisch eine Website auf GitHub Pages:
<https://electricpaperinformationssystemegmbh.github.io/uniwahl-doku/>

Die Inhalte ziehen schrittweise aus dem bisherigen Online-Handbuch hierher um.

## Aufbau des Repos

| Pfad | Inhalt |
| --- | --- |
| `website/docs/` | Die Seiten der Dokumentation als Markdown, je Bereich ein Ordner: `funktionen/`, `handbuch/`, `tutorium/`, `faq/`, `releases/`, `download/`; Bilder je Ordner unter `img/` |
| `weiterleitungen/` | Liste der alten Adressen des bisherigen Online-Handbuchs mit ihrem neuen Ziel und ihre Prüfung (`node weiterleitungen/pruefen.mjs` nach dem Bau) |
| `website/sidebars.js` | Reihenfolge der Seiten in der Seitenleiste |
| `website/docusaurus.config.js` | Einstellungen der Website (Titel, Fußzeile, Suche) |
| `website/static/` | Dateien, die unverändert ausgeliefert werden, z. B. Bilder |
| `beispiele/` | Beispielcode (folgt später) |
| `.github/workflows/` | Bau, Veröffentlichung und PR-Vorschau |

Die Website wird mit [Docusaurus](https://docusaurus.io/) gebaut. Für das Ändern von Seiten genügt Markdown.

## So ändere ich eine Seite

1. Zweig anlegen, z. B. `git checkout -b faq-briefwahl`.
2. Die Datei unter `website/docs/` ändern oder neu anlegen. Eine neue Seite zusätzlich in `website/sidebars.js` eintragen.
3. Lokal ansehen (Node.js 20 oder neuer nötig):

   ```sh
   cd website && npm ci && npm start
   ```

   Die Seite öffnet sich im Browser und lädt bei jeder Änderung neu.
4. Änderung committen, Zweig pushen und einen Pull Request gegen `master` öffnen.
5. Nach wenigen Minuten schreibt GitHub einen Kommentar mit dem **Vorschau-Link** in den Pull Request. Diesen Link an die Fachkollegen geben; er funktioniert ohne GitHub-Konto.
6. Nach der Freigabe den Pull Request per **Squash-Merge** übernehmen.

Kaputte Links lassen den Bau scheitern. Ist der Pull Request rot, zeigt das Protokoll des Laufs „website“ die betroffene Stelle.

## Veröffentlichung

- Jeder Push auf `master` baut die Website und veröffentlicht sie in den Zweig `gh-pages`, aus dem GitHub Pages ausliefert.
- Jeder Pull Request bekommt eine eigene Vorschau unter `pr-preview/pr-<nummer>/` im selben Zweig. Sie wird beim Schließen des Pull Request wieder entfernt.
- Der Zweig `gh-pages` wird nur von den Workflows beschrieben, nie von Hand.

## Lizenz

Das Repo hat zwei Bereiche mit unterschiedlicher Lizenz:

- **Dokumentation** (`website/`): © Electric Paper Informationssysteme GmbH, alle Rechte vorbehalten. Siehe [website/LICENSE](website/LICENSE).
- **Beispielcode** (`beispiele/`): MIT No Attribution (MIT-0), frei verwendbar ohne Namensnennung. Siehe [beispiele/LICENSE](beispiele/LICENSE).

Alles andere (Konfiguration und Workflows im Wurzelverzeichnis) gehört zum Bereich Dokumentation.
