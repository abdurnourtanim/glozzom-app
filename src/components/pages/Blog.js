import React from "react";
import BlogCard from "../blog/BlogCard";
import BlogHero from "../blog/BlogHero";
import Footer from "../footer/Footer";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <BlogHero />
      <BlogCard />
      <Footer />
    </div>
  );
};

export default Blog;
