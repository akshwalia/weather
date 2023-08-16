import updateIcon from "./updateIcon";

const forecastContainer = document.querySelector('.forecastcontainer');
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function displayDaily(object,unit) {
    forecastContainer.innerHTML = "";

    for(let i=1; i<=3; i++) {
        const card = document.createElement('div');
        card.id = `day${i}`;

        const day = document.createElement('div');
        day.className = 'day';
        day.innerHTML = daysOfWeek[new Date(object.forecast.forecastday[i].date).getDay()];

        const high = document.createElement('div');
        high.className = 'high';

        const low = document.createElement('div');
        low.className = 'low';

        const icon = document.createElement('img');

        if (unit == 'cel') {
            high.innerHTML = object.forecast.forecastday[i].day.maxtemp_c + '°C';
            low.innerHTML = object.forecast.forecastday[i].day.mintemp_c + '°C';
        }
        else {
            high.innerHTML = object.forecast.forecastday[i].day.maxtemp_f + '°F';
            low.innerHTML = object.forecast.forecastday[i].day.mintemp_f + '°F';
        }

        updateIcon(object.forecast.forecastday[i].day.condition.text, icon);

        card.appendChild(day);
        card.appendChild(high);
        card.appendChild(low);
        card.appendChild(icon);

        forecastContainer.appendChild(card);
    }
}

export { displayDaily };