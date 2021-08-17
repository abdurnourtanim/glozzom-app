import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import ServicesAccordionItem from "./ServicesAccordionItem";

const ServicesAccordion = () => {
  return (
    <div className="accordion__container">
      <Container>
        <Row>
          <Col className="my-5 text-center">
            <h2>Frequently Asked Questions?</h2>
          </Col>
          <Accordion className="accordion">
            <Col md="5" className="left__accordion">
              <ServicesAccordionItem
                title="Accordion One"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto ipsa adipisci nostrum. Architecto delectus laboriosam veritatis ducimus"
                eventkey={0}
              />

              <ServicesAccordionItem
                title="Accordion Two"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto ipsa adipisci nostrum. Architecto delectus laboriosam veritatis ducimus"
                eventkey={1}
              />

              <ServicesAccordionItem
                title="Accordion Three"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto ipsa adipisci nostrum. Architecto delectus laboriosam veritatis ducimus"
                eventkey={2}
              />
            </Col>
            <Col md="5" className="right__accordion">
              <ServicesAccordionItem
                title="Accordion One"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto ipsa adipisci nostrum. Architecto delectus laboriosam veritatis ducimus"
                eventkey={4}
              />

              <ServicesAccordionItem
                title="Accordion Two"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto ipsa adipisci nostrum. Architecto delectus laboriosam veritatis ducimus"
                eventkey={5}
              />

              <ServicesAccordionItem
                title="Accordion Three"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto ipsa adipisci nostrum. Architecto delectus laboriosam veritatis ducimus"
                eventkey={6}
              />
            </Col>
          </Accordion>
        </Row>
      </Container>
    </div>
  );
};

export default ServicesAccordion;
