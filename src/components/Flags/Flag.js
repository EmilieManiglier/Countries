import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatPopulation } from 'src/utils';

const Flag = ({
  name,
  flag,
  population,
  region,
  capital,
}) => (
  <div className="card">
    <Link to={`/${name}`}>
      <img src={flag} alt={`Flag of ${name}`} />
      <div className="card-container">
        <h2 className="card-header">{name}</h2>
        <p className="card-text"><span className="card-info">Population:</span> {formatPopulation(population)}</p>
        <p className="card-text"><span className="card-info">Region:</span> {region}</p>
        <p className="card-text"><span className="card-info">Capital:</span> {capital}</p>
      </div>
    </Link>
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
