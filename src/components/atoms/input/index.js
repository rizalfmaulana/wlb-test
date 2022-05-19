import React from "react";

const Input = ({ value, type, onFocus, onBlur, onChange, focused, placeholder, name, required }) => {
  return (
    <input
      className="p-3 text-sm w-full rounded text-black outline-none border border-gray-500"
      value={value}
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      focused={focused}
    />
  );
};

export default Input;
