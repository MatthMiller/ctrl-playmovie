import React, { useContext } from 'react';
import { MoviesContext } from '../contexts/MoviesContext';
import Loading from './Loading';
import styles from './MoviesSearch.module.css';
import listStyles from './MoviesList.module.css';
import { FavoriteIcon } from './MoviesFavorites';

const MoviesSearch = () => {
  const { moviesSearch, errorState, loadingState } = useContext(MoviesContext);
  const { movieDescription, requestDescription } = useContext(MoviesContext);
  const { modalActivation, setModalActivation } = useContext(MoviesContext);
  const { API_KEY } = useContext(MoviesContext);

  const decrescentOrderFilter = (moviesObject) => {
    const yearToNumber = (string) =>
      +string.replace(/-[\s\S]*$/, '').replace('-', '');

    const newObject = [...moviesObject].sort((a, b) => {
      // b - a: decrescent, a - b: crescent
      return yearToNumber(b.Year) - yearToNumber(a.Year);
    });

    return newObject;
  };

  const handleClickOnMovie = (imdbID) => {
    console.log('imdbID atual:', imdbID);
    setModalActivation(imdbID);
  };

  React.useEffect(() => {
    if (modalActivation.length) {
      console.log('existe um imdbID', modalActivation);
      searchMovieDescription(modalActivation);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalActivation]);

  const searchMovieDescription = async (imdbID) => {
    await requestDescription(
      `http://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}&type=movie`
    );
    console.log(movieDescription);
  };

  return (
    <>
      <h3 className={listStyles.sectionTitle}>🎬 Filmes</h3>
      <section className={listStyles.moviesContainer}>
        {!errorState && moviesSearch?.Search ? (
          decrescentOrderFilter(...[moviesSearch.Search]).map((actualMovie) => (
            <div
              className={`${listStyles.movieCard} ${styles.entryAnimation}`}
              key={actualMovie.imdbID}
            >
              {actualMovie.Poster !== 'N/A' ? (
                <img
                  className={styles.moviePoster}
                  src={actualMovie.Poster !== 'N/A' ? actualMovie.Poster : null}
                  alt={`Imagem de poster do filme "${actualMovie.Title}"`}
                  onClick={() => handleClickOnMovie(actualMovie.imdbID)}
                />
              ) : (
                <div
                  onClick={() => handleClickOnMovie(actualMovie.imdbID)}
                  className={styles.noPoster}
                >
                  <p className={styles.movieTitle}>{actualMovie.Title}</p>
                  <p className={styles.imageNotFound}>
                    Imagem de poster indisponível
                  </p>
                </div>
              )}
              <div className={listStyles.favoriteTooltip}>
                <p>Favorite!</p>
                <FavoriteIcon />
              </div>
              <p
                className={listStyles.releaseYear}
              >{`(${actualMovie.Year})`}</p>
            </div>
          ))
        ) : (
          <div className={styles.noMovies}>
            {/* <Loading /> */}
            {loadingState ? (
              <div className={listStyles.spinnerContainer}>
                <Loading />
              </div>
            ) : (
              <div className={`${styles.noPoster} ${styles.noMovie}`}>
                <p className={styles.movieTitle}>
                  Nenhum filme foi encontrado com base nas buscas!
                </p>
              </div>
            )}
          </div>
        )}
      </section>
    </>
  );
};

export default MoviesSearch;
