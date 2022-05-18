import Login from "./pages/login/Login";
import { useRoutes } from "react-router-dom";

const routesList = [
  {
    path: "/login",
    name: "login",
    element: <Login />,
  },
];

export default () => {
  const routes = useRoutes(routesList);

  return routes;
};
