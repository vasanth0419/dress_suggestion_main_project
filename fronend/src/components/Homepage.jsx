import React from "react";
import "./style.css/Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <div className="container-fluid">
        
        {/* 1st - content */}

        <div className="jumbotron pt-4 pb-1 text-white rounded bg-dark">
          <div className="container">
            <div className="row justify-content-center justify-content-md-start">
              <div className="col-md-6 px-0">
                <div className="text-center pt-5 pe-5 m-1">
                  <p className="lead my-3 font-italic ">
                    "Welcome to our sanctuary of style and comfort! Browse our
                    curated selection of women's fashion, where elegance meets
                    versatility. Discover timeless classics and contemporary
                    trends tailored to suit every taste. Experience the joy of
                    effortless shopping and elevate your wardrobe with pieces
                    that empower and inspire. Join us on a journey of
                    self-expression through fashion. Welcome home."
                  </p>
                  <p className="lead mb-0">
                    <a href="#" className="text-white font-weight-bold">
                      Continue reading...
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-6 ml-3 first_image">
                <img
                  className=" rounded pt-4 ps-3"
                  style={{ width: "100%", height: "90%" }}
                  src="/img/1stcontent.jpg"
                  alt="Dress collection"
                />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Homepage;
