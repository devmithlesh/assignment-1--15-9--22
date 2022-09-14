import React from "react";
import "./Home.css";
import png from "./assets/png.png";
function Home() {
  return (
    <div className="h-div">
      <div className="ha-div">
        <div className="hs-div">
          <h3>HERE IS AN</h3>
          <h1>Example of Bitcoin price</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. vitae
            accusamus ea, vero corrupti suscipit id.
          </p>
          <button>BUY BITCOIN</button>
        </div>
        <div className="img-div">
          <img src={png} alt="bitcoin" />
        </div>
      </div>
    </div>
  );
}

export default Home;
