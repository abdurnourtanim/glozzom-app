import EmailIcon from "@material-ui/icons/Email";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";
import NotesIcon from "@material-ui/icons/Notes";
import PhoneIcon from "@material-ui/icons/Phone";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import SettingsIcon from "@material-ui/icons/Settings";
import React from "react";
import AboutCardItem from "./AboutCardItem";

const AboutCard = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <AboutCardItem
            icon={<EmailIcon className="card__icon" />}
            heading="Card One"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quasi magni placeat."
            cardStyle="bg-success"
          />
          <AboutCardItem
            icon={<LocalTaxiIcon className="card__icon" />}
            heading="Send Mail"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quasi magni placeat."
            cardStyle="bg-secondary"
          />
          <AboutCardItem
            icon={<PhoneIcon className="card__icon" />}
            heading="Call"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quasi magni placeat."
            cardStyle="bg-info"
            headingStyle={{ color: "#000" }}
            textStyle={{ color: "#000" }}
          />
          <AboutCardItem
            icon={<SettingsIcon className="card__icon" />}
            heading="Setting"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quasi magni placeat."
            cardStyle="bg-primary"
          />
          <AboutCardItem
            icon={<NotesIcon className="card__icon" />}
            heading="Note Books"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quasi magni placeat."
            cardStyle="bg-info"
          />
          <AboutCardItem
            icon={<PlaylistAddCheckIcon className="card__icon" />}
            heading="Playlist"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quasi magni placeat."
            cardStyle="bg-danger"
          />
        </div>
      </div>
    </>
  );
};

export default AboutCard;
