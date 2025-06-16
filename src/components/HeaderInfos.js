import React from "react";
import "../styles/components/_header.scss";
import TableFilters from "./TableFilters";




const HeaderInfos = () => {
  return (
    <div className="header-container">
      <ul className="title">
        <li>
          <h1>
            <img src="/assets/logo.png" alt="logo" />
            Watch Tower
          </h1>
        </li>
        <li>Crypto-monnaies :</li>
        <li>Marchés:</li>
      </ul>
      <ul className="infos-mkt">
        <li className="global-mkt">Global Marquet Cap : </li>
        <li>BTC dominance : </li>
        <li>ETH dominance : </li>
      </ul>
      <TableFilters />
    </div>
  );
};

export default HeaderInfos;
