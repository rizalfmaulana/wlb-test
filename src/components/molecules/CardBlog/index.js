import React from "react";
import { Link } from "react-router-dom";
import Badge from "../../atoms/badge";

const CardBlog = ({ title, description, date, category, id, imageUrl }) => {
  return (
    <div>
      <Link to={`/blog/${id}`}>
        <img src={imageUrl} className="w-full h-64 mb-4" alt={title} />
      </Link>
      <div className="flex items-center space-x-3 text-black/60">
        <Badge>{category}</Badge>
        <span>&bull;</span>
        <div>{date}</div>
      </div>
      <h2 className={`text-2xl mt-4 text-center`}>
        <Link to={`/blog/${id}`}>{title}</Link>
      </h2>
      <p className="text-black mt-5 w-10/12">{description}</p>
    </div>
  );
};

export default CardBlog;
