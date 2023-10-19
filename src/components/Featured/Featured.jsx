import React from "react";
import "./Featured.css";
import img1 from "../../assets/feature.png";
import img2 from "../../assets/feature2.png";
import img3 from "../../assets/feature3.png";

const featureData = [
  {
    src: img1,
    alt: "image 1",
  },
  {
    src: img2,
    alt: "image 2",
  },
  {
    src: img3,
    alt: "image 3",
  },
];

const Featured = () => {
  return (
    <>
      <div class="bgShadowBottom">
        <div class="container">
          <div class="feature all_mb">
            <h2 class="mb-4">Featured Wallpapers</h2>
            <div class="row gy-4">
              {featureData.map((image) => (
                <div class="col-12 col-md-6 col-lg-4">
                  <div class="tredImg">
                    <a href="/">
                      <img class="img-fluid w-100" src={image.src} alt={image.alt} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
