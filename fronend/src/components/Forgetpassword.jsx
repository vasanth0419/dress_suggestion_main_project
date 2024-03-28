import React from "react";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <div>
      {/* Password Reset */}
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
                  <h2 class="fs-6 fw-normal text-center text-secondary mb-4">
                    Provide the email address associated with your account to
                    recover your password.
                  </h2>
                  <form action="#!">
                    <div class="row gy-2 overflow-hidden">
                      <div class="col-12">
                        <div class="form-floating">
                          <input
                            type="email"
                            class="form-control"
                            name="email"
                            id="email"
                            placeholder="name@example.com"
                            required
                          />
                          <label for="email" class="form-label">
                            Email
                          </label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="d-grid my-3">
                          <button class="btn btn-dark btn-lg" type="submit">
                            Forget Password
                          </button>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="d-flex gap-2 justify-content-around">
                          <Link
                            to="/login"
                            class="link-secondary text-decoration-none"
                          >
                            Log In
                          </Link>

                          <Link
                            to="/register"
                            class="link-secondary text-decoration-none"
                          >
                            Register
                          </Link>
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

export default ForgetPassword;
