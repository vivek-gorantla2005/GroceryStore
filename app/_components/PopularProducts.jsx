import React from 'react';
import ProductCard from './ProductCard';

const PopularProducts = () => {
  const items = [
    {
      title: 'Apple',
      image: 'apple.png',
      price: 1.99,
    },
    {
      title: 'Banana',
      image: 'banana.png',
      price: 0.99,
    },
    {
      title: 'Carrot',
      image: 'carrot.png',
      price: 0.79,
    },
    {
      title: 'Broccoli',
      image: 'brocoli.jpg',
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
      image: 'https://res.cloudinary.com/dx1rpbut6/image/upload/v1724341353/app_prdert.ico',
      price: 0.79,
    },
    {
      title: 'Broccoli',
      image: 'https://res.cloudinary.com/dx1rpbut6/image/upload/v1724340788/cld-sample-5.jpg',
      price: 2.49,
    },
    // Add more items as needed
    {
      title: 'Apple',
      image: 'https://res.cloudinary.com/dx1rpbut6/image/upload/v1724340788/cld-sample-4.jpg',
      price: 1.99,
    },
    {
      title: 'Banana',
      image: 'https://res.cloudinary.com/dx1rpbut6/image/upload/v1724340786/samples/coffee.jpg',
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
      image: 'apple.png',
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
            product={item}
          />
        ))}
      </div>
    </>
  );
};

export default PopularProducts;
