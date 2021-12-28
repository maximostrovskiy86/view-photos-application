import React from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import style from "./Pagination.module.scss";

const Pagination = function ({ pageCount, handlePageClick }) {
  return (
    <ReactPaginate
      className={style.pagination}
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel="<"
      pageClassName="page-item"
      pageLinkClassName={`${style.pageLink} page-link`}
      previousClassName="page-item"
      previousLinkClassName={`${style.pageLink} page-link`}
      nextClassName="page-item"
      nextLinkClassName={`${style.pageLink} page-link`}
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName={`${style.pageLink} page-link`}
      containerClassName="pagination"
      activeClassName="active"
      renderOnZeroPageCount={null}
    />
  );
};

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  handlePageClick: PropTypes.func.isRequired,
};

export default Pagination;
