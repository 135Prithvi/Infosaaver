import Link from "next/link"

function FooTer() {
  return (
    <>
      <footer className="fixed hidden md:inline-flex sm:bottom-0 items-center justify-center w-full  mt-4 flex-col md:mt-0 md:flex-row md:space-x-2 md:text-sm md:font-medium">
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2022{' '}
          <Link href="/">
          <a  className="hover:underline">
            Dailyreds™
          </a></Link>
          . All Rights Reserved.
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <Link href="/">
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </Link >
          <Link href="/">
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </Link >
          <Link href="/">
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </Link >
          
        </ul>
      </footer>
    </>
  )
}
export default FooTer
