import React from "react";
import { Container, Row } from "react-bootstrap";
import ServicesCardItem from "./ServicesCardItem";
import servicesDetails from "./servicesDetails";

const ServicesCard = () => {
  return (
    <>
      {/* Props  */}
      {/* id, title, description, plan */}
      <Container className="py-md-5 py-3">
        <Row>
          {servicesDetails.map(({ id, price, description, plan }) => (
            <ServicesCardItem
              key={id}
              id={id}
              title={price}
              description={description}
              plan={plan}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ServicesCard;
