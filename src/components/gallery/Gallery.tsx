import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import style from "./Gallery.module.scss";
import { photosSelectors } from "../../redux/photo";
import GalleryItem from "../galleryItem/GalleryItem";
import Pagination from "../pagination/Pagination";

type Data = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const Gallery = function () {
  const gallery: Data[] = useSelector(photosSelectors.getGallery);
  const loading = useSelector(photosSelectors.getLoading);

  const [itemsPerPage] = useState<number>(12);
  const [currentItems, setCurrentItems] = useState<Data[]>([]);
  const [pageCount, setPageCount] = useState<number>(1);
  const [itemOffset, setItemOffset] = useState<number>(1);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    if (gallery.length > 0) {
      setCurrentItems(gallery.slice(itemOffset, endOffset));
    }

    setPageCount(Math.ceil(gallery.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, gallery]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % gallery.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ul className={style.imageGallery}>
        {currentItems.map((photo) => (
          <GalleryItem
            id={photo.id}
            key={photo.id}
            title={photo.title}
            imageUrl={photo.url}
            album={photo.albumId}
          />
        ))}
      </ul>
      <div className={style.loader}>
        {loading && (
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        )}
      </div>
      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
    </>
  );
};

export default Gallery;
