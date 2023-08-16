import { displayDaily, displayHourly } from "./displayForecast";
import updateIcon from "./updateIcon";

const currentWeather = document.getElementById('currentweathertext');
const location = document.getElementById('location');

const date = document.getElementById('date');
const time = document.getElementById('time');

const currentTemp = document.getElementById('currenttemp');
const todayIcon = document.getElementById('todayicon');

const todayHighTemp = document.getElementById('hightemp');
const todayLowTemp = document.getElementById('lowtemp');
const feelsLike = document.getElementById('feelslike');

const precipitation = document.getElementById('precipitationvalue');
const humidity = document.getElementById('humidityvalue');
const wind = document.getElementById('windvalue');
const pressure = document.getElementById('pressurevalue');

const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const moonPhase = document.getElementById('moonphase');

const daily = document.getElementById('dailybutton');
const hourly = document.getElementById('hourlybutton');



export default function updatePage(object, unit, slide) {
    let i = 1;
    currentWeather.innerHTML = object.current.condition.text;
    location.innerHTML = object.location.name + ", " + object.location.country;

    date.innerHTML = (new Date(object.current.last_updated)).toDateString();
    time.innerHTML = (new Date(object.current.last_updated)).toLocaleTimeString().substring(0, 5) + " (Last Updated)";

    if (unit == 'cel') {
        currentTemp.innerHTML = object.current.temp_c + '°C';

        todayHighTemp.innerHTML = object.forecast.forecastday[0].day.maxtemp_c + '°C';
        todayLowTemp.innerHTML = object.forecast.forecastday[0].day.mintemp_c + '°C';
        feelsLike.innerHTML = object.current.feelslike_c + '°C';
    }
    else {
        currentTemp.innerHTML = object.current.temp_f + '°F';

        todayHighTemp.innerHTML = object.forecast.forecastday[0].day.maxtemp_f + '°F';
        todayLowTemp.innerHTML = object.forecast.forecastday[0].day.mintemp_f + '°F';
        feelsLike.innerHTML = object.current.feelslike_f + '°F';
    }


    precipitation.innerHTML = object.forecast.forecastday[0].day.daily_chance_of_rain + '%';
    humidity.innerHTML = object.current.humidity + "%";
    wind.innerHTML = object.current.wind_mph + 'mph  ' + object.current.wind_dir;
    pressure.innerHTML = object.current.pressure_mb + 'mb';

    sunrise.innerHTML = object.forecast.forecastday[0].astro.sunrise;
    sunset.innerHTML = object.forecast.forecastday[0].astro.sunset;
    moonPhase.innerHTML = object.forecast.forecastday[0].astro.moon_phase;

    updateIcon(object.current.condition.text, todayIcon);

    if(daily.classList.contains('selected')) {
        displayDaily(object,unit,slide);
    }

    if(hourly.classList.contains('selected'))
        displayHourly(object,unit,slide);
}