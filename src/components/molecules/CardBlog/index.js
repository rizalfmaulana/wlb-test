import React from "react";
import { Link } from "react-router-dom";
import Badge from "../../atoms/badge";

const CardBlog = ({ title, description, date, category, id, imageUrl }) => {
  return (
    <div>
      <Link to={`/blog/${id}`}>
        <img src={imageUrl} className="w-full h-64 mb-4" alt={title} />
      </Link>
      <div className="flex items-center space-x-1 text-black/60">
        <Badge>{category}</Badge>
        <span>&bull;</span>
        <p className="text-sm">{date}</p>
      </div>
      <h2 className="text-2xl font-bold mt-4">
        <Link to={`/blog/${id}`}>{title}</Link>
      </h2>
      <p className="text-gray-500 text-sm mt-2 ">{description}</p>
    </div>
  );
};

export default CardBlog;
