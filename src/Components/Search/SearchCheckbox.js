import React from 'react';
import Input from '../Forms/Input';
import styles from './SearchCheckbox.module.css';

const SearchCheckbox = ({ categories, handleSearch }) => {
  return (
    <div className={`${styles.wrapper} animeLeft`}>
      {(categories === null || categories.length === 0) && (
        <>
          <Input type="checkbox" name="Sobremesa" id="1" />
          <Input type="checkbox" name="Bebidas" id="2" />
          <Input type="checkbox" name="Prato Completo" id="3" />
          <Input type="checkbox" name="Promoções" id="4" />
        </>
      )}
      {categories &&
        categories.map((category) => (
          <Input
            value=""
            type="checkbox"
            name={category.name}
            id={category.id}
          />
        ))}
    </div>
  );
};

export default SearchCheckbox;
