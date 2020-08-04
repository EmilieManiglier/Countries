import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { findCountryByName, findCountryByCode, formatPopulation } from 'src/utils';

import './flagDetail.scss';

const FlagDetail = ({ countries }) => {
  // Get the params from the URL = Name of the country
  const { name } = useParams();

  // Search the datas of the selected country
  const country = findCountryByName(countries, name);

  return (
    <div className="detail-container">
      <Link to="/" className="link-back">Back</Link>

      <div className="detail-wrapper">
        <div>
          <img src={country.flag} alt="" className="detail-flag" />
        </div>

        <div className="detail-content">
          <h2 className="detail-title">{country.name}</h2>

          <div className="detail">
            <div className="detail-info">
              <ul>
                <li className="info-li"><span className="info-label">Native Name :</span> {country.nativeName}</li>
                <li className="info-li"><span className="info-label">Population :</span> {formatPopulation(country.population)}</li>
                <li className="info-li"><span className="info-label">Region :</span> {country.region}</li>
                <li className="info-li"><span className="info-label">Sub Region :</span> {country.subregion}</li>
                <li className="info-li"><span className="info-label">Capital :</span> {country.capital}</li>
              </ul>
            </div>

            <div className="detail-info">
              <ul>
                <li className="info-li"><span className="info-label">Top Level Domain :</span> {country.topLevelDomain}</li>

                <li className="info-li"><span className="info-label">Currencies :</span> {country.currencies[0].name} ({country.currencies[0].code}, {country.currencies[0].symbol})</li>

                <li className="info-li">
                  <span className="info-label">Languages :</span>
                  {country.languages.map((language, index) => (
                    <span key={language.name}>
                      {
                        // Separate each name with a comma except for the last one
                        (index ? ', ' : '') + language.name
                      }
                    </span>
                  ))}
                </li>
              </ul>
            </div>

            <div className="detail-info borders">
              <span className="info-label">Border Countries :</span>
              <div className="border-countries">
                {country.borders.map((border) => {
                  let countryByCode = '';
                  // Get country full name by its 3 letters code
                  countryByCode = findCountryByCode(countries, border);

                  if (countryByCode === undefined) {
                    countryByCode = '';
                  }

                  return (
                    <Link
                      to={countryByCode.name || ''}
                      className="border"
                      key={border}
                      title={countryByCode.name || ''}
                    >
                      {border}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

FlagDetail.propTypes = {
  countries: PropTypes.array.isRequired,
};

export default FlagDetail;
