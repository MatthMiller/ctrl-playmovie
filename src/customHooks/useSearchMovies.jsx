import React from 'react';

const useSearchMovies = () => {
  const [moviesSearch, setMoviesSearch] = React.useState(null);
  const [errorState, setErrorState] = React.useState(false);
  const [loadingState, setLoadingState] = React.useState(null);

  const requestMovies = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setErrorState(null);
      setLoadingState(true);
      response = await fetch(url, options);
      json = await response.json();
      if (response.Error) throw new Error(json.Error);
    } catch (err) {
      json = null;
      setErrorState(err.message);
    } finally {
      setMoviesSearch(json);
      setLoadingState(false);
      return { response, json };
    }
  }, []);

  return {
    moviesSearch,
    setMoviesSearch,
    loadingState,
    errorState,
    requestMovies,
  };
};

export default useSearchMovies;
