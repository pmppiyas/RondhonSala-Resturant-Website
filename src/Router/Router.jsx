import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/Our Menu/MenuPage";
import Order from "../Pages/Our Menu/Order/Order/Order";
import Login from "../Pages/Auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/our-menu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "order",
        element: <Order></Order>,
      },
      {
        path: "order/:categorys",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
