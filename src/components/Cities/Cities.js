import React from "react";
import "../Cities/Cities.css";
// import Axios from 'axios';
import { useState, useEffect } from "react";
const axios = require("axios").default;

function Cities() {
  const [mycities, setmycities] = useState([]);

  const [isbutton, setisbutton] = useState(false);
  const [myid, setmyid] = useState("");

  useEffect(() => {
    axios
      .get(`https://weather-application-bbc94.firebaseio.com/mycities.json`)
      .then((response) => {
        const fetchedResult = [];
        for (let key in response.data) {
          fetchedResult.push({
            ...response.data[key],
            id: key,
          });
        }
        setmycities(fetchedResult);
      });
  }, [mycities]);

  function handleDelete(id) {
    setisbutton(true);
    setmyid(id);
  }

  useEffect(() => {
    if (isbutton === true) {
      console.log("Delete button");
      axios
        .delete(
          `https://weather-application-bbc94.firebaseio.com/mycities/${myid}.json`
        )
        .then((response) => {
          console.log(response);
        });
    }
    setisbutton(false);
  });

  function handleCelcius() {
    console.log("Celcius");
  }

  function handleKelvin() {
    console.log("Kelvin");
  }

  function handleFahrenheit() {
    console.log("Fahrenheit");
  }

  return (
    <>
      <h3>My Cities</h3>
      <div className="myCitiesButton">
        <span>Selected Temperature Type:</span>
        <button onClick={handleCelcius} className="tempButton">
          °C
        </button>
        <button onClick={handleKelvin} className="tempButton">
          °K
        </button>
        <button onClick={handleFahrenheit} className="tempButton">
          °F
        </button>
      </div>

      <>
        {mycities.map((items) => (
          <div key={items.id} className="myOuterInlineDiv">
            <div className="myInlineDiv">
              <span className="cityName"> {items.myCityName} </span>
              <span className="temp"> {items.myTemp} °C</span>
            </div>
            <button
              className="deleteButton"
              onClick={(id) => handleDelete(items.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </>
    </>
  );
}

export default Cities;
