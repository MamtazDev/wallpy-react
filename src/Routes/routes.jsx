import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/Home/Home";
import Register from "../Authentication/Register/Register";
import Login from "../Authentication/Login/Login";
import Forgetpassword from "../Authentication/Forgetpassword/Forgetpassword";
import ForgetEmail from "../Authentication/Forgetpassword/ForgetEmail";
import ConfirmationEmail from "../Authentication/Forgetpassword/ConfirmationEmail";

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
  {
    path: "/forgetpassword",
    element: <Forgetpassword />,
  },
  {
    path: "/forgetemail",
    element: <ForgetEmail />,
  },
  {
    path: "/confirmationEmail",
    element: <ConfirmationEmail />,
  },
]);
