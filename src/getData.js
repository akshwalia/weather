import updatePage from "./updatePage";

const baseURL = 'https://api.weatherapi.com/v1/forecast.json?key=1370a7ea90ac4b99baf223053231408&days=4&q='
const key = '1370a7ea90ac4b99baf223053231408';
const error = document.getElementById('error');

async function getData(city,unit,slide) {
    const URL = baseURL + city;

    const response = await fetch(URL, {mode: 'cors'});
    const result = await response.json();

    if(!response.ok) {
        if(response.status == 400) 
            error.innerHTML = "Location not found"
    }

    console.log(result);

    return result;
}

export { getData };