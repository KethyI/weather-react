import React from "react";

export default function Current(props) {
  function capitaliseFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  if (props.data === null) {
    return <div className='Current'></div>;
  } else {
    return (
      <div className='Current'>
        <h2>{props.data.name}</h2>
        <div className='row'>
          <div className='col-6'>
            <p>{capitaliseFirstLetter(props.data.weather[0].description)}</p>
            <p>Temperature: {Math.round(props.data.main.temp)}℃</p>
            <p>Humidity: {props.data.main.humidity}%</p>
            <p>Wind: {props.data.wind.speed}km/h</p>
          </div>

          <div className='col-6'>
            <img
              src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
              alt={props.data.weather[0].description}
            />
          </div>
        </div>
      </div>
    );
  }
}
