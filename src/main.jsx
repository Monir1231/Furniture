import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { createBrowserRouter, RouterProvider } from "react-router";
import Hero from "./page/Home/Hero.jsx";
import Home from "./page/Home/Home.jsx";
import Shop from "./page/Shop/Shop.jsx";
import About from "./page/about/About.jsx";
import Contact from "./page/Contact/Contact.jsx";
import 'sweetalert2/dist/sweetalert2.min.css';




let router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/shop",
        element:<Shop/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>
);
