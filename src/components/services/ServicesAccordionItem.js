import React from "react";
import { Accordion } from "react-bootstrap";

const ServicesAccordionItem = ({ title, description, eventkey }) => {
  return (
    <>
      <Accordion.Item eventKey={eventkey} className="my-3 mx-3">
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>{description}</Accordion.Body>
      </Accordion.Item>
    </>
  );
};

export default ServicesAccordionItem;
