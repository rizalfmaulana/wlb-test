import React from "react";
import { SearchIcon } from "../../../assets";
import Input from "../../atoms/input";

const Search = ({ handleChange, searchValue }) => {
  return (
    <div className="max-w-lg mx-auto flex items-center relative my-5">
      <img className="absolute right-9" src={SearchIcon} alt="search" />
      <Input type="search" value={searchValue} onChange={handleChange} placeholder="Search Blog..." />
    </div>
  );
};

export default Search;
