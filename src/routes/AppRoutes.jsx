import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import PizzaPage from "../pages/PizzaPage";
import { CartContext } from "../context/CartContext";
import { NotFound } from "../pages/NotFound";

export const AppRoutes = ({ pizzas }) => {
  const [orderState, setOrderState] = useState(false);

  const confirmOrder = () => {
    localStorage.removeItem("cart")
    setCart([])
    console.log("Order confirmed");
    setOrderState(true)
  }

  const imaginaryCart = JSON.parse(localStorage.getItem("cart"));

  const [cart, setCart] = useState(imaginaryCart ? imaginaryCart : []);

  const delOrder = (id) => {
    setCart(cart.filter((e) => e.id !== id));
    console.log(cart);
    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const addCart = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
    setOrderState(false)
  };

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (err) {
      console.warn("Couldn't add the pizza: " + err);
    }
  }, [cart]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              pizzas={pizzas}
              cart={cart}
              setCart={setCart}
              addCart={addCart}
              delOrder={delOrder}
              confirmOrder={confirmOrder}
              orderState={orderState}
            />
          }
        />
        <Route
          path="pizza/:id"
          element={
            <PizzaPage
              delOrder={delOrder}
              pizzas={pizzas}
              addCart={addCart}
              cart={cart}
            />
          }
        />
        <Route
          path="cart"
          element={<CartContext cart={cart} delOrder={delOrder} confirmOrder={confirmOrder} orderState={orderState}/>}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
