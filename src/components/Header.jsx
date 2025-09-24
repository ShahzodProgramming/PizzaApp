import React from "react";
import { Home } from "../pages/Home";
import logo from "../assets/images/logo-pizza.png";
import { Link, Route, Routes } from "react-router-dom";

const Header = ({ setDrawer, drawer }) => {
  return (
    <div>
      <nav className="flex max-w-6xl w-[90%] mx-auto justify-between mt-10">
        <div className="logo flex items-center gap-2">
          <Link to={"/"}>
            <img src={logo} alt="Pizza logo" className="max-w-[40px]" />
          </Link>
          <div className="nav-content">
            <h1 className="text-xl font-bold">NEXT PIZZA</h1>
            <p className="text-sm text-gray-500 font-light">
              вкусней уже не будет
            </p>
          </div>
        </div>
        <button
          className="profile border-orange-500 border-2 w-10 h-10 rounded text-orange-500 hover:bg-orange-500 hover:text-white transition"
          onClick={() => setDrawer(!drawer)}
        >
          {">>"}
        </button>
        <Link to={"/cart"}>
          <button className="profile border-orange-500 border-2 w-10 h-10 rounded text-orange-500 hover:bg-orange-500 hover:text-white transition">
            <i className="ri-shopping-cart-line"></i>
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
