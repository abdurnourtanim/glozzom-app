import React from "react";
import Footer from "../footer/Footer";
import ServicesAccordion from "../services/ServicesAccordion";
import ServicesCard from "../services/ServicesCard";
import ServicesHero from "../services/ServicesHero";
import "./Services.css";

const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServicesCard />
      <ServicesAccordion />
      <Footer />
    </>
  );
};

export default Services;
