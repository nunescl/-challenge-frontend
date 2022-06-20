import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Products from './Components/Products/Products';
import ProductsCreate from './Components/Products/ProductsCreate';
import ProductsEdit from './Components/Products/ProductsEdit';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/create" element={<ProductsCreate />} />
        <Route path="/update/:id" element={<ProductsEdit />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
