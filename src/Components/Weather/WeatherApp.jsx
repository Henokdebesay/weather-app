import React from 'react'
import '/Users/macuser/Documents/github/weather-app/src/Components/Weather/Weather.css'

// import clear from "/Users/macuser/Documents/github/weather-app/src/assets/clear.png"
// import cloud from "/Users/macuser/Documents/github/weather-app/src/assets/cloud.png"
// import drizzle from "/Users/macuser/Documents/github/weather-app/src/assets/drizzle.png"
// import humidity from "/Users/macuser/Documents/github/weather-app/src/assets/humudity.png"
// import rain from "/Users/macuser/Documents/github/weather-app/src/assets/rain.png"
import search from "/Users/macuser/Documents/github/weather-app/src/assets/search.png"
// import snow from "/Users/macuser/Documents/github/weather-app/src/assets/snow.png"
// import wind from "/Users/macuser/Documents/github/weather-app/src/assets/wind.png"


function WeatherApp() {
  return (
    <div className='container'>
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