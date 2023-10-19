import React from "react";
import "./StaffPicks.css";
import staff from "../../assets/staff.png";
import staff2 from "../../assets/staff2.png";
import staff3 from "../../assets/staff3.png";
import { Link } from "react-router-dom";

const StaffPicks = () => {
  return (
    <>
      <div class="container all_mb">
        <h2 class="mb-4">
          The <span style={{ color: "#FDF516" }}>WPS</span> Staff Picks
        </h2>
        <div class="row gy-4">
          <div class="col-12 col-md-6">
            <div class="staff" style={{ height: "535px" }}>
              <Link to="#">
                <img
                  class="img-fluid"
                  src={staff}
                  alt="Img"
                  style={{ height: "535px" }}
                />
              </Link>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="d-flex flex-column gap-4">
              <div class="staff">
                <Link to="#">
                  <img
                    class="img-fluid w-100"
                    src={staff2}
                    alt="Img"
                    style={{ height: "253px" }}
                  />
                </Link>
              </div>
              <div class="staff">
                <Link to="#">
                  <img
                    class="img-fluid w-100"
                    src={staff3}
                    alt="Img"
                    style={{ height: "253px" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffPicks;