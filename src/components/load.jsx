import React from "react";
import { Link } from "react-router-dom";

export const Load = ({ pizzas, addToCart }) => {
  return (
    <div className="flex flex-wrap mx-auto gap-5 my-5 max-w-6xl w-[90%]">
      {pizzas.pizzas.map((e, i) => (
        <div className="pizza w-50 bg-gray-100 p-5" key={i}>
          <div className="pizza-img bg-[#FFF7EE] p-2">
            <Link to={`/pizza/${e.id}`}>
              <img src={e.img} className="" />
            </Link>
          </div>
          <p className="font-bold">{e.title}</p>
          <div className="pizza-wrapper flex justify-between mt-5">
            <p>От {e.price}₽</p>
            <button
              className="border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition rounded border-2 w-7 h-7 text-sm"
              onClick={() => pizzas.addToCart(e)}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

