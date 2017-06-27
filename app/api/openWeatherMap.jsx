var axios = require('axios');
{/*variable that cant be altered is const*/}
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=3b8cd5bccb055b1b4b943b31ea5f1452&units=imperial';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}



{/*3b8cd5bccb055b1b4b943b31ea5f1452 API KEY
  api.openweathermap.org/data/2.5/weather?q={city name}
*/}
