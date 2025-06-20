import React, { useState } from "react";
import "../styles/components/_table.scss";
import TableLine from "./TableLine";
import ToTop from "./ToTop";

const Table = ({ coinsData, favorites, setFavorites, showFavorites }) => {
  // console.log(coinsData);

  const [rangeNumber, setRangeNumber] = useState(100);
  const [orderBy, setOrderBy] = useState("Prix"); // nom du tri que l'on souhaite faire
  

  // Fonction pour gérer le changement de la valeur du range
  const handleRangeChange = (e) => {
    setRangeNumber(e.target.value);
  };

  // Fonction pour trier les données
  const sortData = (data) => {
    if (!data || data.length === 0) return data; // Si pas de données, on retourne les données telles quelles (pas besoin de trier), sinon, on continue pour la trier.

    // Gestion du tri : si le tri est inversé, on inverse le tri
    const isReverse = orderBy.includes("reverse");
    const sortField = isReverse ? orderBy.replace("reverse", "") : orderBy; // Si le tri est inversé, on retire le "reverse" du nom du tri, sinon, on garde le nom du tri.

    // Création d'une copie de l'array avec les données triées (pour ne pas modifier l'array original)
    return [...data].sort((a, b) => {
      let aValue, bValue;

      // Mapping des noms de colonnes vers les propriétés des données:
      // Correspondance champ de tri ⇄ propriété objet
      switch (sortField) {
        case "Prix":
          aValue = a.current_price;
          bValue = b.current_price;
          break;
        case "MarketCap":
          aValue = a.market_cap;
          bValue = b.market_cap;
          break;
        case "Volume":
          aValue = a.total_volume;
          bValue = b.total_volume;
          break;
        case "1h":
          aValue = a.price_change_percentage_1h_in_currency;
          bValue = b.price_change_percentage_1h_in_currency;
          break;
        case "1j":
          aValue = a.price_change_percentage_24h;
          bValue = b.price_change_percentage_24h;
          break;
        case "1s":
          aValue = a.price_change_percentage_7d_in_currency;
          bValue = b.price_change_percentage_7d_in_currency;
          break;
        case "1m":
          aValue = a.price_change_percentage_30d_in_currency;
          bValue = b.price_change_percentage_30d_in_currency;
          break;
        case "6m":
          aValue = a.price_change_percentage_200d_in_currency;
          bValue = b.price_change_percentage_200d_in_currency;
          break;
        case "1a":
          aValue = a.price_change_percentage_1y_in_currency;
          bValue = b.price_change_percentage_1y_in_currency;
          break;
        case "ATH":
          aValue = a.ath;
          bValue = b.ath;
          break;
        default:
          return 0;
      }

      // Gestion des valeurs null/undefined: Si une des valeurs est null ou undefined, on la remplace par 0 pour éviter des erreurs de comparaison.
      if (aValue === null || aValue === undefined) aValue = 0;
      if (bValue === null || bValue === undefined) bValue = 0;

      // Tri:
      // Si isReverse est vrai : on trie du plus petit au plus grand (croissant).
      // Sinon : du plus grand au plus petit (décroissant).
      if (isReverse) {
        return aValue - bValue; // Ordre croissant
      } else {
        return bValue - aValue; // Ordre décroissant
      }
    });
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

  // Trier les données
  const sortedData = sortData(coinsData);

  // Fonction pour gérer le clic sur le label de la colonne
  const handleSortClick = (el) => {
    if (orderBy === el) {
      setOrderBy("reverse" + el);
    } else {
      setOrderBy(el);
    }
  };

  // Fonction pour afficher la flèche de tri
  const getSortArrow = (el) => {
    if (orderBy === el) return " ↑"; // décroissant
    if (orderBy === "reverse" + el) return " ↓"; // croissant
    return ""; // rien si ce n’est pas la colonne active
  };

  // Fonction pour afficher les données en fonction du showFavorites
  const dataToDisplay = showFavorites
  ? sortedData.filter((coin) => favorites.includes(coin.id))
  : sortedData;

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
          <ToTop />
        </div>
        {tableHeader.map((el) => (
          <li key={el}>
            <input
              type="radio"
              name="header-el"
              id={el}
              checked={orderBy === el || orderBy === "reverse" + el}
              readOnly
              onClick={() => handleSortClick(el)}
            />
            <label htmlFor={el}>
              {el}
              {getSortArrow(el)}
            </label>
          </li>
        ))}
      </ul>
      {dataToDisplay
        ? dataToDisplay
            .slice(0, rangeNumber)
            .map((coin, index) => (
              <TableLine
                key={coin.id || index}
                coin={coin}
                index={index}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            ))
        : null}
    </div>
  );
};

export default Table;

// ============= Version originale =============

// // import React, { useState } from "react";
// import TableLine from "./TableLine";
// import ToTop from "./ToTop";

// const Table = ({ coinsData }) => {
//   const [orderBy, setOrderBy] = useState("");
//   const [rangeNumber, setRangeNumber] = useState(100);

