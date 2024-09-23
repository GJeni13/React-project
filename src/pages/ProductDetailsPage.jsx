// src/pages/ProductDetailsPage.jsx
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProductDetailsPage = ({ cart, addToCart, removeFromCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const isInCart = cart.some(item => item.id === product.id);

  return (
    <div className="container mx-auto p-6">
      <img src={product.image} alt={product.title} className="h-64 object-cover mb-4" />
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className='text-2xl font-semibold'>${product.price}</p>
      <p className="mt-4 text-xl">{product.description}</p>
      <button
        onClick={isInCart ? () => removeFromCart(product.id) : () => addToCart(product)}
        className={`mt-4 px-4 py-2 rounded-lg ${isInCart ? 'bg-red-500 hover:bg-red-700' : 'bg-yellow-400 hover:bg-green-500'} text-white`}
      >
        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductDetailsPage;
