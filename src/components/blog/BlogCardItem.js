import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const BlogCardItem = ({ imgSrc, title, writter, blog }) => {
  const images = imgSrc || "/images/image1.jpeg";
  const demoTitle = title || "Lorem Ipsum Blog";
  const demoBlog =
    blog ||
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsam nemo magni ipsa ab eaque culpa numquam, aperiam saepe magnam.";

  return (
    <div className="col-md-6 col-lg-4 col-sm-12 pt-3 ">
      <div className="card">
        <img
          src={images}
          className="img-fluid card-img-top rounded blog__img"
          alt="card-img"
        />
        <div className="card-body">
          <div className="card-title">
            <h4 className="blog__card__title">{demoTitle}</h4>
            <small className="text-muted">
              Written by
              <Link to="/blog" className=" text-success mx-1">
                {writter || "Admin"}
              </Link>
            </small>
            <hr />
            <p className="blog__content">{demoBlog}</p>
            <Button
              variant="contained"
              className="mt-2 blog__button"
              color="primary"
            >
              <Link to="/blog" className="blog__link">
                Read More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardItem;
