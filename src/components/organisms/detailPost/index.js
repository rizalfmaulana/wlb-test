import React from "react";
import { Link } from "react-router-dom";
import { DeleteIcon, EditIcon } from "../../../assets";
import Badge from "../../atoms/badge";
import Button from "../../atoms/button";
import Text from "../../atoms/text";
import DetailCard from "../../molecules/detailCard";

const DetailPost = ({ handleDelete, ...blog }) => {
  return (
    <>
      <img src={blog.imageUrl} alt={blog.title} />
      <div className="flex justify-end mt-3 items-center space-x-2">
        <Link to={`/edit-blog/${blog.id}`}>
          <img src={EditIcon} alt="edit" />
        </Link>
        <Button icon className="text-red-600" onClick={handleDelete}>
          <img src={DeleteIcon} alt="delete" />
        </Button>
      </div>
      <DetailCard big category={blog.category} date={blog.date} title={blog.title} description={blog.description} />
    </>
  );
};

export default DetailPost;
