import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import CardBlog from "../../components/molecules/CardBlog";
import FilterBlog from "../../components/molecules/filterBlog";
import Search from "../../components/molecules/search";
import Layout from "../../components/templates/default";
import { useBlogSearchQuery } from "../../config/redux/api/blogs/blogsApi";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const { data } = useBlogSearchQuery(searchValue);
  const [activeFilter, setActiveFilter] = useState();

  const handleFilter = (item) => {
    setActiveFilter(item);
  };

  const fetchBlog = async () => {
    try {
      const res = await axios.get("http://localhost:5001/blogs");
      console.log(res);
      setBlogs(res.data);
    } catch (error) {
      toast.error("something went wrong, please try again later");
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  useEffect(() => {
    setBlogs(data);
  }, [searchValue]);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  console.log(blogs);
  return (
    <Layout>
      <FilterBlog activeFilter={activeFilter} handleFilter={handleFilter} />
      <Search searchValue={searchValue} handleChange={handleChange} />
      <div className="grid grid-cols-3 gap-4">{blogs && blogs.map((blog) => <CardBlog key={blog.id} {...blog} />)}</div>
    </Layout>
  );
};

export default Home;
