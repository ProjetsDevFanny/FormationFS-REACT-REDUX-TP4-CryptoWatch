import React, { useState } from "react";
import PercentChange from "./PercentChange";
import StarIcon from "./StarIcon";
import CoinChart from "./CoinChart";

const TableLine = ({ coin, index }) => {
  const [showChart, setShowChart] = useState(false);

  // Formater le prix en fonction de la longueur du nombre
  // Si le nombre est supérieur à 4 chiffres, on affiche le prix en us-US
  // Sinon, on affiche le prix en fr-FR
  const priceFormater = (num) => {
    if (Math.round(num).toString().length > 4) {
      return new Intl.NumberFormat("us-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 7,
      }).format(num);
    } else {
      return num.toLocaleString("fr-FR", {
        maximumFractionDigits: 2,
      });
    }
  };
  // ======= 2 méthodes de formatage pour le market cap ===========

  // Méthode 1: mktCap: avec split et slice = bancale
  // Formater le market cap en fonction de la longueur du nombre
  // const marketCapFormater = (num) => {
  //   let newNum = String(num).split("").slice(0, -6);
  //   return Number(newNum.join(""));
  // };

  // Méthode 2: mktCap: avec la division directe par 1_000_000
  const numFormater = (num) => {
    return (num / 1000000).toLocaleString("fr-FR", {
      maximumFractionDigits: 0,
    });
  };

  return (
    <div className="table-line">
      <div className="infos-container">
        <StarIcon coinId={coin.id} />
        <p>{index + 1}</p>
        <div className="img">
          <img src={coin.image} height={20} alt={coin.name} />
        </div>
        <div className="infos">
          <div
            className="chart-img"
            onMouseEnter={() => setShowChart(true)}
            onMouseLeave={() => setShowChart(false)}
          >
            <img src="./assets/chart-icon.svg" alt="chart-icon" />
            {showChart && (
              <div className="chart-container" id={coin.name}>
                <CoinChart coinId={coin.id} coinName={coin.name} />
              </div>
            )}
          </div>
          <h4>{coin.name}</h4>
          <span>- {coin.symbol.toUpperCase()}</span>
          <a
            target="_blank"
            href={`https://www.coingecko.com/fr/pi%C3%A8ces/${coin.id}`}
          >
            <img src="./assets/info-icon.svg" alt="info-icon" />
          </a>
        </div>
      </div>
      <p>{priceFormater(coin.current_price)} $</p>
      {/* mktCap: méthode 1: avec split et slice = bancale */}
      {/* <p className="mktcap">
        {marketCapFormater(coin.market_cap).toLocaleString("fr-FR", {
          maximumFractionDigits: 0,
        })}{" "}
        M$
      </p> */}
      {/* mktCap: méthode 2: avec la division directe par 1_000_000 */}
      <p>{numFormater(coin.market_cap)} M$</p>
      <p className="volume">{numFormater(coin.total_volume)} M$</p>
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

      {coin.ath_change_percentage > -3 ? (
        <p className="ATH"> ATH ! </p>
      ) : (
        <PercentChange percent={coin.ath_change_percentage} />
      )}
    </div>
  );
};

export default TableLine;
