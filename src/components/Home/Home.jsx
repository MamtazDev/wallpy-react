import React from "react";
import Trending from "../Trending/Trending";
import Featured from "../Featured/Featured";
import Artist from "../Artist/Artist";

const Home = () => {
  return (
    <>
      <Trending />
      <Featured />
      <Artist />
    </>
  );
};

export default Home;
