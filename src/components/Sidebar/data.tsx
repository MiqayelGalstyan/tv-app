import HomeIcon from "../../assets/icons/Home.png";
import MoviesIcon from "../../assets/icons/movies.png";
import GenresIcon from "../../assets/icons/genres.png";
import TVShowsIcon from "../../assets/icons/tv-shows.png";
import WatchLater from "../../assets/icons/watch-later.png";

export const menuItemsData = [
  {
    id: 1,
    icon: HomeIcon,
    label: "Home",
    url: "/",
  },
  {
    id: 2,
    icon: TVShowsIcon,
    label: "TV Shows",
    url: "/tv-shows",
  },
  {
    id: 3,
    icon: MoviesIcon,
    label: "Movies",
    url: "/movies",
  },
  {
    id: 4,
    icon: GenresIcon,
    label: 'Genres',
    url: "/genres",
  },
  {
    id: 5,
    icon: WatchLater,
    label: "Watch Later",
    url: "/watch-later",
  },
];
