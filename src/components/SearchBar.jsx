import React from 'react';
import { MoviesContext } from '../contexts/MoviesContext';
import styles from './SearchBar.module.css';
import debounce from 'lodash.debounce';

const SearchIcon = () => {
  return (
    <svg
      className={styles.searchIcon}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='current'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        className={styles.searchIconPath}
        d='M19.4746 20.775L13.2746 14.575C12.7913 14.975 12.2289 15.2873 11.5876 15.512C10.9456 15.7373 10.2663 15.85 9.54961 15.85C7.78294 15.85 6.28694 15.2373 5.06161 14.012C3.83694 12.7873 3.22461 11.2917 3.22461 9.52501C3.22461 7.75835 3.83294 6.26235 5.04961 5.03701C6.26628 3.81235 7.75794 3.20001 9.52461 3.20001C11.3079 3.20001 12.8123 3.81235 14.0376 5.03701C15.2623 6.26235 15.8746 7.75835 15.8746 9.52501C15.8746 10.2417 15.7623 10.9207 15.5376 11.562C15.3123 12.204 14.9996 12.775 14.5996 13.275L20.7996 19.45L19.4746 20.775ZM9.54961 13.975C10.7829 13.975 11.8329 13.5417 12.6996 12.675C13.5663 11.8083 13.9996 10.7583 13.9996 9.52501C13.9996 8.27501 13.5663 7.22068 12.6996 6.36201C11.8329 5.50401 10.7829 5.07501 9.54961 5.07501C8.29961 5.07501 7.24561 5.50401 6.38761 6.36201C5.52894 7.22068 5.09961 8.27501 5.09961 9.52501C5.09961 10.7583 5.52894 11.8083 6.38761 12.675C7.24561 13.5417 8.29961 13.975 9.54961 13.975Z'
        fill='#737373'
      />
    </svg>
  );
};

const SearchDateIcon = () => {
  return (
    <svg
      className={styles.searchDateIcon}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='current'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        className={styles.searchDateIcon}
        d='M7 14V12H17V14H7ZM7 18V16H14V18H7ZM5 22C4.45 22 3.979 21.8043 3.587 21.413C3.19567 21.021 3 20.55 3 20V6C3 5.45 3.19567 4.97933 3.587 4.588C3.979 4.196 4.45 4 5 4H6V2H8V4H16V2H18V4H19C19.55 4 20.021 4.196 20.413 4.588C20.8043 4.97933 21 5.45 21 6V20C21 20.55 20.8043 21.021 20.413 21.413C20.021 21.8043 19.55 22 19 22H5ZM5 20H19V10H5V20Z'
        fill='#737373'
      />
    </svg>
  );
};

const SearchBar = ({ searchPlaceholder, yearPlaceholder }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [yearTerm, setYearTerm] = React.useState('');
  const { setMoviesSearch, requestMovies, API_KEY } =
    React.useContext(MoviesContext);

  React.useEffect(() => {
    if (searchTerm !== '') {
      console.log(
        'Termo sendo pesquisado: ',
        searchTerm.trim() + yearTerm.trim()
      );
      // searchMovies(searchTerm.trim(), yearTerm.trim());
      setMoviesSearch(null);
      debouncedSearchMovies(searchTerm.trim(), yearTerm.trim());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, yearTerm]);

  const handleSearchChange = ({ target }) => {
    setSearchTerm(target.value);
    // Pra verificar como está o data state
    // if (dataState) console.log(dataState);
  };

  const handleYearChange = ({ target }) => {
    setYearTerm(target.value);
  };

  const debouncedSearchMovies = debounce(
    (search, year) => searchMovies(search, year),
    100
  );

  const searchMovies = async (search, year) => {
    await requestMovies(
      `http://www.omdbapi.com/?s=${search}&y=${year}&apikey=${API_KEY}&type=movie`
    );
  };

  return (
    <div className={styles.inputsContainer}>
      <div className={styles.barContainer}>
        <input
          className={styles.searchBar}
          type='text'
          value={searchTerm}
          onChange={handleSearchChange}
          onBlur={handleSearchChange}
          id='filmes'
          spellCheck={false}
          placeholder={searchPlaceholder}
        />
        <label htmlFor='filmes'>
          <SearchIcon />
        </label>
      </div>

      <div className={styles.barContainer}>
        <input
          className={styles.searchBar}
          type='text'
          value={yearTerm}
          onChange={handleYearChange}
          onBlur={handleYearChange}
          id='yearBar'
          spellCheck={false}
          placeholder={yearPlaceholder}
        />
        <label htmlFor='yearBar'>
          <SearchDateIcon />
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
