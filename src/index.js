import { getData } from "./getData";

const url = "https://api.weatherapi.com/v1/forecast.json?key=1370a7ea90ac4b99baf223053231408&q=Dehradun&days=3";

const searchbox = document.getElementById('searchbox');
const searchbutton = document.getElementById('searchbutton');

const toggleUnit = document.getElementById('units');

const daily = document.getElementById('dailybutton');
const hourly = document.getElementById('hourlybutton');

let unit = 'cel';
let currentLocation = 'dehradun';

getData('dehradun',unit);

searchbutton.addEventListener('click', () => {
    currentLocation = searchbox.value;
    getData(searchbox.value,unit);
    searchbox.value = "";
})

searchbox.addEventListener('keydown', (e) => {
    if(e.key == 'Enter') {
        currentLocation = searchbox.value;
        getData(searchbox.value,unit);
        searchbox.value = "";
    }
});

toggleUnit.addEventListener('click', () => {
    if(unit == 'cel') {
        unit = 'far';
        getData(currentLocation,unit);
        toggleUnit.innerHTML = "Display °C"
    }
    else {
        unit = 'cel';
        getData(currentLocation,unit);
        toggleUnit.innerHTML = "Display °F"
    }
});

daily.addEventListener('click', () => {
    if(daily.className !== 'selected') {
        hourly.classList.remove = 'selected';
        daily.className = 'selected';
        getData(currentLocation,unit);
    }
});

hourly.addEventListener('click', () => {
    if(hourly.className !== 'selected') {
        daily.classList.remove = 'selected';
        hourly.className = 'selected';
        getData(currentLocation,unit);
    }
});

