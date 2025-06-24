export const SET_STABLE_STATE = "SET_STABLE_STATE";

  // Action pour changer l'état du stable
  export const setStableState = (bool) => ({
    type: SET_STABLE_STATE,
    payload: bool,
  });

// // Ce que tu retournes ici est une fonction (celle qui prend dispatch), donc Redux rejette cette action car par défaut il n'accepte que des objets. (solution: ci-dessus)

// export const setStableState = (bool) => {
//   return (dispatch) => {
//     dispatch({
//       type: "SET_STABLE_STATE",
//       payload: bool,
//     });
//   };
// };