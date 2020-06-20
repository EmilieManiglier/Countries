export const findCountryByName = (countries, name) => (
  countries.find((country) => country.name === name)
);

export const findCountryByCode = (countries, code) => (
  countries.find((country) => country.alpha3Code === code)
);

/**
* @param number population
* @return string
* Transform a number into a string and put a comma after 3 digits
* The '\B' keeps the regex from putting a comma a the beginning of the string
*/
export const formatPopulation = (population) => (
  population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
);
