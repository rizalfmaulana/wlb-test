import React from "react";
import PropTypes from "prop-types";

const Text = ({ children, size, weight, Tag, color, className }) => {
  const sizeKey = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-xl",
    xl2: "text-2xl",
    xl3: "text-3xl",
    xl4: "text-4xl",
    xl5: "text-5xl",
    xl6: "text-6xl",
    xl7: "text-7xl",
  };
  const weightKey = {
    medium: "font-medium",
    bold: "font-bold",
  };
  const colorKey = {
    black: "text-black",
    gray: "text-gray-500",
  };

  return <Tag className={`${sizeKey[size]} ${className} ${colorKey[color]} ${weightKey[weight]}`}>{children}</Tag>;
};

Text.propTypes = {
  Tag: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  weight: PropTypes.string,
  color: PropTypes.string.isRequired,
};

export default Text;
