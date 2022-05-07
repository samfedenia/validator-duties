import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import ToggleDarkMode from '../components/theme/ToggleDarkMode';
import InputField from '../components/InputField';
import StatsPanel from '../components/layout/StatsPanel';
import Stat from '../components/Stat';
import { Footer } from '../components/Footer';
const Home: NextPage = () => {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-start space-y-4 bg-inherit'>
      <Head>
        <title>Validator Duties</title>
      </Head>
      <ToggleDarkMode />
      <Header
        title='Ethereum Validator Duties'
        subtitle='View upcoming attestations and block proposals'
      />

      <InputField />
      <StatsPanel>
        <Stat name='Epoch' value='1234' />
        <Stat name='Block' value='5678' />
        <Stat name='Time' value={new Date().toLocaleTimeString()} />
      </StatsPanel>
      <Footer text={'0xabcd....'} />
    </div>
  );
};

export default Home;
