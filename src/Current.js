import React, { useState } from "react";
import axios from "axios";
import Time from "./Time";

export default function Current(props) {
  let [weather, setWeather] = useState({ ready: false });

  let key = `0ebc654fccbc00189d5408f3d6f15b08`;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${key}`;

  if (weather.ready) {
    return (
      <div className='App'>
        <h2>{weather.city}</h2>
        <Time time={new Date(weather.time * 1000)} />
        <div className='row'>
          <div className='col-6  mt-4'>
            <p>Temperature: {Math.round(weather.temp)}℃</p>
            <p>Humidity: {weather.humidity}%</p>
            <p>Wind: {weather.wind}km/h</p>
          </div>

          <div className='col-6'>
            <img
              src={weather.icon}
              alt={weather.description}
            />
            <p className='text-capitalize'>{weather.description}</p>
          </div>
        </div>
      </div>
    );
  } else {
    function getWeather(response) {
      setWeather({
        city: response.data.name,
        temp: response.data.main.temp,
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        wind: response.data.wind.speed,
        time: response.data.dt,
        ready: true,
      });
    }
    axios.get(url).then(getWeather);

    return <div className='App'>Loading...</div>;
  }
}
