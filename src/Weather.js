import React, { useState } from "react";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";
import Forecast from "./Forecast";

export default function Weather(props) {
  let [city, setCity] = useState(props.city);
  let [weather, setWeather] = useState({ ready: false });

  function getCity(event) {
    setCity(event.target.value);
  }

  function showWeather(event) {
    event.preventDefault();
    if (city === "Kyiv") {
      alert(`Enter the city`);
    } else {
      search();
    }
  }

  function getWeather(response) {
    setWeather({
      city: response.data.name,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      time: response.data.dt,
      coord: response.data.coord,
      ready: true,
    });
  }

  function search() {
    let key = `97bed167ec49bff56e6c1b63daef9c86`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;
    axios.get(url).then(getWeather);
  }

  if (weather.ready) {
    return (
      <div className='Weather'>
        <form onSubmit={showWeather}>
          <button className=' btn-search'>Current</button>
          <input
            placeholder='Choose another city..'
            type='search'
            onChange={getCity}
          ></input>
          <button
            type='submit'
            className='btn-search'
          >
            Search
          </button>
        </form>
        <WeatherDisplay data={weather} />
        <Forecast coord={weather.coord} />
      </div>
    );
  } else {
    search();
    return <div className='Weather'>Loading...</div>;
  }
}
