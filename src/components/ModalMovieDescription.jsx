import React, { useContext } from 'react';
import { MoviesContext } from '../contexts/MoviesContext';
import styles from './ModalMovieDescription.module.css';

const ModalMovieDescription = () => {
  const { modalActivation, setModalActivation } = useContext(MoviesContext);

  const handleClickCloseModal = ({ target }) => {
    if (target.id === 'foraModal' || target.id === 'botaoFechar') {
      setModalActivation(false);
      console.log('handleclick do modal funcionando');
    }
  };

  return (
    <>
      {modalActivation ? (
        <div
          id='foraModal'
          className={styles.modalContainer}
          onClick={handleClickCloseModal}
        >
          <div className={styles.modal}>ModalMovieDescription</div>
        </div>
      ) : null}
    </>
  );
};

export default ModalMovieDescription;
