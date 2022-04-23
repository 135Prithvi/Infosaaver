import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar'
import { useEffect, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function MyApp({ Component, pageProps }: AppProps) {
  const [progress, setProgress] = useState(0)
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(100)
    })
  })
  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        waitingTime={10}
      />
      <ToastContainer/>
      <NavBar></NavBar>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
