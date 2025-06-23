import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/components/_coinChart.scss";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";
import colors from "../styles/_settings.scss";

const CoinChart = ({ coinId, coinName }) => {
  const [duration, setDuration] = useState(30);
  const [coinData, setCoinData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const headerData = [
    [1, "1 jour"],
    [3, "3 jours"],
    [7, "7 jours"],
    [30, "1 mois"],
    [91, "3 mois"],
    [181, "6 mois"],
    [365, "1 an"],
    [3000, "Max"],
  ];

  useEffect(() => {
    // Vérifier que coinId existe
    if (!coinId) return;

    // Créer un AbortController pour annuler les requêtes précédentes
    const abortController = new AbortController();

    setLoading(true);
    setError(null);

    // Appel direct vers l'API CoinGecko
    const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${duration}${
      duration > 32 ? "&interval=daily" : ""
    }`;

    console.log("Requête pour:", coinId, "URL:", url);

    axios
      .get(url, { signal: abortController.signal })
      .then((res) => {
        console.log("Réponse brute:", res.data);
        const dataArray = [];

        for (let i = 0; i < res.data.prices.length; i++) {
          const price = res.data.prices[i][1];

          dataArray.push({
            date: new Date(res.data.prices[i][0]).toLocaleDateString(),
            price: price < 50 ? price : parseInt(price),
          });
        }

        console.log("Données formatées pour", coinName + ":", dataArray);
        console.log("Nombre de points:", dataArray.length);
        setCoinData(dataArray);
        setLoading(false);
      })
      .catch((err) => {
        // Ignorer les erreurs d'annulation (requête annulée)
        if (
          err.name === "AbortError" ||
          err.code === "ERR_CANCELED" ||
          err.message === "canceled"
        ) {
          return; // Sortir silencieusement sans afficher d'erreur
        }

        console.error("Erreur CoinChart:", err);
        if (err.response?.status === 404) {
          setError(`Crypto-monnaie '${coinId}' non trouvée`);
        } else if (err.response?.status === 429) {
          setError(
            "Trop de requêtes vers l'API CoinGecko. Veuillez patienter."
          );
        } else {
          setError("Erreur lors du chargement des données");
        }
        setLoading(false);
      });

    // Cleanup function pour annuler la requête si le composant se démonte
    return () => {
      abortController.abort();
    };
    console.log(duration);
  }, [duration, coinId, coinName]);

  console.log(
    "État actuel - coinData:",
    coinData,
    "loading:",
    loading,
    "error:",
    error
  );

  return (
    <div className="coin-chart">
      <p>{coinName}</p>
      {error && (
        <div className="error-message">
          <p>⚠️ {error}</p>
        </div>
      )}
      {loading && (
        <div className="loading-message">
          <p>Chargement...</p>
        </div>
      )}
      <div className="btn-container">
        {headerData.map((item) => {
          return (
            <div
              htmlFor={"btn" + item[0]}
              key={item[0]}
              className={item[0] === duration ? "active-btn" : ""}
              onClick={() => setDuration(item[0])}
            >
              {item[1]}
            </div>
          );
        })}
      </div>

      {coinData && coinData.length > 0 ? (
        <div style={{ marginTop: "20px" }}>
          <AreaChart
            data={coinData}
            width={680}
            height={250}
            margin={{ top: 10, right: 0, left: 100, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="7%" stopColor={colors.color1} stopOpacity={0.8} />
                <stop offset="93%" stopColor={colors.white1} stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis dataKey="date" />
            <YAxis domain={["auto", "auto"]} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="price"
              stroke={colors.color1}
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </div>
      ) : (
        !loading &&
        !error && (
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <p>Aucune donnée disponible</p>
          </div>
        )
      )}
    </div>
  );
};

export default CoinChart;
