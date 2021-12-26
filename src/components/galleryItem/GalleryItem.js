import React from "react";
import PropTypes from "prop-types";
import style from "./GalleryItem.module.scss";

const GalleryItem = function ({ title, imageUrl, id, album }) {
  return (
    <li className={style.ImageGalleryItem}>
      <img className={style.ImageGalleryItemImage} src={imageUrl} alt={title} />
      <p>{`${id}  ${title}  ${album}`}</p>
    </li>
  );
};

GalleryItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  album: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default GalleryItem;
