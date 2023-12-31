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
      <div className="bgShadowTop pt_85">
        <div className=" container auth_Container">
          <div className="row">
            <div className="col-1 pe-0">
              <div className="text-center">
                <Link className="backBtn" to="/">
                  <img className="me-2" src={leftright} alt="Left Arrow" />
                  Back
                </Link>
              </div>
            </div>

            <div className="col-11">
              <div className="brightBg">
                <div className="row">
                  <div className="col-6">
                    <div className="imgLogin login_bg d-flex flex-column justify-content-between align-items-center">
                      <p>Welcome back; we missed you.</p>
                      <div className="text-center">
                        <span className="mb-2 d-block">
                          Random facts since you were gone
                        </span>
                        <div className="addedWall">
                          <span style={{ color: "#FFF" }}>
                            1348 wallpapers were added
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <h1>THE WALLPAPER SOCIETY</h1>
                      <div className="authtab text-center mx-auto">
                        <button className="tabInner tabActive">Sign In</button>
                        <button className="tabInner">
                          <Link className="text-dark" to="/register">
                            Sign Up
                          </Link>
                        </button>
                      </div>
                      <form onSubmit={handleLogin} className="mb-5">
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
                        <div className="text-center mt-4">
                          <button type="submit" className="darkBtn mb-2">
                            {/* <Link className="text-white" to="/login"> */}
                            Sign In
                            {/* </Link> */}
                          </button>
                          <Link
                            to="/forgetpassword"
                            className="d-block"
                            style={{ color: "#373737", fontSize: "10px" }}
                          >
                            Can’t login
                          </Link>
                        </div>
                      </form>
                      <div className="socialBtn d-flex flex-column justify-content-center align-items-center gap-2">
                        <button className="w-100" style={{ background: "#1877F2" }}>
                          <img src={fbsignin} alt="Facebook" />
                          Sign In with Facebook
                        </button>
                        <button
                          className="w-100"
                          style={{ background: "#FFF", color: "#CECECE" }}
                        >
                          <img src={googlesignIn} alt="Google" />
                          Sign In with Google
                        </button>
                        <button className="w-100" style={{ background: "#000" }}>
                          <img src={applesignIn} alt="Apple" />
                          Sign In with Apple
                        </button>
                      </div>
                      <div className="community d-flex justify-content-center gap-4 align-items-center mt-5">
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
