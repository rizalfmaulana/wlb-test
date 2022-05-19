import React from "react";

const FilterBlog = ({ activeFilter, handleFilter }) => {
  const categories = ["All", "Fashion", "Games", "Sports", "Music", "Travel", "Foods", "Tech"];
  return (
    <div className="flex flex-wrap justify-around items-center py-0 lg:py-4 my-7 border-y border-gray-400/20">
      {categories.map((item, index) => (
        <div
          onClick={() => handleFilter(item)}
          key={index}
          className={`py-2 px-4 rounded-lg bg-white font-bold text-black transition-all ease-in-out duration-500 cursor-pointer ${activeFilter === item ? "text-purple-500 border border-purple-500" : ""}`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default FilterBlog;
