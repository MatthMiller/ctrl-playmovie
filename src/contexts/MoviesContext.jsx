import React from 'react';
import useFetchAPI from '../customHooks/useFetchAPI';

export const MoviesContext = React.createContext();

export const SearchContext = ({ children }) => {
  const { dataState, loadingState, errorState, request } = useFetchAPI();
  const API_KEY = '395d9b95';

  return (
    <MoviesContext.Provider
      value={{ API_KEY, dataState, loadingState, errorState, request }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
