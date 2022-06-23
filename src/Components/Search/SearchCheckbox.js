import React from 'react';
import Input from '../Forms/Input';
import styles from './SearchCheckbox.module.css';
import useMedia from '../../Hooks/useMedia';

const SearchCheckbox = ({ categories, handleCheckboxSearch }) => {
  const mobile = useMedia('(max-width: 700px)');
  const [mobileMenu, setMobileMenu] = React.useState(false);
  return (
    <>
      {!mobile && (
        <div
          className={`${mobile ? styles.containerMobile : styles.container} 
           animeLeft`}
        >
          {(categories === null || categories.length === 0) && (
            <>
              <Input
                type="checkbox"
                placeholder="Sobremesa"
                name="Sobremesa"
                key="1"
              />
              <Input
                type="checkbox"
                placeholder="Bebidas"
                name="Bebidas"
                key="2"
              />
              <Input
                type="checkbox"
                placeholder="Prato Completo"
                name="Prato Completo"
                key="3"
              />
              <Input
                type="checkbox"
                placeholder="Promoções"
                name="Promoções"
                key="4"
              />
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
      )}
    </>
  );
};

export default SearchCheckbox;
