import React from "react";
import "./Footer.css";
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
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Account</a>
                </li>
                <li>
                  <a href="#">Favorites</a>
                </li>
                <li>
                  <a href="#">Messages</a>
                </li>
                <li>
                  <a href="#">Site Map</a>
                </li>
              </ul>
            </div>
            <div class="col-12 col-md-2">
              <ul>
                <li>Top Categories</li>
                <li>
                  <a href="#">Gaming</a>
                </li>
                <li>
                  <a href="#">Anime</a>
                </li>
                <li>
                  <a href="#">4K</a>
                </li>
                <li>
                  <a href="#">Japan</a>
                </li>
              </ul>
            </div>
            <div class="col-12 col-md-2">
              <ul>
                <li>The Society</li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Copyright Information</a>
                </li>
                <li>
                  <a href="#">Socials</a>
                </li>
                <li>
                  <a href="#">Sponsors / Advertisers</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div class="footerBottom d-flex flex-column flex-lg-row justify-content-center align-items-center gap-4">
            <span>© The Wallpapers Society</span>
            <span>
              <a href="#">Community Rules</a>
            </span>
            <span>
              <a href="#">Privacy Policy</a>
            </span>
            <span>
              <a href="#">Terms and Conditions</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
