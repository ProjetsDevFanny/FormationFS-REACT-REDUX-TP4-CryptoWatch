import React from "react";

const TableFilters = () => {
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
        <div className="fav-list">
          <p>Liste des favoris</p>
          <img src="/assets/star-full.svg" alt="star-full" />
        </div>
      </div>
    </div>
  );
};

export default TableFilters;
