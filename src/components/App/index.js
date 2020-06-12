// == Import
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'src/components/Themes';
import GlobalStyles from 'src/components/GlobalStyles';
import useDarkMode from 'src/components/useDarkMode';

// == import components
import Header from 'src/components/Header';

import './styles.scss';

// == Component
const App = () => {
  // Custom hook used which contains the chosen theme, the toggle function to switch between modes
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  // check if the component is mounted
  // if it hasn't, return an empty div
  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div className="app">
        <Header theme={theme} toggleTheme={themeToggler} />
      </div>
    </ThemeProvider>
  );
};

// == Export
export default App;
