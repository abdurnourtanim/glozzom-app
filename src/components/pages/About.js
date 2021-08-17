import React from "react";
import AboutCard from "../about/AboutCard";
import AboutDescription from "../about/AboutDescription";
import AboutHero from "../about/AboutHero";
import Footer from "../footer/Footer";
import "./About.css";

const About = () => {
  return (
    <>
      <AboutHero />
      <AboutDescription />
      <AboutCard />
      <Footer />
    </>
  );
};

export default About;
