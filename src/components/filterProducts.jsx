import React from "react";

export const FilterProducts = ({ setFilter, filter }) => {
  const filterChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div>
      <form
        className="mt-5 mx-auto flex justify-center "
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="Seach a pizza"
          placeholder="Search a pizza "
          className="border-2 w-[50%] px-5 border-gray-300 h-10"
          onChange={(e) => filterChange(e)}
        />
        <button className=" border-orange-500 border-2 w-15 h-10 rounded text-orange-500 hover:bg-orange-500 hover:text-white transition">
          Search
        </button>
      </form>
    </div>
  );
};
