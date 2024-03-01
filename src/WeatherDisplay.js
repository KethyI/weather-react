import React from "react";
import Time from "./Time";
import Temperature from "./Temperature";
import Icon from "./Icon";

export default function WeatherDisplay(props) {
  return (
    <div className='WeatherDisplay'>
      <h2>{props.data.city}</h2>
      <Time time={new Date(props.data.time * 1000)} />
      <div className='row'>
        <div className='col-6  mt-4'>
          <Temperature celsius={props.data.temp} />
          <p>Humidity: {props.data.humidity}%</p>
          <p>Wind: {props.data.wind}km/h</p>
        </div>

        <div className='col-6'>
          <Icon
            icon={props.data.icon}
            alt={props.data.description}
          />
          <p className='text-capitalize'>{props.data.description}</p>
        </div>
      </div>
    </div>
  );
}
