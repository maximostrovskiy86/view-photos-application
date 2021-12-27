import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import style from "./Sidebar.module.scss";
import { getPhotosFromAlbum } from "../../redux/photo/photos-actions";
import { photosSelectors } from "../../redux/photo";

const SideBar = function () {
  const [numberAlbum, seNumberAlbum] = useState("");
  const dispatch = useDispatch();
  const allPhotos = useSelector(photosSelectors.getAllGallery);

  useEffect(() => {
    dispatch(getPhotosFromAlbum(numberAlbum));
  }, [numberAlbum, seNumberAlbum]);

  const getAlbum = () =>
    allPhotos
      .map((item) => item.albumId)
      .filter((el, index, array) => array.indexOf(el) === index);

  const getCurrentAlbum = (e) => {
    seNumberAlbum(e.target.value);
  };

  const onReset = (e) => {
    e.preventDefault();
    dispatch(getPhotosFromAlbum(""));
    seNumberAlbum("");
  };

  return (
    <>
      <h5 className={style.titleSidebar}>Filter by Album</h5>
      <form onSubmit={onReset} className={style.form}>
        <Form.Select
          className={style.select}
          value={numberAlbum}
          onChange={getCurrentAlbum}
        >
          <option value="">Select album</option>
          {getAlbum().map((option) => (
            <option key={option} value={option}>
              Album: &nbsp;
              {option}
            </option>
          ))}
        </Form.Select>

        <Button type="submit">Reset filter</Button>
      </form>
    </>
  );
};

export default SideBar;
