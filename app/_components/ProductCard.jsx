"use client"
import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const totalPrice = (product.price * quantity).toFixed(2);

  const handleIncreaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1)); // Prevents quantity from going below 1
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} of ${product.title} to the cart!`);
  };

  return (
    <div
      className="product-card w-64 h-72 p-4 bg-white shadow-lg rounded-lg flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl"
      style={{
        border: '2px solid #71eb34',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)', // Enhanced shadow effect
        transition: 'all 0.3s ease-in-out' // Smooth transition for all properties
      }}
    >
      <div className="flex-grow flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-32 h-28 object-contain rounded-t-lg"
          style={{
            maxWidth: '100%',
            maxHeight: '100%'
          }}
        />
      </div>
      <h2 className="text-lg font-bold text-gray-800 mt-2 text-center">{product.title}</h2>
      <p className="text-xl font-semibold mt-2 text-center" style={{ color: '#71eb34' }}>
        ₹{totalPrice}
      </p>
      <div className="flex items-center mt-2 justify-between font-bold">
        <div className="text-gray-700">Quantity</div>
        <div className="flex items-center">
          <button 
            onClick={handleDecreaseQuantity}
            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full transition-colors duration-200 hover:bg-green-100"
            style={{ color: '#71eb34' }}
          >
            <img src="remove.svg" alt="remove" />
          </button>
          <span className="mx-4 text-gray-700 font-bold">{quantity}</span>
          <button 
            onClick={handleIncreaseQuantity}
            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full transition-colors duration-200 hover:bg-green-100"
            style={{ color: '#71eb34' }}
          >
            <img src="add.svg" alt="add" />
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          className="w-10 h-10 flex items-center justify-center rounded-full text-white font-bold transition-colors duration-200 hover:bg-green-700"
        >
          <span className="text-lg">
            <img src="cart.svg" alt="addtocart" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
