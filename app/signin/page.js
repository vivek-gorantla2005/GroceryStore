"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const SignInPage = () => {
  const router = useRouter()
  const [username, setusername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [role, setrole] = useState("Select Role")

  const handlesubmit = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("Passwords do not match!")
      return
    }

    try {
      const res = await fetch("/api/signin", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password, role }),
      })

      if (res.ok) {
        router.push("/login")
      } else if (res.status === 400) {
        router.push("/account")
      }

      if(res.status === 400){
        router.push("/login")
      }
    } catch (err) {
      console.log("Account creation failed", err)
    }

    setusername("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
  }

  return (
    <div className="flex items-center justify-center">
      <div
        className="form w-full max-w-sm p-8 bg-white shadow-lg rounded-lg"
        style={{ border: '2px solid #71eb34', boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)' }}
      >
        <form className='flex flex-col space-y-6' onSubmit={handlesubmit}>
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
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
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
            name="password"
            id="password"
            placeholder='Enter your password'
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500'
            style={{ borderColor: '#71eb34' }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder='Confirm your password'
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500'
            style={{ borderColor: '#71eb34' }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <DropdownMenu style={{borderColor:"#71eb34"}} className='w-full px-4 py-2 border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500'>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="text-gray-400 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 ">{role}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel className='text-gray-600'>Select Your Role</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup className='text-gray-400' value={role} onValueChange={setrole} >
                <DropdownMenuRadioItem value="customer">Customer</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="farmer">Farmer</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="seller">Seller</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="insuranceprovider">Insurance Provider</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

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
              <p style={{ color: '#71eb34' }}>Already have an account? Login</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignInPage
