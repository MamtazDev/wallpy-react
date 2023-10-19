import React from "react";
import img from "../../assets/sponser.png";
import img2 from "../../assets/sponsor2.png";
import img3 from "../../assets/sponsor3.png";
import img4 from "../../assets/sponsor4.png";
const Sponsors = () => {
  return (
    <>
      <div class="container">
        <h2 class="mb-4">Sponsors</h2>
        <div class="row gy-4">
          <div class="col-12 col-md-6">
            <div class="staff" style={{height:"421px"}}>
              <img
                class="img-fluid"
                src={img}
                alt="Img"
                style={{height:"421px"}}
              />
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="d-flex flex-column gap-4">
              <div class="staff">
                <img
                  class="img-fluid"
                  src={img2}
                  alt="Img"
                   style={{height:"195px"}}
                />
              </div>
              <div class="d-flex justify-content-between gap-4 align-items-center">
                <div class="staff">
                  <img
                    class="img-fluid"
                    src={img3}
                    alt="Img"
                     style={{height:"195px"}}
                  />
                </div>
                <div class="staff">
                  <img
                    class="img-fluid"
                    src={img4}
                    alt="Img"
                     style={{height:"195px"}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
