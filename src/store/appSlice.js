import { createSlice } from "@reduxjs/toolkit";
//import { ESC_CODE } from "../utils/config";

//const handleEsc = (e) => (e.keyCode === ESC_CODE ? openMenuPopup() : "");

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuPopupOpen: false,
  },
  reducers: {
    openMenuPopup(state) {
      state.isMenuPopupOpen = !state.isMenuPopupOpen;
    },
    closePopups(state) {
      state.isMenuPopupOpen = false;
    },
  },
});

export const {
  openMenuPopup,
  closePopups,
} = appSlice.actions;

export default appSlice.reducer;
