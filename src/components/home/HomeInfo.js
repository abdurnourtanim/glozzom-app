import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const HomeInfo = () => {
  return (
    <>
      <div className="home__info__container py-3 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <h3 className="mb-3">Lorem Ipsum Dolor Sit</h3>
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente doloremque recusandae aperiam. Facilis ratione veniam
                velit, provident doloremque enim. Perspiciatis dolores eaque
                enim nobis sunt quia, nihil optio quo!
              </p>
              <p>
                <Button
                  variant="contained"
                  color="primary"
                  className=" mb-0 mb-md-3 mb-sm-0"
                >
                  <Link to="/blog" className="info__btn text-light">
                    Learn More
                  </Link>
                </Button>
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="/images/image5.jpeg"
                className="img-fluid rounded"
                alt="home-info-img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeInfo;
