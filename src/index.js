import { getData } from "./getData";

const url = "https://api.weatherapi.com/v1/forecast.json?key=1370a7ea90ac4b99baf223053231408&q=Dehradun&days=3";

const searchbox = document.getElementById('searchbox');
const searchbutton = document.getElementById('searchbutton');

const toggleUnit = document.getElementById('units');

const daily = document.getElementById('dailybutton');
const hourly = document.getElementById('hourlybutton');

const navigation = document.querySelector('.navigation');
const left = document.getElementById('left');
const right = document.getElementById('right');



let slide = 1;

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
        getData(currentLocation,unit,slide);
        toggleUnit.innerHTML = "Display °C"
    }
    else {
        unit = 'cel';
        getData(currentLocation,unit,slide);
        toggleUnit.innerHTML = "Display °F"
    }
});

daily.addEventListener('click', () => {
    if(!daily.classList.contains('selected')) {
        hourly.classList.remove('selected');
        daily.classList.add('selected');
        getData(currentLocation,unit);
        navigation.style.visibility = 'hidden';
        slide=1;
    }
});

hourly.addEventListener('click', () => {
    if(!hourly.classList.contains('selected')) {
        daily.classList.remove('selected');
        hourly.classList.add('selected');
        getData(currentLocation,unit,slide);
        navigation.style.visibility = 'visible';
        slide = 1;
    }
});

left.addEventListener('click', () => {
    if(slide == 1) {
        document.getElementById(`${slide}`).src = 'assets/svgs/circle-outline.png';
        slide = 4;
        document.getElementById(`${slide}`).src = 'assets/svgs/circle.png';
    }
    else {
        document.getElementById(`${slide}`).src = 'assets/svgs/circle-outline.png';
        slide--;
        document.getElementById(`${slide}`).src = 'assets/svgs/circle.png';
    }

    getData(currentLocation,unit,slide);
});

right.addEventListener('click', () => {
    if(slide == 4) {
        document.getElementById(`${slide}`).src = 'assets/svgs/circle-outline.png';
        slide = 1;
        document.getElementById(`${slide}`).src = 'assets/svgs/circle.png';
    }
    else {
        document.getElementById(`${slide}`).src = 'assets/svgs/circle-outline.png';
        slide++;
        document.getElementById(`${slide}`).src = 'assets/svgs/circle.png';
    }
    getData(currentLocation,unit,slide);
})

