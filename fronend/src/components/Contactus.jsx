import React from "react";

const Contactus = () => {
  return (
    <div className="container">
      <section
        className="u-clearfix u-container-align-center u-section-1"
        id="carousel_439b"
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <h2 className="u-align-center u-text u-text-default u-text-1">
            We're here to support
          </h2>
          <p className="u-align-center u-text u-text-2">
            Sample text. Click to select the Text Element.
            <br />
            Image from{" "}
            <a
              href="https://freepik.com"
              className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-1"
            >
              Freepik
            </a>
          </p>
          <div className="data-layout-selected u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="col-lg-6">
                  <div className="custom-expanded u-form u-grey-5 u-form-1">
                    <form
                      action="https://forms.nicepagesrv.com/v2/form/process"
                      className="u-clearfix u-form-spacing-20 u-form-vertical u-inner-form"
                      source="email"
                      name="form"
                      style={{ padding: "30px" }}
                    >
                      <input
                        type="hidden"
                        id="siteId"
                        name="siteId"
                        value="6173881"
                      />
                      <input
                        type="hidden"
                        id="pageId"
                        name="pageId"
                        value="81066542"
                      />
                      <div className="mb-3">
                        <label htmlFor="name-b064" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your Name"
                          id="name-b064"
                          name="name"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email-b064" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="Enter a valid email address"
                          id="email-b064"
                          name="email"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="message-b064" className="form-label">
                          Message
                        </label>
                        <textarea
                          placeholder="Enter your message"
                          rows="4"
                          cols="50"
                          id="message-b064"
                          name="message"
                          className="form-control"
                          required
                        ></textarea>
                      </div>
                      <div className="mb-3">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                      <div className="u-form-send-message u-form-send-success">
                        {" "}
                        Thank you! Your message has been sent.{" "}
                      </div>
                      <div className="u-form-send-error u-form-send-message">
                        {" "}
                        Unable to send your message. Please fix errors then try
                        again.{" "}
                      </div>
                      <input type="hidden" value="" name="recaptchaResponse" />
                      <input
                        type="hidden"
                        name="formServices"
                        value="4d5c690c-3075-cf97-86b3-f33c35a2caf3"
                      />
                      <input
                        type="hidden"
                        name="siteKey"
                        value="6LetPRgiAAAAAGX121nVdkYGTN-RfCXh4wAlbDFh"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactus;
