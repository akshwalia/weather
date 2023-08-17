import { getData } from "./getData";
import updatePage from "./updatePage";

const url = "https://api.weatherapi.com/v1/forecast.json?key=1370a7ea90ac4b99baf223053231408&q=Dehradun&days=3";

const searchbox = document.getElementById('searchbox');
const searchbutton = document.getElementById('searchbutton');

const toggleUnit = document.getElementById('units');

const daily = document.getElementById('dailybutton');
const hourly = document.getElementById('hourlybutton');

const navigation = document.querySelector('.navigation');
const left = document.getElementById('left');
const right = document.getElementById('right');

const circles = document.querySelectorAll('.circles img');

let slide = 1;

let unit = 'cel';
let currentLocation = 'dehradun';

let result;


async function start() {
    result = await getData('dehradun',unit);
    updatePage(result,unit,slide);
}

start();


searchbutton.addEventListener('click', async () => {
    currentLocation = searchbox.value;
    result = await getData(searchbox.value,unit);
    updatePage(result,unit,slide);
    searchbox.value = "";
    
})

searchbox.addEventListener('keydown', async(e) => {
    if(e.key == 'Enter') {
        currentLocation = searchbox.value;
        result = await getData(searchbox.value,unit)
        updatePage(result,unit,slide);
        searchbox.value = "";
    }
});

toggleUnit.addEventListener('click', () => {
    if(unit == 'cel') {
        unit = 'far';
        updatePage(result,unit,slide);
        toggleUnit.innerHTML = "Display °C"
    }
    else {
        unit = 'cel';
        updatePage(result,unit,slide);
        toggleUnit.innerHTML = "Display °F"
    }
});

daily.addEventListener('click', () => {
    if(!daily.classList.contains('selected')) {
        hourly.classList.remove('selected');
        daily.classList.add('selected');
        updatePage(result,unit);
        navigation.style.visibility = 'hidden';
        document.getElementById(`${slide}`).src = 'assets/svgs/circle-outline.png';
        slide=1;
    }
});

hourly.addEventListener('click', async () => {
    if(!hourly.classList.contains('selected')) {
        daily.classList.remove('selected');
        hourly.classList.add('selected');
        result = await getData(currentLocation,unit)
        updatePage(result,unit,slide);
        navigation.style.visibility = 'visible';
        document.getElementById(`${slide}`).src = 'assets/svgs/circle.png';
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

    updatePage(result,unit,slide);
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
    updatePage(result,unit,slide);
});

circles.forEach(circle => {
    circle.addEventListener('click', () => {
        document.getElementById(`${slide}`).src = 'assets/svgs/circle-outline.png';
        slide = circle.id;
        document.getElementById(`${slide}`).src = 'assets/svgs/circle.png';
        updatePage(result,unit,slide);
    })
});

