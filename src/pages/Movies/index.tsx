import useFilteredDataHook from "../../hooks/useFilteredDataHook";
import TrendingNow from "../../components/TrendingNow/TrendingNow";
import MainFeatured from "../../components/MainFeatured";

const Movies = (): JSX.Element => {
  const list = useFilteredDataHook("Movie");

  return (
    <>
      <MainFeatured />
      <TrendingNow list={list} />
    </>
  );
};

export default Movies;
