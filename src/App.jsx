import React from 'react';
import './App.css';
import Introduction from './components/Introduction';
import MoviesSearch from './components/MoviesSearch';
import { SearchContext } from './contexts/MoviesContext';
import ModalMovieDescription from './components/ModalMovieDescription';

// API: http://www.omdbapi.com/
// Postman pra testar a API: https://web.postman.co/workspace/49c6c795-ebbf-49c0-91fc-eecda4d2efad/request/23562650-a76d9184-3354-4684-b153-912512ca0b5a

const App = () => {
  return (
    <SearchContext>
      <Introduction />
      <ModalMovieDescription />
      <MoviesSearch />
      {/* <MoviesFavorites /> */}
    </SearchContext>
  );
};

export default App;
