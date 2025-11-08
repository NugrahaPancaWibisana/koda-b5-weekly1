const celciusToFahrenheit = (celcius) => {
  if (typeof celcius === 'number') {
    return celcius * 1.8 + 32;
  } else {
    return 'Invalid number';
  }
};

console.log(celciusToFahrenheit(30));
