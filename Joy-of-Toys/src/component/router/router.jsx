import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Home/Home";
import Login from "../Login/Login";
import ErrorPage from "../ErrorPage";
import SignUp from "../SignUp/SignUp";

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
          path: "/signup",
          element: <SignUp />,
        },
        
      ],
    },
  ]);

  export default router;