import React from 'react';
import './App.css';
import useFetchAPI from './customHooks/useFetchAPI';
import Introduction from './components/Introduction';
import MoviesSearch from './components/MoviesSearch';
import { SearchContext } from './contexts/MoviesContext';

// API: http://www.omdbapi.com/
// Postman pra testar a API: https://web.postman.co/workspace/49c6c795-ebbf-49c0-91fc-eecda4d2efad/request/23562650-a76d9184-3354-4684-b153-912512ca0b5a
// Voltar a ver vídeo do cara q fez tutorial do omdbapi (?)

const App = () => {
  const { dataState, loadingState } = useFetchAPI();

  React.useEffect(() => {
    if (dataState) console.log(dataState);
  }, [dataState]);

  return (
    <SearchContext>
      <Introduction />

      {loadingState ? <p>Carregando...</p> : null}

      {/* Para mostrar em ordem de lançamento ou mostrar gêneros (nome inglês teria
      equivalente em português no select. teria q fazer um filter interno baseado 
      nisso, pós fetch, só que teria q ser feito n vezes */}

      <MoviesSearch />
    </SearchContext>
  );
};

export default App;
