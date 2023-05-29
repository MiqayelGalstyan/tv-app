import React from "react";
import TrendingNow from "../../components/TrendingNow/TrendingNow";
import MainFeatured from "../../components/MainFeatured";

const Home = (): JSX.Element => {
  return (
    <>
      <MainFeatured />
      <TrendingNow />
    </>
  );
};

export default Home;
