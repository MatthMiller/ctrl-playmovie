import React from 'react';
import useFetchAPI from '../customHooks/useFetchAPI';

export const MoviesContext = React.createContext();

export const SearchContext = ({ children }) => {
  const { dataState, loadingState, errorState, request } = useFetchAPI();
  const [modalActivation, setModalActivation] = React.useState(false);
  const API_KEY = '395d9b95';

  return (
    <MoviesContext.Provider
      value={{
        API_KEY,
        dataState,
        loadingState,
        errorState,
        request,
        modalActivation,
        setModalActivation,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
