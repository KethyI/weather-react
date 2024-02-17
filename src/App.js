import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import "bootstrap";
import Current from "./Current";

export default function App() {
  let [city, setCity] = useState("Kyiv");

  function getCity(event) {
    setCity(event.target.value);
  }

  function showWeather(event) {
    event.preventDefault();
    if (city === "Kyiv") {
      alert(`Enter the city`);
    } else {
      alert("Loading");
    }
  }
  return (
    <div className='App'>
      <h1>Weather App</h1>
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
      <Current city={city} />
      <p>
        {" "}
        <a
          href='https://github.com/KethyI/weather-react'
          target='_blank'
          rel='noreferrer'
        >
          Open source code
        </a>{" "}
        on Github
      </p>
    </div>
  );
}
