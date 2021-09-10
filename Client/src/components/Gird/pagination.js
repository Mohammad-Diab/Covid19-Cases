import { Pagination } from "react-bootstrap";
import { useState } from "react";

function GridPagination(props) {
  let currentPage = props.currentPage;
  let numberOfPages = props.numberOfPages;
  let recordsCount = props.recordsCount;

  let goToPage =props.goToPage ;

  if (numberOfPages < 2) {
    return <></>;
  }
  debugger;

  let pageNumbersToShow = [
    1,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    numberOfPages,
  ];

  pageNumbersToShow = pageNumbersToShow.filter(function (item, pos) {
    return pageNumbersToShow.indexOf(item) == pos && item > 0 && item <= numberOfPages;
  });

  let pagesItem = [];
  let lastPage = 0;
  for (let page of pageNumbersToShow) {
    if (lastPage + 1 < page) {
      pagesItem.push(<Pagination.Ellipsis disabled key={`Ellipsis${lastPage}-${page}`} />);
    }
    pagesItem.push(
      <Pagination.Item key={`page${page}`} active={currentPage == page} onClick={()=>goToPage(page)}>
        {page}
      </Pagination.Item>
    );
    lastPage = page;
  }

  return <Pagination style={{ float: "right" }}>{pagesItem}</Pagination>;
}

export default GridPagination;
