import React from "react";
import Icon from "./Icon";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  function showForecast(response) {
    console.log(response.data);
  }

  let lat = props.coord.lat;
  let lon = props.coord.lon;
  let key = "af9f195dtc3b2336169c4ob0f8c90052";
  let url = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${key}&units=metric`;

  axios.get(url).then(showForecast);
  console.log(`${lat} is lat, ${lon} is lon`);

  return (
    <div className='Forecast'>
      <div className='row'>
        <div className='col'>
          <div>Thu</div>
          <Icon
            icon='https://openweathermap.org/img/wn/01d@2x.png'
            size='50px'
          />
          <div className='forecast-temp'>
            19° <span>10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
