"use client"
import React, { useEffect, useState } from 'react';
import Cookie from 'js-cookie'
const initialPastPurchases = [
  { id: 1, title: 'Apple', price: 30, date: '2024-08-01', status: 'Delivered' },
  { id: 2, title: 'Banana', price: 20, date: '2024-08-05', status: 'Pending' },
  { id: 3, title: 'Carrot', price: 25, date: '2024-08-10', status: 'Delivered' },
  // Add more purchases as needed
];

const ProfilePage = () => {
  const [username,setusername] = useState("")
  const [email, setEmail] = useState("")
  const [pastPurchases, setPastPurchases] = useState(initialPastPurchases);

  useEffect(() => {
    const cookieUser = Cookie.get("user")
    if (cookieUser) {
      const { username, email } = JSON.parse(cookieUser);
      setusername(username);
      setEmail(email);
    }
  }, [])

  const handleCancelOrder = (id) => {
    // Simulate cancel order process
    const updatedPurchases = pastPurchases.map(purchase =>
      purchase.id === id ? { ...purchase, status: 'Cancelled' } : purchase
    );
    setPastPurchases(updatedPurchases);
    alert(`Order ${id} has been cancelled.`);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">User Profile</h1>
        <div className="flex items-center space-x-4">
          <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-2xl font-bold text-white">
            U
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">Welcome!! {username}</h2>
            <p className="text-gray-600">{email}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-4">Past Purchases</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 text-left text-gray-600">Item</th>
              <th className="py-2 text-left text-gray-600">Price</th>
              <th className="py-2 text-left text-gray-600">Date</th>
              <th className="py-2 text-left text-gray-600">Status</th>
              <th className="py-2 text-left text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {pastPurchases.map(purchase => (
              <tr key={purchase.id} className="border-b">
                <td className="py-2">{purchase.title}</td>
                <td className="py-2">₹{purchase.price.toFixed(2)}</td>
                <td className="py-2">{purchase.date}</td>
                <td className={`py-2 ₹{purchase.status === 'Cancelled' ? 'text-red-600' : 'text-green-600'}`}>
                  {purchase.status}
                </td>
                <td className="py-2">
                  {purchase.status === 'Pending' && (
                    <button
                      onClick={() => handleCancelOrder(purchase.id)}
                      className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
                    >
                      Cancel
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfilePage;
