import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer_container">
        <div class="footer_row">
          <div class="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <Link to="/payment">about us</Link>
              </li>
              <li>
                <Link to="/payment">our services</Link>
              </li>
              <li>
                <Link to="/payment">privacy policy</Link>
              </li>
              <li>
                <Link to="/payment">affiliate program</Link>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <Link to="/payment">FAQ</Link>
              </li>
              <li>
                <Link to="/payment">reports</Link>
              </li>
              <li>
                <Link to="/payment">returns</Link>
              </li>
              <li>
                <Link to="/payment">order status</Link>
              </li>
              <li>
                <Link to="/payment">payment options</Link>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>online shop</h4>
            <ul>
              <li>
                <Link to="/payment">Web Development</Link>
              </li>
              <li>
                <Link to="/payment">Mobile Development</Link>
              </li>
              <li>
                <Link to="/payment">App Development</Link>
              </li>
              <li>
                <Link to="/payment">Graphic Designs</Link>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>follow us</h4>
            <div class="social-links">
              <Link to="/">
                <i class="fab fa-facebook-f"></i>
              </Link>
              <Link to="/">
                <i class="fab fa-twitter"></i>
              </Link>
              <Link to="/">
                <i class="fab fa-instagram"></i>
              </Link>
              <Link to="/">
                <i class="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
