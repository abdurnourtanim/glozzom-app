import { Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useCallback, useState } from "react";
import { Container, Nav, Navbar as NavbarBootstrap } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const closeMobileMenu = () => {
    setToggle(false);
  };

  const clickToggler = () => {
    setToggle(!toggle);
  };

  const screenResize = useCallback(() => {
    window.addEventListener("resize", (e) => {
      if (e.target.innerWidth > 768) {
        setToggle(false);
      }
    });
  }, []);

  screenResize();

  const scrollScreen = useCallback(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 400) {
        setToggle(false);
      }
    });
  }, []);

  scrollScreen();

  return (
    <div className="navbar__container">
      <NavbarBootstrap variant="dark">
        <Container>
          <Link to="/" className="navbar-brand logo" onClick={closeMobileMenu}>
            Glozzom
          </Link>
          <div className=" mobile__menu">
            <MenuIcon className="mobile__icon" onClick={clickToggler} />
          </div>
          <Nav
            className={`hide__menu show__mobile__menu show__on__top ${
              toggle && "toggle__mobile__menu"
            }`}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link"
                  onClick={closeMobileMenu}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/services"
                  className="nav-link"
                  onClick={closeMobileMenu}
                >
                  services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/blog"
                  className="nav-link"
                  onClick={closeMobileMenu}
                >
                  blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-link"
                  onClick={closeMobileMenu}
                >
                  contact
                </NavLink>
              </li>

              <li className="nav-item btn__item">
                <Button
                  variant="contained"
                  color="primary"
                  className="navbar__account"
                  onClick={closeMobileMenu}
                >
                  <Link to="/login" className="login__btn">
                    LogIn
                  </Link>
                </Button>
              </li>
            </ul>
          </Nav>
        </Container>
      </NavbarBootstrap>
    </div>
  );
};

export default Navbar;
