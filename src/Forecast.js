import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  const [forecast, setForecast] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(false);
  }, [props.coord]);

  if (ready) {
    return (
      <div className='Forecast mt-3'>
        <div className='row'>
          {forecast.map((data, index) => {
            if (index < 5) {
              return (
                <div
                  className='col'
                  key={index}
                >
                  <ForecastDay day={data} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    function getForecast(response) {
      setForecast(response.data.daily);
      setReady(true);
    }

    let lat = props.coord.lat;
    let lon = props.coord.lon;
    let key = "af9f195dtc3b2336169c4ob0f8c90052";
    let url = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${key}&units=metric`;

    axios.get(url).then(getForecast);

    return null;
  }
}
