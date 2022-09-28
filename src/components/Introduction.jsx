import React from 'react';
import styles from './Introduction.module.css';
import SearchBar from './SearchBar';

const LogoIcon = () => {
  return (
    <svg
      width='56'
      height='60'
      viewBox='0 0 56 60'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5 8.55V51.45C4.15 50.6 3.35 49.7 2.6 48.75C1.85 47.8 1.15 46.825 0.5 45.825V14.175C1.15 13.175 1.85 12.2 2.6 11.25C3.35 10.3 4.15 9.4 5 8.55ZM17 1.35V58.65C15.95 58.3 14.925 57.913 13.925 57.489C12.925 57.063 11.95 56.575 11 56.025V3.975C11.95 3.425 12.925 2.937 13.925 2.511C14.925 2.087 15.95 1.7 17 1.35ZM38 57.525V2.475C43.3 4.825 47.625 8.45 50.975 13.35C54.325 18.25 56 23.8 56 30C56 36.2 54.325 41.75 50.975 46.65C47.625 51.55 43.3 55.175 38 57.525ZM26 60C25.5 60 25 59.988 24.5 59.964C24 59.938 23.5 59.9 23 59.85V0.15C23.5 0.0999999 24 0.0620003 24.5 0.0360003C25 0.0120003 25.5 0 26 0C27 0 28 0.0499999 29 0.15C30 0.25 31 0.4 32 0.6V59.4C31 59.6 30 59.75 29 59.85C28 59.95 27 60 26 60Z'
        fill='#EA7322'
      />
    </svg>
  );
};

const Introduction = () => {
  return (
    <section className={styles.introContainer}>
      <div className={styles.logo}>
        <LogoIcon />
        <h1 className={styles.logoText}>
          Ctrl+Play<b className={styles.contrastText}>Movie</b>
        </h1>
      </div>
      <h2 className={styles.introText}>
        Procure e encontre informações sobre{' '}
        <b className={styles.contrastText}>qualquer filme!</b>
      </h2>

      <SearchBar placeholder='Nome do filme' />
    </section>
  );
};

export default Introduction;
