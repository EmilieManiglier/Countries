import React from 'react';

import './search.scss';

const Search = () => (
  <div className="search-select">
    <form className="search-country">
      <input
        type="text"
        name="search"
        className="search-country-input"
        placeholder="Search for a country..."
      />
      <i className="fas fa-search" />
    </form>

    <select
      name="select"
      id="select"
      className="select-region"
    >
      <option value="">Filter By Region</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  </div>
);

export default Search;
