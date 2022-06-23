import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import styles from './SearchBar.module.css';
import useMedia from '../../Hooks/useMedia';

const SeachBar = ({ search, handleSearch }) => {
  const mobile = useMedia('(max-width: 700px)');

  return (
    <>
      {' '}
      <div
        className={`${
          mobile ? styles.containerMobile : styles.container
        } animeLeft`}
      >
        <div
          className={`${mobile ? styles.wrapperMobile : styles.wrapper}`}
          onClick={() => window.location.reload()}
        >
          <FiShoppingBag className={styles.icon} />
          <h2>Produtos Cadastrados</h2>
        </div>
        <div className={styles.wrapperSearchBar}>
          <input
            className={styles.inputSearch}
            type="search"
            value={search}
            onChange={handleSearch}
          ></input>
        </div>

        <div className={mobile ? styles.orderMobile : styles.order}>
          <select name="" id="">
            <option value="" disabled selected>
              {!mobile && 'Ordenar por (1)'}
              {mobile && 'Ordenar'}
            </option>
            <option value="">Maior preço</option>
            <option value="">Menor Preço</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default SeachBar;
