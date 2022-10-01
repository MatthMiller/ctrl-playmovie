import React from 'react';

const useSearchMovies = () => {
  const [dataState, setDataState] = React.useState(null);
  const [errorState, setErrorState] = React.useState(false);
  const [loadingState, setLoadingState] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
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
      setDataState(json);
      setLoadingState(false);
      return { response, json };
    }
  }, []);

  return { dataState, setDataState, loadingState, errorState, request };
};

export default useSearchMovies;
