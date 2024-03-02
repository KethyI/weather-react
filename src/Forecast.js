import React from "react";
import Icon from "./Icon";
import "./Forecast.css";

export default function Forecast() {
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
