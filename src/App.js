import React from "react";
import HeaderInfos from "./components/HeaderInfos";
import TableFilters from "./components/TableFilters";
import GlobalChart from "./components/GlobalChart";
import { useState, useEffect } from "react";
import axios from "axios";
import Table from "./components/Table";
import ToTop from "./components/ToTop";
// import CoinChart from "./components/CoinChart";

const App = () => {
  const [coinsData, setCoinsData] = useState([]);
  // const [favorites, setFavorites] = useState([]);
  // const [showFavorites, setShowFavorites] = useState(false);

  // Sauvegarder les favoris dans le localStorage quand favorites change
  // useEffect(() => {
  //   localStorage.setItem("favorites", JSON.stringify(favorites));
  // }, [favorites]);

  // Charger les favoris depuis le localStorage quand le composant est monté
  useEffect(() => {
    // Charger les favoris depuis le localStorage
    // const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    // setFavorites(savedFavorites);

    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y"
      )
      .then((res) => {
        console.log(res.data);
        setCoinsData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // ============= Fonction Scroll to top =============
    const handleScroll = () => {
      const tableHeader = document.querySelector(".table-header");
      if (window.scrollY > 145) {
        tableHeader?.classList.add("active");
      } else {
        tableHeader?.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app-container">
      <header>
        <HeaderInfos />
        {/* On passe en props les données reçues et elles seront utilisées dans le composant GlobalChart et contenues dans le state (variable) coinsData */}
        <GlobalChart coinsData={coinsData} />
      </header>
      <main>
        <Table
          coinsData={coinsData}
          // favorites={favorites}
          // setFavorites={setFavorites}
          // showFavorites={showFavorites}
          // setShowFavorites={setShowFavorites}
        />
        <ToTop />
      </main>
    </div>
  );
};

export default App;
