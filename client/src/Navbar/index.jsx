import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <ul>
        <Link to="/login">Login</Link>
      </ul>
    </>
  );
}

export default Navbar;
