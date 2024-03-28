import React from "react";

const Resetpassword = () => {
  return (
    <div>
      <section class="bg-light py-3 py-md-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
              <div class="card border border-light-subtle rounded-3 shadow-sm">
                <div class="card-body p-3 p-md-4 p-xl-5">
                  <div class="text-center mb-3">
                    <a href="#!">
                      <img
                        src="/Logo.ico"
                        alt="Logo"
                        width="175"
                        height="100"
                      />
                    </a>
                  </div>
                  <h1 class="fs-6 fw-normal text-center text-secondary mb-4">
                    Reset Password
                  </h1>
                  <form action="#!">
                    <div class="row gy-2 overflow-hidden">
                      <div class="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="password"
                            className="form-control"
                            name="newpassword"
                            id="newpassword"
                            value=""
                            placeholder="New Password"
                            required
                          />
                          <label htmlFor="newpassword" className="form-label">
                            New Password
                          </label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="confirmpassword"
                            className="form-control"
                            name="confirmpassword"
                            id="confirmpassword"
                            value=""
                            placeholder="COnfirm Password"
                            required
                          />
                          <label
                            htmlFor="confirmpassword"
                            className="form-label"
                          >
                            Confirm Password
                          </label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="d-grid my-3">
                          <button class="btn btn-dark btn-lg" type="submit">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resetpassword;
