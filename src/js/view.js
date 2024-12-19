class View {
  /**
   * Logs the weather data in the console
   * @param {string} city
   * @param {string} country
   * @param  {...any} arr Three days' worth of weather data
   */
  renderMessage(city, country, ...arr) {
    console.log('=======================');
    arr.forEach((day) => {
      let str = `In ${city}, ${country}, the temperature is ${day.currTemp}, but the apparent temperature is ${day.appTemp}. The minimum for the day is ${day.minTemp}, and the maximum is ${day.maxTemp}. There is a ${day.preciPr}% chance of precipitation.`;
      console.log(str);
    });
  }
}

export default new View();
