import React from "react";
import "./ForgetPass.css";
import leftright from "../../assets/left_light.png";
import { Link } from "react-router-dom";

const Forgetpassword = () => {
  return (
    <>
      <div class="">
        <div class="authShadowBottom">
          <div class="mt_85 container auth_Container">
            <div class="row">
              <div class="col-1 pe-0">
                <div class="text-center">
                  <Link class="backBtn" to="/login">
                    <img class="me-2" src={leftright} alt="Left Arrow" />
                    Back
                  </Link>
                </div>
              </div>
              <div class="col-11">
                <div class="brightBg">
                  <div class="row">
                    <div class="col-6">
                      <div class="imgLogin forgetpass_bg">
                        <p class="text-center">Forgot your password?</p>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="d-flex flex-column justify-content-center align-items-center">
                        <h1>THE WALLPAPER SOCIETY</h1>
                        <div
                          class="authtab text-center mx-auto"
                          style={{ marginBottom: "120px" }}
                        >
                          <button class="tabInner tabActive">Password</button>
                          {/* <!-- <button class="tabInner">E-mail</button> --> */}
                          <button class="tabInner">
                            <Link class="text-dark" to="/forgetemail">
                              E-mail
                            </Link>
                          </button>
                        </div>
                        <form action="" style={{ marginBottom: "250px" }}>
                          <label for="email">Email</label>
                          <input
                            class=""
                            type="mail"
                            name="email"
                            id="email"
                            placeholder="wallpapers@thewallpapersociety.com"
                          />

                          <div class="text-center mt-4">
                            <button class="darkBtn mb-2">
                              <Link class="text-white" to="/confirmationEmail">
                                Reset
                              </Link>
                            </button>
                          </div>
                        </form>
                        <div class="community d-flex justify-content-center gap-4 align-items-center">
                          <a href="#">Community Rules</a>
                          <a href="#">Privacy Policy</a>
                          <a href="#">Terms and Conditions</a>
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

export default Forgetpassword;
