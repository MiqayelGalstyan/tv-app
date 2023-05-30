import useFilteredDataHook from "../../hooks/useFilteredDataHook";
import TrendingNow from "../../components/TrendingNow/TrendingNow";
import MainFeatured from "../../components/MainFeatured";

const Genres = (): JSX.Element => {
  const list = useFilteredDataHook("Genres");

  return (
    <>
      <MainFeatured />
      <TrendingNow list={list} />
    </>
  );
};

export default Genres;
