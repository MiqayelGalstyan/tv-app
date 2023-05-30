import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import Genres from "./pages/Genres";

const Router = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/movies", element: <Movies /> },
    { path: "/tv-shows", element: <TVShows /> },
    { path: "/genres", element: <Genres /> },
  ]);
  return routes;
};

export default Router;
