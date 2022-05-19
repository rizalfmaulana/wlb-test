import React from "react";
import { useSelector } from "react-redux";
import Text from "../../atoms/text";
import CardBlog from "../../molecules/CardBlog";

const OtherBlogs = () => {
  const { blogs, blog } = useSelector((state) => state.blog);
  return (
    <div className="my-10 space-y-7">
      <Text Tag="h3" size="xl4" color="black" weight="bold">
        Related Blogs
      </Text>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">{blogs && blogs.filter((item) => item.title !== blog.title).map((blog) => <CardBlog key={blog.id} {...blog} />)}</div>
    </div>
  );
};

export default OtherBlogs;
