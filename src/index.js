import './style.css';

function getInput(){
    return document.querySelector("#location").value;
}

const testDiv = document.querySelector("#testDiv");

document.querySelector("input").addEventListener("input", () =>{
    fetch("https://api.weatherapi.com/v1/forecast.json?key=af8ac87f3a69412f9cb153535230705&q="+getInput()+"&days=7")
    .then((resp) => {
        if(resp.ok){
            return resp.json();
        }
            throw new Error("No such location exists!");
    })
    .then((resp) => console.log(resp))
    .catch((error) =>{
        testDiv.textContent = "NO SUCH LOCATION!";
    })
});