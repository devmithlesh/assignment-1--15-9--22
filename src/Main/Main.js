import React, { useEffect, useState } from "react";
import Axios from "axios";
import Card from "./Card";
import "./Main.css";
function Main() {
  const [lidtOfCoins, setListOfCoins] = useState([]);
  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=24").then(
      (response) => {
        //  console.log(Response.data);
        setListOfCoins(response.data.coins);
      }
    );
  }, []);

  return (
    <>
      <div className="container">
        <div className="div-box">
          {lidtOfCoins.map((coin) => {
            return (
              <Card
                name={coin.name}
                icon={coin.icon}
                price={coin.price}
                symbol={coin.symbol}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Main;
