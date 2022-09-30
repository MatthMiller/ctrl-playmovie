import React, { useContext } from 'react';
import { MoviesContext } from '../contexts/MoviesContext';
import Loading from './Loading';
import styles from './MoviesSearch.module.css';
import listStyles from './MoviesList.module.css';
import { FavoriteIcon } from './MoviesFavorites';

const MoviesSearch = () => {
  const { dataState, errorState, loadingState } = useContext(MoviesContext);

  // Se eu for fazer um componente p escolher crescente/decrescente,
  // caberia o parâmetro que recebe o estado da escolha, e baseado nela,
  // o return invés de ser só de ser o b antes do a, é
  // {estado == 'crescente' ? yearToNumber(a.Year) - yearToNumber(b.Year)
  // : yearToNumber(a.Year) - yearToNumber(b.Year)}
  const decrescentOrderFilter = (moviesObject) => {
    const yearToNumber = (string) =>
      +string.replace(/-[\s\S]*$/, '').replace('-', '');

    const newObject = [...moviesObject].sort((a, b) => {
      // b - a: decrescent, a - b: crescent
      return yearToNumber(b.Year) - yearToNumber(a.Year);
    });

    return newObject;
  };

  return (
    <>
      <h3 className={listStyles.sectionTitle}>🎬 Filmes</h3>
      <section className={listStyles.moviesContainer}>
        {!errorState && dataState?.Search ? (
          decrescentOrderFilter(...[dataState.Search]).map((actualMovie) => (
            <div
              className={`${listStyles.movieCard} ${styles.entryAnimation}`}
              key={actualMovie.imdbID}
            >
              {actualMovie.Poster !== 'N/A' ? (
                <img
                  className={styles.moviePoster}
                  src={actualMovie.Poster !== 'N/A' ? actualMovie.Poster : null}
                  alt={`Imagem de poster do filme "${actualMovie.Title}"`}
                />
              ) : (
                <div className={styles.noPoster}>
                  <p className={styles.movieTitle}>{actualMovie.Title}</p>
                  <p className={styles.imageNotFound}>
                    Imagem de poster indisponível
                  </p>
                </div>
              )}
              <div className={listStyles.favoriteTooltip}>
                {/* trocar por um componente de svg da estrela.
                  O estado de amarelo é baseado no fato de se o 
                actualMovie.imdbID está contido nos favoritos*/}
                {/* onClick={(actualMovie.imdbID) => Link:seilaoq}
                  ver como fazer linha acima pra gerar uma rota baseada
                no imdbID. Na verdade serão modais com as info */}
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
