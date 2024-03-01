import { configureStore } from "@reduxjs/toolkit";
import ModalReducer from "../slice/modalSlice";

const store = configureStore({
  reducer: {
    Modal: ModalReducer,
  },
});

const { dispatch } = store;

export { store, dispatch };
