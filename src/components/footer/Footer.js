import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer__container pt-3 text-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <p className="text-muted">
              © Copyright <span className="text-secondary">Glozzom</span>. All
              Rights Reserved Designed by
              <a href="https://web.facebook.com/abdurnourtanim">
                Abdur Nur Tanim
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
