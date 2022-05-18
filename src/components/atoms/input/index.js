import React, { useState } from "react";
import "./input.css";

const Input = (props) => {
  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const { label, onChange, value, errorMessage, type, ...otherProps } = props;
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "auto" }}>
      <label>{label}</label>
      {type !== "textarea" ? (
        <input type={type} className="input-form" onFocus={() => otherProps.name === "confirmPassword" && setFocus(true)} onBlur={handleFocus} onChange={onChange} {...otherProps} value={value} focused={focus.toString()} />
      ) : (
        <textarea cols="30" rows="5" className="input-form" onFocus={() => otherProps.name === "confirmPassword" && setFocus(true)} onBlur={handleFocus} onChange={onChange} {...otherProps} value={value} focused={focus.toString()} />
      )}
      <span className="message">{errorMessage}</span>
    </div>
  );
};

export default Input;
