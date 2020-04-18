import React from 'react';
import '../WeatherCard/WeatherCard.css'
import {useState, useEffect} from 'react';
import Axios from 'axios';

const WeatherCard = (props) => {
    const value = props.currentCity;

    const [forDegree, setforDegree] = useState('°C');

    const [currentTemp, setcurrentTemp] = useState();
    const [currentMain, setcurrentMain] = useState();
    const [MinTemp, setMinTemp] = useState();
    const [MaxTemp, setMaxTemp] = useState();

    const [tempInCelcius, settempInCelcius] = useState();
    const [minInCelcius, setminInCelcius] = useState();
    const [maxInCelcius, setmaxInCelcius] = useState();

    const [tempInKelvin, settempInKelvin] = useState();
    const [minInKelvin, setminInKelvin] = useState();
    const [maxInKelvin, setmaxInKelvin] = useState();

    const [tempInFahrenheit, settempInFahrenheit] = useState();
    const [minInFahrenheit, setminInFahrenheit] = useState();
    const [maxInFahrenheit, setmaxInFahrenheit] = useState();
    
    useEffect(() => {
        Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=a493ff8e0f4519b969db26636f451622`)
            .then(resp => {
                console.log(resp.data);

                /* 0K − 273.15 = -273.1°C */
                const tempInCelcius = resp.data.main.temp - 273.15;
                const minTempInCelcius = resp.data.main.temp_min - 273.15;
                const maxTempInCelcius = resp.data.main.temp_max - 273.15;

                /* Kelvin */
                const tempInKelvin = resp.data.main.temp;
                const minInKelvin = resp.data.main.temp_min;
                const maxInKelvin = resp.data.main.temp_max;

                /* (0K − 273.15) × 9/5 + 32 = -459.7°F */
                const tempInFahrenheit = (resp.data.main.temp - 273.15) * (9/5) + 32;
                const minInFahrenheit = (resp.data.main.temp_min - 273.15) * (9/5) + 32;
                const maxInFahrenheit = (resp.data.main.temp_max - 273.15) * (9/5) + 32;
                
                setcurrentTemp(tempInCelcius);
                setcurrentMain(resp.data.weather[0].main);
                setMinTemp(minTempInCelcius);
                setMaxTemp(maxTempInCelcius);

                settempInCelcius(tempInCelcius);
                setminInCelcius(minTempInCelcius);
                setmaxInCelcius(maxTempInCelcius);

                settempInKelvin(tempInKelvin);
                setminInKelvin(minInKelvin);
                setmaxInKelvin(maxInKelvin);

                settempInFahrenheit(tempInFahrenheit);
                setminInFahrenheit(minInFahrenheit);
                setmaxInFahrenheit(maxInFahrenheit);
            }
    )}, [value])

    function convertToCelcius() {
        console.log("convertToCelcius");
        setforDegree('°C');
        setcurrentTemp(tempInCelcius);
        setMinTemp(minInCelcius);
        setMaxTemp(maxInCelcius);
    }

    function convertToKelvin(){
        console.log("convertToKelvin");
        setforDegree('°K');
        setcurrentTemp(tempInKelvin);
        setMinTemp(minInKelvin);
        setMaxTemp(maxInKelvin);
    }
    
    function convertToFahrenheit(){
        setforDegree('°F');
        console.log("convertToFahrenheit");
        setcurrentTemp(tempInFahrenheit);
        setMinTemp(minInFahrenheit);
        setMaxTemp(maxInFahrenheit);
    }

    const [count, setcount] = useState(0);
    
    function addToCityHandler() {
        setcount(count+1);
        console.log(count);
    }

    useEffect(() => {
        if (count > 0) {
        Axios.post('https://weather-application-bbc94.firebaseio.com/mycities.json', {
                myCityName : value,
                myTemp : currentTemp,
                myMinTemp : MinTemp,    
                myMaxTemp : MaxTemp
        })
            .then(response => {
                console.log(response.data);
            })
        }
    },[count])

    return (
        <div>
            <div className="what">
                 <p>{value}</p>
                 <h1 className="currentTemp" id="changingTemp">{currentTemp} {forDegree}</h1>
                 <span className="spantag">{currentMain}</span><span className="spantag" >{MinTemp} {forDegree} /{MaxTemp} {forDegree}</span><br/>
                 <div className="changingUnit">Temperature Type: <button onClick={convertToCelcius}>°C</button><button onClick={convertToKelvin}>°K</button><button onClick={convertToFahrenheit}>°F</button></div>
            </div>
            <button className="addToCities" onClick={addToCityHandler}>Add {value} to My Cities</button>
        </div>
    )
}

export default WeatherCard
