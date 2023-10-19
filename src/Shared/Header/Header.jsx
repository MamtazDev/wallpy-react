import React from "react";
import "./Header.css";

import logout from "../../assets/logout.png";
import profile from "../../assets/profile.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <Link class="navbar-brand" to="/">
            WPS
          </Link>
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
                    <Link class="nav-link" to="#">
                      Account
                    </Link>
                    <div class="accountChild">
                      <div class="row navBorder">
                        <div class="col-6">
                          <div class="childInner d-flex flex-column gap-3 text-nowrap border_right">
                            <Link to="/login">Login</Link>
                            <Link to="profile.html">Profile</Link>
                            <Link to="#">Favorites</Link>
                            <Link to="#">Collections</Link>
                          </div>
                        </div>
                        <div class="col-6" s>
                          <div class="childInner d-flex flex-column gap-3 text-nowrap">
                            <Link to="/register">Register</Link>
                            <Link to="#">Messages</Link>
                            <Link to="#">The Vault</Link>
                            <Link to="setting.html">Settings</Link>
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
                    <Link class="nav-link" to="#">
                      Upload
                    </Link>
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
