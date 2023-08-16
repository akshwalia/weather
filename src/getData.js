import updatePage from "./updatePage";

const baseURL = 'https://api.weatherapi.com/v1/forecast.json?key=1370a7ea90ac4b99baf223053231408&days=4&q='
const key = '1370a7ea90ac4b99baf223053231408';

async function getData(city,unit,slide) {
    const URL = baseURL + city;

    const response = await fetch(URL);
    const result = await response.json();

    console.log(result);

    return result;
}

export { getData };