import useDarkMode from 'use-dark-mode';
import dynamic from 'next/dynamic';
import Sun from '../icons/Sun';
import Moon from '../icons/Moon';

function ToggleDarkMode() {
  let darkMode;

  const darkModeConfig = {
    classNameDark: 'dark',
    classNameLight: 'light',
    element: document.documentElement,
    storageKey: 'darkMode',
  };

  darkMode = useDarkMode(false, darkModeConfig);

  return (
    <div className='mr-8 mt-8 w-full flex flex-row flex-nowrap justify-end'>
      <div onClick={darkMode.toggle}>{darkMode.value ? <Sun /> : <Moon />}</div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(ToggleDarkMode), {
  ssr: false,
});
