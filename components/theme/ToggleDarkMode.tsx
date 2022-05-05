import useDarkMode from 'use-dark-mode';
import DarkModeToggle from 'react-dark-mode-toggle';
import dynamic from 'next/dynamic';

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
        <DarkModeToggle
        onChange={darkMode.toggle}
        checked={darkMode.value}
        size={'65'}
        // className='mt-5'
        speed={3}
        />
  );
}

export default dynamic(() => Promise.resolve(ToggleDarkMode), {
  ssr: false,
});
