var console = require('console')

module.exports.function = function sendLetter (fromCountry, toCountry, letterContent) {
  
  var letterCost = "The basic letter costs $15"
  if (letterContent.length > 50) {
    letterCost += "\nadd $10 for Text Length > 50"
  } else if (letterContent.length > 25) {
    letterCost += "\nadd $7 for Text Length > 25"
  } else {
    letterCost += "\nno additional cost for Text Length < 25"
  }
  
  if (String(fromCountry.countryName) == "Austria") {
    letterCost = "No cost at all for letters originating from Austria!"
  } else if (String(fromCountry.countryName) == "USA") {
    letterCost += "\nadd $10 for overseas transportation"
  }
  
  if (String(toCountry.countryName) == "South Korea") {
    letterCost = "No cost at all for letters going to South Korea!"
  } else if (String(toCountry.countryName) == "Spain") {
    letterCost += "\nadd $2 (holiday tax)"
  }
  
  console.debug("logging fromCountry", fromCountry)
  console.debug("logging toCountry", toCountry)
  
  var fromCountryOutput = { countryName: fromCountry.countryName }
  var toCountryOutput = { countryName: toCountry.countryName }
  
  return {
    fromCountry: fromCountryOutput,
    toCountry: toCountryOutput,
    letterContent: letterContent,
    letterCost: letterCost
  }
}
