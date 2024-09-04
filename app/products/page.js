"use client"
import React, { useEffect, useState } from 'react';
import ProductCard from '../_components/ProductCard';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/getproducts');
        if (res.ok) {
          const { body: data } = await res.json();
          console.log(JSON.stringify(data));
          setProducts(data);
        } else {
          console.error("Error fetching products");
        }
      } catch (err) {
        console.error("An error occurred: ", err);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center mt-32 h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-green-600" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

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

export default ProductsPage;
