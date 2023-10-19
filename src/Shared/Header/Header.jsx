import React from "react";
import "./Header.css";

import logout from "../../assets/logout.png";
import profile from "../../assets/profile.png";

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            WPS
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i class="fa fa-bars"></i>
            </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
              <li class="nav-item">
                <form class="d-flex">
                  <div class="searchNav">
                    <input
                      class="w-100"
                      type="search"
                      placeholder="Find your next wallpaper..."
                    />
                  </div>
                </form>
              </li>
              <li class="nav-item">
                <ul class="navBg d-flex justify-content-center gap-3">
                  <li class="accountParent">
                    <a class="nav-link" href="#">
                      Account
                    </a>
                    <div class="accountChild">
                      <div class="row navBorder">
                        <div class="col-6">
                          <div class="childInner d-flex flex-column gap-3 text-nowrap border_right">
                            <a href="login.html">Login</a>
                            <a href="profile.html">Profile</a>
                            <a href="#">Favorites</a>
                            <a href="#">Collections</a>
                          </div>
                        </div>
                        <div class="col-6" s>
                          <div class="childInner d-flex flex-column gap-3 text-nowrap">
                            <a href="register.html">Register</a>
                            <a href="#">Messages</a>
                            <a href="#">The Vault</a>
                            <a href="setting.html">Settings</a>
                          </div>
                        </div>
                      </div>
                      <button class="logoutBtn mx-auto">
                        <img src={logout} alt="Logout" />
                        Log Out
                      </button>
                    </div>
                  </li>
                  <li>
                    <span className="border_right"></span>
                  </li>
                  <li>
                    <a class="nav-link" href="#">
                      Upload
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div class="profileImg text-center">
              <img src={profile} alt="Profile Image" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
