const celciusToFahrenheit = (celcius) => {
  if (typeof celcius === 'number') {
    return celcius * 1.8 + 32;
  } else {
    return 'Invalid number';
  }
};

const fahrenheitToCelcius = (fahrenheit) => {
  if (typeof fahrenheit === 'number') {
    return (fahrenheit - 32) / 1.8;
  } else {
    return 'Invalid number';
  }
};

console.log(celciusToFahrenheit(30), fahrenheitToCelcius(86));
