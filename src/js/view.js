class View {
  #form = document.querySelector('.form');
  #search = document.querySelector('.search');
  #weather = document.querySelector('.section-weather');

  /**
   * Logs the weather data in the console
   * @param {string} city
   * @param {string} country
   * @param  {...any} arr Three days' worth of weather data
   */
  renderWeather(city, country, ...arr) {
    console.log('=======================');
    arr.forEach((day) => {
      let str = `In ${city}, ${country}, the temperature is ${day.currTemp}, but the apparent temperature is ${day.appTemp}. The minimum for the day is ${day.minTemp}, and the maximum is ${day.maxTemp}. There is a ${day.preciPr}% chance of precipitation.`;
      console.log(str);
    });
  }

  /**
   * @todo Render a spinner on the page to indicate processing
   */
  renderSpinner() {
    console.log('spinning');
  }

  /**
   * Allow the controller (MVC) to get the user's search query
   * @returns {string} User's search query
   */
  getQuery() {
    const query = this.#search.value;
    this.#search.value = '';
    return query;
  }

  /**
   * Allow the model to call getQuery() to get the user's query
   * @param {function} handler MVC architecture's way of handling the UI
   */
  addHandlerSearch(handler) {
    this.#form.addEventListener('submit', (e) => {
      e.preventDefault();
      handler();
    });
  }
}

export default new View();
