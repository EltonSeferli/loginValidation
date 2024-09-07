import { useState } from "react";
import Login from "./login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/index.jsx";
import ForPass from "./ForPass/index.jsx";
import Navbar from "./Navbar/index.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login">
            <Route index element={<Login />} />
            <Route path="forgetpass" element={<ForPass />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
