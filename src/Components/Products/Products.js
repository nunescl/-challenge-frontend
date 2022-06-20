import axios from 'axios';
import React from 'react';
import SeachBar from '../Search/SeachBar';
import SearchCheckbox from '../Search/SearchCheckbox';
import ProductsList from './ProductsList';

const Products = () => {
  const [search, setSearch] = React.useState('');
  const [categories, setCategories] = React.useState(null);
  const [products, setProducts] = React.useState(null);

  React.useEffect(() => {
    axios
      .get('http://bootcamp-challenge.herokuapp.com/categories')
      .then((response) => {
        setCategories(response.data);
      });
    axios
      .get('http://bootcamp-challenge.herokuapp.com/products')
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  const handleSearch = (event) => {
    let { value, checked, type } = event.target;
    if (type === 'checkbox') value = checked;
    setSearch(value);
  };

  const searchResult = products
    ? products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()),
      )
    : [];

  const filterCheckbox = products
    ? products.filter((product) => product.category.name.includes(search))
    : [];

  // console.log(products);

  return (
    <div>
      <SearchCheckbox handleSearch={handleSearch} categories={categories} />
      <SeachBar search={search} handleSearch={handleSearch} />
      <ProductsList
        products={products}
        categories={categories}
        searchResult={searchResult}
        filterCheckbox={filterCheckbox}
      />
    </div>
  );
};

export default Products;
