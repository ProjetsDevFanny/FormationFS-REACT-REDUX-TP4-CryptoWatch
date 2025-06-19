import React from "react";

const ToTop = () => {

  // Fonction pour faire remonter la page vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="top">
      <img
        src="./assets/arrow-icon.svg"
        alt="arrow-icon"
        onClick={scrollToTop}
      />
    </div>
  );
};

export default ToTop;
