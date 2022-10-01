import React from 'react';

const useMovieDescription = () => {
  const [movieDescription, setMovieDescription] = React.useState(null);
  const [errorState, setErrorState] = React.useState(false);
  const [loadingDescription, setLoadingDescription] = React.useState(null);

  const requestDescription = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setErrorState(null);
      setLoadingDescription(true);
      response = await fetch(url, options);
      json = await response.json();
      if (response.Error) throw new Error(json.Error);
    } catch (err) {
      json = null;
      setErrorState(err.message);
    } finally {
      setMovieDescription(json);
      setLoadingDescription(false);
      return { response, json };
    }
  }, []);

  return {
    movieDescription,
    setMovieDescription,
    loadingDescription,
    setLoadingDescription,
    errorState,
    requestDescription,
  };
};

export default useMovieDescription;
