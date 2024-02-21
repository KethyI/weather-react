import "./App.css";
import React from "react";
import "bootstrap";
import Weather from "./Weather";

export default function App() {
  return (
    <div className='App'>
      <h1>Weather App</h1>
      <Weather city='Kyiv' />

      <footer>
        <p>
          {" "}
          <a
            href='https://github.com/KethyI/weather-react'
            target='_blank'
            rel='noreferrer'
          >
            Open source code
          </a>{" "}
          on Github by{" "}
          <a
            href='https://www.linkedin.com/in/iryna-kot-2b29b9218/'
            target='_blank'
            rel='noreferrer'
          >
            Iryna Kot
          </a>
        </p>
      </footer>
    </div>
  );
}
