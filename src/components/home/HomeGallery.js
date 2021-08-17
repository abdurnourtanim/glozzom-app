import React from "react";
import GalleryItem from "./GalleryItem";
import "./Home.css";

const HomeGallery = () => {
  return (
    <div className="home__gallery__container pt-md-5 pb-md-3 pb-1 pt-3">
      <div className="container">
        <div className="row text-center">
          <h3>Photo Gallery</h3>
          <p className="lead">Check out our photo!</p>
        </div>
        <div className="row">
          <GalleryItem imgSrc="/images/image1.jpeg" />
          <GalleryItem imgSrc="/images/image2.jpeg" />
          <GalleryItem imgSrc="/images/image3.jpeg" />
          <GalleryItem imgSrc="/images/image4.jpeg" />
          <GalleryItem imgSrc="/images/image5.jpeg" />
          <GalleryItem imgSrc="/images/image6.jpeg" />
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
