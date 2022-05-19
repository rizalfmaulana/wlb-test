import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Badge from "../../components/atoms/badge";
import CardBlog from "../../components/molecules/CardBlog";
import Layout from "../../components/templates/default";
import { useBlogCategoryQuery, useBlogQuery, useDeleteBlogMutation } from "../../config/redux/api/blogs/blogsApi";

const Blog = () => {
  const { id } = useParams();
  const { data, isLoading } = useBlogQuery(id);
  const { data: datas } = useBlogCategoryQuery(data?.category);
  const [deleteBlog] = useDeleteBlogMutation();
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      await deleteBlog({ id });
      navigate("/");
    }
  };

  console.log(datas);
  if (isLoading) return <h3>Loading ...</h3>;
  return (
    <Layout>
      <Link to="/">Back to Home</Link>
      <div className="max-w-screen-md mx-auto">
        <img src={data.imageUrl} alt={data.title} />
        <div className="flex justify-end mt-3 space-x-2">
          <Link to={`/edit-blog/${data.id}`} className="text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </Link>
          <button className="text-red-600" onClick={handleDelete}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
        <div className="flex items-center space-x-3 text-black/60">
          <Badge>{data.category}</Badge>
          <span>&bull;</span>
          <div>{data.date}</div>
        </div>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <div>
          <h3>Related Blogs</h3>
          <div className="grid grid-cols-2 gap-4">{datas && datas.filter((item) => item.id != id).map((blog) => <CardBlog key={blog.id} {...blog} />)}</div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
