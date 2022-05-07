import { useState, useEffect } from 'react';
// import { SpinnerRoundOutlined } from 'spinners-react';

interface IStat {
  name: string;
  value: string;
}
export default function Stat({ name, value }: IStat): JSX.Element {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className='flex select-none flex-col border-b border-gray-100 p-4 text-center dark:border-indigo-500 sm:border-0 sm:border-0'>
      <dt className='text-md order-2 mt-1 select-none font-medium leading-6 text-gray-500 dark:text-white'>
        {name}
      </dt>
      {loading ? (
        <div className='ml-auto mr-auto select-none dark:text-white'>
          {/* <SpinnerRoundOutlined size={30} thickness={100} speed={100} color='#00ff7f' /> */}
          Loading...
        </div>
      ) : (
        <dd className='text-md order-1 select-none whitespace-nowrap font-extrabold text-indigo-600 dark:text-indigo-300'>
          {value}
        </dd>
      )}
    </div>
  );
}
