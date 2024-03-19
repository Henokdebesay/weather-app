import { useState } from 'react';
import "../pages/TopLinks.css";
import '../Components/Weather/Weather.css';
import searchIcon from "../assets/search.png";

function Geography() {
  
    const [location, setLocation] = useState('Seattle');
    const [country, setCountry] = useState('USA');
    const [grnd_level, setGroundLevel] = useState('0m');
    const [seaLevel, setSeaLevel] = useState("0m");

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
            setCountry(data.sys.country);
            setGroundLevel(data.main.grnd_level);
            setSeaLevel(data.main.sea_level);
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
                          {grnd_level}</div>
                        <div className='text'>Ground Level</div>
                    </div>
                </div>
                <div className='element'>
                    
                    <div className='data'>
                        <div className='humidity'>{seaLevel}</div>
                        <div className='text'>Sea Level</div>
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

export default Geography;
