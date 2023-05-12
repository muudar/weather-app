import './style.css';
import {displayData, getInput} from './data'

let cel = true;
let lastLoc = "";

const weatherInfo = document.querySelector(".weather-info");
const waiting = document.querySelector("#waiting");
const errorBox = document.querySelector("section");
const switchButton = document.querySelector("#switch");
switchButton.addEventListener("click", () => {
    cel = !cel;
    switchButton.children[0].classList.toggle("active");
    switchButton.children[1].classList.toggle("active");
    if(lastLoc){
        displayData(lastLoc,cel);
    }
})


document.querySelector("form").addEventListener("submit", () =>{
    errorBox.classList.add("hidden");
    weatherInfo.classList.add("hidden");
    waiting.classList.remove("hidden");
    fetch("https://api.weatherapi.com/v1/forecast.json?key=af8ac87f3a69412f9cb153535230705&q="+getInput()+"&days=7")
    .then((resp) => {
        if(resp.ok){
            return resp.json();
        }
            throw new Error("No such location exists!");
    })
    .then((resp) => {
        errorBox.classList.add("hidden");
        weatherInfo.classList.remove("hidden");
        waiting.classList.add("hidden");
        displayData(resp, cel);
        lastLoc = resp;
    })
    .catch((error) =>{
        waiting.classList.add("hidden");
        errorBox.classList.remove("hidden");
        weatherInfo.classList.add("hidden");
        
    })
});