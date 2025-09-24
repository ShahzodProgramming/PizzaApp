import React from "react";
import { Link } from "react-router-dom";

import check from "../assets/images/check.svg";
export const PizzaLoad = ({ pizzas, cart, addCart, delOrder }) => {
  return (
    <div className="LoadedPizzas mt-25 max-w-6xl w-[90%] mx-auto flex flex-wrap justify-around gap-5">
      {pizzas.map((e, i) => (
        <div key={i} className="max-w-[300px] p-2 flex flex-col gap-5">
          <Link to={`/pizza/:${e.id}`}>
            <img
              src={e.img}
              alt="Image of the pizza"
              className="bg-orange-100 p-5 rounded-2xl w-full"
            />
          </Link>

          <p className="text-xl font-bold w-full">{e.title}</p>
          <p className="text-sm text-gray-400">{e.description}</p>
          <div className="pizza_detail_wrapper flex justify-around ">
            {e.price}
            {cart.some((carter) => carter.id == e.id) ? (
              <img src={check} onClick={() => delOrder(e.id)} />
            ) : (
              <button
                className="profile border-green-500 border-2 w-8 h-8 p-0 m-0 rounded-[10px] text-green-500 hover:border-5 hover:font-extrabold transition-all"
                onClick={() => addCart(e)}
              >
                +
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
