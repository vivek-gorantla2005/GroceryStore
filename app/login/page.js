"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
const Page = () => {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json()
      if (res.ok) {
        console.log(data.message)
        
        // Set cookies using js-cookie
        Cookies.set("user", JSON.stringify({ email: data.user.email, username: data.user.username }), { expires: 7 })
        Cookies.set("token", data.token, { expires: 7, secure: true, sameSite: 'Strict' })

        router.push("/account")
      }
      else {
        if(data.message === "Invalid password"){
         alert("Invalid password")
         setPassword("")
         exit(1)
        }
        router.push("/signin")
      }
    } catch (err) {
      console.error(err)
    }
  }


  return (
    <div className="flex items-center justify-center mt-16">
      <div
        className="form w-full max-w-sm p-8 bg-white shadow-lg rounded-lg"
        style={{ border: '2px solid #71eb34', boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)' }}
      >
        <form className='flex flex-col space-y-6' onSubmit={handleSubmit}>
          {/* Logo Section */}
          <div className='text-center mb-4'>
            <p className='text-3xl font-extrabold' style={{ color: '#71eb34' }}>Login</p>
          </div>

          {/* Input Fields */}
          <input
            type="text"
            name="email"
            id="email"
            placeholder='Enter your email address'
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500'
            style={{ borderColor: '#71eb34' }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder='Enter your password'
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500'
            style={{ borderColor: '#71eb34' }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Submit Button */}
          <button
            type="submit"
            className='w-full py-2 text-white font-bold rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500'
            style={{ backgroundColor: '#71eb34' }}
          >
            Submit
          </button>

          {/* Link Section */}
          <div className='text-center mt-4'>
            <Link href="/signin" className='hover:underline'>
              <p style={{ color: '#71eb34' }}>Don't have an account? Sign In</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Page
