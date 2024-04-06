import React from "react";
import { Link } from "react-router-dom";
import Button from "./layouts/Button";
import { Menu, Search, User, LogIn, X, ShoppingCart } from "react-feather";
import "./style.css/Nav.css";

const Navbar = () => {
  return (
    <div>
      <div className="container-fluid">
        {/* Navigation bar */}
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand d-md-none d-xs-block py-3" href="#">
              <img src="/Logo.ico" height="40" alt="Company Logo" />
            </a>
            <a className="navbar-brand" href="#">
              <span className="dancing-script">Women's Fix</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link className="nav-link mx-2" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-2" to="/trends">
                    Trends
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <div
                    className="nav-link dropdown-toggle mx-2"
                    id="navbarDropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dresses
                  </div>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/">
                        Option 1
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Option 2
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Option 3
                      </Link>
                    </li>
                    {/* Add more dropdown items as needed */}
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-2" to="/contactus">
                    Contact Us
                  </Link>
                </li>
              </ul>
              <Link to="/login">
                <button className="btn btn-dark w-full md:w-auto">
                  <LogIn width={20} height={20} className="mr-2" />
                  <span className="text-white">Login</span>
                </button>
              </Link>

              <Link to="/register">
                <button className="btn btn-dark w-full md:w-auto">
                  <User width={20} height={20} className="mr-2" />
                  <span className="text-white">Register</span>
                </button>
              </Link>
            </div>
          </div>
        </nav>
        <br />
      </div>
    </div>
  );
};

export default Navbar;
