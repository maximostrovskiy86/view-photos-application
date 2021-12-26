import axios from "axios";
import {
  getPhotosRequest,
  getPhotosSuccess,
  getPhotosError,
  // getSearchPhotosRequest,
  // getSearchPhotosSuccess,
  // getSearchPhotosError,
} from "./photos-actions";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const getAllPhoto = () => async (dispatch) => {
  dispatch(getPhotosRequest());

  try {
    const { data } = await axios.get("/photos");
    dispatch(getPhotosSuccess(data));
  } catch (error) {
    dispatch(getPhotosError(error));
  }
};

// const getSearchPhoto = (query) => async (dispatch) => {
//   console.log("query:", query);
//   dispatch(getSearchPhotosRequest());
//
//   try {
//     const { data } = await axios.get("/photos");
//     dispatch(getSearchPhotosSuccess(data, query));
//   } catch (error) {
//     dispatch(getSearchPhotosError(error));
//   }
// };

const operations = {
  getAllPhoto,
  // getSearchPhoto,
};

export default operations;
