import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Home/Home";
import Login from "../Login/Login";
import ErrorPage from "../ErrorPage";
import SignUp from "../SignUp/SignUp";
import About from "../About/About";
import Contact from "../About/Contact";
import Blogs from "../Blogs/Blogs";
import PrivateRoute from "../PrivateRouter/Privateroute";
import ViewDetailes from "../Home/ViewDetailes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App /> ,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: () => fetch('https://joy-of-toys-server.vercel.app/viewtoy'),
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
          path: "/blogs",
          element: <PrivateRoute> <Blogs> </Blogs> </PrivateRoute>,
        },
        {
          path: "/addtoy",
          element: <Contact />,
        },
        {
          path: "/details/:id",
          element:  <ViewDetailes />,
          loader: ({params}) => fetch(`https://joy-of-toys-server.vercel.app/viewtoy/${params.id}`),
  
        },
        
      ],
    },
  ]);

  export default router;