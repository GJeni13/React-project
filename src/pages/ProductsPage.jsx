// src/pages/ProductsPage.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductsPage = ({ cart, addToCart, removeFromCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const isInCart = (id) => cart.some(item => item.id === id);

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <div key={product.id} className="border p-4 rounded-md shadow transition-transform transform hover:scale-105">
          <img src={product.image} alt={product.title} className="h-48 object-cover mb-4" />
          <h2 className="text-xl font-bold">{product.title}</h2>
          <p className='font-semibold text-2xl'>${product.price}</p>
          <div className="mt-2">
            {isInCart(product.id) ? (
              <button
                onClick={() => removeFromCart(product.id)}
                className="bg-red-500 text-white px-4 py-2 font-semibold rounded-lg  hover:bg-red-700"
              >
                Remove from Cart
              </button>
            ) : (
              <Link to={`/products/${product.id}`}>
                <button className="bg-yellow-500 text-white font-semibold text-xl px-4 py-2 rounded-lg hover:scale-95 hover:bg-green-400">
                  Add to Cart
                </button>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
