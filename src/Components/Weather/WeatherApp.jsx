import React from 'react'
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
            return ""
        }

        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

        let response = await fetch(url);
        let data = await response.json();

        const temprature = document.getElementsByClassName("temprature")
        const location = document.getElementsByClassName("temprature")
        const humidity = document.getElementsByClassName("humidity")
        const wind = document.getElementsByClassName("wind")


 
        temprature[0].innerHTML = data.main.temp;
        location[0].innerHTML = data.name;
        humidity[0].innerHTML = data.main.humidity;
        wind[0].innerHTML = data.wind.speed;







        
    }

    

  return (
    <div className='container'>
        <div className='weather-img'>
            <img src={cloud} alt="" />
        </div>
        <div className='temp'>24°C</div>
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
                <img src={searchIcon} alt="seach icon image"/>
            </div>
        </div>

    </div>
 
  )
}

export default WeatherApp