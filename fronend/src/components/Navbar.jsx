import React from "react";
import { Link } from "react-router-dom";
import Button from "./layouts/Button";
import { Menu, Search, User, LogIn, X, ShoppingCart } from "react-feather";

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
                  <a className="nav-link mx-2" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-2" href="#">
                    Women
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-2" href="#">
                    Dress
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-2" href="#">
                    Contact Us
                  </a>
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
