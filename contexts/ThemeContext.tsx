import React, { useContext, useState, ReactNode } from 'react';

type ThemeContext = {
  dark: boolean;
  toggleDark?: () => void;
};

const defaultState = {
  dark: false,
};

type Props = {
  children: ReactNode;
};

const ThemeContext = React.createContext<ThemeContext>(defaultState);

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: Props) {
  const [dark, setDark] = useState(true);
  function toggleDark() {
    setDark((prevTheme) => !prevTheme);
  }
  const value = { dark, toggleDark };
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
