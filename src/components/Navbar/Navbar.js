import React from "react";
import "./Navbar.css";

export const Navbar = ({ toggler, currentTheme }) => {
  return (
    <div className="nav">
      <label className="switch">
        <input
          type="checkbox"
          checked={currentTheme === "dark" ? true : false}
          onChange={() =>
            currentTheme === "light" ? toggler("dark") : toggler("light")
          }
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};
