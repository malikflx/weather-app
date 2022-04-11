import API_KEY from "../config.js";
console.log(`Your API Key is ${API_KEY}`);
document.querySelector('button').addEventListener('click', getWeather);

function getWeather() {
  let weather = document.querySelector('input').value;

fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${weather}`)
  .then(response => response.json()) // parse response as JSON
  .then(data => {
    console.log(data);
    document.querySelector(".location").innerText = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
    
    document.querySelector('.temperature').innerText = `${Math.floor(data.current.temp_f)}\xB0`;

    document.querySelector('.condition').innerText = data.current.condition.text;
    
    document.querySelector('img').src= data.current.condition.icon;
  })
  .catch(err => {
    console.log(`error ${err}`)
  });
}