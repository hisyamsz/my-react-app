import { useContext, useEffect, useState } from 'react';
import CardProduct from '../components/Fragments/CardProduct';
import { getProducts } from '../services/product.service';
import { useLogin } from '../hooks/useLogin';
import TableCart from '../components/Fragments/TableCart';
import Navbar from '../components/Layouts/Navbar';
import { DarkMode } from '../context/DarkMode';

function ProductPage() {
  const [products, setProducts] = useState([]);
  useLogin();
  // eslint-disable-next-line no-unused-vars
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem('cart')) || []);
  // }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className={`flex justify-center py-8 ${isDarkMode && 'bg-slate-900'}`}>
        <div className="w-4/6 flex flex-wrap justify-center items-stretch  gap-2 p-2">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body title={product.title}>{product.description}</CardProduct.Body>
                <CardProduct.Footer id={product.id} price={product.price} />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6 p-4">
          <h1
            className={`text-3xl font-bold text-blue-800 ml-2 mb-4 ${isDarkMode && 'text-white'}`}
          >
            Cart
          </h1>
          <TableCart products={products} />
        </div>
      </div>
    </>
  );
}

export default ProductPage;
