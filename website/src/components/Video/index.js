import React from 'react';
import styles from './styles.module.css';

// Eingebettetes Video, das sich der Spaltenbreite anpasst (Format 16:9).
export default function Video({src, title = 'Video'}) {
  return (
    <div className={styles.video}>
      <iframe src={src} title={title} allow="fullscreen" loading="lazy" />
    </div>
  );
}
