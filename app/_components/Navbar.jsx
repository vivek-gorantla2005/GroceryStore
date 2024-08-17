"use client"
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <nav className="flex m-0 p-0 justify-between items-center">
                <div className='flex pl-5'>
                    <div className="logo">
                        <img src="logo.png" alt="logo" width={150} height={100} />
                    </div>
                    <div className="ml-2">
                        <video
                            src="GroceryStore.mp4"
                            className="w-40 h-32 object-cover"
                            loop
                            muted
                            autoPlay
                        ></video>
                    </div>
                </div>
                <div className='listitems flex pr-16 pb-10'>
                    <ul className='flex gap-5 font-bold'>
                        <Link href={"/"}>
                        <li className='flex items-center gap-1 px-4 py-2 rounded-md border border-transparent hover:border-gray-300 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105 cursor-pointer'>
                           Home <img src="home.svg" alt="home" className='w-6 h-6 fill-current text-black' />
                        </li>
                        </Link>
                        <Link href={"/products"}>
                        <li className='flex items-center gap-1 px-4 py-2 rounded-md border border-transparent hover:border-gray-300 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105 cursor-pointer'>
                            Products
                            <img src="discount.svg" alt="discount" className='w-6 h-6 fill-current text-black' />
                        </li>
                        </Link>
                        <Link href="/cart">
                        <li className='flex items-center gap-1 px-4 py-2 rounded-md border border-transparent hover:border-gray-300 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105 cursor-pointer'>
                            cart
                            <img src="cart.svg" alt="cart" className='w-6 h-6 fill-current text-black' />
                        </li>
                        </Link>
                        <Link href={"/login"}>
                        <li className='flex items-center gap-1 px-4 py-2 rounded-md border border-transparent hover:border-gray-300 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105 cursor-pointer'>
                            Login
                            <img src="login.svg" alt="login" className='w-6 h-6 fill-current text-black' />
                        </li>
                        </Link>
                        <Link href={"/account"}>
                        <li className='flex items-center gap-1 px-4 py-2 rounded-md border border-transparent hover:border-gray-300 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105 cursor-pointer'>
                            Account
                            <img src="account.svg" alt="account" className='w-6 h-6 fill-current text-black' />
                        </li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
