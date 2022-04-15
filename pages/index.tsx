import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useState } from 'react'
import dbConnect from '../lib/dbConnect'
import User from '../models/User'
const Home: NextPage = ({ users }: any) => {
  const [message, setMessage] = useState("");
  
  
  const handleDelete = async ({user}:any) => {
    console.log(users._id);
    try {
      
      await fetch(`api/users/?id=62306dc3c5325cd46705de9b`, {
        method: "DELETE",
      });
      
    } catch (error) {
      setMessage("Failed to delete the pet.");
    }
  };
  return (
    <>
      <div className='mx-48 my-16 space-y-10 '>
      {users.map((user:any)=>(
        <>
        <a
          href="#"
          className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {user.name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {user.email}
          </p>
          
        </a>
        <button onClick={handleDelete}>Delete</button>
        </>
      ))}
      
      </div>
      
    </>
  )
}

export default Home
export async function getServerSideProps() {
  await dbConnect()

  /* find all the data in our database */
  const result = await User.find({})
  const users = result.map((doc: { toObject: () => any }) => {
    const user = doc.toObject()
    user._id = user._id.toString()
   
    
    return user
  })

  return { props: { users: users } }
}
