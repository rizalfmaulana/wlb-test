import React from "react";
import { Link } from "react-router-dom";
import Badge from "../../atoms/badge";
import Text from "../../atoms/text";

const DetailCard = ({ category, date, id, title, description, big }) => {
  return (
    <>
      <div className="flex items-center space-x-1 text-black/60">
        <Badge>{category}</Badge>
        <Text Tag="span" color="gray" size="sm">
          &bull;
        </Text>
        <Text Tag="p" color="gray" size="sm">
          {date}
        </Text>
      </div>
      <Text Tag="h3" size={`${big ? "xl4" : "xl2"}`} weight="bold" color="black" className="mt-4">
        <Link to={`/blog/${id}`}>{title}</Link>
      </Text>
      <Text Tag="p" color="gray" size="base" className="mt-2 ">
        {description}
      </Text>
    </>
  );
};

export default DetailCard;
