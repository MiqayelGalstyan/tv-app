import useFilteredDataHook from "../../hooks/useFilteredDataHook";
import TrendingNow from "../../components/TrendingNow/TrendingNow";
import MainFeatured from "../../components/MainFeatured";

const TVShows = (): JSX.Element => {
  const list = useFilteredDataHook("TV Show");

  return (
    <>
      <MainFeatured />
      <TrendingNow list={list} />
    </>
  );
};

export default TVShows;
