import React from "react";
import { Link } from "react-router-dom";
import Badge from "../../atoms/badge";

const Featured = ({ data }) => {
  const { id, title, imageUrl, category, description, date } = data;
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex gap-8 h-80">
        <div className="flex-1 h-full">
          <img src={imageUrl} className="w-full h-full mb-4" alt={title} />
        </div>
        <div className="flex-1 h-full">
          <div className="flex items-center space-x-1 text-black/60">
            <Badge>{category}</Badge>
            <span>&bull;</span>
            <p className="text-sm">{date}</p>
          </div>
          <h2 className="text-5xl font-bold mt-4">
            <Link to={`/blog/${id}`}>{title}</Link>
          </h2>
          <p className="text-gray-500 mt-5 ">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
