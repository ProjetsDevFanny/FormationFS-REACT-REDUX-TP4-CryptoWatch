import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setStableState } from "../action/stable.action";

const TableFilters = () => {
  const [showStable, setShowStable] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStableState(showStable));
  }, [showStable]);

  return (
    <div className="table-filters ">
      <div className="table-filters-container">
        <div className="stable-checkbox-container">
          <input type="checkbox" id="stableCoins" defaultChecked={true} onChange={() => setShowStable(!showStable)} />
          <label htmlFor="stableCoins"> {showStable ? "Avec stable coins" : "Sans stable coins"}</label>
        </div>
        <div className="no-list-btn">
          <p>Aucune liste</p>
        </div>
        <div className="fav-list" style={{ cursor: "pointer" }}>
          <p>Liste des favoris</p>
          <img src="/assets/star-full.svg" alt="star-full" />
        </div>
      </div>
    </div>
  );
};

export default TableFilters;
