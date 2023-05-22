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
import AddData from "../AddData/AddData";
import Mydata from "../AddData/Mydata";
import Alltoy from "../AddData/Alltoy";
import Updatetoy from "../AddData/Updatetoy";
import AllToyView from "../AddData/AllToyView";

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
          element: <Blogs> </Blogs> ,
        },
        {
          path: "/mydata",
          element: <Mydata />,
          loader: () => fetch('https://joy-of-toys-server.vercel.app/product'),
        },
        {
          path: "/alltoys",
          element: <Alltoy />,
          loader: () => fetch('https://joy-of-toys-server.vercel.app/product')
        },
        {
          path: "/alltoyview/:id",
          element:<PrivateRoute>  <AllToyView />  </PrivateRoute>,
          loader: ({params}) => fetch(`https://joy-of-toys-server.vercel.app/product/${params.id}`),
        },
        {
          path: "/update/:id",
          element: <Updatetoy />,
          loader: ({params}) => fetch(`https://joy-of-toys-server.vercel.app/product/${params.id}`),
        },
        {
          path: "/addtoy",
          element: <AddData />,
        },
        {
          path: "/details/:id",
          element: <PrivateRoute>  <ViewDetailes />  </PrivateRoute>,
          loader: ({params}) => fetch(`https://joy-of-toys-server.vercel.app/viewtoy/${params.id}`),
  
        },
        
      ],
    },
  ]);

  export default router;