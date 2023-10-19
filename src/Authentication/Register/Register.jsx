import React, { useEffect, useState } from "react";
import leftright from "../../assets/left_light.png";
import "./Register.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const initialFormData = {
    username: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [users, setUsers] = useState([]);

  // Function to handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { ...formData };
    setUsers([...users, user]);
    setFormData(initialFormData);
    // Swal.fire("Registered successfully");
  };
  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users"));
    if (savedUsers) {
      setUsers(savedUsers);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

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
                        <form
                          onSubmit={handleSubmit}
                          style={{ marginBottom: "150px" }}
                        >
                          <label for="name">Username</label>

                          <input
                            className="mb-3"
                            type="text"
                            name="username"
                            id="name"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                          />
                          <label for="email">Email</label>
                          <input
                            className="mb-3"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="wallpapers@thewallpapersociety.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                          <label for="password">Password</label>
                          <input
                            className=""
                            type="password"
                            name="password"
                            id="password"
                            placeholder="*****************"
                            value={formData.password}
                            onChange={handleChange}
                            required
                          />
                          <div class="text-center mt-4">
                            <button type="submit" class="darkBtn mb-2">
                              Sign Up
                            </button>
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
