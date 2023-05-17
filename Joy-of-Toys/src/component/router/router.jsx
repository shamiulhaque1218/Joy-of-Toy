import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import ErrorPage from "../ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App /> ,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/logout",
          element: <Logout />,
        },
        
      ],
    },
  ]);

  export default router;