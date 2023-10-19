import React from "react";
import "./Trending.css";
import img1 from "../../assets/trending.png";
import img2 from "../../assets/trending2.png";
import img3 from "../../assets/trending3.png";
import img4 from "../../assets/trending4.png";
import img5 from "../../assets/trending2.png";
import img6 from "../../assets/trending4.png";
import img7 from "../../assets/trending.png";
import img8 from "../../assets/trending3.png";
const imageData = [
  { src: img1, alt: "Image 1" },
  { src: img2, alt: "Image 2" },
  { src: img3, alt: "Image 3" },
  { src: img4, alt: "Image 4" },
  { src: img5, alt: "Image 5" },
  { src: img6, alt: "Image 6" },
  { src: img7, alt: "Image 7" },
  { src: img8, alt: "Image 8" },
];
const Trending = () => {
  return (
    <>
      <div class="container">
        <div class="trending all_mb">
          <div class="trendingHeader d-flex flex-wrap justify-content-start align-items-center mb-3">
            <div class="allBtn btnCustom">
              <button class="allBtnActive">
                <img src="./assets/fire.png" alt="Trending" />
                Trending
              </button>
              <button>
                <img src="./assets/chart.png" alt="Upcoming" />
                Upcoming
              </button>
            </div>
            <div class="allBtn">
              <button class="allBtnActive">All</button>
              <button>Illustration</button>
              <button>AI</button>
              <button>Photography</button>
            </div>
          </div>
          <div class="trendingInner mb-4">
            <div class="row gy-4">
              {imageData.map((image, index) => (
                <div key={index} className="col-12 col-md-3">
                  <div className="tredImg">
                    <a href="wallpaper.html">
                      <img
                        className="img-fluid"
                        src={image.src}
                        alt={image.alt}
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button class="moreBtn">More Wallpapers</button>
        </div>
      </div>
    </>
  );
};

export default Trending;
