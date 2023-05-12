function getCurrentTemperature(data){
    let forecast = data.forecast.forecastday;
    return {
        condition:data.current.condition.text,
        current_c:data.current.temp_c,
        maxtemp_c:forecast[0].day.maxtemp_c,
        mintemp_c:forecast[0].day.mintemp_c,
        current_f:data.current.temp_f,
        maxtemp_f:forecast[0].day.maxtemp_f,
        mintemp_f:forecast[0].day.mintemp_f,
        localtime:data.location.localtime,
    }
}

const locationDiv = document.querySelector("#weather-location");
const tempDiv = document.querySelector("#weather-temp-cf");
const conditionDiv = document.querySelector("#condition");
const maxTemp = document.querySelector("#max-temp");
const minTemp = document.querySelector("#min-temp");
const localTime = document.querySelector("#local-time");

function tempChar(cel){
    if(cel)
        return "\u00B0C";
    else
        return "\u00B0F";
}

function getLocationName(data){
    return data.location.name + ", " + data.location.country;
}

function getInput(){
    return document.querySelector("#location").value;
}


function displayData(data, cel){
    let curr,maxtemp,mintemp = "";
    if(cel){
         curr = "current_c";
         maxtemp =  "maxtemp_c";
         mintemp = "mintemp_c";
    }
    else{
         curr = "current_f";
         maxtemp =  "maxtemp_f";
         mintemp = "mintemp_f";
    }
    locationDiv.textContent = getLocationName(data);
    let weather = getCurrentTemperature(data);
    tempDiv.textContent = weather[curr] + tempChar(cel);
    conditionDiv.textContent = weather.condition;
    maxTemp.textContent = "Max temp: " + weather[maxtemp] + tempChar(cel);
    minTemp.textContent = "Min temp: " + weather[mintemp] + tempChar(cel);
    localTime.textContent = weather.localtime;
}
export {displayData, getInput}