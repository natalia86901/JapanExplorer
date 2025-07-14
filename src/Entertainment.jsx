import { useState } from "react";
import { data1 } from "./data1";
import "./App.css";
import Content from "./Modal/Content";
import Modal from "./Modal/Modal";

function Entertainment() {
  const [places, setPlaces] = useState(data1);
  const [isOpen, setIsOpen] = useState(false);

  const removePlace = (id) => {
    let newPlaces = places.filter((place) => place.id !== id);
    setPlaces(newPlaces);
  };

  const handleDeleteAll = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <h1>List of {places.length} places to visit </h1>

      <div>
        {places.map((element) => {
          const { id, name, image, website, opening_hours, location } = element;
          return (
            <div key={id}>
              <div className="container">
                <a href={website} target="_blank">
                  <img src={image} width="400px" height="500px" alt={name} />
                </a>
              </div>

              <div className="container">
                <h2>
                  {id} - {name}
                </h2>
                <h2>{opening_hours}</h2>
                <h2>{location}</h2>
              </div>

              <div className="container">
                <button onClick={() => removePlace(id)}>Remove</button>
              </div>
            </div>
          );
        })}

        {places.length > 0 && (
          <div className="container">
            <button
              onClick={() => {
                setPlaces([]);
                handleDeleteAll();
              }}
            >
              Remove All
            </button>
          </div>
        )}
      </div>

      {isOpen && (
        <Modal setIsOpen={setIsOpen}>
          <Content
            setIsOpen={() => {
              setIsOpen(false);
            }}
          ></Content>
        </Modal>
      )}
    </div>
  );
}

export default Entertainment;
