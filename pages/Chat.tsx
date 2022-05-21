import SideBar from '../components/SideBar'
import {  db } from '../lib/fireConnect'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import SendIcon from '@mui/icons-material/Send';
import { useSession} from "next-auth/react"

export default function Chat() {
  // initialization
  const dbInstance = collection(db, 'messages')
  const [messg, setMessg] = useState('')
  const [sender, setSender] = useState('')
  const [notesArray, setNotesArray] = useState<any[]>([])
  const [showModal, setShowModal] = useState('')
  const { data: session } = useSession()
  useEffect(() => {
    getNotes()
  }, [100])
  const getNotes = () => {
    getDocs(dbInstance).then((data) => {
      setNotesArray(
        data.docs.map((item) => {
          return { ...item.data(), id: item.id }
        })
      )
    })
  }
  async function AddDoc(event: any) {
    event.preventDefault()
    await addDoc(dbInstance, {
      message: messg,
      sender: session?.user?.name!==undefined? session?.user.name:  "Nothing",
    }).then(() => {
      setMessg('')
      setSender('')
    })
    
    
    toast('🦄 Added Succesfully', {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
  }
  
  return (
    <div className="">
      <div className="grid w-full  sm:max-w-sm overscroll-y-none">
        <button
          type="button"
          className="  inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-blue-500 focus:outline-none "
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <div className="space-x-10">
            <svg
              className={`absolute mt-0  h-6 w-6`}
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
          </div>
        </button>
        <div
          className={`${
            showModal == 'visible' ? 'visible' : 'hidden'
          } shadow-lg shadow-zinc-600`}
        >
          <SideBar />
        </div>
      </div>
      <div className={`space-y-3  overflow-y-auto flex-grow  mx-5 `}>
        {notesArray.map((note) => {
          return (
            <div className={`${session?.user?.name==note.sender ? "ml-auto" : "mr-auto" }    max-w-sm `} key={note.sender}>
              <a className="w-sm block  rounded-lg border-2  border-gray-300 bg-white p-3 px-2 shadow-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <p className={`   text-gray-700 dark:text-gray-100`}>
                  {note.message}
                </p>
              </a>
              <p className={`${session?.user?.name==note.sender ? "font-bold" : "font-medium" }   text-gray-700 dark:text-gray-100`}>{note.sender}</p>
            </div>
          )
        })}
      </div>
      <div className="container fixed rounded-xl bottom-0 inline-block max-w-full content-center space-x-10 border-t-2 border-black bg-slate-300 px-5 align-middle sm:px-10">
        <form onSubmit={AddDoc}>
          <div className="  mt-6">
            <div className="mb-6">
              <label
                htmlFor="text"
                className="mb-2 block text-md font-bold text-gray-900 dark:text-gray-300"
              >
                 {session?.user?.name!==undefined? session?.user.name:  "Nothing"}
              </label>
              <div className="inline-flex space-x-4 w-full ">
                <input
                  type="text"
                  id="text"
                  className="w-full max-w-full  rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required={true}
                  onChange={(e) => setMessg(e.target.value)}
                  value={messg}
                />
                <button
                  type="submit"
                  className=" rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <SendIcon/>
                </button>
              </div>
              
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
