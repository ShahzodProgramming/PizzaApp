import React from "react";

export const CartOpen = () => {
  const pizzas = JSON.parse(localStorage.getItem("cart"));
  return (
    <>
    <h1 className="text-5xl max-w-6xl w-[90%] mx-auto my-5">Your orders:</h1>
      <div className="flex flex-wrap mx-auto gap-5 my-5 max-w-6xl w-[90%]">
        {pizzas.map((e, i) => (
          <div className="pizza w-50 bg-gray-100 p-5" key={i}>
            <div className="pizza-img bg-[#FFF7EE] p-2">
              <img src={e.img} className="" />
            </div>
            <p className="font-bold">{e.title}</p>
            <div className="pizza-wrapper flex justify-between mt-5">
              <p>От {e.price}₽</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
