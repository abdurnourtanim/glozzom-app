import React from "react";
import { Link } from "react-router-dom";

const AboutCardItem = ({
  icon,
  heading,
  text,
  cardStyle,
  headingStyle,
  textStyle,
}) => {
  const style = {
    color: "#fff",
  };

  return (
    <div className="col-md-6 col-lg-4 mb-3">
      <div className={`card  text-center py-3 ${cardStyle}`}>
        <div className="card-body">
          <Link to="/" className="card__link">
            <div>{icon}</div>
            <h3 className="card-title mt-4" style={headingStyle || style}>
              {heading}
            </h3>
            <p className="card-text text-light " style={textStyle || style}>
              {text}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutCardItem;
