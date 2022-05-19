import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardBlog from "../../components/molecules/CardBlog";
import Featured from "../../components/molecules/featured";
import FilterBlog from "../../components/molecules/filterBlog";
import Hero from "../../components/molecules/hero";
import Search from "../../components/molecules/search";
import Layout from "../../components/templates/default";
import { categoryBlog, getBlogs, searchBlog } from "../../config/redux/features/blogSlices";

const Home = () => {
  const { blogs, top } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilter = (item) => {
    setActiveFilter(item);
    if (item === "All") {
      dispatch(getBlogs());
    } else {
      dispatch(categoryBlog(item));
    }
  };

  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchBlog(searchValue));
  };

  return (
    <Layout>
      {blogs && (
        <>
          <Hero />
          <Featured data={top} />
          <FilterBlog activeFilter={activeFilter} handleFilter={handleFilter} />
          <Search searchValue={searchValue} handleChange={handleChange} handleSubmit={handleSubmit} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{blogs.length > 0 && blogs?.map((blog) => <CardBlog key={blog.id} {...blog} />)}</div>
        </>
      )}
    </Layout>
  );
};

export default Home;
