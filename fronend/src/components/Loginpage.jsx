import React, { useState } from "react";
import { Link } from "react-router-dom";

const Loginpage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember_me: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any necessary validation or API calls before navigating
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: val });
  };

  return (
    <div>
      {/* Login Section */}
      <section className="bg-light p-3 p-md-4 p-xl-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-xxl-11">
              <div className="card border-light-subtle shadow-sm">
                <div className="row g-0">
                  {/* Left Column: Image */}
                  <div className="col-12 col-md-6">
                    <img
                      className="img-fluid rounded-start w-100 h-100 object-fit-cover"
                      loading="lazy"
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="Welcome back you've been missed!"
                    />
                  </div>
                  {/* Right Column: Login Form */}
                  <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <div className="col-12 col-lg-11 col-xl-10">
                      <div className="card-body p-3 p-md-4 p-xl-5">
                        <div className="row">
                          <div className="col-12">
                            <div className="mb-5">
                              {/* Logo */}
                              <div className="text-center mb-4">
                                <a href="#!">
                                  <img
                                    src="/Logo.ico"
                                    alt="BootstrapBrain Logo"
                                    width="175"
                                    height="70"
                                  />
                                </a>
                              </div>
                              <h4 className="text-center">Sign In</h4>
                            </div>
                          </div>
                        </div>

                        {/* Login Form */}
                        <form onSubmit={handleSubmit}>
                          <div className="row gy-3 overflow-hidden">
                            {/* Email Input */}
                            <div className="col-12">
                              <div className="form-floating mb-3">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="name@example.com"
                                  value={formData.email}
                                  onChange={handleChange}
                                  required
                                />
                                <label htmlFor="email" className="form-label">
                                  Email
                                </label>
                              </div>
                            </div>
                            {/* Password Input */}
                            <div className="col-12">
                              <div className="form-floating mb-3">
                                <input
                                  type="password"
                                  className="form-control"
                                  name="password"
                                  id="password"
                                  value={formData.password}
                                  onChange={handleChange}
                                  placeholder="Password"
                                  required
                                />
                                <label
                                  htmlFor="password"
                                  className="form-label"
                                >
                                  Password
                                </label>
                              </div>
                            </div>
                            {/* Remember Me Checkbox */}
                            <div className="col-12">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="remember_me"
                                  id="remember_me"
                                  checked={formData.remember_me}
                                  onChange={handleChange}
                                />
                                <label
                                  className="form-check-label text-secondary"
                                  htmlFor="remember_me"
                                >
                                  Keep me logged in
                                </label>
                              </div>
                            </div>
                            {/* Submit Button */}
                            <div className="col-12">
                              <div className="d-grid">
                                {/* Navigate to Dashboard upon form submission */}
                                <Link
                                  to="/dashboard"
                                  className="btn btn-dark btn-lg"
                                >
                                  Login now
                                </Link>
                              </div>
                            </div>
                          </div>
                        </form>
                        {/* Additional Links */}
                        <div className="row">
                          <div className="col-12">
                            <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-5">
                              {/* Sign Up Link */}
                              <p className="mb-0 mt-5 text-secondary text-center">
                                Don't have an account yet?{" "}
                                <Link to="/register">
                                  <a
                                    href="#!"
                                    className="link-primary text-decoration-none"
                                  >
                                    Sign up
                                  </a>
                                </Link>
                              </p>
                            </div>
                            <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-5">
                              <Link to="/forgetpassword">Forget Password</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Loginpage;
