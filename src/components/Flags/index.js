import React from 'react';
import PropTypes from 'prop-types';
import Flag from './Flag';

import './flags.scss';

const Flags = ({ countries, nbCountries }) => (
  <main className="main">
    {countries.slice(0, nbCountries).map((country) => (
      <Flag
        key={country.name}
        {...country}
      />
    ))}
  </main>
);

Flags.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  nbCountries: PropTypes.number.isRequired,
};

export default Flags;
