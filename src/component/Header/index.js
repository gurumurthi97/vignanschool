import React from "react";
import Drawer from "./Drawer";
import "./style.css";
function index() {
  return (
    <div className="navbar">
      <h1 className="heading">
        Vignan School<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links-flex">
        <a href="/" className="links">
          <p>Home</p>
        </a>
        <a href="/dashboard" className="links">
          <p>Dashboard</p>
        </a>
        <a href="/gallery" className="links">
          <p>Gallery</p>
        </a>
        {/* <a href="/footer" className="links">
          <p>Footer</p>
        </a> */}
      </div>
      <div className="menu-div">
        <Drawer />
      </div>
    </div>
  );
}

export default index;
