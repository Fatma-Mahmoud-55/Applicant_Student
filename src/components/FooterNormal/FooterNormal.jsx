import * as React from "react";
import {
  FaFacebookSquare,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import style from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={`${style.footerBg}  py-2 mt-auto text-center`}>
        <div className="container mt-4 mb-2">
          <div className="row">
            <div className="col-lg-3">
              <ul className="list-unstyled">
                <li>
                  <h5>Sitemap</h5>
                </li>
                <li>about us</li>
                <li>services</li>
                <li>contact us</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul className="list-unstyled">
                <li>
                  <h5>product</h5>
                </li>
                <li>pricing</li>
                <li>features</li>
                <li>feedback</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul className="list-unstyled">
                <li>
                  <h5>help</h5>
                </li>
                <li>getting started</li>
                <li>network status</li>
                <li className="text-uppercase">faq</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul className="list-unstyled">
                <li>
                  <h5>alrowad school</h5>
                </li>
                <li>
                  <h5>subscribe</h5>
                  <div className="mt-3">
                    <input type="text" placeholder="Enter Email Adress" />
                    <button>Send</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
