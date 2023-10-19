import React from "react";
import leftright from "../../assets/left_light.png";
import { Link } from "react-router-dom";

const ConfirmationEmail = () => {
  return (
    <>
      <div class="bgShadowTop">
        <div class="authShadowBottom">
          <div class="mt_85 container auth_Container">
            <div class="row">
              <div class="col-1 pe-0">
                <div class="text-center">
                  <Link class="backBtn text-nowrap" to="/forgetpassword">
                    <img class="me-2" src={leftright} alt="Left Arrow" />
                    Back
                  </Link>
                </div>
              </div>
              <div class="col-11">
                <div class="brightBg">
                  <div class="row">
                    <div class="col-6">
                      <div class="imgLogin confirmation_bg"></div>
                    </div>

                    <div class="col-6">
                      <div style={{ padding: "20px" }}>
                        <h1>THE WALLPAPER SOCIETY</h1>
                        <div>
                          <div style={{ marginBottom: "240px" }}>
                            <p
                              class="fontBak"
                              style={{
                                marginTop: "190px",
                                fontSize: "12px",
                                color: "#373737",
                              }}
                            >
                              Please check your email for further instructions
                              on resetting your password. If you don't see an
                              email from us, please check your spam folder.
                            </p>
                            <div class="text-center mt-5">
                              <Link class="text-white darkBtn" to="/">
                                Return Home
                              </Link>
                            </div>
                          </div>

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
      </div>
    </>
  );
};

export default ConfirmationEmail;
