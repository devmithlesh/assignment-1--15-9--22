import React from "react";
import "./Main.css";
function Card({ name, icon, price, symbol }) {
  return (
    <div className="card-box">
      <h2>Name: {name}</h2>
      <div style={{ width: "25%", margin: "5px 0" }}>
        <img src={icon} alt="coin" style={{ width: "100%" }} />
      </div>
      <h4>
        <span className="price">Price:</span> {price}
      </h4>
      <h3>Symbol: {symbol}</h3>
    </div>
  );
}

export default Card;
