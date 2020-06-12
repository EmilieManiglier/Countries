/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState('light');

  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = (mode) => {
    // Make change mode persistent between sessions in the browser
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  // Check the state of the theme and toggles either dark or light
  // based on the truth condition
  const themeToggler = () => (
    theme === 'light' ? setMode('dark') : setMode('light')
  );

  // If the user has previously selected a theme, we pass it to the setTheme function
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
    setMountedComponent(true);
  }, []);

  return [theme, themeToggler, mountedComponent];
};

export default useDarkMode;
