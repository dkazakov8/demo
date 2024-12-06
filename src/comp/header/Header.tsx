import React from 'react';

import styles from './Header.scss';

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>Demo</div>
      </div>
    </div>
  );
}
