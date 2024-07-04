// src/Router.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Pages/Home";
import Header from "./components/Static/Header";
import Massegs from "./components/Massegs";
import Experience from "./components/Experience";
import Footer from "./components/Static/Footer";
import Committee from './components/Pages/Commitee';

const AppRouter = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/comm" element={<Committee />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/messages" element={<Massegs />} />
    </Routes>
    <Footer />
  </Router>
);

export default AppRouter;
