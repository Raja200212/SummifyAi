import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4" style={{background: "linear-gradient(to left,#6A82FB,#FC5C70)"}}>
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-4">
            <h5>SUMMIFY</h5>
            <p>The easiest way to summarize Youtube videos</p>
            <p>
              Made with <span className="text-danger">❤️</span> by{" "}
              <a href="https://github.com/devhe4d" className="text-primary">
                @devhe4d
              </a>
            </p>
            <p>© 2023 - summify.io All rights reserved.</p>
          </div>

          {/* Middle Section */}
          <div className="col-md-4">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Updates
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Affiliate Program
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="col-md-4">
            <h5>CONTACT</h5>
            <p>
              <a
                href="mailto:contact@summify.io"
                className="text-light text-decoration-none"
              >
                contact@summify.io
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
