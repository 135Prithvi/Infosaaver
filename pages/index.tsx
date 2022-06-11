import type { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import dbConnect from '../lib/dbConnect'
import User from '../models/User'

const Home: NextPage = ({ users }: any) => {
  const [message, setMessage] = useState('')
  return (
    <div className="mx-10 sm:mx-20">
      <div className="my-10 space-y-5 text-center sm:grid sm:grid-cols-2 sm:gap-x-4  sm:gap-y-5 sm:space-y-0">
        {users.map((user: any) => (
          <>
            <Link href="/[id]" as={`/${user._id}`} key={user._id}>
              <a className="block  rounded-lg border-2  border-gray-300 bg-white p-6 px-1 shadow-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {user.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-100">
                  {user.email}
                </p>
              </a>
            </Link>
          </>
        ))}
      </div>
    </div>
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
  return { props: { users } }
}
