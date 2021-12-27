import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import style from "./Searchbar.module.scss";
import SearchButton from "../iconSvgComponents/searchButton/searchButton";
import { getSearchPhotosSuccess } from "../../redux/photo/photos-actions";

const Searchbar = function () {
  const dispatch = useDispatch();
  const [val, setVal] = useState("");

  useEffect(() => {
    dispatch(getSearchPhotosSuccess(val));
  }, [val]);

  const handleInput = (e) => {
    const { value } = e.target;
    setVal(value.toLowerCase());
  };

  return (
    <header className={style.Searchbar}>
      <form className={style.SearchForm}>
        <button type="submit" className={style.SearchFormButton}>
          <SearchButton />
        </button>
        <input
          className={style.SearchFormInput}
          type="text"
          autoComplete="off"
          onChange={handleInput}
          placeholder="Search images and photos"
          value={val}
        />
      </form>
    </header>
  );
};

export default Searchbar;
