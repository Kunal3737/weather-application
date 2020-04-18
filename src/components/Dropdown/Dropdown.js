import React from 'react';
import '../Dropdown/Dropdown.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import WeatherCard from '../WeatherCard/WeatherCard';
import BackupCard from '../BackupCard/BackupCard';

const Dropdown = () => {

    const [Cities, setCities] = useState([]);

    useEffect(() => {
        axios.get('https://weather-application-bbc94.firebaseio.com/cities.json')
            .then(resp => {
                console.log(resp.data);
                setCities(resp.data);
            })
    },[])
    
    const [value, setvalue] = useState();

    const handleOptionChange = () => {
        const selectedCity = document.getElementById('selectedCity').value;
        console.log(selectedCity);
        if (selectedCity != null)
            setvalue(selectedCity);
        else {
            setvalue(false);
        }   
    }

    return (
        <div>
            <form className="dropdown">
                <label id="selectACity">Select a city:</label>
                <select id="selectedCity" onChange={handleOptionChange}>
                    <option value="null">Nothing is selected</option>
                    {Cities.map(city => (
                        <option value={city.name} key={city.name}>{city.name}</option>
                    ))}
                </select>
            </form>
            <div>
                {value
                ? <WeatherCard currentCity= {value}/> 
                : <BackupCard/>
                }
            </div>
        </div>
    )
}

export default Dropdown
