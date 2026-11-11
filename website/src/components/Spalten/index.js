import React from 'react';
import styles from './styles.module.css';

// Zwei oder mehr Spalten nebeneinander. Die Breite jeder Spalte ergibt sich aus
// ihrem Anteil (anteil={1} neben anteil={2} = ein Drittel zu zwei Dritteln).
// Auf schmalen Bildschirmen stehen die Spalten in ihrer Reihenfolge untereinander.
export default function Spalten({children}) {
  return <div className={styles.spalten}>{children}</div>;
}

export function Spalte({anteil = 1, children}) {
  return (
    <div className={styles.spalte} style={{flexGrow: anteil}}>
      {children}
    </div>
  );
}
