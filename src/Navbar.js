import React, { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [show, setshow] = useState(true);
  const mystyle = {
    color: "white",
    padding: "10px",
    fontFamily: "Arial",
    textDecoration: "none",
  };
  function showme() {
    setshow(!show);
  }
  return (
    <>
      <nav
        style={{
          width: "100%",
          background: "#000",
          opacity: "95%",
          padding: "20px 0",
          position: "absolute",
          top: "0",
          left: "0",
        }}
      >
        <div style={{ margin: "0 35px" }}>
          <Link to="/" style={mystyle}>
            Home
          </Link>
          {show ? (
            <Link to="/login" style={mystyle} onClick={showme}>
              Login
            </Link>
          ) : (
            <Link to="/logout" style={mystyle} className="logout">
              Logout
            </Link>
          )}
          <Link to="/signup" style={mystyle}>
            Sign up
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
