// Action pour changer l'état de la liste
export const SET_LIST_DISPLAY = "SET_LIST_DISPLAY";

export const setListDisplay = (bool) => ({
  type: SET_LIST_DISPLAY,
  payload: bool,
});