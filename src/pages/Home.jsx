import React, { useState } from "react";
import Header from "../components/Header";
import { PizzaLoad } from "../components/PizzaLoad";

import Drawer from "../components/drawer";
import { Route, Routes } from "react-router-dom";
import { FilterProducts } from "../components/filterProducts";

export const Home = ({ pizzas, cart, addCart, delOrder, confirmOrder, orderState }) => {
  const [drawer, setDrawer] = useState(false);

  // This is the searching engine (yeah whatever)
  const [filter, setFilter] = useState("");
  const filteredProducts = pizzas.filter((e) =>
    e.title.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <div>
      {drawer && (
        <Drawer setDrawer={setDrawer} cart={cart} delOrder={delOrder} confirmOrder={confirmOrder} orderState={orderState}/>
      )}

      <Header setDrawer={setDrawer} drawer={drawer} />
      <FilterProducts filter={filter} setFilter={setFilter} />

      <PizzaLoad
        pizzas={filteredProducts}
        cart={cart}
        addCart={addCart}
        setDrawer={setDrawer}
        delOrder={delOrder}
      />
    </div>
  );
};
