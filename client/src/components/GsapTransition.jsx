import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SellerDashboard from "../pages/SellerDashboard";
import BuyerDashboard from "../pages/BuyerDashboard";
import Signup from "../pages/Signup";
import About from "../pages/About";
import Contact from "../pages/Contact";
import gsap from "gsap";
import { Toaster } from "react-hot-toast";

const GsapTransition = () => {
  const nodeRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (nodeRef.current) {
      gsap.fromTo(nodeRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
    }
  }, [location]);

  return (
    <div ref={nodeRef}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="sellerdashboard" element={<SellerDashboard />} />
        <Route path="buyerdashboard" element={<BuyerDashboard />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default GsapTransition;
