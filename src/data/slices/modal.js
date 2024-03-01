import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  componentName: "",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isModalOpen = true;
      state.componentName = action.payload;
    },

    closeModal: (state) => {
      state.isModalOpen = false;
      state.componentName = "";
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
