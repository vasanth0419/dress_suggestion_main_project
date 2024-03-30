import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGoogle,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const Footerpage = () => {
  return (
    <div>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4 footer-about wow fadeInUp">
              <img
                className="logo-footer"
                src="/img/Logo.jpg"
                alt="logo-footer"
                data-at2x="assets/img/logo.png"
              />
              <p>
                We are a young company always looking for new and creative ideas
                to help you with our products in your everyday work.
              </p>
              <p>
                <Link to="#">Our Team</Link>
              </p>
            </div>
            <div className="col-md-4 col-lg-4 offset-lg-1 footer-contact wow fadeInDown">
              <h3>Contact</h3>
              <p>
                <i className="fas fa-map-marker-alt"></i> Via Rossini 10, 10136
                Turin Italy
              </p>
              <p>
                <i className="fas fa-phone"></i> Phone: (0039) 333 12 68 347
              </p>
              <p>
                <i className="fas fa-envelope"></i> Email:{" "}
                <a href="mailto:hello@domain.com">hello@domain.com</a>
              </p>
              <p>
                <i className="fab fa-skype"></i> Skype: you_online
              </p>
            </div>
            <div className="col-md-4 col-lg-3 footer-social wow fadeInUp">
              <h3>Follow us</h3>
              <p>
                <Link to="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link to="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
                <Link to="#">
                  <FontAwesomeIcon icon={faGoogle} />
                </Link>
                <Link to="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link to="#">
                  <FontAwesomeIcon icon={faPinterest} />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-5 footer-copyright">
              <p>
                &copy; Bootstrap Footer Template by{" "}
                <a href="https://azmind.com">AZMIND</a>
              </p>
            </div>
            <div className="col-md-7 footer-menu">
              <nav className="navbar navbar-dark navbar-expand-md">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link scroll-link" to="#top-content">
                        Top
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link scroll-link" to="#section-1">
                        Section 1
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link scroll-link" to="#section-2">
                        Section 2
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link scroll-link" to="#section-3">
                        Section 3
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link scroll-link" to="#section-4">
                        Section 4
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footerpage;
