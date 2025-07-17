import { useState } from "react";
import { data3 } from "./destinationsData";
import backIcon from "../assets/backButton.png";
import nextIcon from "../assets/nextButton.png";
import "../App.css";
import "./Destinations.css"

function Destinations() {
  const [cities, setCities] = useState(data3);
  const [imageIndexes, setImageIndexes] = useState(data3.map(() => 0));

  const handleNextImage = (cityIndex, imagesLength) => {
    setImageIndexes((prev) => {
      const updated = [...prev];
      updated[cityIndex] = (prev[cityIndex] + 1) % imagesLength;
      return updated;
    });
  };

  const handlePrevImage = (cityIndex, imagesLength) => {
    setImageIndexes((prev) => {
      const updated = [...prev];
      updated[cityIndex] = (prev[cityIndex] - 1 + imagesLength) % imagesLength;
      return updated;
    });
  };

  const showTextClick = (id) => {
    const updated = cities.map((city) => {
      if (city.id === id) {
        return { ...city, showMore: !city.showMore };
      }
      return city;
    });
    setCities(updated);
  };

  return (
    <div>
      {cities.map((city, index) => {
        const { id, cityName, description, images, showMore } = city;
        const currentImage = images[imageIndexes[index]];

        return (
          <div key={id} className="city-block">
            <div className="container-sliders">
              <img
                src={currentImage}
                width="400px"
                height="500px"
                alt={cityName}
              />
              <button
                className="slider-buttons"
                onClick={() => handlePrevImage(index, images.length)}
              >
                <img src={backIcon} alt="Back" />
              </button>
              <button
                className="slider-buttons"
                onClick={() => handleNextImage(index, images.length)}
              >
                <img src={nextIcon} alt="Next" />
              </button>
            </div>

            <div className="container">
              <h2>{cityName}</h2>
              <p>
                {showMore ? description : description.substring(0, 120) + "..."}
                <button className="showMore" onClick={() => showTextClick(id)}>
                  {showMore ? "Show less" : "Show more"}
                </button>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Destinations;
