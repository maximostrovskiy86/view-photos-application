import React from "react";
import PropTypes from "prop-types";
import style from "./Button.module.scss";

const Button = function ({ LoadMore }) {
  return (
    <button type="button" className={style.Button} onClick={LoadMore}>
      Load more
    </button>
  );
};

Button.propTypes = {
  LoadMore: PropTypes.func.isRequired,
};

export default Button;
