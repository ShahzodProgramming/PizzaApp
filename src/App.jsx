import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

import pizza1 from "./assets/images/pizza1.png";
import pizza2 from "./assets/images/pizza2.png";
import pizza3 from "./assets/images/pizza3.png";
import { Load } from "./components/load";
const App = () => {
  const pizza = [
    {
      id: 1,
      title: "Сырный цыпленок",
      img: pizza1,
      price: 359,
    },
    {
      id: 2,
      title: "Диабло",
      img: pizza2,
      price: 3449,
    },
    {
      id: 3,
      title: "Чизбургер-пицца",
      img: pizza3,
      price: 399,
    },
    {
      id: 4,
      title: "Чизбургер-пицца",
      img: pizza1,
      price: 399,
    },
    {
      id: 4,
      title: "Чизбургер-пицца",
      img: pizza2,
      price: 399,
    },
    {
      id: 5,
      title: "Чизбургер-пицца",
      img: pizza3,
      price: 399,
    },
  ];

  return (
    <div>
        <Routes>
          <Route path="*" element={<Home pizzas={pizza} />} />
        </Routes>
    </div>
  );
};

export default App;
