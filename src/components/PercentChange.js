import React, { useState, useEffect } from "react";
import colors from "../styles/_settings.scss";


// Méthode 1:
// On utilise un useEffect pour définir la couleur en fonction de la valeur de percent
// On utilise un useState pour stocker la couleur

// const PercentChange = ({ percent }) => {
//   const [color, setColor] = useState();

//   useEffect(() => {
//     if (percent) {
//       if (percent >= 0) {
//         setColor(colors.green1);
//       } else {
//         setColor(colors.red1);
//       }
//     } else {
//       setColor(colors.white1);
//     }
//   }, [percent]);

//   return (
//     <span className="percent-change-container" style={{ color }}>
//       {percent ? percent.toFixed(1) + "%" : "-"}
//     </span>
//   );
// };

// Méthode 2:
// Plus simple (moins de code)
// Plus performante : pas de re-render déclenché inutilement via useState
// Plus directe : on dérive tout depuis les props sans état local

const PercentChange = ({ percent }) => {
  if (typeof percent !== "number") {
    return (
      <span className="percent-change" style={{ color: colors.white1 }}>
        -
      </span>
    );
  }

  const color = percent >= 0 ? colors.green1 : colors.red1;

  return (
    <span className="percent-change" style={{ color }}>
      {percent.toFixed(1)}%
    </span>
  );
};

export default PercentChange;
