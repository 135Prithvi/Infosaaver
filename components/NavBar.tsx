import Link from 'next/link'

import { useState } from 'react'

function Navbar() {
  const [showModal, setShowModal] = useState('')

  return (
    <div className="sticky top-0 border-b-2 border-t-2 shadow-lg ">
      <nav className="rounded border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-800 sm:px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between md:flex-row">
          <div className="flex items-center">
            <span className="self-center whitespace-nowrap text-xl font-semibold   dark:text-white">
              Dailysaves
            </span>
          </div>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`  h-6 w-6`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setShowModal('visible')}
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className={`${
                showModal == 'visible' ? 'visible' : 'hidden'
              } h-6 w-6`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setShowModal('hidden')}
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={`${
              showModal == 'visible' ? 'visible' : 'hidden'
            } w-full md:block md:w-auto`}
            id="mobile-menu"
          >
            <ul className=" mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-2 md:text-sm md:font-medium">
              <Link href="/">
                <a
                  className="mx-2 mb-1  block max-w-sm rounded-lg bg-gradient-to-br from-green-400 to-blue-600 px-5 py-2 pr-4 pl-3 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800"
                  aria-current="page"
                >
                  Home
                </a>
              </Link>

              <Link href="/Utils">
                <a className="mx-2 mb-1  block rounded-lg bg-gradient-to-br from-green-400 to-blue-600 px-5 py-2 pr-4 pl-3 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4  focus:ring-green-200 dark:focus:ring-green-800">
                  Services
                </a>
              </Link>
              <Link href="/Chat">
                <a className="mx-2 mb-1  block rounded-lg bg-gradient-to-br from-green-400 to-blue-600 px-5 py-2 pr-4 pl-3 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4  focus:ring-green-200 dark:focus:ring-green-800">
                  Chat
                </a>
              </Link>
              <Link href="/New">
                <a className="mx-2 mb-1  block rounded-lg bg-gradient-to-br from-green-400 to-blue-600 px-5 py-2 pr-4 pl-3 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800">
                  New
                </a>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
