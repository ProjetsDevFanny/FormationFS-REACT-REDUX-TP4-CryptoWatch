import React, { useState, useEffect } from "react";

const StarIcon = ({ coinId }) => {
  // console.log(coinId);
  const [like, setLike] = useState(false);

  //===================== Récupération des favoris depuis le localStorage=====================
  useEffect(() => {
    if (window.localStorage.coinList) {
      let favList = window.localStorage.coinList.split(",");
      if (favList.includes(coinId)) {
        setLike(true);
      }
    }
  }, []);

  //===================== Vérification si le coin est déjà dans les favoris=====================
  const idChecker = (id) => {
    let favList = null;

    // Récupération des favoris depuis le localStorage
    if (window.localStorage.coinList) {
      favList = window.localStorage.coinList.split(",");
    }

    // Vérification si le coin est déjà dans les favoris
    if (favList) {
      if (favList.includes(id)) {
        // Suppression du coin des favoris (si il est déjà dans les favoris)
        const newFavList = favList.filter((coin) => coin !== id);
        window.localStorage.coinList = newFavList.join(",");
        setLike(false);
      } else {
        // Ajout du coin aux favoris (si il n'est pas déjà dans les favoris)
        favList.push(id);
        window.localStorage.coinList = favList.join(",");
        setLike(true);
      }
    } else {
      // Ajout du coin aux favoris (si il n'y a pas de favoris)
      window.localStorage.coinList = id;
      setLike(true);
    }
  };

  return (
    <div className="star-icon">
      <img
        src={like ? "/assets/star-full.svg" : "/assets/star-empty.svg"}
        alt="star-empty"
        onClick={() => idChecker(coinId)}
      />
    </div>
  );
};

export default StarIcon;
