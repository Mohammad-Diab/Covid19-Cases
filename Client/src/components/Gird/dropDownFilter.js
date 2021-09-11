import request from "./../../shared/request";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

function DropDownFilter(props) {
  let filterGrid = props.filterGrid;
  let dateUrl = props.dateUrl;

  const [filterState, setFilterState] = useState({
    isLoading: true,
    data: null,
  });

  function readFilterDate() {
    request.get(dateUrl).then((result) => {
      debugger;
      setFilterState({
        isLoading: false,
        data: result,
      });
    });
  }

  useEffect(() => readFilterDate(), []);

  if (filterState.data == null) {
    return (
      <Form.Select>
        <option></option>
        <option>Loading...</option>
      </Form.Select>
    );
  }

  return (
    <Form.Select
      onChange={(evt) => {
        filterGrid(evt.target.value);
      }}
    >
      <option></option>
      {filterState.data.map((op) => (
        <option key={op} value={op}>
          {op}
        </option>
      ))}
    </Form.Select>
  );
}

export default DropDownFilter;
