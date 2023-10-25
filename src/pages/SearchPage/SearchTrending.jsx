import React from 'react';
import fire from "../../assets/fire.png";
import chart from "../../assets/chart.png";
import desktop_windows from "../../assets/desktop_windows.png";
import devices_other from "../../assets/devices_other.png";
import phone_iphone from "../../assets/phone_iphone.png";
import tablet_mac from "../../assets/tablet_mac.png";
import videogame_asset from "../../assets/videogame_asset.png";
import autorenew from "../../assets/autorenew.png";
const SearchTrending = () => {
    return (
        <div>
            <div className="container search_Container">
            <div className="trendingHeader d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3 mb-3">
              <div className="allBtn btnCustom">
                <button className="allBtnActive">
                  <img src={fire} alt="Trending" />
                  Trending
                </button>
                <button className="">
                  <img src={chart} alt="Upcoming" />
                  Upcoming
                </button>
              </div>
              <div className="allBtn">
                <button className="allBtnActive">All</button>
                <button>Illustration</button>
                <button>AI</button>
                <button>Photography</button>
              </div>
              <div className="allBtn">
                <button id="sfwBtn">SFW</button>
                <button id="riskBtn">RISKY</button>
                <button id="nsfBtn">NSFW</button>
              </div>
              <div className="allBtn">
                <div className="resParent">
                  <button>
                    Resolution
                    <i className="fa fa-caret-down ps-1"></i>
                  </button>
                  <div className="resChild">
                    <div className="d-flex justify-content-center align-items-start gap-3 mb-4">
                      <div className="d-flex flex-column align-items-center gap-2">
                        <p className="text-nowrap">Ultra Wide</p>
                        <button>2560 × 1080</button>
                        <button>3440 × 1440</button>
                        <button>3840 × 1600</button>
                      </div>
                      <div className="d-flex flex-column align-items-center gap-2">
                        <p>16:9</p>
                        <button>1280 × 720</button>
                        <button>1600 × 900</button>
                        <button>1920 × 1080</button>
                        <button>2560 × 1440</button>
                        <button>3840 × 2160</button>
                      </div>
                      <div className="d-flex flex-column align-items-center gap-2">
                        <p>16:10</p>
                        <button>1280 × 800</button>
                        <button>1600 × 1000</button>
                        <button>1920 × 1200</button>
                        <button>2560 × 1600</button>
                        <button>3840 × 2400</button>
                      </div>
                      <div className="d-flex flex-column align-items-center gap-2">
                        <p>4:3</p>
                        <button>1280 × 960</button>
                        <button>1600 × 1200</button>
                        <button>1920 × 1440</button>
                        <button>2560 × 1920</button>
                        <button>3840 × 2880</button>
                      </div>
                      <div className="d-flex flex-column align-items-center gap-2">
                        <p>16:9</p>
                        <button>1280 × 1024</button>
                        <button>1600 × 1280</button>
                        <button>1920 × 1536</button>
                        <button>2560 × 2048</button>
                        <button>3840 × 3072</button>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-white mb-1">Auto Detection</p>
                      <p className="text-white">
                        Your screen resolution is 1920 × 1080.
                      </p>
                    </div>
                    <p className="text-white mb-2">Custom Resolution</p>
                    <form action="">
                      <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
                        <input type="text" name="width" placeholder="Width" />
                        <input type="text" name="height" placeholder="Height" />
                      </div>
                      <button className="searchBtn">Search</button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="allBtn">
                <div className="resParent">
                  <button>
                    Screen Type
                    <i className="fa fa-caret-down ps-1"></i>
                  </button>
                  <div
                    className="resChild lgFont deviceBtn"
                    style={{ maxWidth: "468px" }}
                  >
                    <div className="d-flex flex-wrap align-items-start gap-2">
                      <button>
                        <img
                          className="me-1"
                          src={desktop_windows}
                          alt="Desktop"
                        />
                        Desktop
                      </button>
                      <button>
                        <img className="me-1" src={phone_iphone} alt="Phones" />
                        Phones
                      </button>
                      <button>
                        <img className="me-1" src={tablet_mac} alt="Tablets" />
                        Tablets
                      </button>
                      <button>
                        <img
                          className="me-1"
                          src={videogame_asset}
                          alt="Handhelds"
                        />
                        Handhelds
                      </button>
                      <button>
                        <img className="me-1" src={devices_other} alt="Other" />
                        Other
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="allBtn">
                <div className="resParent">
                  <button className="formSelect">
                    Sort By
                    <i className="fa fa-caret-down ps-1"></i>
                  </button>
                  <div className="resChild">
                    <div className="lgFont d-flex flex-column align-items-center gap-2">
                      <button style={{ background: "transparent" }}>
                        Random
                      </button>
                      <button style={{ background: "transparent" }}>
                        Views
                      </button>
                      <button style={{ background: "transparent" }}>
                        Favorites
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="allBtn">
                <div className="resParent">
                  <button>
                    Upload Date
                    <i className="fa fa-caret-down ps-1"></i>
                  </button>
                  <div className="resChild">
                    <div className="lgFont d-flex flex-column align-items-center gap-2">
                      <button style={{ background: "transparent" }}>
                        Today
                      </button>
                      <button style={{ background: "transparent" }}>
                        This week
                      </button>
                      <button style={{ background: "transparent" }}>
                        This Month
                      </button>
                      <button style={{ background: "transparent" }}>
                        This year
                      </button>
                      <button style={{ background: "transparent" }}>
                        All time
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="allBtn">
                <button>
                  Keywords
                  <i className="fa fa-search ms-1"></i>
                </button>
              </div>
              <div className="autorenew">
                <button>
                  <img src={autorenew} alt="Autorenew" />
                </button>
              </div>
            </div>
            <hr className="w-100" />
          </div>
        </div>
    );
};

export default SearchTrending;