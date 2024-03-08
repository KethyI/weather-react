import React from "react";
import Icon from "./Icon";

export default function ForecastDay(props) {
  console.log(props);

  function showDate() {
    let date = new Date(props.day.time * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();
    return days[day];
  }

  return (
    <div className='ForecastDay'>
      <div>{showDate()}</div>
      <Icon
        icon={props.day.condition.icon}
        size='50px'
      />
      <div className='forecast-temp'>
        {Math.round(props.day.temperature.maximum)}°{" "}
        <span>{Math.round(props.day.temperature.minimum)}°</span>
      </div>
    </div>
  );
}
