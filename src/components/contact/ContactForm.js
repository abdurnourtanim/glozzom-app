import { Button } from "@material-ui/core";
import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContactFormInput from "./ContactFormInput";

const ContactForm = () => {
  return (
    <Container className="py-3 py-md-5">
      <Row>
        <Col md="8">
          <Card>
            <Card.Body>
              <h5 className="text-center text-danger">
                Please fill out this form to contact us
              </h5>
              <Form>
                <Row>
                  <ContactFormInput
                    col={6}
                    type="text"
                    placeholder="First Name"
                  />
                  <ContactFormInput
                    col={6}
                    type="text"
                    placeholder="Last Name"
                  />
                  <ContactFormInput
                    col={6}
                    type="email"
                    placeholder="Email Address"
                  />
                  <ContactFormInput
                    col={6}
                    type="number"
                    placeholder="Phone Number"
                  />
                  <ContactFormInput
                    col={12}
                    type="textrea"
                    placeholder="Your Massage..."
                    classname="contact__textare__box"
                  />
                  <Col md="12">
                    <Button className=" bg-secondary w-100 mt-3">
                      <Link
                        className="text-light text text-decoration-none"
                        to="/contact"
                      >
                        Send
                      </Link>
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md="4">
          <Card className="contact__detalis">
            <Card.Body>
              <h4>Get In Touch</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto, consequuntur.
              </p>
              <h4>Address</h4>
              <p className="text-muted">Chittagong,Bangladesh</p>
              <h4>Email</h4>
              <p className="text-muted">antnim.officail@gmail.com</p>
              <h4>Phone Number</h4>
              <p className="mb-0 text-muted">+88 01399382000</p>
              <p className="mb-0 text-muted">+88 01399382000</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
