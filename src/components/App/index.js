// == Import
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import { lightTheme, darkTheme } from 'src/components/Themes';
import GlobalStyles from 'src/components/GlobalStyles';
import useDarkMode from 'src/components/useDarkMode';

// == import components
import Header from 'src/components/Header';
import Search from 'src/components/Search';
import Flags from 'src/components/Flags';
import Button from 'src/components/Button';

import './styles.scss';

// == Component
const App = () => {
  // ===== API =====
  // Value of the input
  const [search, setSearch] = useState('');

  // List of countries
  const [countries, setCountries] = useState([]);

  // Number of countries displayed on the page
  const [countriesPerPage, setCountriesPerPage] = useState(25);

  const setInputSearch = (inputValue) => {
    setSearch(inputValue);
  };

  const loadCountries = () => {
    axios.get('https://restcountries.eu/rest/v2/all?limit=20')
      .then((response) => {
        // console.log(response.data);
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadCountryFromInput = () => {
    axios.get(`https://restcountries.eu/rest/v2/name/${search}`)
      .then((response) => {
        // console.log(response.data);
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadCountries();
  }, []);


  // ===== Dark / Light Theme =====
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
        <Search
          search={search}
          updateSearch={setInputSearch}
          handleSubmit={loadCountryFromInput}
        />
        <Flags countries={countries} nbCountries={countriesPerPage} />
        <Button
          setCountriesPerPage={setCountriesPerPage}
          countriesPerPage={countriesPerPage}
        />
      </div>
    </ThemeProvider>
  );
};

// == Export
export default App;
