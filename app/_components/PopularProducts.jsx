import React from 'react';
import ProductCard from './ProductCard';

const PopularProducts = () => {
  const items = [
    {
      title: 'Apple',
      image: 'apple.jpg',
      price: 1.99,
    },
    {
      title: 'Banana',
      image: 'banana.jpg',
      price: 0.99,
    },
    {
      title: 'Carrot',
      image: 'carrot.jpg',
      price: 0.79,
    },
    {
      title: 'Broccoli',
      image: 'broccoli.jpg',
      price: 2.49,
    },
    // Add more items as needed
    {
      title: 'Apple',
      image: 'apple.jpg',
      price: 1.99,
    },
    {
      title: 'Banana',
      image: 'banana.jpg',
      price: 0.99,
    },
    {
      title: 'Carrot',
      image: 'carrot.jpg',
      price: 0.79,
    },
    {
      title: 'Broccoli',
      image: 'broccoli.jpg',
      price: 2.49,
    },
    // Add more items as needed
    {
      title: 'Apple',
      image: 'apple.jpg',
      price: 1.99,
    },
    {
      title: 'Banana',
      image: 'banana.jpg',
      price: 0.99,
    },
    {
      title: 'Carrot',
      image: 'carrot.jpg',
      price: 0.79,
    },
    {
      title: 'Broccoli',
      image: 'broccoli.jpg',
      price: 2.49,
    },
    // Add more items as needed
    {
      title: 'Apple',
      image: 'apple.jpg',
      price: 1.99,
    },
    {
      title: 'Banana',
      image: 'banana.jpg',
      price: 0.99,
    },
    {
      title: 'Carrot',
      image: 'carrot.jpg',
      price: 0.79,
    },
    {
      title: 'Broccoli',
      image: 'broccoli.jpg',
      price: 2.49,
    },
    // Add more items as needed
  ];

  return (
    <>
      <p className='ml-16 mt-12 text-2xl font-extrabold' style={{ color: '#71eb34' }}>
        Popular Products
      </p>
      <div className="flex flex-wrap justify-start ml-12 gap-10 p-4">
        {items.map((item, index) => (
          <ProductCard
            key={index}
            product={{
              title: item.title,
              image: item.image,
              price: item.price,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default PopularProducts;
