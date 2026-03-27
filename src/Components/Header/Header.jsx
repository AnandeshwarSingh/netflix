import React from "react";
import "./Header.scss";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";

const Header = () => {
  console.log(logo);
  return (
    <nav className="header">
      <img src={logo} alt="Netflix Logo" className="logo" />

      <div>
        <Link to="/TvShows">TV Shows</Link>
        <Link to="/TvShows">TV Shows</Link>
        <Link to="/TvShows">TV Shows</Link>
        <Link to="/TvShows">TV Shows</Link>
      </div>

      <ImSearch />
    </nav>
  );
};

export default Header;
