import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

import check from "../assets/images/check.svg";


const PizzaPage = ({ pizzas, cart, addCart, delOrder }) => {
  const pizzaId = useParams().id.slice(1);
  const pizza = pizzas[pizzaId - 1];
  return (
    <>
      <div className="mt-20 max-w-2xl w-[90%] mx-auto flex  gap-5">
        <img src={pizza.img} alt="Image of the pizza" className="max-w-[200px]"/>
        <div className="pizza-text">
          <p className="text-2xl font-bold">{pizza.title}</p>
          <p>{pizza.description}</p>
          <p className="mt-5 text-right">{pizza.price}</p>
          {cart.some((carter) => carter.id == pizza.id) ? (
            <img src={check} onClick={() => delOrder(pizza.id)}/>
          ) : (
            <button
              className="profile border-green-500 border-2 w-8 h-8 p-0 m-0 rounded-[10px] text-green-500 hover:bg-green-500 hover:text-white transition"
              onClick={() => addCart(pizza)}
            >
              +
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default PizzaPage;
