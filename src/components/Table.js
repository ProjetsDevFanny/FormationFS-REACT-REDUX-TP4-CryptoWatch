import React, { useState } from "react";
import "../styles/components/_table.scss";
import TableLine from "./TableLine";

const Table = ({ coinsData }) => {
  // console.log(coinsData);

  const [rangeNumber, setRangeNumber] = useState(100);
  const [orderBy, setOrderBy] = useState("price"); // nom du tri que l'on souhaite faire

  // Fonction pour gérer le changement de la valeur du range
  const handleRangeChange = (e) => {
    setRangeNumber(e.target.value);
  };

  const tableHeader = [
    "Prix",
    "MarketCap",
    "Volume",
    "1h",
    "1j",
    "1s",
    "1m",
    "6m",
    "1a",
    "ATH",
  ];

  return (
    <div className="table-container">
      <ul className="table-header">
        <div className="range-container">
          <span>
            Top{" "}
            <input
              type="text"
              value={rangeNumber}
              onChange={handleRangeChange}
            />{" "}
          </span>
          <input
            type="range"
            name="range"
            min="1"
            max="250"
            value={rangeNumber}
            onChange={handleRangeChange}
          />
        </div>
        {tableHeader.map((el) => (
          <li key={el}>
            <input
              type="radio"
              name="header-el"
              id={el}
              defaultChecked={
                el === orderBy || el === orderBy + "reverse" ? true : false
              }
              onClick={() => {
                if (orderBy === el) {
                  setOrderBy(el + "reverse");
                } else {
                  setOrderBy(el);
                }
              }}
            />
            <label htmlFor={el}>{el}</label>
          </li>
        ))}
      </ul>
      {coinsData
        ? coinsData
            .slice(0, rangeNumber)
            .map((coin, index) => (
              <TableLine key={coin.id || index} coin={coin} index={index} />
            ))
        : null}
    </div>
  );
};

export default Table;
