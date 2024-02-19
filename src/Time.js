import React from "react";

export default function Time(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.time.getDay()];
  let hours = props.time.getHours();

  if (hours < 10) {
    hours = "0" + hours;
  }

  let minutes = props.time.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return (
    <p>
      {day}, {hours}:{minutes}
    </p>
  );
}
