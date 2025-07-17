import { useState } from "react";
import { data } from "./foodData";
import "../App.css";
import "./Food.css";
import Buttons from "./Buttons";

function Food() {
  const [food, setFood] = useState(data);

  const chosenFood = (category) => {
    const selectedFood = data.filter(
      (element) => element.category === category
    );
    setFood(selectedFood);
  };

  return (
    <div>
      <Buttons filteredFood={chosenFood} />
      <div className="restaurants">
        {food.map((element) => {
          const { id, name, category, website, image } = element;
          return (
            <div key={id}>
              <a href={website} target="_blank">
                <img src={image} width="400px" height="500px" alt={name} />
              </a>
              <div>
                <h3>{name}</h3>
                <h4>{category}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Food;
