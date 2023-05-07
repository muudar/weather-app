import './style.css';

function getInput(){
    return document.querySelector("#location").value;
}

document.querySelector("form").onsubmit = () =>{
    fetch("https://api.weatherapi.com/v1/forecast.json?key=af8ac87f3a69412f9cb153535230705&q="+getInput()+"&days=7")
    .then((resp) => {
        if(resp.ok){
            return resp.json();
        }
            throw new Error("No such location exists!");
    })
    .then((resp) => console.log(resp))
    .catch((error) =>{
        console.log("Fix dis man!");
    })
}