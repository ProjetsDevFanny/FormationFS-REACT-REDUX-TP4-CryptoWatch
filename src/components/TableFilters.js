import React, { useState } from "react";

const TableFilters = () => {
  // const [showFavorites, setShowFavorites] = useState(false);

  return (
    <div className="table-filters ">
      <div className="table-filters-container">
        <div className="stable-checkbox-container">
          <input type="checkbox" id="stableCoins" defaultChecked={true} />
          <label htmlFor="stableCoins"> Avec stable coins</label>
        </div>
        <div className="no-list-btn">
          <p>Aucune liste</p>
        </div>
        <div
          className="fav-list"
          // onClick={() => setShowFavorites((prev) => !prev)}
          style={{ cursor: "pointer" }}
        >
          {/* <p>{showFavorites ? "Voir tous les coins" : "Liste des favoris"}</p> */}
          <img src="/assets/star-full.svg" alt="star-full" />
        </div>
      </div>
    </div>
  );
};

export default TableFilters;
