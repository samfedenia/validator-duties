import * as React from 'react';

export interface IFooterProps {
  text: string;
}

export function Footer({ text }: IFooterProps) {
  return (
    <div>
      <footer className='bg-inherit'>
        <div className='mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8'>
          <div className='mt-8 flex select-none justify-center space-x-6 text-black dark:text-white'>
            {text}
          </div>
        </div>
      </footer>
    </div>
  );
}
