import React, { useContext } from 'react';
import { MoviesContext } from '../contexts/MoviesContext';
import ImdbRatingStars from './ImdbRatingStars';
import Loading from './Loading';
import styles from './ModalMovieDescription.module.css';
import listStyles from './MoviesList.module.css';

const ModalMovieDescription = () => {
  const { modalActivation, setModalActivation } = useContext(MoviesContext);
  const { movieDescription, setMovieDescription, loadingDescription } =
    useContext(MoviesContext);

  const handleClickCloseModal = ({ target }) => {
    if (target.id === 'foraModal' || target.id === 'closeIcon') {
      setModalActivation(false);
      setMovieDescription(null);
    }
  };

  const CloseModalIcon = ({ id, closeModalCallback }) => {
    return (
      <svg
        id={id}
        onClick={closeModalCallback}
        className={styles.closeModalIcon}
        width='30'
        height='30'
        viewBox='0 0 30 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          className={styles.closeModalIconPath}
          d='M23.75 8.0125L21.9875 6.25L15 13.2375L8.0125 6.25L6.25 8.0125L13.2375 15L6.25 21.9875L8.0125 23.75L15 16.7625L21.9875 23.75L23.75 21.9875L16.7625 15L23.75 8.0125Z'
          fill='#8B8B8B'
        />
      </svg>
    );
  };

  return (
    <>
      {modalActivation.length ? (
        <div
          id='foraModal'
          className={
            loadingDescription
              ? `${styles.modalContainer} ${styles.loadingParent}`
              : styles.modalContainer
          }
          onClick={handleClickCloseModal}
        >
          <div className={styles.modal}>
            {loadingDescription ? (
              <Loading />
            ) : (
              <>
                <div className={styles.posterColumn}>
                  {movieDescription?.Poster !== 'N/A' ? (
                    <img
                      className={listStyles.moviePoster}
                      src={movieDescription?.Poster}
                      alt={`Imagem de poster do filme "${movieDescription?.Title}"`}
                    />
                  ) : (
                    <div className={listStyles.noPoster}>
                      <p className={listStyles.movieTitle}>
                        {movieDescription?.Title}
                      </p>
                      <p className={listStyles.imageNotFound}>
                        Imagem de poster indisponível
                      </p>
                    </div>
                  )}
                  <p className={styles.movieTitle}>{movieDescription?.Title}</p>
                  {movieDescription?.imdbRating !== 'N/A' ? (
                    <div className={styles.imdbRating}>
                      <ImdbRatingStars
                        imdbRating={movieDescription?.imdbRating}
                      />
                      <p className={styles.imdbRatingText}>Nota IMDb</p>
                    </div>
                  ) : null}
                </div>
                <div className={styles.infoColumn}>
                  <p className={styles.infoType}>
                    Ano:{' '}
                    <span className={styles.infoBody}>
                      {movieDescription?.Year}
                    </span>
                  </p>
                  <p className={styles.infoType}>
                    Diretor:{' '}
                    <b className={styles.infoBody}>
                      {movieDescription?.Director}
                    </b>
                  </p>
                  <p className={styles.infoType}>
                    Elenco:{' '}
                    <b className={styles.infoBody}>
                      {movieDescription?.Actors}
                    </b>
                  </p>
                  <p className={styles.infoType}>
                    Sinopse:{' '}
                    <b className={styles.infoBody}>{movieDescription?.Plot}</b>
                  </p>
                  <p className={styles.infoType}>
                    Duração:{' '}
                    <b className={styles.infoBody}>
                      {movieDescription?.Runtime}
                    </b>
                  </p>
                </div>
                <CloseModalIcon
                  id='closeIcon'
                  onClick={handleClickCloseModal}
                />
              </>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalMovieDescription;
