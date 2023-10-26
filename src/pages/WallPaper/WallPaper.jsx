import React from "react";
import "./Wallpaper.css";
import profile from "../../assets/profile.png";
import logo from "../../assets/logo.png";
import Verified from "../../assets/Verified.png";
import twitter from "../../assets/twitter.png";
import behance from "../../assets/behance.png";
import dribble from "../../assets/dribble.png";
import instagram from "../../assets/instagram.png";
import left_light from "../../assets/left_light.png";
import filter_alt from "../../assets/filter_alt.png";
import photo_library from "../../assets/photo_library.png";
import likedgray from "../../assets/likedgray.png";
import wallpaper from "../../assets/wallpaper.png";
import wallpaper1 from "../../assets/wallpaper1.png";
import wallpaper2 from "../../assets/wallpaper2.png";
import Moon from "../../assets/Moon.png";
import downArrow from "../../assets/downArrow.png";
import arrow_down_light from "../../assets/arrow_down_light.png";
import library_add from "../../assets/library_add.png";
// import downArrow from '../../assets/downArrow.png';
const WallPaper = () => {
  return (
    <>
      <div class="bgShadowTop">
        <header>
          <nav class="navbar navbar-expand-lg">
            <div class="container custom_Container">
              <a class="navbar-brand" href="index.html">
                <img src={logo} alt="Logo" />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon">
                  <i class="fa fa-bars"></i>
                </span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
                  <li class="nav-item">
                    <form class="d-flex">
                      <div class="searchNav" style={{ maxWidth: "348px" }}>
                        <input
                          class="w-100"
                          type="search"
                          placeholder="Find your next wallpaper..."
                        />
                      </div>
                    </form>
                  </li>
                </ul>
                <div class="text-center">
                  <a class="backBtn" href="index.html">
                    <img class="me-2" src={left_light} alt="Left Arrow" />
                    Back
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <section>
          <div class="container custom_Container">
            <div class="d-flex justify-content-center align-items-start gap-2 all_mb">
              <div class="sideBar fontBak h-100">
                <p class="text-center mb-3">Posted by</p>
                <div class="d-flex justify-content-center align-items-center gap-5 mb-4">
                  <div
                    class="text-center"
                    style={{ height: "75px", width: "75px" }}
                  >
                    <img class="sideImgPro" src={profile} alt="Profile Image" />
                  </div>
                  <div class="d-flex flex-column justify-content-center align-items-center gap-2">
                    <h3>
                      krs
                      <img src={Verified} alt="Verified" />
                    </h3>
                    <div class="d-flex justify-content-center gap-3 align-items-center mb-4">
                      <a href="#">
                        <img src={twitter} alt="Twitter" />
                      </a>
                      <a href="#">
                        <img src={behance} alt="Behance" />
                      </a>
                      <a href="#">
                        <img src={dribble} alt="Dribble" />
                      </a>
                      <a href="#">
                        <img src={instagram} alt="Instragram" />
                      </a>
                    </div>
                    <a
                      class="viewProfile"
                      href="#"
                      style={{ fontSize: "10px" }}
                    >
                      View Profile
                    </a>
                  </div>
                </div>
                <hr />

                <div class="d-flex flex-column align-items-center gap-1 mb-3">
                  <p style={{ color: "#ccc" }}>Dimensions</p>
                  <p>3840 x 2160</p>
                  <div>
                    <p style={{ color: "#ccc", fontSize: "12px" }}>
                      Size Configuration
                      <img src={filter_alt} alt="img" />
                    </p>
                  </div>
                </div>

                <div class="mb-3">
                  <p class="text-center mb-2" style={{ color: "#ccc" }}>
                    Tag
                  </p>
                  <p
                    class="text-center"
                    style={{ color: "#FDF516", fontSize: "12px" }}
                  >
                    SFW
                  </p>
                  <div class="tag">
                    <span>#cod</span>
                    <span>#callofduty</span>
                    <span>#ghost</span>
                    <span> #gaming</span>
                    <span> #wallpaper</span>
                    <span>#illustration</span>
                    <span>#shooter</span>
                    <span>#mw2</span>
                  </div>
                </div>

                <div class="mb-3">
                  <p class="text-center mb-2" style={{ color: "#ccc" }}>
                    Statistics & Information
                  </p>
                  <div class="info d-flex justify-content-between gap-4">
                    <div>
                      <p>
                        Views: <span>8947</span>
                      </p>
                      <p>
                        Category:: <span>Gaming</span>
                      </p>
                    </div>
                    <div>
                      <p>
                        Favorites:: <span>1489</span>
                      </p>
                      <p>
                        Size:: <span>12.2MB</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="mb-4">
                  <p class="text-center mb-3" style={{ color: "#ccc" }}>
                    Credits
                  </p>
                  <div class="info">
                    <p>Source:</p>
                    <p>Original Author:</p>
                  </div>
                </div>

                <div class="text-center mb-4">
                  <button class="downLoadBtn">
                    Download
                    <img src={arrow_down_light} alt="" />
                  </button>
                </div>

                <div class="ownerShip d-flex flex-column gap-4">
                  <p
                    class="text-center"
                    style={{ color: "#5A5A5A", fontSize: "12px" }}
                  >
                    Ownership of all images belongs to their respective original
                    owners & illustrators.
                  </p>
                  <div class="listBtn d-flex justify-content-center align-items-center gap-3">
                    <button class="text-white">Claim Listing</button>
                    <button class="text-white">Remove Listing</button>
                  </div>

                  <div class="d-flex justify-content-center align-items-center gap-3">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms and Conditions</a>
                  </div>
                </div>
              </div>
              <div class="wallpaper fontBak">
                {/* <img class="img-fluid" src={wallpaper} alt="WallPaper" /> */}
                <div class="btnPosition d-flex justify-content-end gap-3">
                  <div class="addLibrary">
                    <button>
                      <span>
                        <img src={library_add} alt="Add Library" />
                      </span>
                    </button>
                    <div class="libraryOption">
                      <div class="searchWallpaper mb-4">
                        <input
                          class="fontBak w-100"
                          type="search"
                          placeholder="Search Collections"
                        />
                      </div>
                      <div class="d-flex flex-column justify-content-start align-items-start gap-1">
                        <button class="fontBak">
                          <img
                            class="img-fluid"
                            src={photo_library}
                            alt="img"
                          />
                          Call of Duty
                        </button>
                        <hr class="w-100" />
                        <button class="fontBak">
                          <img src={photo_library} alt="img" />
                          World of Warcraft
                        </button>
                        <hr class="w-100" />
                        <button class="fontBak">
                          <img src={photo_library} alt="img" />
                          League of Legends
                        </button>
                        <hr class="w-100" />
                        <button class="fontBak">
                          <img src={photo_library} alt="img" />
                          Anime
                        </button>
                        <hr class="w-100" />
                        <button class="fontBak">
                          <img src={photo_library} alt="img" />
                          Landscapes
                        </button>
                        <hr class="w-100" />
                      </div>
                    </div>
                  </div>
                  <button class="like">
                    <span>
                      <img src={likedgray} alt="Liked" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div class="bgShadowbottom">
        <section>
          <div class="container custom_Container">
            <h3 class="all_mb">You may also like</h3>
            <div class="row gy-4 mb-4">
              <div class="col-12 col-md-4">
                <div class="tredImg">
                  <a href="#">
                    <img class="img-fluid w-100" src={wallpaper} alt="img" />
                  </a>
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="tredImg">
                  <a href="#">
                    <img class="img-fluid w-100" src={wallpaper1} alt="img" />
                  </a>
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="tredImg">
                  <a href="#">
                    <img class="img-fluid w-100" src={wallpaper2} alt="img" />
                  </a>
                </div>
              </div>
            </div>
            <span class="d-block text-center">
              <button class="viewProfile" style={{ fontSize: "12px" }}>
                View More
              </button>
            </span>
          </div>
        </section>

        <footer>
          <div class="container">
            <div class="row gy-2">
              <div class="col-12 col-md-6">
                <p>THE WALLPAPER SOCIETY</p>
              </div>
              <div class="col-12 col-md-2">
                <ul>
                  <li>Navigation</li>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Account</a>
                  </li>
                  <li>
                    <a href="#">Favorites</a>
                  </li>
                  <li>
                    <a href="#">Messages</a>
                  </li>
                  <li>
                    <a href="#">Site Map</a>
                  </li>
                </ul>
              </div>
              <div class="col-12 col-md-2">
                <ul>
                  <li>Top Categories</li>
                  <li>
                    <a href="#">Gaming</a>
                  </li>
                  <li>
                    <a href="#">Anime</a>
                  </li>
                  <li>
                    <a href="#">4K</a>
                  </li>
                  <li>
                    <a href="#">Japan</a>
                  </li>
                </ul>
              </div>
              <div class="col-12 col-md-2">
                <ul>
                  <li>The Society</li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Copyright Information</a>
                  </li>
                  <li>
                    <a href="#">Socials</a>
                  </li>
                  <li>
                    <a href="#">Sponsors / Advertisers</a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div class="footerBottom d-flex flex-column flex-md-row justify-content-center align-items-center gap-4">
              <span>© The Wallpapers Society</span>
              <span>
                <a href="#">Community Rules</a>
              </span>
              <span>
                <a href="#">Privacy Policy</a>
              </span>
              <span>
                <a href="#">Terms and Conditions</a>
              </span>
              <div class="themeChangeBtn d-flex justify-content-center align-items-center gap-1">
                <div
                  class="d-flex justify-content-center align-items-center"
                  style={{ gap: "2px" }}
                >
                  <img src={Moon} alt="img" />
                  Dark
                </div>
                <img src={downArrow} alt="img" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default WallPaper;
