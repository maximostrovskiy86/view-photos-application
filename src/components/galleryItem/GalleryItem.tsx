import React from "react";
import style from "./GalleryItem.module.scss";

interface Props {
  title: string;
  imageUrl: string;
  id: number;
  album: number;
}

const GalleryItem = function ({ title, imageUrl, id, album }: Props) {
  return (
    <li className={style.ImageGalleryItem}>
      <img className={style.ImageGalleryItemImage} src={imageUrl} alt={title} />
      <p
        className={style.description}
      >{`№ ${id}  ${title}.  Album: ${album}`}</p>
    </li>
  );
};

export default GalleryItem;
