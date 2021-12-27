import axios from "axios";
import {
  getPhotosRequest,
  getPhotosSuccess,
  getPhotosError,
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

const operations = {
  getAllPhoto,
};

export default operations;
