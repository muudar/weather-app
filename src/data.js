function getCurrentTemperature(data){
    let forecast = data.forecast.forecastday;
    return {
        condition:data.current.condition.text,
        current_c:data.current.temp_c,
        maxtemp_c:forecast[0].day.maxtemp_c,
        mintemp_c:forecast[0].day.mintemp_c,
    }
}

const locationDiv = document.querySelector("#weather-location");
const tempDiv = document.querySelector("#weather-temp-cf");
const conditionDiv = document.querySelector("#condition");
const maxTemp = document.querySelector("#max-temp");
const minTemp = document.querySelector("#min-temp");

function tempChar(){
    return "\u00B0C";
}

function getLocationName(data){
    return data.location.name + ", " + data.location.country;
}

function getInput(){
    return document.querySelector("#location").value;
}


function displayData(data){
    locationDiv.textContent = getLocationName(data);
    let weather = getCurrentTemperature(data);
    tempDiv.textContent = weather.current_c + tempChar();
    conditionDiv.textContent = weather.condition;
    maxTemp.textContent = "Max temp: " + weather.maxtemp_c + tempChar();
    minTemp.textContent = "Min temp: " + weather.mintemp_c + tempChar();
}
export {displayData, getInput}