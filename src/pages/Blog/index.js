import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Text from "../../components/atoms/text";
import CardBlog from "../../components/molecules/CardBlog";
import DetailPost from "../../components/organisms/detailPost";
import OtherBlogs from "../../components/organisms/otherBlogs";
import Layout from "../../components/templates/default";
import { categoryBlog, deleteBlog, getBlog } from "../../config/redux/features/blogSlices";

const Blog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { blog, blogs, loading } = useSelector((state) => state.blog);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      dispatch(deleteBlog(id));
      navigate("/");
    }
  };

  useEffect(() => {
    dispatch(getBlog(id));
  }, []);

  useEffect(() => {
    dispatch(categoryBlog(blog?.category));
  }, [blog]);

  console.log(blogs);
  if (loading) return <h3>Loading ...</h3>;
  return (
    <Layout>
      <Link to="/" className="hover:text-blue-500">
        {"<-"}Back to Home
      </Link>
      <div className="max-w-screen-md mx-auto">
        {blog && (
          <>
            <DetailPost {...blog} handleDelete={handleDelete} />
            <OtherBlogs />
          </>
        )}
      </div>
    </Layout>
  );
};

export default Blog;
