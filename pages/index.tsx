import type { NextPage } from 'next'
import Head from 'next/head'
import ToggleDarkMode from '../components/theme/ToggleDarkMode'

const Home: NextPage = () => {
  return (
       <div className="bg-inherit w-screen h-screen flex flex-col justify-center items-center space-y-4">
      <Head>
        <title>Validator Duties</title>
      </Head>
      <ToggleDarkMode/>
      <h1 className="dark:text-white text-5xl font-bold">Hello world</h1>
    </div>
  )
}

export default Home
