import React, { useState } from "react";
import "./Login.css";
import leftright from "../../assets/left_light.png";
import fbsignin from "../../assets/fbsignin.png";
import googlesignIn from "../../assets/googlesignIn.png";
import applesignIn from "../../assets/applesignIn.png";
import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    if (email && password) {
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      const userFound = storedUsers.find(
        (user) => user.email === email && user.password === password
      );

      if (userFound) {
        localStorage.setItem("loggedIn", "true");
        setLoggedIn(true);
        window.alert("Login successfully");
        navigate("/");
      } else {
        window.alert("User not found. Please register first.");
      }
    }
  };

  return (
    <>
      <div class="bgShadowTop pt_85">
        <div class=" container auth_Container">
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
                    <div class="imgLogin login_bg d-flex flex-column justify-content-between align-items-center">
                      <p>Welcome back; we missed you.</p>
                      <div class="text-center">
                        <span class="mb-2 d-block">
                          Random facts since you were gone
                        </span>
                        <div class="addedWall">
                          <span style={{ color: "#FFF" }}>
                            1348 wallpapers were added
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="d-flex flex-column justify-content-center align-items-center">
                      <h1>THE WALLPAPER SOCIETY</h1>
                      <div class="authtab text-center mx-auto">
                        <button class="tabInner tabActive">Sign In</button>
                        <button class="tabInner">
                          <Link class="text-dark" to="/register">
                            Sign Up
                          </Link>
                        </button>
                      </div>
                      <form onSubmit={handleLogin} class="mb-5">
                        <label for="email">Email</label>
                        <input
                          className="mb-3"
                          type="email"
                          name="email"
                          id="email"
                          placeholder="wallpapers@thewallpapersociety.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="*****************"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <div class="text-center mt-4">
                          <button type="submit" class="darkBtn mb-2">
                            {/* <Link class="text-white" to="/login"> */}
                            Sign In
                            {/* </Link> */}
                          </button>
                          <Link
                            to="/forgetpassword"
                            class="d-block"
                            style={{ color: "#373737", fontSize: "10px" }}
                          >
                            Can’t login
                          </Link>
                        </div>
                      </form>
                      <div class="socialBtn d-flex flex-column justify-content-center align-items-center gap-2">
                        <button class="w-100" style={{ background: "#1877F2" }}>
                          <img src={fbsignin} alt="Facebook" />
                          Sign In with Facebook
                        </button>
                        <button
                          class="w-100"
                          style={{ background: "#FFF", color: "#CECECE" }}
                        >
                          <img src={googlesignIn} alt="Google" />
                          Sign In with Google
                        </button>
                        <button class="w-100" style={{ background: "#000" }}>
                          <img src={applesignIn} alt="Apple" />
                          Sign In with Apple
                        </button>
                      </div>
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
    </>
  );
};

export default Login;
