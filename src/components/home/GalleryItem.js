import React from "react";
import "./Home.css";

const GalleryItem = ({ imgSrc }) => {
  return (
    <div className="col-lg-4 col-md-6 pt-1 pt-md-3">
      <img
        src={imgSrc}
        alt="img-gallery"
        className="img-fluid rounded img__gallery__item"
      />
    </div>
  );
};

export default GalleryItem;
