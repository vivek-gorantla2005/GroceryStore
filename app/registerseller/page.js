"use client"
import React, { useState } from 'react';

const SellerForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    storename: '',
    storedescription: '',
    storeaddress: '',
    storecontact: '',
    setseller: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Remove location as it is no longer being used
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Register as a Seller</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="storename" className="block text-gray-700 font-bold mb-2">
            Store Name
          </label>
          <input
            type="text"
            id="storename"
            name="storename"
            value={formData.storename}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="storedescription" className="block text-gray-700 font-bold mb-2">
            Store Description
          </label>
          <textarea
            id="storedescription"
            name="storedescription"
            value={formData.storedescription}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="storeaddress" className="block text-gray-700 font-bold mb-2">
            Store Address
          </label>
          <input
            type="text"
            id="storeaddress"
            name="storeaddress"
            value={formData.storeaddress}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="storecontact" className="block text-gray-700 font-bold mb-2">
            Store Contact
          </label>
          <input
            type="text"
            id="storecontact"
            name="storecontact"
            value={formData.storecontact}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="setseller"
            name="setseller"
            checked={formData.setseller}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="setseller" className="text-gray-700 font-bold">
            Set as Seller
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-3 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default SellerForm;
