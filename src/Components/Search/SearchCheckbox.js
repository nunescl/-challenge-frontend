import React from 'react';
import Input from '../Forms/Input';
import styles from './SearchCheckbox.module.css';

const SearchCheckbox = ({ categories, handleCheckboxSearch }) => {
  function handleInputChange(event) {
    console.log(event.target.name);
  }

  return (
    <div className={`${styles.wrapper} animeLeft`}>
      {(categories === null || categories.length === 0) && (
        <>
          <Input type="checkbox" name="Sobremesa" key="1" />
          <Input type="checkbox" name="Bebidas" key="2" />
          <Input type="checkbox" name="Prato Completo" key="3" />
          <Input type="checkbox" name="Promoções" key="4" />
        </>
      )}
      {categories &&
        categories.map((category) => (
          <Input
            placeholder={category.name}
            type="radio"
            name="CategorySearch"
            key={category.id}
            onChange={handleCheckboxSearch}
          />
        ))}
    </div>
  );
};

export default SearchCheckbox;
