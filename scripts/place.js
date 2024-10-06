// Get current year
const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `<span class="currentyear">${today.getFullYear()} </span>`;

// Get last modification date
const lastModified = document.querySelector("#lastModified");
const latestDate = new Date(document.lastModified);
lastModified.innerHTML = `<p class="lastModified">Last Modified: ${latestDate.getMonth() + 1}/${latestDate.getDate()}/${latestDate.getFullYear()} ${latestDate.getHours()}:${latestDate.getMinutes()}:${latestDate.getSeconds()}</p>`;

// Weather Section
const  temperature= document.querySelector("#temperature");
const  conditions= document.querySelector("#conditions");
const  wind= document.querySelector("#wind");
const  windChill= document.querySelector("#wind-chill");

var vTemperature = 10;
var vConditions = "Mostly cloudy";
var vWind = 5;
var vWindChill = 0;

if (vTemperature <= 10 && vWind > 4.8)
{
    const calculateWindChill = (temperature, windSpeed) => 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);

    vWindChill = Math.trunc(calculateWindChill(vTemperature, vWind)) + " °C";
}
else 
{
    vWindChill = "N/A";
}

temperature.innerHTML = `${vTemperature} °C`;
conditions.innerHTML = vConditions;
wind.innerHTML = `${vWind} km/h`;
windChill.innerHTML = vWindChill;

