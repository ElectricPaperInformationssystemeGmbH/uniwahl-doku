// @ts-check

// Basis-Pfad der Seite. Vorgabe ist der Pfad der veröffentlichten Seite auf
// GitHub Pages. Die PR-Vorschau liegt unter /uniwahl-doku/pr-preview/pr-<nr>/
// und setzt DOKU_BASE_URL beim Bau; mit festem Pfad würden dort Skripte,
// Stile und Bilder nicht geladen.
const baseUrl = process.env.DOKU_BASE_URL || '/uniwahl-doku/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'uniWAHL – Dokumentation',
  url: 'https://electricpaperinformationssystemegmbh.github.io',
  baseUrl,
  organizationName: 'ElectricPaperInformationssystemeGmbH',
  projectName: 'uniwahl-doku',
  // Ausdrücklich false: Docusaurus schreibt jede Seite als <seite>.html, und
  // GitHub Pages liefert /<seite> ohne Umleitung aus. So gibt es je Seite genau
  // eine Adresse, und relative Links verhalten sich in Veröffentlichung und
  // Vorschau gleich.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  markdown: {
    hooks: {onBrokenMarkdownLinks: 'throw'},
  },
  i18n: {defaultLocale: 'de', locales: ['de']},
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Ausdrücklich false: Ziffern vor Datei- und Ordnernamen bleiben Teil
          // der Adresse. So folgen die Pfade 1:1 den Seiten-IDs des bisherigen
          // Online-Handbuchs (/handbuch/4_vorbereitung/4-3_wahl_konfigurieren),
          // und die Weiterleitungsliste bleibt einfach.
          numberPrefixParser: false,
        },
        blog: false,
      }),
    ],
  ],
  themes: [
    [
      // Lokale Volltextsuche: der Index entsteht beim Bau und wird mit der
      // Seite ausgeliefert, es wird kein fremder Dienst angefragt.
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['de'],
        indexBlog: false,
        docsRouteBasePath: '/',
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'uniWAHL – Dokumentation',
        items: [
          {type: 'docSidebar', sidebarId: 'doku', position: 'left', label: 'Dokumentation'},
        ],
      },
      footer: {
        links: [
          {label: 'Impressum', href: 'https://wahlen-organisieren.de/impressum/'},
          {label: 'Datenschutz', href: 'https://wahlen-organisieren.de/datenschutz/'},
        ],
        copyright: `© ${new Date().getFullYear()} Electric Paper Wahlsysteme`,
      },
    }),
};

module.exports = config;
