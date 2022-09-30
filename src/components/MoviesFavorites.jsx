import React from 'react';
// import styles from './MoviesFavorites.module.css';
import listStyles from './MoviesList.module.css';

export const FavoriteIcon = () => {
  return (
    <svg
      className={listStyles.favoriteIcon}
      width='22'
      height='20'
      viewBox='0 0 22 20'
      fill='current'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        className={listStyles.favoriteIconPath}
        d='M11 0L13.4697 7.60081H21.4616L14.996 12.2984L17.4656 19.8992L11 15.2016L4.53436 19.8992L7.00402 12.2984L0.538379 7.60081H8.53035L11 0Z'
        fill='#474747'
      />
    </svg>
  );
};

const MoviesFavorites = () => {
  return (
    <>
      <h3 className={listStyles.sectionTitle}>⭐️ Favoritos</h3>
      {/* Usar um custom hook para localStorage */}
    </>
  );
};

export default MoviesFavorites;
