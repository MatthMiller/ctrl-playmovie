import React from 'react';
import useMovieDescription from '../customHooks/useMovieDescription';
import useSearchMovies from '../customHooks/useSearchMovies';

export const MoviesContext = React.createContext();

export const SearchContext = ({ children }) => {
  const {
    moviesSearch,
    setMoviesSearch,
    loadingState,
    errorState,
    requestMovies,
  } = useSearchMovies();
  const {
    movieDescription,
    setMovieDescription,
    loadingDescription,
    requestDescription,
  } = useMovieDescription();
  const [modalActivation, setModalActivation] = React.useState('');
  const API_KEY = '395d9b95';

  return (
    <MoviesContext.Provider
      value={{
        API_KEY,
        moviesSearch,
        setMoviesSearch,
        loadingState,
        errorState,
        requestMovies,
        movieDescription,
        setMovieDescription,
        loadingDescription,
        requestDescription,
        modalActivation,
        setModalActivation,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
