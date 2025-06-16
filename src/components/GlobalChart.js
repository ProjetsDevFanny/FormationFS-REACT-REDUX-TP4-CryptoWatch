import React, { useState, useEffect } from "react";

const GlobalChart = ({ coinsData }) => {
  // console.log(coinsData);
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
     // Limiter les données aux 45 premières cryptomonnaies
    // Version avec ||
    // const limitedData = coinsData?.slice(0, 45) || [];

    // Version avec opérateur ternaire
    const limitedData = coinsData ? coinsData.slice(0, 45) : [];

    setDataArray(limitedData);
  }, [coinsData]);

  return (
    <div className="global-chart">
      <h2>Global Chart</h2>
      {/* Vous pouvez maintenant utiliser dataArray qui contient max 45 éléments */}
    </div>
  );
};

export default GlobalChart;
