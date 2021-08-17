import { Button } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";

const SliderItem = () => {
  return (
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/images/image2.jpeg"
        alt="First slide"
      />
      <Carousel.Caption className="carousel__caption text__left">
        <h3 className="carousel__heading__one">Heading One</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          dignissimos, voluptate animi nobis fuga dicta corporis similique
          obcaecati est ea?
        </p>

        <Button variant="contained" color="secondary">
          Learn More
        </Button>
      </Carousel.Caption>
    </Carousel.Item>
  );
};

export default SliderItem;
