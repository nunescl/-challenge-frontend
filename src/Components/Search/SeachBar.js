import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import styles from './SearchBar.module.css';

const SeachBar = ({ search, handleSearch }) => {
  return (
    <div className={`${styles.container} animeLeft`}>
      <div className={styles.wrapper} onClick={() => window.location.reload()}>
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

      <div className={styles.order}>
        <select name="" id="">
          <option value="" disabled selected>
            Ordenar por (1)
          </option>
          <option value="">Maior preço</option>
          <option value="">Menor Preço</option>
        </select>
      </div>
    </div>
  );
};

export default SeachBar;
