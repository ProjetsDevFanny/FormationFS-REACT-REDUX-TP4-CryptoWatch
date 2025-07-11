import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setStableState } from "../action/stable.action";
import { setListDisplay } from "../action/list.action";

const TableFilters = () => {
  const [showStable, setShowStable] = useState(true);
  const [showFavList, setShowFavList] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStableState(showStable));
    dispatch(setListDisplay(showFavList));
  }, [showStable, showFavList]);

  return (
    <div className="table-filters ">
      <div className="table-filters-container">
        <div className="stable-checkbox-container">
          <input
            type="checkbox"
            id="stableCoins"
            defaultChecked={true}
            onChange={() => setShowStable(!showStable)}
          />
          <label htmlFor="stableCoins">
            {" "}
            {showStable ? "Avec stable coins" : "Sans stable coins"}
          </label>
        </div>
        <div className={showFavList ? "no-list-btn" : "no-list-btn active"} onClick={() => setShowFavList(false)}>
          <p>Aucune liste</p>
        </div>
        <div className={showFavList ? "fav-list active" : "fav-list"} style={{ cursor: "pointer" }} onClick={() => setShowFavList(true)}>
          <p>Liste des favoris</p>
          <img src="/assets/star-full.svg" alt="star-full" />
        </div>
      </div>
    </div>
  );
};

export default TableFilters;
