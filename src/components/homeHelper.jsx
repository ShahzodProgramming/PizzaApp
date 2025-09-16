import React from "react";
import { Categories } from "./Categories";
import { Load } from "./load";

export const HomeHelper = (pizzas, addToCart) => {
  
  return (
    <div>
      <Categories />
      <Load pizzas={pizzas} addToCart={addToCart} />
    </div>
  );
};
