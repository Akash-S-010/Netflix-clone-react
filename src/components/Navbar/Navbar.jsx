import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile from "../../assets/profile_img.png";
import caret from "../../assets/caret_icon.svg";
import { logOut } from "../../firebase";

function Navbar() {

  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) { // Check if navRef.current is not null
        if (window.scrollY >= 250) {
          navRef.current.classList.add("nav-dark");
        } else {
          navRef.current.classList.remove("nav-dark");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={navRef} className="navbar">
      <div className="logo-section">
        <img src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by languages</li>
        </ul>
      </div>
      <div className="right-section">
        <img src={search_icon} alt="search" className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="bell" className="icons"/>
        <div className="nav-profile">
          <img src={profile} alt="profile" className="profile" />
          <img src={caret} alt="caret" />
          <div className="dropdown">
            <p onClick={() => { logOut(); }}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
