import React from "react";
import Footer from "../footer/Footer";
import HomeGallery from "../home/HomeGallery";
import HomeGetStart from "../home/HomeGetStart";
import HomeIcon from "../home/HomeIcon";
import HomeInfo from "../home/HomeInfo";
import HomeNewsLetter from "../home/HomeNewsLetter";
import HomeVideo from "../home/HomeVideo";
import Slider from "../slider/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <HomeIcon />
      <HomeGetStart />
      <HomeInfo />
      <HomeVideo />
      <HomeGallery />
      <HomeNewsLetter />
      <Footer />
    </>
  );
};

export default Home;
