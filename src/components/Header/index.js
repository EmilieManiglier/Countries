import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './header.scss';

const Header = ({ toggleTheme, theme }) => (
  <header className="header">
    <Link to="/"><h1 className="title">Where in the world ?</h1></Link>
    <button
      type="button"
      className="switch"
      onClick={toggleTheme}
    >
      <i className={theme === 'light' ? 'fas fa-moon' : 'far fa-moon'} />
      {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  </header>
);

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};


export default Header;
