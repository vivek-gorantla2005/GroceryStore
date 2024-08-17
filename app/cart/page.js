import React from 'react'
import Link from 'next/link'

const CartPage = () => {
  // Sample cart items
  const cartItems = [
    { id: 1, name: 'Item 1', quantity: 2, price: 20.00 },
    { id: 2, name: 'Item 2', quantity: 1, price: 35.00 },
    { id: 3, name: 'Item 3', quantity: 3, price: 15.00 }
  ];

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="cart w-full max-w-lg bg-white shadow-lg rounded-lg p-4"
        style={{ border: '2px solid #71eb34', boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)' }}
      >
        <h1 className='text-3xl font-extrabold text-center mb-6' style={{ color: '#71eb34' }}>
          Your Cart
        </h1>

        {/* Cart Items List */}
        <div className='space-y-4'>
          {cartItems.map(item => (
            <div key={item.id} className='flex justify-between items-center border-b border-gray-200 py-2'>
              <div>
                <p className='font-semibold text-gray-800'>{item.name}</p>
                <p className='text-gray-600'>Quantity: {item.quantity}</p>
              </div>
              <p className='text-gray-800'>₹{(item.quantity * item.price).toFixed(2)}</p>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className='mt-6 border-t border-gray-200 pt-4'>
          <div className='flex justify-between mb-4'>
            <p className='font-semibold text-gray-800'>Total:</p>
            <p className='text-gray-800'>₹{totalPrice.toFixed(2)}</p>
          </div>

          {/* Checkout Button */}
          <button
            className='w-full py-2 text-white font-bold rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500'
            style={{ backgroundColor: '#71eb34' }}
          >
            Proceed to Checkout
          </button>
        </div>

        {/* Navigation Link */}
        <div className='text-center mt-4'>
          <Link href="/" className='hover:underline'>
            <p style={{ color: '#71eb34' }}>Continue Shopping</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CartPage
