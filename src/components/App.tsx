import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import GalleryViews from "../views/GalleryViews";
import { photosOperations } from "../redux/photo";

const App = function () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(photosOperations.getAllPhoto());
  }, [dispatch]);

  return <GalleryViews />;
};

export default App;
