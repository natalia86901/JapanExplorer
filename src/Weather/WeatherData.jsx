import { useEffect, useState } from "react";

function WeatherData({
  name,
  country,
  temp,
  feels_like,
  condition,
  variation_min,
  variation_max,
}) {
  const [date, setDate] = useState("");

  useEffect(() => {
    const myDate = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const day = days[myDate.getDay()];
    const dayNumber = myDate.getDate();
    const month = months[myDate.getMonth()];
    const year = myDate.getFullYear();
    setDate(`${day} ${dayNumber} ${month} ${year}`);
  }, []);

  return (
    <div className="weather-data">
        <h2>
          {name}, {country}
        </h2>
        <p>{date}</p>
        <p>Feels like: {Math.round(feels_like)}°</p>
        <h2>{Math.round(temp)}°</h2>
        <p>{condition}</p>
        <p>
          Min: {Math.round(variation_min)}° Max: {Math.round(variation_max)}°
        </p>
      </div>
  );
}

export default WeatherData;
