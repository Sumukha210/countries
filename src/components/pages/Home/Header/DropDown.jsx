import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch } from "react-redux";
import {
  fillFilterData__fun,
  filterData__fun,
} from "../../../../Redux/Actions/DataActions";

const DropDown = () => {
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  const dispatch = useDispatch();

  const handleItems = e => {
    let selectedValue = e.target.dataset.region;

    if (selectedValue === "All") {
      dispatch(fillFilterData__fun());
    } else {
      dispatch(filterData__fun("select", e.target.dataset.region));
    }
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          Filter by Region
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {regions.map(item => (
            <Dropdown.Item
              as="p"
              key={item}
              onClick={handleItems}
              data-region={item}>
              {item}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default DropDown;
