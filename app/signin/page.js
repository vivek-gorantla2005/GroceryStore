import React from 'react'
import Link from 'next/link'

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="form w-full max-w-sm p-8 bg-white shadow-lg rounded-lg"
        style={{ border: '2px solid #71eb34', boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)' }}
      >
        <form className='flex flex-col space-y-6'>
          {/* Header Section */}
          <div className='text-center mb-4'>
            <p className='text-3xl font-extrabold' style={{ color: '#71eb34' }}>Sign In</p>
          </div>

          {/* Input Fields */}
          <input
            type="text"
            name="username"
            id="username"
            placeholder='Enter your username'
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500'
            style={{ borderColor: '#71eb34' }}
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder='Enter your email address'
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500'
            style={{ borderColor: '#71eb34' }}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder='Enter your password'
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500'
            style={{ borderColor: '#71eb34' }}
          />
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder='Confirm your password'
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500'
            style={{ borderColor: '#71eb34' }}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className='w-full py-2 text-white font-bold rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500'
            style={{ backgroundColor: '#71eb34' }}
          >
            Sign In
          </button>

          {/* Link Section */}
          <div className='text-center mt-4'>
            <Link href="/login" className='hover:underline'>
              <p style={{ color: '#71eb34' }}>Already have account? Login</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignInPage
