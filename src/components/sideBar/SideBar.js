import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPhotosFromAlbum } from "../../redux/photo/photos-actions";
import { photosSelectors } from "../../redux/photo";

const SideBar = function () {
  const [numberAlbum, seNumberAlbum] = useState("");
  const dispatch = useDispatch();
  const allPhotos = useSelector(photosSelectors.getGallery);

  const album = allPhotos
    .map((item) => item.albumId)
    .filter((el, index, array) => array.indexOf(el) === index);
  // console.log("el: ", el, "index: ", index);
  // console.log("album:", album);

  useEffect(() => {
    console.log("getPhotosFromAlbum: ", getPhotosFromAlbum);
    dispatch(getPhotosFromAlbum(numberAlbum));
  }, [numberAlbum, seNumberAlbum]);

  const getAlbum = (e) => {
    // console.log(elem);
    console.log("click", e.target.value);
    seNumberAlbum(e.target.value);
  };

  return (
    <div>
      <select value={numberAlbum} onChange={getAlbum}>
        {album.map((option) => (
          // <option key={option} value={option} onChange={() => getAlbum(option)}>
          <option key={option} value={option}>
            Album: &nbsp;
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SideBar;
