import updateIcon from "./updateIcon";

const forecastContainer = document.querySelector('.forecastcontainer');
const hourlyContainer = document.querySelector('.hourlycontainer');

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function displayDaily(object,unit,slide) {
    forecastContainer.innerHTML = "";
    hourlyContainer.innerHTML = "";

    for(let i=1; i<=3; i++) {
        const card = document.createElement('div')

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

function displayHourly(object,unit,slide) {
    let cardsDisplayed = 1;
    let completed = false;
    forecastContainer.innerHTML = "";
    hourlyContainer.innerHTML = "";
    
    let currentHour = '13';
    currentHour = Number(currentHour);

    while(true) {
        for(let i=currentHour + (slide-1)*6; i<=23; i++) {
            const card = document.createElement('div');
    
            const time = document.createElement('div');
            if(i==0)
                time.innerHTML = "12:00 AM";
            else if(i<=12)
                time.innerHTML = i + ":00 AM";
            else 
                time.innerHTML = (i-12) + ":00 PM";
            
            const temp = document.createElement('div');
            temp.className = 'high';
    
            if(unit == 'cel') {
                temp.innerHTML = object.forecast.forecastday[0].hour[i].temp_c + '°C';
            }
            else 
                temp.innerHTML = object.forecast.forecastday[0].hour[i].temp_f + '°F';
            
            const icon = document.createElement('img');
    
            updateIcon(object.forecast.forecastday[0].hour[i].condition.text, icon);
            
            card.appendChild(time);
            card.appendChild(temp);
            card.appendChild(icon);
    
            hourlyContainer.appendChild(card);
    
            
            if(cardsDisplayed == 6) {
                completed=true;
                break;
            }
            cardsDisplayed++;
        }

        if(completed)
            break;

        let remainingHours = currentHour + (slide-1)*6 - 24;

        if(remainingHours<0)
            remainingHours = 0;

        for(let i=0 + remainingHours; i<=23; i++) {
            const card = document.createElement('div');
    
            const time = document.createElement('div');
            if(i==0)
                time.innerHTML = "12:00 AM";
            else if(i<=12)
                time.innerHTML = i + ":00 AM";
            else 
                time.innerHTML = (i-12) + ":00 PM";
            
            const temp = document.createElement('div');
            temp.className = 'high';
    
            if(unit == 'cel') {
                temp.innerHTML = object.forecast.forecastday[1].hour[i].temp_c + '°C';
            }
            else 
                temp.innerHTML = object.forecast.forecastday[1].hour[i].temp_f + '°F';
            
            const icon = document.createElement('img');
    
            updateIcon(object.forecast.forecastday[1].hour[i].condition.text, icon);
            
            card.appendChild(time);
            card.appendChild(temp);
            card.appendChild(icon);
    
            hourlyContainer.appendChild(card);
    
            if(cardsDisplayed == 6) {
                completed=true;
                break;
            }
            cardsDisplayed++;
        }

        if(completed)
            break;
    }
    
}

export { displayDaily,displayHourly };