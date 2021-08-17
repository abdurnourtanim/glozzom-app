import { Button } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Form } from "react-bootstrap";
import "./Home.css";

const HomeNewsLetter = () => {
  return (
    <div className="home__news__letter__container mt-3 py-3">
      <div className="container py-3">
        <div className="row text-center">
          <div className="col">
            <h2 className="text-warning">Signup For Our Newsletter</h2>
            <p className="px-md-5 px-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis magnam similique esse assumenda quasi repellendus illum
              perferendis quos aliquid possimus.
            </p>
            <Form className=" d-block d-md-flex justify-content-center mt-lg-5 mt-md-3 mt-sm-1">
              <Form.Group className="px-1">
                <Form.Control type="name" placeholder="Your Name" />
              </Form.Group>
              <Form.Group className="px-1">
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
              <Button variant="contained" color="primary">
                Subscribs
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNewsLetter;
