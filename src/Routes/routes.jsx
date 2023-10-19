import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/Home/Home";
import Register from "../Authentication/Register/Register";
import Login from "../Authentication/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
