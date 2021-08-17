import React from "react";

const AboutDescription = () => {
  return (
    <div className="about__description__container py-3 py-md-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-left mt-0 mt-md-5">
            <h3>What We Do</h3>
            <p className="text-muted mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ex
              quaerat magnam obcaecati repellendus voluptatum quisquam
              architecto iure, aliquam labore. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Sint ex quaerat magnam obcaecati
              repellendus voluptatum quisquam architecto iure, aliquam labore.
            </p>
          </div>
          <div className="col-md-6 text-center ">
            <img
              src="images/image4.jpeg"
              className="img-fluid rounded-circle"
              alt="about img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDescription;
