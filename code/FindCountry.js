var console = require('console')

module.exports.function = function findCountry (searchCountry) {
  console.debug("findCountry with ", searchCountry)
  // TODO: actually filter and find countries
  var countries = [
    { countryName: "Austria" },
    { countryName: "South Korea" },
    { countryName: "USA" },
    { countryName: "Germany" },
    { countryName: "France" },
    { countryName: "Spain" }
  ]
  return countries
}
