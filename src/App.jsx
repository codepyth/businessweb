import React, { useEffect } from "react";
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

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
