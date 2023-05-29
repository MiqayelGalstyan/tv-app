import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

const Router = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/movies", element: <Movies /> },
  ]);
  return routes;
};

export default Router;
