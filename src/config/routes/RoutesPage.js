import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "../../pages/Blog";
import Home from "../../pages/Home";
import NewBlog from "../../pages/NewBlog";
import NotFound from "../../pages/NotFound";

const RoutesPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-blog" element={<NewBlog />} />
        <Route path="/edit-blog/:id" element={<NewBlog />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPage;
