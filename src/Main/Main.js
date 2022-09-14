import React, { useEffect, useState } from "react";
import Axios from "axios";
import Card from "./Card";
import "./Main.css";
function Main() {
  const [listOfCoins, setListOfCoins] = useState([]);
  //search for usestate
  const [searchWord, setSearchWord] = useState("");
  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        //  console.log(Response.data);
        setListOfCoins(response.data.coins);
      }
    );
  }, []);
  //search coins...
  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <>
      <div className="container">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search Bitcoine"
            className="search-box-i"
            onChange={(event) => {
              setSearchWord(event.target.value);
            }}
          />
        </div>
        <div className="div-box">
          {filteredCoins.map((coin) => {
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
