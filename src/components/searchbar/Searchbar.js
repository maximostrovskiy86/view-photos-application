import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import PropTypes from "prop-types";
import style from "./Searchbar.module.scss";
import SearchButton from "../iconSvgComponents/searchButton/searchButton";
import { getSearchPhotosSuccess } from "../../redux/photo/photos-actions";

const Searchbar = function () {
  const dispatch = useDispatch();
  const [val, setVal] = useState("");

  const handleInput = (e) => {
    const { value } = e.target;
    setVal(value.toLowerCase());
  };

  useEffect(() => {
    if (val === "") {
      return;
    }
    dispatch(getSearchPhotosSuccess(val));
  }, [val]);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //
  //   if (val.trim() === "") {
  //     alert("Введите название изображения");
  //   }
  //   dispatch(getSearchPhotosSuccess(val));
  //   setVal("");
  // };

  return (
    <header className={style.Searchbar}>
      {/* <form onSubmit={handleSubmit} className={style.SearchForm}> */}
      <form className={style.SearchForm}>
        <button type="submit" className={style.SearchFormButton}>
          {/* <span className={style.SearchFormButtonLabel}>Search</span> */}
          <SearchButton />
        </button>

        <input
          className={style.SearchFormInput}
          type="text"
          autoComplete="off"
          onChange={handleInput}
          // autoFocus
          placeholder="Search images and photos"
          value={val}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  // onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
