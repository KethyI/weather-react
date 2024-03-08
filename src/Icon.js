import React from "react";
import sun from "./weather pics/sun.png";
import partClouds from "./weather pics/partClouds.png";
import night from "./weather pics/night.png";
import partCloudsNight from "./weather pics/partCloudsNight.png";
import clouds from "./weather pics/clouds.png";
import lightRain from "./weather pics/lightRain.png";
import storm from "./weather pics/storm.png";
import snow from "./weather pics/snow.png";
import fog from "./weather pics/fog.png";
import rain from "./weather pics/rain.png";

export default function Icon(props) {
  let icon = {
    "https://openweathermap.org/img/wn/01d@2x.png": sun,
    "https://openweathermap.org/img/wn/04d@2x.png": clouds,
    "https://openweathermap.org/img/wn/01n@2x.png": night,
    "https://openweathermap.org/img/wn/02d@2x.png": partClouds,
    "https://openweathermap.org/img/wn/02n@2x.png": partCloudsNight,
    "https://openweathermap.org/img/wn/03d@2x.png": clouds,
    "https://openweathermap.org/img/wn/03n@2x.png": clouds,
    "https://openweathermap.org/img/wn/04n@2x.png": clouds,
    "https://openweathermap.org/img/wn/09d@2x.png": lightRain,
    "https://openweathermap.org/img/wn/09n@2x.png": rain,
    "https://openweathermap.org/img/wn/10n@2x.png": rain,
    "https://openweathermap.org/img/wn/11d@2x.png": storm,
    "https://openweathermap.org/img/wn/11n@2x.png": storm,
    "https://openweathermap.org/img/wn/13d@2x.png": snow,
    "https://openweathermap.org/img/wn/13n@2x.png": snow,
    "https://openweathermap.org/img/wn/50d@2x.png": fog,
    "https://openweathermap.org/img/wn/50n@2x.png": fog,
    "clear-sky-day": sun,
    "scattered-clouds-day": clouds,
    "clear-sky-night": night,
    "few-clouds-day": partClouds,
    "few-clouds-night": partCloudsNight,
    "scattered-clouds-night": clouds,
    "broken-clouds-day": clouds,
    "broken-clouds-night": clouds,
    "rain-day": lightRain,
    "shower-rain-night": rain,
    "shower-rain-day": rain,
    "rain-night": rain,
    "thunderstorm-day": storm,
    "thunderstorm-night": storm,
    "snow-day": snow,
    "snow-night": snow,
    "mist-day": fog,
    "mist-night": fog,
  };

  return (
    <div className='Icon'>
      <img
        src={icon[props.icon]}
        alt={props.alt}
        width={props.size}
      />
    </div>
  );
}
