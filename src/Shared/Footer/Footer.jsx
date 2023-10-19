import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer>
        <div class="container">
          <div class="row gy-2 text-center text-md-start">
            <div class="col-12 col-md-6">
              <p>THE WALLPAPER SOCIETY</p>
            </div>
            <div class="col-12 col-md-2">
              <ul>
                <li>Navigation</li>
                <li>
                  <Link to="#">Home</Link>
                </li>
                <li>
                  <Link to="#">Account</Link>
                </li>
                <li>
                  <Link to="#">Favorites</Link>
                </li>
                <li>
                  <Link to="#">Messages</Link>
                </li>
                <li>
                  <Link to="#">Site Map</Link>
                </li>
              </ul>
            </div>
            <div class="col-12 col-md-2">
              <ul>
                <li>Top Categories</li>
                <li>
                  <Link to="#">Gaming</Link>
                </li>
                <li>
                  <Link to="#">Anime</Link>
                </li>
                <li>
                  <Link to="#">4K</Link>
                </li>
                <li>
                  <Link to="#">Japan</Link>
                </li>
              </ul>
            </div>
            <div class="col-12 col-md-2">
              <ul>
                <li>The Society</li>
                <li>
                  <Link to="#">About</Link>
                </li>
                <li>
                  <Link to="#">Contact</Link>
                </li>
                <li>
                  <Link to="#">Copyright Information</Link>
                </li>
                <li>
                  <Link to="#">Socials</Link>
                </li>
                <li>
                  <Link to="#">Sponsors / Advertisers</Link>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div class="footerBottom d-flex flex-column flex-lg-row justify-content-center align-items-center gap-4">
            <span>© The Wallpapers Society</span>
            <span>
              <Link to="#">Community Rules</Link>
            </span>
            <span>
              <Link to="#">Privacy Policy</Link>
            </span>
            <span>
              <Link to="#">Terms and Conditions</Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
