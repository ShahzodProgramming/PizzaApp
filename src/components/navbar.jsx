import React from "react";
import logo from "../assets/images/logo-pizza.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex justify-between my-10 gap-5 max-w-6xl w-[90%] mx-auto ">
      <div className="wrapper sm:flex gap-2 hidden ">
        <Link to={"/"}>
          <img src={logo} className="max-w-[40px]" />
        </Link>
        <div className="navbar-wrapper flex flex-col">
          <p className="font-extrabold">NEXT PIZZA</p>
          <span className="text-sm font-light text-gray-500">
            вкусней уже некуда
          </span>
        </div>
      </div>

      <form className="navbar-form bg-gray-300 w-[50%] ">
        <input
          type="text"
          placeholder="Поиск пиццы..."
          className="w-[100%] h-[100%] p-2 "
        />
      </form>

      <Link to="myCart">
        <button className="border-1 border-[#FE5F00]  text-[#FE5F00] w-10 h-10 rounded hover:text-white hover:bg-[#FE5F00] transition">
          <i className="ri-shopping-cart-line"></i>
        </button>
      </Link>
    </div>
  );
};
