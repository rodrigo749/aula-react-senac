import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Login from "./pages/Login/Login.jsx";

const AppRoutes = () => {
   return(
       <BrowserRouter>
           <Routes>
               <Route path="/" element={<Login/>} exact />
               <Route path="/home" element={<Home/>} />
               <Route path="/about" element={<About />} />
           </Routes>
       </BrowserRouter>
   )
}

export default AppRoutes;