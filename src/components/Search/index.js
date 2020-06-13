import React from 'react';
import PropTypes from 'prop-types';

import './search.scss';

const Search = ({ search, updateSearch, handleSubmit }) => (
  <div className="search-select">
    <form
      className="search-country"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <input
        type="text"
        name="search"
        className="search-country-input"
        placeholder="Search for a country..."
        value={search}
        onChange={(event) => {
          updateSearch(event.currentTarget.value);
        }}
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

Search.propTypes = {
  search: PropTypes.string.isRequired,
  updateSearch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Search;
