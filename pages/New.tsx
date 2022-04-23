import React, { useState } from 'react'
import { useRef } from 'react'
import { useRouter } from 'next/router'
import { toast} from 'react-toastify'

export default function New() {
  // use of useRef to capture input value
  const nameInputRef = useRef<HTMLInputElement>(null!);
  const emailInputRef = useRef<HTMLInputElement>(null!);
  const keywordInputRef = useRef<HTMLInputElement>(null!);
  const [message, setMessage] = useState("");
  // use of useRouter from next/router to redirect this page to the Homepage
  const router = useRouter()
  // implementation of newMealHandler function
  const newUserHandler = async (event: any) => {
    event.preventDefault()
    
    // store meal data in an object
    const userData = {
      name: nameInputRef.current.value,
      email: emailInputRef.current.value,
      password: keywordInputRef.current.value,
    }
    // use of Fetch API to make a request to the new-meal api and get back a response
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'content-Type': 'application/json',
        },
      })
      // parses JSON response into native JavaScript objects
      const data = await response.json()
      toast('🦄 Added Succesfully', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        });
      // redirects this page to the Homepage
      router.replace('/')
    }catch (error) {
      setMessage('Failed to delete the pet.')
    }
    
  }
  return (
    <div className="mx-28 my-14">
      
      <form onSubmit={newUserHandler}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-500"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            ref={emailInputRef}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="name@example.com"
            required={true}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-500"
          >
            Your name
          </label>
          <input
            type="name"
            id="name"
            ref={nameInputRef}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required={true}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-500"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            ref={keywordInputRef}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required={true}
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700   px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
