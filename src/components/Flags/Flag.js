import React from 'react';
import PropTypes from 'prop-types';

const Flag = ({
  name,
  flag,
  population,
  region,
  capital,
}) => (
  <div className="card">
    <img src={flag} alt="" />
    <div className="card-container">
      <h2 className="card-header">{name}</h2>
      <p className="card-text"><span className="card-info">Population:</span> {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
      <p className="card-text"><span className="card-info">Region:</span> {region}</p>
      <p className="card-text"><span className="card-info">Capital:</span> {capital}</p>
    </div>
  </div>
);

Flag.propTypes = {
  name: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
};

export default Flag;
