import React from 'react';
import { ReactComponent as Leaf } from '../../Assets/leaf.svg';
import styles from './ProductsList.module.css';
import { ReactComponent as Pencil } from '../../Assets/pencil.svg';
import { ReactComponent as Trash } from '../../Assets/trash.svg';
import ProductsModal from './ProductsModal';
import useMedia from '../../Hooks/useMedia';

const ProductsList = ({ searchJoin }) => {
  const [modal, setModal] = React.useState(false);
  const mobile = useMedia('(max-width: 700px)');

  return (
    <>
      {(searchJoin === null || searchJoin.length === 0) && (
        <div
          className={`${
            mobile ? styles.wrapperMobile : styles.wrapper
          } animeLeft`}
        >
          <Leaf />
          <div className={`${mobile ? styles.holderMobile : styles.holder}`}>
            <h2>Ops! Nenhum produto encontrado!</h2>
            <p>
              Cadastre o seu primeiro produto e comece a vender agora mesmo.
            </p>
            <a href="/create" className={styles.createBtn}>
              Cadastrar produtos
            </a>
          </div>
        </div>
      )}
      <div className={`${styles.productsWrapper} animeLeft`}>
        {searchJoin &&
          searchJoin.map((product) => (
            <div key={product.id}>
              <div
                className={`${
                  product.disponibility === false
                    ? styles.productsUnavailableHolder
                    : styles.productsHolder
                }`}
              >
                <img
                  src={`https://bootcamp-challenge.herokuapp.com/products/img/${product.image}/`}
                  height="155px"
                  width="146px"
                  alt="imagem não encontrada"
                />
                <div className={styles.productDesc}>
                  <h3>{product.name}</h3>
                  <h4>Serve {product.personCount} pessoa(s)</h4>
                  <p>{product.description}</p>
                  <h5>R$ {product.price}</h5>
                </div>
                <div className={styles.productIcons}>
                  <a href={`/update/${product.id}`}>
                    <Pencil />
                  </a>
                  <button onClick={() => setModal(true)}>
                    <Trash />
                  </button>
                </div>
              </div>
              {modal && (
                <ProductsModal closeModal={setModal} product={product} />
              )}
            </div>
          ))}
        {!(searchJoin === null || searchJoin.length === 0) && (
          <div className={styles.wrapperBtn2}>
            <a href="/create" className={styles.createBtn}>
              Cadastrar mais produtos
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductsList;
