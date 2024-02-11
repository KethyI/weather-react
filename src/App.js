import "./App.css";
import Current from "./Current";
import React, { useState } from "react";
import axios from "axios";

function App() {
  let [city, setCity] = useState("");
  let [data, setData] = useState(null);

  let key = `0ebc654fccbc00189d5408f3d6f15b08`;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;

  function getCity(event) {
    setCity(event.target.value);
  }

  function getWeather(response) {
    setData(response.data);
  }

  function showWeather(event) {
    event.preventDefault();
    if (city.length === 0) {
      alert(`Enter the city`);
    } else {
      axios.get(url).then(getWeather);
    }
  }

  return (
    <div className='App'>
      <h1>Weather App</h1>
      <form onSubmit={showWeather}>
        <input
          placeholder='Type a city'
          type='search'
          onChange={getCity}
        ></input>
        <button type='submit'>Search</button>
      </form>
      <Current data={data} />
      <p>
        {" "}
        <a href='https://github.com/KethyI/weather-react'>
          Open source code
        </a>{" "}
        on Github
      </p>
    </div>
  );
}

export default App;
