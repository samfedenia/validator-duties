type Props = {
  title: string;
  subtitle?: string;
};

// title: Ethereum Validator Duties
// subtitle: View upcoming attestations and block proposals

export default function Header({ title, subtitle }: Props) {
  return (
    <div className='bg-inherit pt-12 sm:pt-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl'>
            {title}
          </h2>
          {subtitle && <p className='mt-3 text-xl text-gray-500 sm:mt-4'>{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
