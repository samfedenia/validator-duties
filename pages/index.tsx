import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import ToggleDarkMode from '../components/theme/ToggleDarkMode';
import InputField from '../components/input/InputField';

const Home: NextPage = () => {
  return (
    <div className='bg-inherit w-screen h-screen flex flex-col justify-start items-center space-y-4'>
      <Head>
        <title>Validator Duties</title>
      </Head>
      <ToggleDarkMode />
      <Header
        title='Ethereum Validator Duties'
        subtitle='View upcoming attestations and block proposals'
      />

      <InputField />
    </div>
  );
};

export default Home;
