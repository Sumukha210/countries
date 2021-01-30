import React, { useEffect, useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { useDispatch } from "react-redux";
import { useDebounce } from "@react-hook/debounce";
import {
  fillFilterData__fun,
  filterData__fun,
} from "../../../../Redux/Actions/DataActions";

const SearchBar = () => {
  const [inputVal, setInputVal] = useState("");
  const [searchQuery, setSearchQuery] = useDebounce("initialValue", 400);

  const dispatch = useDispatch();

  const handleInput = e => {
    setInputVal(e.target.value);
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    if (inputVal === "") {
      dispatch(fillFilterData__fun());
    } else {
      dispatch(filterData__fun("input", searchQuery));
    }
  }, [searchQuery]);

  return (
    <div className="searchbar">
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">
            <i className="fas fa-search"></i>
          </InputGroup.Text>
        </InputGroup.Prepend>

        <FormControl
          placeholder="search for a country..."
          aria-label="Username"
          aria-describedby="basic-addon1"
          type="text"
          value={inputVal}
          onChange={handleInput}
        />
      </InputGroup>
    </div>
  );
};

export default SearchBar;
