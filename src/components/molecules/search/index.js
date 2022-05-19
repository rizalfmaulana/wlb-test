import React from "react";
import { SearchIcon } from "../../../assets";
import Input from "../../atoms/input";

const Search = ({ handleChange, searchValue, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex items-center relative my-7">
      <Input type="search" value={searchValue} onChange={handleChange} placeholder="Search Blog..." />
      <button type="submit" className="bg-white absolute right-10">
        <img src={SearchIcon} alt="search" />
      </button>
    </form>
  );
};

export default Search;
