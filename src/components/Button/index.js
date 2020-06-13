import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({ setCountriesPerPage, countriesPerPage }) => (
  <div className="button-container">
    <button
      type="button"
      className="icon-btn add-btn"
      onClick={() => {
        setCountriesPerPage(countriesPerPage + 25);
      }}
    >
      <div className="add-icon" />
      <div className="btn-txt">See more</div>
    </button>
  </div>
);

Button.propTypes = {
  setCountriesPerPage: PropTypes.func.isRequired,
  countriesPerPage: PropTypes.number.isRequired,
};

export default Button;
