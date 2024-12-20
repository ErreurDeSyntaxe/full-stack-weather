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
    this.#weather.innerHTML = '';
    const markup = `
      <p class="location">${city}, ${country}</p>
      <div class="card-container">
        <div class="weather-card today">
          <p class="info day">Today</p>
          <p class="info temp-curr">Now: ${arr[0].currTemp}ºC</p>
          <p class="info temp-max">Max: ${arr[0].maxTemp}ºC</p>
          <p class="info temp-min">Min: ${arr[0].minTemp}ºC</p>
          <p class="info temp-preci">Rain/Snow: ${arr[0].preciPr}%</p>
        </div>
        <div class="weather-card future">
          <p class="info day">Tomorrow</p>
          <p class="info temp-max">Max: ${arr[1].maxTemp}ºC</p>
          <p class="info temp-min">Min: ${arr[1].minTemp}ºC</p>
          <p class="info temp-preci">Rain/Snow: ${arr[1].preciPr}%</p>
        </div>
        <div class="weather-card future">
          <p class="info day">After Tomorrow</p>
          <p class="info temp-max">Max: ${arr[2].maxTemp}ºC</p>
          <p class="info temp-min">Min: ${arr[2].minTemp}ºC</p>
          <p class="info temp-preci">Rain/Snow: ${arr[2].preciPr}%</p>
        <div>
      </div>`;
    this.#weather.insertAdjacentHTML('afterbegin', markup);
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
