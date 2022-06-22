import React from 'react';
import styles from './ProductsModal.module.css';
import { PROD_DELETE } from '../../api';

const ProductsModal = ({ closeModal, product }) => {
  function handleDelete() {
    PROD_DELETE(product.id);
  }

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.title}>
          <h1>Apagar Produto</h1>
        </div>
        <div className={styles.body}>
          <p>Deseja realmente apagar esse produto?</p>
        </div>
        <div className={styles.footer}>
          <button onClick={handleDelete} id={styles.deleteBtn}>
            Sim, apagar
          </button>
          <button onClick={() => closeModal(false)}>Não</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsModal;
