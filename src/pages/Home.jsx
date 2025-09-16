import React, { useState } from "react";
import { Navbar } from "../components/navbar";
import { Categories } from "../components/Categories";
import { Load } from "../components/load";
import { Routes, Route, useParams } from "react-router-dom";
import { NoMatch } from "./noMatch";

import { PizzaDetails } from "./pizzaDetails";
import { CartOpen } from "./cartOpen";
import { HomeHelper } from "../components/homeHelper";
export const Home = ({ pizzas }) => {
  const [cart, useCart] = useState([]);
  const addToCart = (item) => {
    useCart([...cart, item]);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomeHelper pizzas={pizzas} addToCart={addToCart} />}
        />

        <Route
          path="pizza/:id"
          element={<PizzaDetails pizzas={pizzas} addToCart={addToCart} />}
        />
        <Route path="myCart" element={<CartOpen />} />
      </Routes>
    </div>
  );
};
