import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import React from "react";
import { Link } from "react-router-dom";

const HomeVideo = () => {
  return (
    <>
      <div className="home__video__container py-3 text-center">
        <div className="dark__overlay">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="video__light__box">
                  <Link to="/" className="video__light__box__play ">
                    <PlayCircleFilledIcon className="video__play__icon" />
                  </Link>
                  <h2 className="mt-3">Watch Video</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeVideo;
