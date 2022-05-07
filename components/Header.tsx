type Props = {
  title: string;
  subtitle?: string;
};

export default function Header({ title, subtitle }: Props): JSX.Element {
  return (
    <div className='bg-inherit pt-12 sm:pt-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='select-none text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl'>
            {title}
          </h2>
          {subtitle && <p className='mt-3 select-none text-xl text-gray-500 sm:mt-4'>{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
