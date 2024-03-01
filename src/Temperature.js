import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className='Temperature'>
        <p>
          Temperature: {Math.round(props.celsius)} ℃ |{" "}
          <a
            href='/'
            onClick={showFahrenheit}
          >
            °F
          </a>
        </p>
      </div>
    );
  } else {
    return (
      <div className='Temperature'>
        <p>
          Temperature: {Math.round(fahrenheit())}{" "}
          <a
            href='/'
            onClick={showCelsius}
          >
            ℃
          </a>{" "}
          | °F
        </p>
      </div>
    );
  }
}
