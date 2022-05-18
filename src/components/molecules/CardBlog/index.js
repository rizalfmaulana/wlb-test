import React from "react";
import { Link } from "react-router-dom";

const CardBlog = ({ title, description, date, category, id, imageUrl }) => {
  return (
    <div>
      <Link href="/detail">
        <img src={imageUrl} className="w-full mb-4" alt={title} />
      </Link>
      <div className="flex items-center space-x-3 text-white/60">
        <div className="uppercase">{category}</div>
        <span>&bull;</span>
        <div>{date}</div>
      </div>
      <h2 className={`text-2xl mt-4 text-center`}>
        <Link href="/detail">{title}</Link>
      </h2>
      <p className="text-white/60 mt-5 w-10/12">{description}</p>
    </div>
  );
};

export default CardBlog;
