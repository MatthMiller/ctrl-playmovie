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
        d='M10.8098 0.58541C10.8697 0.401147 11.1303 0.401148 11.1902 0.58541L13.4248 7.46262C13.4515 7.54502 13.5283 7.60081 13.615 7.60081H20.8461C21.0398 7.60081 21.1204 7.84874 20.9636 7.96262L15.1135 12.213C15.0434 12.2639 15.0141 12.3542 15.0409 12.4366L17.2754 19.3138C17.3353 19.498 17.1244 19.6513 16.9677 19.5374L11.1176 15.287C11.0475 15.2361 10.9525 15.2361 10.8824 15.287L5.03234 19.5374C4.8756 19.6513 4.6647 19.498 4.72457 19.3138L6.95911 12.4366C6.98589 12.3542 6.95656 12.2639 6.88646 12.213L1.03636 7.96262C0.879615 7.84874 0.960171 7.60081 1.15392 7.60081H8.38504C8.47168 7.60081 8.54847 7.54502 8.57525 7.46262L10.8098 0.58541Z'
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
