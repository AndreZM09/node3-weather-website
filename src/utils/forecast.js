const request = require('request');

const forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=ccee5de2dc0fe3e39fac5446e83c7f19&query=${lat},${long}`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (body.error) {
            callback('Unable to find the location. Try another search.', undefined)
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`);
        }
    });

}

module.exports = forecast;


