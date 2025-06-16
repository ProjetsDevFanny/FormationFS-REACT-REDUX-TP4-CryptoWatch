import React from "react";
import "../styles/components/_header.scss";
import TableFilters from "./TableFilters";
import axios from "axios";
import { useState, useEffect } from "react";
import PercentChange from "./PercentChange";

const HeaderInfos = () => {
  const [headerData, setHeaderData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/global")
      .then((res) => {
        console.log(res.data.data);
        console.log(typeof res.data?.data?.markets, res.data?.data?.markets);
        setHeaderData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="header-container">
      <ul className="title">
        <li>
          <h1>
            <img src="/assets/logo.png" alt="logo" />
            Watch Tower
          </h1>
        </li>
        <li>
          Crypto-monnaies :{" "}
          {headerData?.active_cryptocurrencies?.toLocaleString("fr-FR") ??
            "..."}
        </li>
        <li>
          Marchés: {headerData?.markets?.toLocaleString("fr-FR") ?? "..."}
        </li>
      </ul>
      <ul className="infos-mkt">
        <li className="global-mkt">
          Global Marquet Cap :{" "}
          <PercentChange
            percent={headerData?.market_cap_change_percentage_24h_usd ?? 0}
          />
        </li>
        {/*  = Evolution du marché dans la journée */}
        <li>
          BTC dominance :{" "}
          {headerData?.market_cap_percentage?.btc?.toFixed(1)} %
        </li>
        <li>
          ETH dominance :{" "}
          {headerData?.market_cap_percentage?.eth?.toFixed(1)} %
        </li>
      </ul>
      <TableFilters />
    </div>
  );
};

export default HeaderInfos;
