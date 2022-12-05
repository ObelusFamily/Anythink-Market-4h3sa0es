import React from "react";
import { useState } from "react";
import agent from "../../agent";

const SearchBox = (props) => {
  const [searchValue, setSearchValue] = useState("");


  const onSearchTitle = (event) => {
    event.preventDefault();
    let value = event.target.value
    if (value.length >= 3 || (searchValue.length > value.length)) {
      props.onSubmit(
        value,
        (page) => agent.Items.byTitle(value, page),
        agent.Items.byTitle(value)
      );
    }
    setSearchValue(value)
  }

  return (
    <div id="search-box" className="flex-fill mr-2">
      <fieldset className="flex-fill">
        <div className="input-group">
          <input
            className="form-control form-control-md"
            type="text"
            placeholder="What is it that you truly desire?"
            onChange={(event) => onSearchTitle(event)}
          />
          <div className="input-group-prepend">
            <span className="input-group-text" style={{ background: null }}>
              <i className="bi bi-search text-secondary"></i>
            </span>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default SearchBox;
