import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";

const AppRoutes = () => {
   return(
       <BrowserRouter>
           <Routes>
               <Route path="/" element={<Home />} exact />
               <Route path="/about" element={<About />} />
           </Routes>
       </BrowserRouter>
   )
}

export default AppRoutes;