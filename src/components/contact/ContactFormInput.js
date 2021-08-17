import React from "react";
import { Col, Form } from "react-bootstrap";

const ContactFormInput = ({ type, placeholder, col, classname }) => {
  return (
    <Col md={col} className="mt-3">
      <Form.Group>
        <Form.Control
          className={classname}
          type={type}
          placeholder={placeholder}
        />
      </Form.Group>
    </Col>
  );
};

export default ContactFormInput;
