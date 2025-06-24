import React, { useState, useEffect } from "react";
import { Treemap, Tooltip } from "recharts";
import colors from "../styles/_settings.scss";

const GlobalChart = ({ coinsData }) => {
  // console.log(coinsData);
  const [dataArray, setDataArray] = useState([]);

  // Fonction pour choisir la couleur en fonction du pourcentage de changement
  const colorPicker = (number) => {
    if (number >= 20) {
      return colors.color1;
    } else if (number >= 5) {
      return colors.green2;
    } else if (number >= 0) {
      return colors.green1;
    } else if (number >= -5) {
      return colors.red1;
    } else if (number >= -20) {
      return colors.red2;
    } else {
      return colors.black2;
    }
  };

  // Fonction pour exclure les coins stables
  const excludeCoin = (coin) => {
    if (
      coin === "usdt" ||
      coin === "usdc" ||
      coin === "busd" ||
      coin === "dai" ||
      coin === "ust" ||
      coin === "mim" ||
      coin === "usdp"
    ) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    let chartData = [];
    if (coinsData.length > 0) {
      for (let i = 0; i < 45; i++) {
        if (excludeCoin(coinsData[i].symbol)) {
          chartData.push({
            name:
              coinsData[i].symbol.toUpperCase() +
              "  " +
              coinsData[i].market_cap_change_percentage_24h.toFixed(2) +
              "%",
            size: coinsData[i].market_cap,
            fill:
              // On va plutôt utiliser la fonction colorPicker
              colorPicker(coinsData[i].market_cap_change_percentage_24h),

            // coinsData[i].market_cap_change_percentage_24h > 1
            //   ? colors.green1
            //   : coinsData[i].market_cap_change_percentage_24h <= 1 &&
            //     coinsData[i].market_cap_change_percentage_24h > 0.5
            //   ? colors.green2
            //   : coinsData[i].market_cap_change_percentage_24h <= 0 &&
            //     coinsData[i].market_cap_change_percentage_24h > -0.5
            //   ? colors.red1
            //   : colors.red2,
          });
        }
      }
    }
    // console.log(chartData);
    setDataArray(chartData);
  }, [coinsData]);

  // Fonction pour afficher le tooltip (boite de dialogue quand on survole un élément)
  const TreemmapToolTip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{payload[0].payload.name}</p>
        </div>
      );
    }
  };

  // En plus, on peut limiter les données aux 45 premières cryptomonnaies
  // // Version avec ||
  // // const limitedData = coinsData?.slice(0, 45) || [];

  // // Version avec opérateur ternaire
  // const limitedData = coinsData ? coinsData.slice(0, 45) : [];

  // setDataArray(limitedData);

  return (
    <div className="global-chart">
      <Treemap
        data={dataArray}
        width={730}
        height={181}
        dataKey="size"
        fill="black"
        stroke="rgb(51, 51, 51)"
        aspectRatio={1}
      >
        <Tooltip content={<TreemmapToolTip />} />
      </Treemap>
    </div>
  );
};

export default GlobalChart;
