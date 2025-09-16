import React from "react";
import { Link, Route, Routes } from "react-router-dom";

export const Categories = () => {
  return <Layout />;
};

export const Navbar_route = () => {
  return (
    <div>
      <div className="flex flex-col gap-10 max-w-6xl w-[90%] my-5 mx-auto">
        <h1 className="text-4xl font-bold">Все пиццы</h1>
        <ul className="flex flex-wrap gap-5 list-none font-medium">
          <li className="hover:text-[#FE5F00] hover:bg-gray-200 p-2">
            <Link to={"#"}>Все</Link>
          </li>
          <li className="hover:text-[#FE5F00] hover:bg-gray-200 p-2">
            <Link to={"#"}>Мясные</Link>
          </li>
          <li className="hover:text-[#FE5F00] hover:bg-gray-200 p-2">
            <Link to={"#"}>Острые</Link>
          </li>
          <li className="hover:text-[#FE5F00] hover:bg-gray-200 p-2">
            <Link to={"#"}>Сладкие</Link>
          </li>
          <li className="hover:text-[#FE5F00] hover:bg-gray-200 p-2">
            <Link to={"#"}>Вегетарианские</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

import { Outlet, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/pizza" && <Navbar_route />}
      <Outlet />
    </>
  );
}
