import React from 'react';

const useFetchAPI = () => {
  const [fullMovieDescription, setFullMovieDescription] = React.useState(null);
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
      if (json.Error) throw new Error(json.Error);
    } catch (err) {
      json = null;
      setErrorState(err.message);
    } finally {
      setFullMovieDescription(json);
      setLoadingState(false);
      return { response, json };
    }
  }, []);

  return { fullMovieDescription, loadingState, errorState, request };
};

export default useFetchAPI;
