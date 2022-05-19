import React from "react";
import { Link } from "react-router-dom";
import DetailCard from "../detailCard";

const CardBlog = ({ title, description, date, category, id, imageUrl, size }) => {
  return (
    <div>
      <Link to={`/blog/${id}`}>
        <img src={imageUrl} className={`w-full ${size ? "h-full" : "h-64"} mb-4`} alt={title} />
      </Link>
      <DetailCard id={id} category={category} date={date} description={description} />
    </div>
  );
};

export default CardBlog;
