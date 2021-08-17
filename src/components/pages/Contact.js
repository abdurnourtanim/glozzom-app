import React from "react";
import ContactForm from "../contact/ContactForm";
import ContactHero from "../contact/ContactHero";
import Footer from "../footer/Footer";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
