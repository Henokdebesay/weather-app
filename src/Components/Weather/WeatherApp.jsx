import { useState, useEffect } from 'react';
import "/Users/macuser/Documents/github/weather-app/src/pages/TopLinks.css"
import '/Users/macuser/Documents/github/weather-app/src/Components/Weather/Weather.css';
import clearIcon from "/Users/macuser/Documents/github/weather-app/src/assets/clear.png";
import cloudIcon from "/Users/macuser/Documents/github/weather-app/src/assets/cloud.png";
import drizzleIcon from "/Users/macuser/Documents/github/weather-app/src/assets/drizzle.png";
import humidityIcon from "/Users/macuser/Documents/github/weather-app/src/assets/humidity.png";
import rainIcon from "/Users/macuser/Documents/github/weather-app/src/assets/rain.png";
import searchIcon from "/Users/macuser/Documents/github/weather-app/src/assets/search.png";
import snowIcon from "/Users/macuser/Documents/github/weather-app/src/assets/snow.png";
import windIcon from "/Users/macuser/Documents/github/weather-app/src/assets/wind.png";
import { Link } from 'react-router-dom';


function WeatherApp() {
    const [temperature, setTemperature] = useState('0 °C');
    const [location, setLocation] = useState('Seattle');
    const [humidity, setHumidity] = useState('0 %');
    const [windSpeed, setWindSpeed] = useState('0 km/h');
    const [weatherIcon, setWeatherIcon] = useState(cloudIcon);
    const [data, setData] = useState(null); // Initialize data state

    let api_key = "b039d4d6537b6af55585b8f0ea3b116d";

    const search = async () => {
        const city = document.getElementsByClassName("cityName")[0];

        if (city.value === "") {
            return;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();
        setData(data); 

        const tempCelsius = (data.main.temp - 273.15).toFixed(1); 
        setTemperature(`${tempCelsius} °C`);        
        setLocation(data.name);
        setHumidity(data.main.humidity + " %");
        setWindSpeed(data.wind.speed + " km/h");
    };

    useEffect(() => {
        if (!data || !data.weather) return;
        switch (data.weather[0].icon) {
            case "01d":
            case "01n":
                setWeatherIcon(clearIcon);
                break;
            case "02d":
            case "02n":
                setWeatherIcon(cloudIcon);
                break;
            case "03d":
            case "03n":
            case "04d":
            case "04n":
                setWeatherIcon(drizzleIcon);
                break;
            case "09d":
            case "09n":
            case "10d":
            case "10n":
                setWeatherIcon(rainIcon);
                break;
            case "13d":
            case "13n":
                setWeatherIcon(snowIcon);
                break;
            default:
                setWeatherIcon(cloudIcon);
        }
    }, [data]);

    return (
            <div className='container'>
                <div className="weather-app">
                <h1>Welcome to Weather App</h1>
                </div>

                <div className='weather-img'>
                    <img src={weatherIcon} alt="" />
                </div>
                <div className='temp weather-temp'>{temperature}</div>
                <div className='location weather-location'>{location}</div>
                <div className='data-container'>
                    <div className='element'>
                        <img src={humidityIcon} alt="" className='icon' />
                        <div className='data'>
                            <div className='humidity'>{humidity}</div>
                            <div className='text'>Humidity</div>
                        </div>
                    </div>
                    <div className='element'>
                        <img src={windIcon} alt="" className='icon' />
                        <div className='data'>
                            <div className='wind'>{windSpeed}</div>
                            <div>Wind Speed</div>
                        </div>
                    </div>
                </div>

                <div className='top-bar'>
                    <input type="text" className='cityName' placeholder='Enter City' />
                    <div className="search-icon">
                        <img src={searchIcon} onClick={search} alt="search icon image" />
                    </div>
                </div>

                <h2>Check out different features:</h2>
                <ul className='list'>
                    <li>
                    <Link to="/geography">Geography</Link>
                    </li>
                    <li>
                    <Link to="/location">Location</Link>
                    </li>
                </ul>
            </div>
    );
}

export default WeatherApp;
