import React from 'react'
import '/Users/macuser/Documents/github/weather-app/src/Components/Weather/Weather.css'

// import clear from "/Users/macuser/Documents/github/weather-app/src/assets/clear.png"
import cloud from "/Users/macuser/Documents/github/weather-app/src/assets/cloud.png"
// import drizzle from "/Users/macuser/Documents/github/weather-app/src/assets/drizzle.png"
import humidity from "/Users/macuser/Documents/github/weather-app/src/assets/humidity.png"
// import rain from "/Users/macuser/Documents/github/weather-app/src/assets/rain.png"
import search from "/Users/macuser/Documents/github/weather-app/src/assets/search.png"
// import snow from "/Users/macuser/Documents/github/weather-app/src/assets/snow.png"
import wind from "/Users/macuser/Documents/github/weather-app/src/assets/wind.png"


function WeatherApp() {
  return (
    <div className='container'>
        <div className='weather-img'>
            <img src={cloud} alt="" />
        </div>
        <div className='weather-temp'>24C</div>
        <div className='weather-location'>Seattle</div>
        <div className='data-container'>
            <div className='element'>
                <img src={humidity} alt="" className='icon'/>
                <div className='data'> 
                    <div>64%</div>
                    <div>Humudity</div>
                </div>
            </div>
            <div className='element'>
                <img src={wind} alt="" className='icon'/>
                <div className='data'> 
                    <div>18 km/hr</div>
                    <div>Wind Speed</div>
                </div>
            </div>
        </div>
        <div className='top-bar'>
            <input type="text" className='cityInput' placeholder='Enter City' />
            <div className="search-icon">
                <img src={search} alt="seach icon image"/>
            </div>
        </div>

    </div>
 
  )
}

export default WeatherApp