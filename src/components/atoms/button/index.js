import React from "react";

const Button = ({ disabled, children, type }) => {
  return (
    <button
      type={type}
      className="block p-3 bg-blue-600 text-white font-normal text-sm leading-snug rounded shadow-md hover:bg-blue-700 h-full outline-none  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out disabled:opacity-40"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
