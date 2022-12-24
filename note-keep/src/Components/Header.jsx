import React from "react";
import logo from './Images/logo.png';
function Header() {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo"  width="70" height="50" />
        <input placeholder="Search" className="searchbar"/>
      </div>
     
    </>
  );
}

export default Header;
