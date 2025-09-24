import React from "react";

const Drawer = ({ setDrawer, cart, delOrder, confirmOrder, orderState }) => {
  const price = cart.reduce((prev, current) => (prev += current.price), 0);
  console.log(orderState);
  return (
    <div className="h-[100%] fixed flex flex-col right-0 bg-gray-200 w-[80%] md:w-1/3 p-3">
      <button
        className="bg-yellow-300 text-white p-2 w-10 h-10 "
        onClick={() => setDrawer(false)}
      >
        x
      </button>

      <div className="flex flex-col gap-5 mt-5 justify-between">
        {cart.length > 0 ? (
          <>
            {cart.map((item, i) => (
              <div
                key={i}
                className="flex gap-2 items-center w-full bg-white p-3"
              >
                <div className="flex-wrapper flex items-center w-full gap-5">
                  <img src={item.img} className="max-w-[20%]" />
                  {item.title}
                </div>
                <div className="flex-wrapper">
                  <button
                    className="bg-red-400 text-white p-0 w-7 h-7"
                    onClick={() => delOrder(item.id)}
                  >
                    x
                  </button>
                </div>
              </div>
            ))}

            <div>Overall price: {price}</div>
            <button
              className="bg-green-500 w-full h-10 rounded text-white active:bg-green-600"
              onClick={confirmOrder}
            >
              Order
            </button>
          </>
        ) : (
          <>
            {orderState ? (
              <p>Your order was succesfully accepted!</p>
            ) : (
              <p>You don't have any orders yet.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Drawer;
