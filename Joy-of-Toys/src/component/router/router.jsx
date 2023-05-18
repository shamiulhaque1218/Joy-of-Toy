import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Home/Home";
import Login from "../Login/Login";
import ErrorPage from "../ErrorPage";
import SignUp from "../SignUp/SignUp";
import About from "../About/About";
import Contact from "../About/Contact";

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
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        
      ],
    },
  ]);

  export default router;