import { createAction } from "@reduxjs/toolkit";

export const getPhotosRequest = createAction("photos/getPhotosRequest");
export const getPhotosSuccess = createAction("photos/getPhotosSuccess");
export const getPhotosError = createAction("photos/getPhotosError");

export const getSearchPhotosSuccess = createAction(
  "photos/getSearchPhotosSuccess"
);

export const getPhotosFromAlbum = createAction("photos/getPhotosFromAlbum");
