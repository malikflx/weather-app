import API_KEY from "../config.js";
// console.log(`Your API Key is ${API_KEY}`);

fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Norwalk,%CT`)
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
  
  fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=Norwalk,%CT`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      document.querySelector('.range').innerText = `H: ${Math.floor(data.forecast.forecastday[0].day.maxtemp_f)} L: ${Math.floor(data.forecast.forecastday[0].day.mintemp_f)}`;
      document.querySelector('.description').innerText = data.forecast.forecastday[0].day.condition.text;
    })

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