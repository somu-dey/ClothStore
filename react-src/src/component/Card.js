import React from "react";

const Card = ({ data }) => {
  console.log(data);
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img
        src={data.image}
        class="card-img-top"
        alt=""
        style={{ height: "12rem" }}
      />
      <div class="card-body">{data.id}</div>
    </div>
  );
};

export default Card;

// strMeal
// strMealThumb
// idMeal
