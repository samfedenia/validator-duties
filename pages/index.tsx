import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import ToggleDarkMode from '../components/theme/ToggleDarkMode';
import InputField from '../components/InputField';
import { Footer } from '../components/Footer';
const Home: NextPage = () => {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-start space-y-4 bg-inherit'>
      <Head>
        <title>Validator Duties</title>
      </Head>
      <ToggleDarkMode />
      <Header
        title='Ethereum Validator Duties'
        subtitle='View upcoming attestations and block proposals'
      />

      <InputField />
      <Footer text={'0xabcd....'} />
    </div>
  );
};

export default Home;
