import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import React, { useEffect, useState } from "react";
import "./BackToTop.css";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  const clickHandler = () => {
    setShow(false);
  };
  useEffect(() => {
    if (!show) {
      window.scrollTo(0, 0);
    }
  }, [show]);

  const isScrolling = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else if (window.scrollY <= 200) {
        setShow(false);
      }
    });
  };
  isScrolling();

  return (
    <div className={show ? "top__container" : "top__container__hide"}>
      <ArrowUpwardIcon
        className="top__container__icon"
        onClick={clickHandler}
      />
    </div>
  );
};

export default BackToTop;
