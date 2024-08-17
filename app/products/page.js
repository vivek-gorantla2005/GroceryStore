import React from 'react';
import ProductCard from '../_components/ProductCard';

const page = () => {
  // Sample products array
  const products = [
    {
      title: 'Apple',
      image: '/apple.png',
      price: 1.99,
    },
    {
      title: 'Banana',
      image: '/banana.png',
      price: 0.99,
    },
    {
      title: 'Carrot',
      image: '/images/carrot.jpg',
      price: 0.79,
    },
    {
      title: 'Broccoli',
      image: '/images/broccoli.jpg',
      price: 1.49,
    },
    {
      title: 'Orange',
      image: '/images/orange.jpg',
      price: 1.29,
    },
    {
      title: 'Strawberry',
      image: '/images/strawberry.jpg',
      price: 2.99,
    },
    // Add more products as needed
  ];

  return (
    <div>
      <p className='ml-16 mt-12 text-2xl font-extrabold text-green-800'>Products</p>
      <div className="flex flex-wrap justify-start ml-8 gap-10 p-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default page;
