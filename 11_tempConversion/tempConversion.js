const convertToCelsius = function(fahrenheit) {
  conversion = (fahrenheit - 32) * 5/9;
  conversion.toFixed(1);
  const result = Math.round(conversion * 10) / 10;

  return result;
};

const convertToFahrenheit = function(celsius) {
  conversion = (celsius * 9/5) + 32;
  conversion.toFixed(1);
  const result = Math.round(conversion * 10) / 10;

  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
