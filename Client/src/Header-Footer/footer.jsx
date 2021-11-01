import React from "react";
import { Facebook, Twitter, Instagram } from "react-feather";

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <footer className="footer">
          <div className="top-footer">
            <div className="row">
              <div className="col-sm-3">
                <div className="footer-logo">
                  <a href="/" title="gps">
                    <img
                      src="https://uploads.codesandbox.io/uploads/user/394a073e-ac76-4500-88bf-59a13ae9a863/5U6A-mercury-logo.png"
                      width="72"
                      alt="Track-Logo"
                      className="img-fluid"
                    />
                    EASY TRACK
                  </a>
                  <p className="tagline">A product of Dev'Montain Company</p>
                </div>
              </div>
              <div class="col-sm-9">
                <div className="row">
                  <div className="col-lg-3 col-sm-6">
                    <h4>Sitemap</h4>
                    <ul className="footer-link">
                      <li>
                        <a href="/" title="Home">
                          Home
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                    <h4>About Us</h4>
                    <ul className="footer-link">
                      <li>
                        <a href="/" title="About">
                          Dev'Montain Company
                        </a>
                      </li>
                      <li>
                        <a href="/" title="Why GPS Track">
                          Why GPS Track
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <h4>Contact Us</h4>
                    <ul className="footer-link">
                      <li>
                        <a href="mail-to:gps-track@gmail.com" title="Contact">
                          gps-track@gmail.com
                        </a>
                      </li>
                      <li>
                        <a href="/" title="Call Us">
                          +213 662450222
                        </a>
                      </li>
                      <li>
                        <a href="/" title="Facebook" className="social-icons">
                          <Facebook />
                        </a>
                        <a href="/" title="Twitter" className="social-icons">
                          <Twitter />
                        </a>
                        <a href="/" title="Instagram" className="social-icons">
                          <Instagram />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-1">
            <p className="copyright pt-3">
              &copy; 2020-2021. All Right Reserved.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
