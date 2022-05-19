import React from "react";

const Button = ({ disabled, children, type, icon, className, onClick }) => {
  return (
    <button
      type={type}
      className={`${
        icon
          ? ""
          : "block p-3 bg-blue-600 text-white font-normal text-sm leading-snug shadow-md hover:bg-blue-700 h-full rounded hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
      }  outline-none ${className} transition duration-150 ease-in-out disabled:opacity-40`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
