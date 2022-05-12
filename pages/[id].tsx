import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import dbConnect from '../lib/dbConnect'
import User from '../models/User'
import { toast } from 'react-toastify'

/* Allows you to view pet card info and delete pet card*/
const PetPage = ({ user }: any) => {
  const router = useRouter()
  const [message, setMessage] = useState('')
  const nameInputRef = useRef<HTMLInputElement>(null!);
  const emailInputRef = useRef<HTMLInputElement>(null!);
  const [showModal, setShowModal] = useState('null')

  const handleEdit = async (event: any) => {
    setShowModal('visible')
    console.log('Hi am Iron man')
  }

  const newUserHandler = async (event: any) => {
    event.preventDefault()
    const userID = router.query.id
    // store meal data in an object
    const userData = {
      name: nameInputRef.current.value,
      email: emailInputRef.current.value,
    }
    // use of Fetch API to make a request to the new-meal api and get back a response
    try {
      const response = await fetch(
        `http://localhost:3000/api/users/?id=${userID}`,
        {
          method: 'PUT',
          body: JSON.stringify(userData),
          headers: {
            'content-Type': 'application/json',
          },
        }
      )
      // parses JSON response into native JavaScript objects
      const data = await response.json()
      toast('🦄 Updated Succesfully', {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
      // redirects this page to the Homepage
      router.replace('/')
    } catch (error) {
      setMessage('Failed to delete the pet.')
    }
  }

  const handleDelete = async () => {
    const userID = router.query.id
    try {
      await fetch(`http://localhost:3000/api/users/?id=${userID}`, {
        method: 'Delete',
      })
      toast('🦄 Deleted Succesfully', {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
      router.push('/')
    } catch (error) {
      setMessage('Failed to delete the pet.')
    }
  }

  return (
    <>
      <div className="sm:mx-48 mx-10 my-10 sm:my-14 place-items-center space-y-10 ">
        {showModal == 'visible' ? (
          <div
            id="authentication-modal"
            tabIndex={-1}
            className={`${showModal} h-modal fixed top-0 right-0 left-0 z-50 w-full overflow-y-auto overflow-x-hidden md:inset-0 grid place-items-center  md:h-full`}
          >
            <div className="relative h-full w-full max-w-md p-4 md:h-auto">
              {/* <!-- Modal content --> */}
              <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
                <div className="flex justify-end p-2">
                  <button
                    type="button"
                    className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-toggle="authentication-modal"
                    onClick={() => setShowModal('hidden')}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <form
                  onSubmit={newUserHandler}
                  className="mx-10 my-10 py-5 pt-0"
                >
                  <div className="mb-6 ">
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-black "
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      ref={emailInputRef}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-white focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      required={true}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-black"
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

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-700   px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : null}
{/* className="block  rounded-lg border border-gray-200 bg-white  shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" */}
        <>
          <a
            className="text-md mx-2  mb-1 block rounded-lg   py-5  px-5 pr-4 pl-3 text-center font-medium  border-2  border-gray-200 bg-white  shadow-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {user.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-100">{user.email}</p>
          </a>
          <div className="flex">
            <button
              className="mx-2 mb-1 block  rounded-lg bg-gradient-to-br from-green-400 to-blue-600 px-5 py-2 pr-4 pl-3 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              className="mx-2 mb-1 block  rounded-lg bg-gradient-to-br from-green-400 to-blue-600 px-5 py-2 pr-4 pl-3 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </>
      </div>
    </>
  )
}

export async function getServerSideProps({ params }: any) {
  await dbConnect()

  const user = await User.findById(params.id).lean()
  user._id = user._id.toString()
  return { props: { user } }
}

export default PetPage
