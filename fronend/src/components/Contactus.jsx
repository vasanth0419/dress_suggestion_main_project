import React, { useState } from "react";
import "./style.css/contactus.css";

const Contactus = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeToggle = (e) => {
    setDarkMode(e.target.checked);
    switchTheme(e);
  };

  const switchTheme = (e) => {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validate(event);
  };

  const validate = (e) => {
    e.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const errorElement = document.getElementById("error");
    const successMsg = document.getElementById("success-msg");

    if (name.value.length < 3) {
      errorElement.innerHTML =
        "Your name should be at least 3 characters long.";
      return false;
    }

    if (!(email.value.includes(".") && email.value.includes("@"))) {
      errorElement.innerHTML = "Please enter a valid email address.";
      return false;
    }

    if (!emailIsValid(email.value)) {
      errorElement.innerHTML = "Please enter a valid email address.";
      return false;
    }

    if (message.value.length < 15) {
      errorElement.innerHTML = "Please write a longer message.";
      return false;
    }

    errorElement.innerHTML = "";
    successMsg.innerHTML =
      "Thank you! I will get back to you as soon as possible.";

    setTimeout(function () {
      successMsg.innerHTML = "";
      document.getElementById("contact-form").reset();
    }, 6000);

    return true;
  };

  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className={`contact-container ${darkMode ? "dark-mode" : ""}`}>
      <div className="left-col">
        <img className="logo" src="./Logo.ico" alt="Logo" />
      </div>
      <div className="right-col">
        <div className="theme-switch-wrapper">
          <label className="theme-switch" htmlFor="checkbox">
            <input type="checkbox" id="checkbox" onChange={handleThemeToggle} />
            <div className="slider round"></div>
          </label>
          <div className="description">Dark Mode</div>
        </div>
        <h1>Contact us</h1>
        <h5>
          We are here to help you!
        </h5>
        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email Address"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Your Message"
            id="message"
            name="message"
            required
          ></textarea>
          <button type="submit" id="submit" name="submit">
            Send
          </button>
        </form>
        <div id="error"></div>
        <div id="success-msg"></div>
      </div>
    </div>
  );
};

export default Contactus;
