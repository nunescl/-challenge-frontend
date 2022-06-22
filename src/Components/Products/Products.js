import React from 'react';
import { CAT_GET, PROD_GET } from '../../api';
import SeachBar from '../Search/SeachBar';
import SearchCheckbox from '../Search/SearchCheckbox';
import ProductsList from './ProductsList';

const Products = () => {
  const [search, setSearch] = React.useState('');
  const [categories, setCategories] = React.useState(null);
  const [products, setProducts] = React.useState(null);
  const [filter, setFilter] = React.useState('');

  React.useEffect(() => {
    CAT_GET(setCategories);
    PROD_GET(setProducts);
  }, []);

  const handleSearch = (event) => {
      let { value } = event.target;
      setSearch(value);
    },
    handleCheckboxSearch = (event) => {
      setFilter(event.target.placeholder);
    };

  const searchResult = products
    ? products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()),
      )
    : [];

  const searchCheckboxResult = products
    ? products.filter((product) => product.category.name.includes(filter))
    : [];

  const searchJoin = searchResult.filter((p) =>
    searchCheckboxResult.includes(p),
  );

  return (
    <div>
      <SearchCheckbox
        search={search}
        categories={categories}
        handleCheckboxSearch={handleCheckboxSearch}
      />
      <SeachBar search={search} handleSearch={handleSearch} />
      <ProductsList
        products={products}
        categories={categories}
        searchJoin={searchJoin}
      />
    </div>
  );
};

export default Products;
