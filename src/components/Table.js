import React, { useState } from "react";
import "../styles/components/_table.scss";

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
      <div className="table-header">
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
              onChange={() => setOrderBy(el)}
            />
            <label htmlFor={el}>{el}</label>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Table;
