import React from 'react';
import useMovieDescription from '../customHooks/useMovieDescription';
import useSearchMovies from '../customHooks/useSearchMovies';

export const MoviesContext = React.createContext();

export const SearchContext = ({ children }) => {
  const { dataState, loadingState, errorState, request } = useSearchMovies();
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
        dataState,
        loadingState,
        errorState,
        request,
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
