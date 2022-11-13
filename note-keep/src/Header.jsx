import React from "react";
import logo from './Images/logo.png';
function Header() {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo"  width="70" height="50" />
      </div>
      <h1>
        Notes 
      </h1>
    </>
  );
}

export default Header;
