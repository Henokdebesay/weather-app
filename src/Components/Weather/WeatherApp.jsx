import React from 'react'
import { useState } from 'react'
import '/Users/macuser/Documents/github/weather-app/src/Components/Weather/Weather.css'

// import clear from "/Users/macuser/Documents/github/weather-app/src/assets/clear.png"
import cloud from "/Users/macuser/Documents/github/weather-app/src/assets/cloud.png"
// import drizzle from "/Users/macuser/Documents/github/weather-app/src/assets/drizzle.png"
import humidity from "/Users/macuser/Documents/github/weather-app/src/assets/humidity.png"
// import rain from "/Users/macuser/Documents/github/weather-app/src/assets/rain.png"
import searchIcon from "/Users/macuser/Documents/github/weather-app/src/assets/search.png"
// import snow from "/Users/macuser/Documents/github/weather-app/src/assets/snow.png"
import wind from "/Users/macuser/Documents/github/weather-app/src/assets/wind.png"


function WeatherApp() {

    let api_key = "b039d4d6537b6af55585b8f0ea3b116d";

    const search = async () => {
        const city = document.getElementsByClassName("cityName");

        if (city[0].value === ""){
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city[0].value}&appid=${api_key}`

        let response = await fetch(url);
        let data = await response.json();

        const temprature = document.getElementsByClassName("temp")
        const location = document.getElementsByClassName("location")
        const humidityElements = document.getElementsByClassName("humidity")
        const windElements = document.getElementsByClassName("wind")
        


 
        temprature[0].innerHTML = data.main.temp + " °C";
        location[0].innerHTML = data.name;
        humidityElements[0].innerHTML = data.main.humidity + " %";
        windElements[0].innerHTML = data.wind.speed + " km/h";

        
    }

    

  return (
    <div className='container'>
        <div className='weather-img'>
            <img src={cloud} alt="" />
        </div>
        <div className='temp'>0°C</div>
        <div className='location'>Seattle</div>
        <div className='data-container'>
            <div className='element'>
                <img src={humidity} alt="" className='icon'/>
                <div className='data'> 
                    <div className='humidity'>0%</div>
                    <div className='text'>Humudity</div>
                </div>
            </div>
            <div className='element'>
                <img src={wind} alt="" className='icon'/>
                <div className='data'> 
                    <div className='wind'>0 km/hr</div>
                    <div>Wind Speed</div>
                </div>
            </div>
        </div>
        <div className='top-bar'>
            <input type="text" className='cityName' placeholder='Enter City' />
            <div className="search-icon">
                <img src={searchIcon} onClick={() => {search()}} alt="seach icon image"/>
            </div>
        </div>

    </div>
 
  )
}

export default WeatherApp