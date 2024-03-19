import { useState } from 'react';
import "../pages/TopLinks.css";
import '../Components/Weather/Weather.css';
import searchIcon from "../assets/search.png";

function Location() {
  
    const [location, setLocation] = useState('Seattle');
    const [country, setCountry] = useState('USA');
    const [longitude, setLongitude] = useState('0°');
    const [latitude, setLatitude] = useState('0°');

    let api_key = "b039d4d6537b6af55585b8f0ea3b116d";

    const search = async () => {
        const city = document.querySelector(".cityName");

        if (!city || city.value === "") {
            return;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${api_key}`;

        try {
            let response = await fetch(url);
            let data = await response.json();
      
            setLocation(data.name);
            setCountry(data.sys.country)
            setLongitude(data.coord.lon + " °");
            setLatitude(data.coord.lat + " °");

        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    return (
        <div className='container'>
            <div className='temp weather-temp'>{location}</div>
            <div className='location weather-location'>{country}</div>
            <div className='data-container'>
                <div className='element'>
                    
                    <div className='data'>
                        <div className='humidity'>
                          {longitude}</div>
                        <div className='text'>Longitude</div>
                    </div>
                </div>
                <div className='element'>
                    
                    <div className='data'>
                        <div className='humidity'>{latitude}</div>
                        <div className='text'>Latitude</div>
                    </div>
                </div>
            </div>
            <div className='top-bar'>
                <input type="text" className='cityName' placeholder='Enter City' />
                <div className="search-icon">
                    <img src={searchIcon} onClick={search} alt="search icon" />
                </div>
            </div>
        </div>
    );
}

export default Location;
