import { Router } from 'compSystem/Router';
import { Header } from 'comp/header';

import styles from './App.scss';

export function App() {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <Router />
      </div>
    </>
  );
}
