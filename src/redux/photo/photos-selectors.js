export const getAllGallery = (state) => state.photos;
export const searchFilter = (state) => state.filter;
// const getFilterAlbum = (state) => state.filterAlbum;
// console.log(getFilterAlbum);

export const getGallery = (state) => {
  if (state.filter) {
    return state.photos.filter((item) =>
      item.title.includes(state.filter.toLowerCase())
    );
  }
  if (state.filterAlbum) {
    return state.photos.filter(
      (item) => Number(item.albumId) === Number(state.filterAlbum)
    );
  }
  return state.photos;
};
// state.filterAlbum || state.filter

// state.filter
//   ?
//   : state.filterAlbum
//   ? state.photos.filter(
//       (item) => Number(item.albumId) === Number(state.filterAlbum)
//     )
//   : state.photos;

// export const getGallery = (state) => {
//   const gallery = getAllGallery(state);
//   const filter = searchFilter(state);
//   const album = getFilterAlbum(state);
//
//   return gallery.filter((item) =>
//     filter !== ""
//       ? item.title.includes(filter.toLowerCase())
//       : item.albumId === album
//   );
// };

const selectors = {
  getGallery,
  getAllGallery,
};

export default selectors;
