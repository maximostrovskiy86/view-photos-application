import { configureStore } from "@reduxjs/toolkit";
import photosReducers from "./photo/photos-reduser";

const store = configureStore({
  reducer: photosReducers,
  devTools: process.env.NODE_ENV === "development",
});

export default store;
