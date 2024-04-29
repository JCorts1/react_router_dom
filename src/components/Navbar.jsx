import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact/Santiago">Contact to Santiago</Link>
        </li>
        <li>
          <Link to="/contact/Jay">Contact to Jay</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
