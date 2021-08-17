import CloudIcon from "@material-ui/icons/Cloud";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import SendIcon from "@material-ui/icons/Send";
import React from "react";
import "./Home.css";

const HomeIcon = () => {
  return (
    <div className="home__section__container py-5 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-4 home__section__box">
            <CloudIcon className="home__section__icon " />
            <h3 className="py-3 text-dark">Turning Gears</h3>
            <p className="text-muted">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
              vitae laboriosam beatae quibusdam nam a?
            </p>
          </div>
          <div className="col-md-4 home__section__box">
            <SendIcon className="home__section__icon " />
            <h3 className="py-3 text-dark">Sending Data</h3>
            <p className="text-muted">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
              vitae laboriosam beatae quibusdam nam a?
            </p>
          </div>
          <div className="col-md-4 home__section__box">
            <MonetizationOnIcon className="home__section__icon " />
            <h3 className="py-3 text-dark">Makeing Money</h3>
            <p className="text-muted">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
              vitae laboriosam beatae quibusdam nam a?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeIcon;
