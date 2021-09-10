import { useState, useEffect } from "react";

import GridPagination from "./pagination";
import { Table, Button, Form } from "react-bootstrap";

import { filterField_enum } from "./../../shared/enum";
import request from "./../../shared/request";

function Grid(props) {
  let columnsArr = props.columns;
  let dataUrl = props.dataUrl;

  const [gridState, setGridState] = useState({
    data: null,
    isLoading: true,
    currentPage: 1,
    numberOfPages: 0,
    recordsCount: 0,
  });

  let tableHeader = [];
  let tableFilter = [];
  let filterCount = 0;

  for (let col of columnsArr) {
    tableHeader.push(
      col.Sortable ? (
        <th>
          <Button key={col.id} variant="link" className="py-0 text-dark">
            {col.text}
          </Button>
        </th>
      ) : (
        <th key={col.id} style={{ verticalAlign: "middle" }}>
          {col.text}
        </th>
      )
    );
    tableFilter.push(
      <td className="p-0">{col.filterable ? buildColumnFilter(col) : null} </td>
    );
    if (col.filterable) {
      filterCount++;
    }
  }

  let tableContent = [];
  if (gridState.isLoading) {
    tableContent.push(
      <tr>
        <td colSpan={columnsArr.length}>Loading...</td>
      </tr>
    );
  } else if (gridState.data) {
    debugger;
    tableContent = gridState.data.map((row, index) => (
      <tr key={row.id}>
        {columnsArr.map((it) => {
          let className = it.id == -1 ? "text-center" : "";
          return (
            <td className={className} key={row.id + it.id}>
              {it.id == -1 ? index + 1 : row[it.selector]}
            </td>
          );
        })}
      </tr>
    ));
  }

  //selector: 'region',

  function readGridDate() {
    request.get(dataUrl).then((result) => {
      setGridState({
        isLoading: false,
        data: result.data,
        numberOfPages: result.numberOfPages,
        recordsCount: result.count,
      });
    });
  }
  useEffect(readGridDate, []);

  return (
    <>
      <div
        className="mb-2"
        style={{ height: "calc(100% - 3em)", overflowY: "scroll" }}
      >
        <Table striped bordered hover className="mb-0">
          <thead>
            <tr className="text-center bg-light">{tableHeader}</tr>
          </thead>
          <tbody>
            {filterCount ? <tr>{tableFilter}</tr> : <></>}
            {tableContent}
          </tbody>
        </Table>
      </div>
      <GridPagination
        goToPage={readGridDate}
        currentPage={gridState.currentPage}
        numberOfPages={gridState.numberOfPages}
        recordsCount={gridState.recordsCount}
      />
    </>
  );
}

function buildColumnFilter(column) {
  switch (column.filter.type) {
    case filterField_enum.dropdown:
      return (
        <Form.Select>
          <option>Default select</option>
        </Form.Select>
      );
    default:
      break;
  }
}

export default Grid;
