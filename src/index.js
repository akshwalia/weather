import { getData } from "./getData";

const url = "https://api.weatherapi.com/v1/forecast.json?key=1370a7ea90ac4b99baf223053231408&q=Dehradun&days=3";

const searchbox = document.getElementById('searchbox');
const searchbutton = document.getElementById('searchbutton');

searchbutton.addEventListener('click', () => {
    getData(searchbox.value);
    searchbox.value = "";
})

searchbox.addEventListener('keydown', (e) => {
    if(e.key == 'Enter') {
        getData(searchbox.value);
        searchbox.value = "";
    }
});