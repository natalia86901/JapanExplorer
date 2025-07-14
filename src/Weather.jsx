import { useEffect, useState } from "react";
import "./App.css";
import icon from "./assets/icons8-search-30.png";
import WeatherData from "./WeatherData";
import Swal from "sweetalert2";

const api = {
  endpoint: "https://api.openweathermap.org/data/2.5/",
  key: "12433334838686eb4117407397f31529",
};

function Weather() {
  const [mySearch, setMySearch] = useState("");
  const [cityWeather, setCityWeather] = useState(null);

  const getCity = async (city) => {
    if (!city.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Oops!",
        text: "Please enter a city name.",
      });
      return;
    }

    const response = await fetch(
      `${api.endpoint}weather?q=${city}&units=metric&APPID=${api.key}`
    );
    if (!response.ok) {
      Swal.fire({
        icon: "error",
        title: "City not found",
        text: "Please enter a valid city name.",
      });
      return;
    }

    const data = await response.json();
    setCityWeather(data);
  };

  useEffect(() => {
    getCity("Tokyo");
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      getCity(mySearch);
    }
  };

  return (
    <div className="weather">
      <div className="search-row">
        <input
          type="text"
          spellCheck="false"
          placeholder="Please enter a city"
          className="search"
          value={mySearch}
          onChange={(e) => setMySearch(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="weather-button" onClick={() => getCity(mySearch)}>
          <img src={icon} alt="icon" />
        </button>
      </div>

      {cityWeather && (
        <WeatherData
          name={cityWeather.name}
          country={cityWeather.sys.country}
          temp={cityWeather.main.temp}
          feels_like={cityWeather.main.feels_like}
          condition={cityWeather.weather[0].description}
          variation_min={cityWeather.main.temp_min}
          variation_max={cityWeather.main.temp_max}
        />
      )}
    </div>
  );
}

export default Weather;
