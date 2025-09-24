import React, { useState } from "react";
import { AppRoutes } from "./routes/AppRoutes";
import './index.css'


import pizza1 from "./assets/images/pizza1.png";
import pizza2 from "./assets/images/pizza2.png";
import pizza3 from "./assets/images/pizza3.png";

const App = () => {
  const pizzas = [
    {
      id: 1,
      title: "Сырный цыпленок",
      img: pizza1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quis suscipit vel nesciunt molestiae ipsum quibusdam eos explicabo hic nobis?",
      price: 359,
    },
    {
      id: 2,
      title: "Диабло",
      img: pizza2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quis suscipit vel nesciunt molestiae ipsum quibusdam eos explicabo hic nobis?",
      price: 3449,
    },
    {
      id: 3,
      title: "Чизбургер-пицца",
      img: pizza3,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quis suscipit vel nesciunt molestiae ipsum quibusdam eos explicabo hic nobis?",
      price: 399,
    },
    {
      id: 4,
      title: "Yum-yum",
      img: pizza1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quis suscipit vel nesciunt molestiae ipsum quibusdam eos explicabo hic nobis?",
      price: 399,
    },
    {
      id: 5,
      title: "looks tasts",
      img: pizza2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quis suscipit vel nesciunt molestiae ipsum quibusdam eos explicabo hic nobis?",
      price: 399,
    },
    {
      id: 6,
      title: "KFC",
      img: pizza3,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quis suscipit vel nesciunt molestiae ipsum quibusdam eos explicabo hic nobis?",
      price: 399,
    },
    {
      id: 7,
      title: "Maxway",
      img: pizza1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quis suscipit vel nesciunt molestiae ipsum quibusdam eos explicabo hic nobis?",
      price: 399,
    },
    {
      id: 8,
      title: "Oq tepa lavash",
      img: pizza2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quis suscipit vel nesciunt molestiae ipsum quibusdam eos explicabo hic nobis?",
      price: 399,
    },
    {
      id: 9,
      title: "Boss KFC",
      img: pizza3,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quis suscipit vel nesciunt molestiae ipsum quibusdam eos explicabo hic nobis?",
      price: 399,
    },
    {
      id: 10,
      title: "Havas",
      img: pizza2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quis suscipit vel nesciunt molestiae ipsum quibusdam eos explicabo hic nobis?",
      price: 399,
    },
    {
      id: 9,
      title: "Yo mama so fat...",
      img: pizza3,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quis suscipit vel nesciunt molestiae ipsum quibusdam eos explicabo hic nobis?",
      price: 399,
    },
  ];


  return (
    <div>
      <AppRoutes pizzas={pizzas} />
    </div>
  );
};

export default App;
