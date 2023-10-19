import React from "react";
import Trending from "../Trending/Trending";
import Featured from "../Featured/Featured";
import Artist from "../Artist/Artist";
import StaffPicks from "./../StaffPicks/StaffPicks";
import Sponsors from "../Sponsors/Sponsors";

const Home = () => {
  return (
    <>
      <Trending />
      <Featured />
      <Artist />
      <StaffPicks />
      <Sponsors />
    </>
  );
};

export default Home;
