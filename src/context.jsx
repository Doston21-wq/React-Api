import { useState, useContext, createContext, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const ToggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    if (isDarkTheme) {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }
  }, [isDarkTheme]); 

  return (
    <AppContext.Provider value={{ isDarkTheme, ToggleTheme}}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);