import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import ErrorPage from "./pages/ErrorPage";

const Router = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/movies", element: <Movies /> },
    { path: "*", element: <ErrorPage /> },
  ]);
  return routes;
};

export default Router;
