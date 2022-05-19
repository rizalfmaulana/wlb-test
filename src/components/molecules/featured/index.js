import React from "react";
import { Link } from "react-router-dom";
import Badge from "../../atoms/badge";
import Text from "../../atoms/text";
import DetailCard from "../detailCard";

const Featured = ({ data }) => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex gap-8 h-80">
        <div className="flex-1 h-full">
          <img src={data?.imageUrl} className="w-full h-full mb-4" alt={data?.title} />
        </div>
        <div className="flex-1 h-full">
          <DetailCard category={data?.category} big date={data?.date} title={data?.title} id={data?.id} description={data?.description} />
        </div>
      </div>
    </div>
  );
};

export default Featured;
