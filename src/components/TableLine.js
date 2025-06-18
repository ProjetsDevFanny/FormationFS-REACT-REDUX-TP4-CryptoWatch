import React from "react";
import PercentChange from "./PercentChange";

const TableLine = ({ coin, index }) => {
  return (
    <div className="table-line">
      <div className="infos-container">
        <span>*</span>
        <p>{index + 1}</p>
        <div className="img">
          <img src={coin.image} height={20} alt={coin.name} />
        </div>
        <div className="infos">
          <div className="chart-img">
            <img src="./assets/chart-icon.svg" alt="chart-icon" />
          </div>
          <h4>{coin.name}</h4>
          <span>- {coin.symbol.toUpperCase()}</span>
          <a
            target="_blank"
            href={`https://www.coingecko.com/fr/pi%C3%A8ces/${coin.name
              .toLowerCase()
              .replace(/ /g, "-")}`}
          >
            <img src="./assets/info-icon.svg" alt="info-icon" />
          </a>
        </div>
      </div>
      <p>{coin.current_price.toFixed(2)} $</p>
      <p>
        {(coin.market_cap / 1000000).toLocaleString("fr-FR", {
          maximumFractionDigits: 1,
        })}{" "}
        Md$
      </p>
      <p>
        {(coin.total_volume / 1000000).toLocaleString("fr-FR", {
          maximumFractionDigits: 1,
        })}{" "}
        Md$
      </p>
      <p>
        <PercentChange percent={coin.price_change_percentage_1h_in_currency} />
      </p>
      <p>
        <PercentChange percent={coin.price_change_percentage_24h_in_currency} />
      </p>
      <p>
        <PercentChange percent={coin.price_change_percentage_7d_in_currency} />
      </p>
      <p>
        <PercentChange percent={coin.price_change_percentage_30d_in_currency} />
      </p>
      <p>
        <PercentChange
          percent={coin.price_change_percentage_200d_in_currency}
        />
      </p>
      <p>
        <PercentChange percent={coin.price_change_percentage_1y_in_currency} />
      </p>
      <p>
        <PercentChange percent={coin.ath_change_percentage} />
      </p>
    </div>
  );
};

export default TableLine;
