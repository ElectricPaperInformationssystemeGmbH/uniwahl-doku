import React from 'react';
import styles from './styles.module.css';

// Stellt eine Markdown-Liste als Kachelraster dar. Jeder Listenpunkt ist ein
// einziger Link mit Symbol und Titel:
//
//   - [![](./img/symbol.svg) Titel](./ziel.md)
//
// So bleiben Links und Bilder normales Markdown: Docusaurus löst die Ziele auf,
// prüft sie beim Bau und bindet die Symbole ein.
export default function Kacheln({children}) {
  return <div className={styles.kacheln}>{children}</div>;
}
