import React from "react";
import Header from "../components/Header";

export const CartContext = ({ cart, delOrder, orderState, confirmOrder }) => {
  return (
    <>
      <Header />
      {orderState ? (
        <>
        <p className="text-center text-2xl font-bold mt-10">Your order was successful!</p>
        <p className="text-9xl text-center mt-4">🎉</p>
        </>
      ) : (
        <>
          (
          {cart.length ? (
            <div className="flex flex-col max-w-5xl w-[90%] mx-auto mt-20 gap-10 bg-gray-200 p-10">
              {cart.map((e, i) => (
                <div className="flex gap-5 items-center w-full " key={i}>
                  <img src={e.img} alt="" className="max-w-[100px]"  />
                  <p>{e.title}</p>
                  <button
                    className="bg-red w-10 h-10 bg-red-400 text-white"
                    onClick={() => delOrder(e.id)}
                  >
                    x
                  </button>
                </div>
              ))}
              <button
                className="bg-green-500 w-full h-10 rounded text-white active:bg-green-600"
                onClick={confirmOrder}
              >
                Order
              </button>
            </div>
          ) : (
            <p className="mx-auto text-center mt-20 text-5xl font-mono">
              Don't be silly buy{" "}
              <mark className="rounded-xl p-1 border-10 border-transparent transition hover:border-yellow-300">
                something
              </mark>
            </p>
          )}
          )
        </>
      )}
    </>
  );
};
