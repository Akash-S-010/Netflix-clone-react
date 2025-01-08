import React from "react";
import Home from "./pages/Homepage/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