//   const tableHeader = [
//     "Prix",
//     "MarketCap",
//     "Volume",
//     "1h",
//     "1j",
//     "1s",
//     "1m",
//     "6m",
//     "1y",
//     "ATH",
//   ];

//   const excludeCoin = (coin) => {
//     if (
//       coin === "usdt" ||
//       coin === "usdc" ||
//       coin === "busd" ||
//       coin === "dai" ||
//       coin === "ust" ||
//       coin === "mim" ||
//       coin === "tusd" ||
//       coin === "usdp" ||
//       coin === "usdn" ||
//       coin === "fei" ||
//       coin === "tribe" ||
//       coin === "gusd" ||
//       coin === "frax" ||
//       coin === "lusd" ||
//       coin === "husd" ||
//       coin === "ousd" ||
//       coin === "xsgd" ||
//       coin === "usdx" ||
//       coin === "eurs"
//     ) {
//       return false;
//     } else {
//       return true;
//     }
//   };

//   return (
//     <div className="table-container">
//       <ul className="table-header">
//         <div className="range-container">
//           <span>
//             Top{" "}
//             <input
//               type="text"
//               value={rangeNumber}
//               onChange={(e) => setRangeNumber(e.target.value)}
//             />
//           </span>
//           <input
//             type="range"
//             min="1"
//             max="250"
//             value={rangeNumber}
//             onChange={(e) => setRangeNumber(e.target.value)}
//           />
//           <ToTop />
//         </div>
//         {tableHeader.map((el) => (
//           <li key={el}>
//             <input
//               defaultChecked={
//                 el === orderBy || el === orderBy + "reverse" ? true : false
//               }
//               onClick={() => {
//                 if (orderBy === el) {
//                   setOrderBy(el + "reverse");
//                 } else {
//                   setOrderBy(el);
//                 }
//               }}
//               type="radio"
//               name="header-el"
//               id={el}
//             />
//             <label htmlFor={el}>{el}</label>
//           </li>
//         ))}
//       </ul>
//       {coinsData &&
//         coinsData
//           .slice(0, rangeNumber)
//           .sort((a, b) => {
//             switch (orderBy) {
//               case "Prix":
//                 return b.current_price - a.current_price;
//               case "Volume":
//                 return b.total_volume - a.total_volume;
//               case "MarketCap":
//                 return b.market_cap - a.market_cap;
//               case "1h":
//                 return (
//                   b.price_change_percentage_1h_in_currency -
//                   a.price_change_percentage_1h_in_currency
//                 );
//               case "1j":
//                 return (
//                   b.market_cap_change_percentage_24h -
//                   a.market_cap_change_percentage_24h
//                 );
//               case "1s":
//                 return (
//                   b.price_change_percentage_7d_in_currency -
//                   a.price_change_percentage_7d_in_currency
//                 );
//               case "1m":
//                 return (
//                   b.price_change_percentage_30d_in_currency -
//                   a.price_change_percentage_30d_in_currency
//                 );
//               case "6m":
//                 return (
//                   b.price_change_percentage_200d_in_currency -
//                   a.price_change_percentage_200d_in_currency
//                 );
//               case "1a":
//                 return (
//                   b.price_change_percentage_1y_in_currency -
//                   a.price_change_percentage_1y_in_currency
//                 );
//               case "ATH":
//                 return b.ath_change_percentage - a.ath_change_percentage;
//               case "#reverse":
//                 return a.market_cap - b.market_cap;
//               case "Prixreverse":
//                 return a.current_price - b.current_price;
//               case "Volumereverse":
//                 return a.total_volume - b.total_volume;
//               case "MarketCapreverse":
//                 return a.market_cap - b.market_cap;
//               case "1hreverse":
//                 return (
//                   a.price_change_percentage_1h_in_currency -
//                   b.price_change_percentage_1h_in_currency
//                 );
//               case "1jreverse":
//                 return (
//                   a.market_cap_change_percentage_24h -
//                   b.market_cap_change_percentage_24h
//                 );
//               case "1sreverse":
//                 return (
//                   a.price_change_percentage_7d_in_currency -
//                   b.price_change_percentage_7d_in_currency
//                 );
//               case "1mreverse":
//                 return (
//                   a.price_change_percentage_30d_in_currency -
//                   b.price_change_percentage_30d_in_currency
//                 );
//               case "6mreverse":
//                 return (
//                   a.price_change_percentage_200d_in_currency -
//                   b.price_change_percentage_200d_in_currency
//                 );
//               case "1areverse":
//                 return (
//                   a.price_change_percentage_1y_in_currency -
//                   b.price_change_percentage_1y_in_currency
//                 );
//               case "ATHreverse":
//                 return a.ath_change_percentage - b.ath_change_percentage;
//               default:
//                 null;
//             }
//           })
//           .map((coin, index) => (
//             <TableLine coin={coin} key={coin.id} index={index} />
//           ))}
//     </div>
//   );
// };

// export default Table;
