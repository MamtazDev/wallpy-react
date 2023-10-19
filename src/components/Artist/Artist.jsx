import React from "react";
import img1 from "../../assets/artist.png";
import img2 from "../../assets/artist2.png";
import verified from "../../assets/Verified.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import behance from "../../assets/behance.png";
import dribble from "../../assets/dribble.png";
import "./Artist.css";
import { Link } from "react-router-dom";
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
                    <Link to="#">
                      <img src={twitter} alt="Twitter" />
                    </Link>
                    <Link to="#">
                      <img src={behance} alt="Behance" />
                    </Link>
                    <Link to="#">
                      <img src={dribble} alt="Dribble" />
                    </Link>
                    <Link to="#">
                      <img src={instagram} alt="Instragram" />
                    </Link>
                  </div>
                </div>
                <Link class="viewProfile" to="#">
                  View Profile
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Artist;
