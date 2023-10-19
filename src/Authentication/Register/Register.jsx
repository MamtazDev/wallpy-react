import React from "react";
import leftright from "../../assets/left_light.png";

import "./Register.css";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <>
      <div class="">
        <div class="authShadowBottom">
          <div class="mt_85 container auth_Container">
            <div class="row">
              <div class="col-1 pe-0">
                <div class="text-center">
                  <Link class="backBtn" to="/">
                    <img class="me-2" src={leftright} alt="Left Arrow" />
                    Back
                  </Link>
                </div>
              </div>

              <div class="col-11">
                <div class="brightBg">
                  <div class="row">
                    <div class="col-6">
                      <div class="imgLogin d-flex flex-column justify-content-between align-items-center">
                        <p>Welcome to the Society</p>
                        <div class="text-center">
                          <span class="mb-2 d-block">
                            Random facts about WPS
                          </span>
                          <div class="addedWall">
                            <span style={{ color: "#FFF" }}>
                              You can get achievement points
                              <br class="d-none d-md-block" /> by uploading
                              wallpapers
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="d-flex flex-column justify-content-center align-items-center">
                        <h1>THE WALLPAPER SOCIETY</h1>
                        <div class="authtab text-center mx-auto">
                          <button class="tabInner">
                            <Link class="text-dark" to="/login">
                              Sign In
                            </Link>
                          </button>
                          <button class="tabInner tabActive ">Sign Up</button>
                        </div>
                        <form action="" style={{ marginBottom: "150px" }}>
                          <label for="name">Username</label>
                          <input
                            class="mb-3"
                            type="text"
                            name="username"
                            id="name"
                            placeholder="Username"
                          />
                          <label for="email">Email</label>
                          <input
                            class="mb-3"
                            type="mail"
                            name="email"
                            id="email"
                            placeholder="wallpapers@thewallpapersociety.com"
                          />
                          <label for="password">Password</label>
                          <input
                            class=""
                            type="password"
                            name=""
                            id="password"
                            placeholder="*****************"
                          />
                          <div class="text-center mt-4">
                            <button class="darkBtn mb-2">Sign In</button>
                          </div>
                        </form>

                        <div class="community d-flex justify-content-center gap-4 align-items-center mt-5">
                          <Link to="#">Community Rules</Link>
                          <Link to="#">Privacy Policy</Link>
                          <Link to="#">Terms and Conditions</Link>
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
    </>
  );
};

export default Register;
