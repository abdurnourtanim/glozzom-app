import { Button } from "@material-ui/core";
import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="login__container py-3 py-md-3 ">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="login__form py-5">
            <h5 className="text-left mb-3">Login Form</h5> <hr />
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Remember me!"
                  className="text-secondary"
                />
              </Form.Group>
              <Button color="primary" variant="contained" className="w-100">
                <Link
                  to="/login"
                  className="text-light text-decoration-none login"
                >
                  Login
                </Link>
              </Button>
              <div className="d-flex not__signin">
                <Link
                  to="/signin"
                  className=" text-danger text-decoration-none "
                >
                  Need an Account?
                </Link>
                <Link
                  to="/login"
                  className=" text-danger text-decoration-none "
                >
                  Forgat Password
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginForm;
