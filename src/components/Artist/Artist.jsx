import React from "react";
import img1 from "../../assets/artist.png";
import img2 from "../../assets/artist2.png";
import verified from "../../assets/Verified.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import behance from "../../assets/behance.png";
import dribble from "../../assets/dribble.png";
import './Artist.css'
const artistData = [
  {
    img: img1,
    title: "Diberkato / Ilustrator",
    twitter: twitter,
    instagram: instagram,
    behance: behance,
    dribble: dribble,
  },
  {
    img: img2,
    title: "krs / AI Creations",
    twitter: twitter,
    instagram: instagram,
    behance: behance,
    dribble: dribble,
  },
  {
    img: img1,
    title: "fyween / Ilustrator",
    twitter: twitter,
    instagram: instagram,
    behance: behance,
    dribble: dribble,
  },
  {
    img: img2,
    title: "maDHoney / Ilustrator",
    twitter: twitter,
    instagram: instagram,
    behance: behance,
    dribble: dribble,
  },
  {
    img: img1,
    title: "DanaUlama / Ilustrator",
    twitter: twitter,
    instagram: instagram,
    behance: behance,
    dribble: dribble,
  },
];

const Artist = () => {
  return (
    <>
      =
      <div class="container all_mb">
        <h2 class="mb-4">Featured Artists</h2>
        <div class="artist">
          <div class="d-flex flex-column flex-lg-row justify-content-between align-items-center gap-4">
            {artistData.map((data, index) => (
              <div
                class="d-flex flex-column gap-2 align-items-center"
                key={index}
              >
                <img class="proImg mb-3" src={data.img} alt="Profile" />
                <div class="profileInner">
                  <div class="d-flex justify-content-start gap-1 align-items-center mb-2">
                    <img src={verified} alt="img" />
                    <p>{data.title}</p>
                  </div>
                  <div class="d-flex justify-content-between align-items-center mb-3">
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
                </div>
                <a class="viewProfile" href="#">
                  View Profile
                </a>
              </div>
            ))}
            {/* <div class="d-flex flex-column gap-2 align-items-center">
              <img
                class="proImg mb-3"
                src="./assets/artist.png"
                alt="Profile"
              />
              <div class="profileInner">
                <div class="d-flex justify-content-start gap-1 align-items-center mb-2">
                  <img src="./assets/Verified.png" alt="img" />
                  <p>Diberkato / Ilustrator</p>
                </div>
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <a href="#">
                    <img src="./assets/twitter.png" alt="Twitter" />
                  </a>
                  <a href="#">
                    <img src="./assets/behance.png" alt="Behance" />
                  </a>
                  <a href="#">
                    <img src="./assets/dribble.png" alt="Dribble" />
                  </a>
                  <a href="#">
                    <img src="./assets/instagram.png" alt="Instragram" />
                  </a>
                </div>
              </div>
              <a class="viewProfile" href="#" >
                View Profile
              </a>
            </div>
            <div class="d-flex flex-column gap-2 align-items-center">
              <img
                class="proImg mb-3"
                src="./assets/artist.png"
                alt="Profile"
              />
              <div class="profileInner">
                <div class="d-flex justify-content-start gap-1 align-items-center mb-2">
                  <img src="./assets/Verified.png" alt="img" />
                  <p>Diberkato / Ilustrator</p>
                </div>
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <a href="#">
                    <img src="./assets/twitter.png" alt="Twitter" />
                  </a>
                  <a href="#">
                    <img src="./assets/behance.png" alt="Behance" />
                  </a>
                  <a href="#">
                    <img src="./assets/dribble.png" alt="Dribble" />
                  </a>
                  <a href="#">
                    <img src="./assets/instagram.png" alt="Instragram" />
                  </a>
                </div>
              </div>
              <a class="viewProfile" href="#" >
                View Profile
              </a>
            </div>
            <div class="d-flex flex-column gap-2 align-items-center">
              <img
                class="proImg mb-3"
                src="./assets/artist.png"
                alt="Profile"
              />
              <div class="profileInner">
                <div class="d-flex justify-content-start gap-1 align-items-center mb-2">
                  <img src="./assets/Verified.png" alt="img" />
                  <p>Diberkato / Ilustrator</p>
                </div>
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <a href="#">
                    <img src="./assets/twitter.png" alt="Twitter" />
                  </a>
                  <a href="#">
                    <img src="./assets/behance.png" alt="Behance" />
                  </a>
                  <a href="#">
                    <img src="./assets/dribble.png" alt="Dribble" />
                  </a>
                  <a href="#">
                    <img src="./assets/instagram.png" alt="Instragram" />
                  </a>
                </div>
              </div>
              <a class="viewProfile" href="#" >
                View Profile
              </a>
            </div>
            <div class="d-flex flex-column gap-2 align-items-center">
              <img
                class="proImg mb-3"
                src="./assets/artist.png"
                alt="Profile"
              />
              <div class="profileInner">
                <div class="d-flex justify-content-start gap-1 align-items-center mb-2">
                  <img src="./assets/Verified.png" alt="img" />
                  <p>Diberkato / Ilustrator</p>
                </div>
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <a class="socialLink overflow-hidden" href="#">
                    <img src="./assets/twitter.png" alt="Twitter" />
                  </a>
                  <a href="#">
                    <img src="./assets/behance.png" alt="Behance" />
                  </a>
                  <a href="#">
                    <img src="./assets/dribble.png" alt="Dribble" />
                  </a>
                  <a href="#">
                    <img src="./assets/instagram.png" alt="Instragram" />
                  </a>
                </div>
              </div>
              <a class="viewProfile" href="#" >
                View Profile
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Artist;
