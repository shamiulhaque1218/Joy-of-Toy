// https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-shamiulhaque1218

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './component/Router/Router';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
