import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  getPhotosRequest,
  getPhotosSuccess,
  getPhotosError,
  getSearchPhotosSuccess,
  getPhotosFromAlbum,
} from "./photos-actions";

const initialState = [];

const photos = createReducer(initialState, {
  [getPhotosSuccess]: (state, action) => action.payload,
});
const filter = createReducer("", {
  [getSearchPhotosSuccess]: (_, { payload }) => payload,
});

const filterAlbum = createReducer("", {
  [getPhotosFromAlbum]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [getPhotosRequest]: () => true,
  [getPhotosSuccess]: () => false,
  [getPhotosError]: () => false,
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
