import React from "react";
import leftright from "../../assets/left_light.png";
import { Link } from "react-router-dom";

const ForgetEmail = () => {
  return (
    <>
      <div class="bgShadowTop pt_85">
          <div class=" container auth_Container">
            <div class="row">
              <div class="col-1 pe-0">
                <div class="text-center">
                  <Link class="backBtn" to="/forgetpassword">
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
                        <p class="text-center">Forgot your e-mail?</p>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="d-flex flex-column justify-content-center align-items-center">
                        <h1>THE WALLPAPER SOCIETY</h1>
                        <div
                          class="authtab text-center mx-auto"
                          style={{ marginBottom: "120px" }}
                        >
                          <button class="tabInner">
                            <Link class="text-dark" to="/forgetpassword">
                              Password
                            </Link>
                          </button>
                          <button class="tabInner tabActive">
                            <Link class="text-dark" to="/forgetemail">
                              E-mail
                            </Link>
                          </button>
                        </div>
                        <form action="" style={{ marginBottom: "250px" }}>
                          <label for="username">Username</label>
                          <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="We can’t believe you forgot =("
                          />

                          <div class="text-center mt-4">
                            <button type="submit" class="darkBtn mb-2">
                              <a class="text-white" href="/confirmationEmail">
                              Reset
                              </a>
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
    </>
  );
};

export default ForgetEmail;
