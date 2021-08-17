import { Button } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="carousel__container">
      <Carousel>
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

            <Button variant="contained" color="primary">
              Learn More
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/image1.jpeg"
            alt="Second slide"
          />

          <Carousel.Caption className="carousel__caption text__right">
            <h3 className="carousel__heading__two">Heading Two</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              dignissimos, voluptate animi nobis fuga dicta corporis similique
              obcaecati est ea?
            </p>
            <Button variant="outlined" className="bg-warning ">
              Learn More
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/image3.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption className="carousel__caption ">
            <h3 className="carousel__heading__three">Heading Three</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              dignissimos, voluptate animi nobis fuga dicta corporis similique
              obcaecati est ea?
            </p>
            <Button variant="outlined" className="bg-info">
              Learn More
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
