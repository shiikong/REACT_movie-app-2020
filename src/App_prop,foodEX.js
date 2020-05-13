import React from "react";
import PropTypes from "prop-types";

function Food({ name, opt, rating }) {
  return (
    <div>
      <h1>
        I love {name} ( {opt} ) / {rating}
      </h1>
    </div>
  );
}

const foodLike = [
  {
    name: "coffee",
    opt: "ice",
    rating: 4.7,
  },
  {
    name: "beer",
    rating: 4.5,
  },
  {
    name: "stake",
    opt: "beef",
    rating: 4.9,
  },
];

function renderFood(food, index) {
  const foodList = (
    <Food key={index} name={food.name} opt={food.opt} rating={food.rating} />
  );
  return foodList;
}

Food.propTypes = {
  //PropTypes.string.isRequired :: PropTypes.타입.(필수)
  //unRequired가 없으면 타입 또는 undefined라는 얘기.
  name: PropTypes.string.isRequired,
  opt: PropTypes.string,
  rating: PropTypes.number.isRequired,
};

function App() {
  return <div>{foodLike.map(renderFood)}</div>;
}

export default App;
