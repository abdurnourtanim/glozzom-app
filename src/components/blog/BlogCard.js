import React from "react";
import BlogCardItem from "./BlogCardItem";
import blogDetails from "./blogDetails";

const BlogCard = () => {
  return (
    <div className="container py-3 py-md-5">
      <div className="row">
        {/* imgSrc, title, writter, blog  */}

        {blogDetails.map(({ id, img, title, writter, content }) => (
          <BlogCardItem
            key={id}
            imgSrc={img}
            title={title}
            writter={writter}
            blog={content}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
