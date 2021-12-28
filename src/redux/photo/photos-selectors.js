export const getAllGallery = (state) => state.photos;
export const getLoading = (state) => state.loading;

export const getGallery = (state) => {
  if (state.filter && state.filterAlbum) {
    return state.photos
      .filter((el) => Number(el.albumId) === Number(state.filterAlbum))
      .filter((item) =>
        item.title.toLowerCase().includes(state.filter.toLowerCase())
      );
  }
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

const selectors = {
  getGallery,
  getAllGallery,
  getLoading,
};

export default selectors;
