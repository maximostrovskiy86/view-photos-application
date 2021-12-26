import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  getPhotosRequest,
  getPhotosSuccess,
  getPhotosError,
  getSearchPhotosSuccess,
  getPhotosFromAlbum,
  // getSearchPhotosRequest
} from "./photos-actions";

const initialState = [];

const photos = createReducer(initialState, {
  [getPhotosSuccess]: (state, action) => action.payload,
  // [getSearchPhotosSuccess]: (state, { payload }) => {
  //   console.log(payload);
  //   return state.filter((item) => item.title.includes(payload));
  // },
});
const filter = createReducer("", {
  [getSearchPhotosSuccess]: (_, { payload }) => payload,
  // console.log("payload", payload);
});

const filterAlbum = createReducer("", {
  [getPhotosFromAlbum]: (_, { payload }) => payload,
  // console.log("payload", payload);
});

// console.log("filter", filter);

const loading = createReducer(false, {
  [getPhotosRequest]: () => true,
  [getPhotosSuccess]: () => false,
  [getPhotosError]: () => false,
  // [addTickerRequest]: () => true,
  // [addTickerSuccess]: () => false,
  // [addTickerError]: () => false,
  // [deleteTickerRequest]: () => true,
  // [deleteTickerSuccess]: () => false,
  // [deleteTickerError]: () => false,
});

const error = createReducer("", {
  [getPhotosError()]: (_, { payload }) => payload,
  [getPhotosRequest()]: () => "",
});

const photosReducers = combineReducers({
  filterAlbum,
  filter,
  photos,
  loading,
  error,
});

export default photosReducers;
