import { Button } from "@material-ui/core";
import Check from "@material-ui/icons/Check";
import React from "react";
import { Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const ServicesCardItem = ({ id, title, description, plan }) => {
  return (
    <Col lg="4" md="6" sm="12" className="pt-2">
      <Card className="text-center">
        <Card.Header>
          <h3>Service Plan {id}</h3>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <h2>${title}/Month</h2>
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          <ListGroup>
            <ListGroupItem>
              <Check /> Feature One
            </ListGroupItem>
            <ListGroupItem>
              <Check /> Feature One
            </ListGroupItem>
            <ListGroupItem>
              <Check /> Feature One
            </ListGroupItem>
            <ListGroupItem>
              <Check /> Feature One
            </ListGroupItem>
            <ListGroupItem>
              <Check /> Feature One
            </ListGroupItem>
          </ListGroup>
          <Button
            variant="contained"
            color="primary"
            className="order__now__btn mt-3"
          >
            <Link
              to="/login"
              className="text-light text-decoration-none text-capitalize"
            >
              Order Now
            </Link>
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">{plan} Year Plan.</Card.Footer>
      </Card>
    </Col>
  );
};

export default ServicesCardItem;
