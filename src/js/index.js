import '../css/style.css';
import * as model from '../js/model.js';
import view from '../js/view.js';

/**
 * Obtain the user's locaiton
 * @returns {object} Geolocation data (lat, lng, city, country)
 */
const getLocation = async function () {
  if (!navigator.geolocation) return 'Geolocation not supported';

  // Wrap getCurrentPosition in a Promise
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      async function (position) {
        try {
          const { latitude: lat, longitude: lng } = position.coords;

          const resGeo = await fetch(
            `https://geocode.xyz/${lat},${lng}?geoit=json`
          );
          if (!resGeo.ok) throw new Error('Problem finding your city');

          const dataGeo = await resGeo.json();

          const { city } = dataGeo;
          const { country } = dataGeo;

          resolve({ lat, lng, city, country });
        } catch (err) {
          reject(err);
        }
      },
      function () {
        reject('Failure to obtain geolocation');
      }
    );
  });
};

/**
 * Package the desired weather data in an object for neatness
 * @param {number} currTemp Current temperature at 2m above sea level
 * @param {number} appTemp Apparent temperature at 2m above sea level
 * @param {number} preciPr Probability of precipitation (0 - 100)
 * @param {number} minTemp Minimum temperature for the day
 * @param {number} maxTemp Maximum temperature for the day
 * @returns {object} Contain the above paraments
 */
const makeWeatherObj = function (currTemp, appTemp, preciPr, minTemp, maxTemp) {
  const obj = { currTemp, appTemp, preciPr, minTemp, maxTemp };
  return obj;
};

/**
 * Call weather API to a specified location
 * @param {object} [location = undefined] Latitude, longitude, city & country
 */
const getWeather = async function (location = undefined) {
  try {
    // The location was not specified by the user (at page load)
    if (location === undefined) {
      location = await getLocation();
      model.loadLocation(location);
    }

    const weather = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lng}&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo`
    );
    const data = await weather.json();
    const noonToday = makeWeatherObj(
      data.hourly.temperature_2m[12],
      data.hourly.apparent_temperature[12],
      data.hourly.precipitation_probability[12],
      data.daily.temperature_2m_min[0],
      data.daily.temperature_2m_max[0]
    );
    const noonTomorr = makeWeatherObj(
      data.hourly.temperature_2m[36],
      data.hourly.apparent_temperature[36],
      data.hourly.precipitation_probability[36],
      data.daily.temperature_2m_min[1],
      data.daily.temperature_2m_max[1]
    );
    const noonAfterTo = makeWeatherObj(
      data.hourly.temperature_2m[60],
      data.hourly.apparent_temperature[60],
      data.hourly.precipitation_probability[60],
      data.daily.temperature_2m_min[2],
      data.daily.temperature_2m_max[2]
    );

    view.renderWeather(
      location.city,
      location.country,
      noonToday,
      noonTomorr,
      noonAfterTo
    );
  } catch (err) {
    console.error(err);
  }
};

/**
 * MVC event listener handler: process user input to get weather at location
 * @returns {undefined}
 */
const controlSearchResult = async function () {
  try {
    // spinner
    view.renderSpinner();

    // get search query
    const query = view.getQuery();
    if (!query) return;

    // find the location thru API
    const search = await fetch(`https://geocode.xyz/locate=${query}?json=1`);
    if (!search.ok) throw new Error(`Geocode API Error: ${search.statusText}`);

    // extract relevant data
    const data = await search.json();
    const { latt: lat, longt: lng } = data;
    const { city, countryname: country } = data.standard;

    // load in state
    model.loadSearch({ lat, lng, city, country });

    // search for weather at query
    await getWeather(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

/**
 * Run when the page loads to display the weather at the user's location
 */
const init = function () {
  getWeather();
  view.addHandlerSearch(controlSearchResult);
};
init();
