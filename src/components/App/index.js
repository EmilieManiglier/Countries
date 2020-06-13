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
import Loader from 'src/components/Loader';
import Flags from 'src/components/Flags';
import Button from 'src/components/Button';

import './styles.scss';

// == Component
const App = () => {
  // ===== API =====
  // Value of the input
  const [search, setSearch] = useState('');

  // Value of the select
  const [region, setRegion] = useState('');

  // List of countries
  const [countries, setCountries] = useState([]);

  // Number of countries displayed on the page
  const [countriesPerPage, setCountriesPerPage] = useState(25);

  // Status of the loading, if true display the loader while we're fetching datas from the API
  const [loading, setLoading] = useState(false);

  const loadCountries = () => {
    setLoading(true);

    axios.get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        // console.log(response.data);
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const loadCountryFromInput = () => {
    setLoading(true);
    axios.get(`https://restcountries.eu/rest/v2/name/${search}`)
      .then((response) => {
        // console.log(response.data);
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const loadCountriesFromSelect = () => {
    setLoading(true);
    axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
      .then((response) => {
        // console.log(response.data);
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadCountries();
  }, []);


  // Load countries on select region change
  useEffect(() => {
    if (region !== '') {
      loadCountriesFromSelect();
    }
  }, [region]);


  // ===== Dark / Light Theme =====
  // Custom hook which contains the chosen theme, the toggle function to switch between modes
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
          updateSearch={setSearch}
          handleSubmit={loadCountryFromInput}
          region={region}
          updateRegion={setRegion}
          handleSelect={loadCountriesFromSelect}
        />
        {loading && (<Loader />) }
        {!loading && <Flags countries={countries} nbCountries={countriesPerPage} />}
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
