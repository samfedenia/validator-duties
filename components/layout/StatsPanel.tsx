import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function StatsPanel({ children }: Props) {
  return (
    <div className='w-full max-w-lg bg-inherit px-5'>
      <div className='bg-gray-50 dark:bg-black'>
        <div className='relative'>
          <div className='absolute inset-0 h-1/2 bg-gray-50 dark:bg-black' />
          <div className='relative'>
            <div className='mx-auto max-w-4xl'>
              <dl
                className={`grid grid-cols-3 rounded-lg bg-white shadow-lg dark:bg-black/50 dark:shadow-indigo-500/50`}
              >
                {children}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
