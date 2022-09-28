import React from 'react';
import { MoviesContext } from '../contexts/MoviesContext';
import Loading from './Loading';
import styles from './MoviesSearch.module.css';

const Movies = () => {
  const { dataState, errorState, loadingState } =
    React.useContext(MoviesContext);

  // ordenar o dataState com um filter interno e usar map
  // nele na hora de  mostrar

  return (
    <>
      <h3 className={styles.sectionTitle}>🎬 Filmes</h3>
      <section className={styles.moviesContainer}>
        {!errorState && dataState?.Search
          ? dataState.Search.map((actualMovie) => (
              <div
                className={`${styles.movieCard} ${styles.entryAnimation}`}
                key={actualMovie.imdbID}
              >
                {actualMovie.Poster !== 'N/A' ? (
                  <img
                    className={styles.moviePoster}
                    src={
                      actualMovie.Poster !== 'N/A' ? actualMovie.Poster : null
                    }
                    alt={`Imagem de poster do filme "${actualMovie.Title}"`}
                    // onClick={(actualMovie.imdbID) => Link:seilaoq}
                    // ver como fazer linha acima pra gerar uma rota baseada
                    // no imdbID. Na verdade serão modais com as info
                  ></img>
                ) : (
                  <div className={styles.noPoster}>
                    <p className={styles.movieTitle}>{actualMovie.Title}</p>
                    <p className={styles.imageNotFound}>
                      Imagem de poster indisponível
                    </p>
                  </div>
                )}
                <p className={styles.releaseYear}>{`(${actualMovie.Year})`}</p>
              </div>
            ))
          : null}
        {loadingState ? <Loading /> : null}
      </section>
    </>
  );
};

export default Movies;
