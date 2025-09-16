import React from "react";
import { useParams } from "react-router-dom";

export const PizzaDetails = ({ pizzas, addToCart }) => {
  const { id } = useParams();

  const pizza = pizzas.filter((item) => item.id == id)[0];
  return (
    <div className="flex mt-5 max-w-6xl w-[60%] mx-auto flex-col md:flex-row">
      <img src={pizza.img} className="w-[50%]"/>
      <div className="detail-content flex flex-col">
        <h1 className="text-4xl">{pizza.title}</h1>
        <p className="font-light ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
          vero ut ipsum quae quidem commodi quos, cupiditate rerum quod eveniet
          eaque maxime reprehenderit vel sequi, id voluptates error nemo magni?
        </p>

        <div className="pizzaDetails-wrapper">
        <p>Цена: {pizza.price}</p>
            <button className="border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition rounded border-2 w-7 h-7 text-sm" onClick={() => addToCart(pizza)}>+</button>
        </div>
      </div>
    </div>
  );
};
