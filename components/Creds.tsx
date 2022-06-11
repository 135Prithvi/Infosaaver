
import Avatar from "@mui/material/Avatar"
import { useSession, signOut, signIn } from "next-auth/react"
import { useRouter } from "next/router"


export default function Creds({ }: any) {
    const { data: session } = useSession()
    const router = useRouter()
    if(session) {
      
      
      return <>
      <div className="flex ">
        <Avatar alt="..." src={`${session.user?.image}`} className="max-w-xs max-h-32 p-1 rounded-sm"/>
        <button type="button" className="text-white bg-gradient-to-br  from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"onClick={() => signOut()}>Sign out</button>
        </div>
      </>
      
    }
    return <>
      <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"onClick={() => signIn()}>Sign in</button>
    </>
  }