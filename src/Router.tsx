import {
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { Dashboard } from "./Screens/Dashboard";
import { Login } from "./Screens/Login";
import { Register } from "./Screens/Register";
const user = null // {name:"patrick"}

const loader = async () => {
  if (!user) {
    throw redirect("/");
  }
  return {
    user
  }
}

const loaderLogin = async () => {
  if (user) {
    throw redirect("/dashboard");
  }
  return {
    user
  }
}


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    loader: loaderLogin,
  },
  {
    path: "/register",
    element: <Register />,
    loader: loaderLogin,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    loader: loader,
  },
]);