import React, { useEffect, useRef } from "react";
import { scrollToTop } from "./utils/utility";
import { ToastContainer } from "react-toastify";
import { Landing } from "./components/landing";
import { Navbar } from "./base-component/navbar";
import { Footer } from "./base-component/footer";
import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  const sectionRefs = {
    Home: useRef(null),
    Services: useRef(null),
    Reviews: useRef(null),
    "Our Team": useRef(null),
    "About Us": useRef(null),
  };

  const handleNavClick = (section) => {
    const ref = sectionRefs[section];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar onNavClick={handleNavClick} />
      <Routes>
        <Route path="/" element={<Landing sectionRefs={sectionRefs} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
