import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


import { HugeiconsIcon } from "@hugeicons/react";
import { StarIcon } from "@hugeicons/core-free-icons";

import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";




// App component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter= createBrowserRouter([
  {path: "/",
    element: <AppLayout />
  },
  {
    path: "/about",
    element: <About />
  }
]) 




const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
