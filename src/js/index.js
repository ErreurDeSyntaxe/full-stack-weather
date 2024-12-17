import '../css/style.css';

/**
 *
 * @returns {Object} Geolocation data
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

          resolve({ lat, lng, dataGeo });
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

// When using user input, call getWeather(location) & check if location is undefined
const getWeather = async function (location = { lat: 24.1202, lng: 120.6836 }) {
  try {
    // const location = await getLocation();
    // console.log(location);
    const weather = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lng}&hourly=temperature_2m,apparent_temperature,precipitation_probability`
    );
    const data = await weather.json();

    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

const getTime = function () {
  // data.hourly.time[0]
  // 2024-12-17T00:00
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hour = now.getHours();
  const zeroHour = hour < 10 ? `0${hour}` : hour;
  console.log(now);
  console.log(`${year}-${month}-${day}T${zeroHour}:00`);
  return `${year}-${month}-${day}T${zeroHour}:00`;
};
// getTime();

const getWeatherNow = function () {};

// getWeather();
