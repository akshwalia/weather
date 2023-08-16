import blizzard from './images/icons/blizzard.png';
import cloudy from './images/icons/cloudy.png';
import drizzle from './images/icons/drizzle.png';
import freezingDrizzle from './images/icons/freezing-drizzle.png';
import fog from './images/icons/fog.png';
import hail from './images/icons/hail.png';
import heavyRain from './images/icons/heavy-rain.png';
import moderateRain from './images/icons/light-rain.png';
import mist from './images/icons/mist.png';
import overcast from './images/icons/overcast.png';
import partlyCloudy from './images/icons/partly-cloudy.png';
import sleet from './images/icons/sleet.png';
import snow from './images/icons/snowfall.png';
import sun from './images/icons/sunny.png';
import thunder from './images/icons/thunder.png';

export default function updateIcon(weather, icon) {
    weather = weather.toLowerCase();

    if (weather.includes('sunny') || weather == 'clear')
        icon.src = sun;
    else if (weather.includes('cloudy')) {
        if (weather.includes('partly'))
            icon.src = partlyCloudy;
        else
            icon.src = cloudy;
    }
    else if (weather == 'overcast')
        icon.src = overcast;
    else if (weather.includes('thunder'))
        icon.src = thunder;
    else if (weather.includes('pellets'))
        icon.src = hail;
    else if (weather == 'blizzard')
        icon.src = blizzard;
    else if (weather.includes('fog'))
        icon.src = fog;
    else if (weather == 'mist')
        icon.src = mist;
    else if (weather.includes('rain' || weather.includes('drizzle'))) {
        if (weather.includes('light'))
            icon.src = drizzle;
        else if (weather.includes('moderate'))
            icon.src = moderateRain;
        else if (weather.includes('heavy'))
            icon.src = heavyRain;
        else if (weather.includes('freezing'))
            icon.src = freezingDrizzle;
        else
            icon.src = drizzle;
    }

    else if (weather.includes('snow'))
        icon.src = snow;
    else if (weather.includes('sleet'))
        icon.src = sleet;

}