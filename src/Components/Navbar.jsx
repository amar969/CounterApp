import React from "react";

export const Navbar = (props) => {
  return (
    <>
      <div id="navbar-container">
        <h1> {props.title} </h1>
        <div id="navbar-items">
        <p> Home </p>
        <p> About Us </p>
        </div>
        
      </div>
    </>
  );
};
