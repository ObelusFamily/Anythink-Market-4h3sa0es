import React from "react";
import { useState } from "react";
import agent from "../../agent";

const SearchBox = (props) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div id="search-box" className="flex-fill mr-2">
      <form
        className="input-group"
        onSubmit={(event) => {
          event.preventDefault();
          props.onSubmit(
            searchValue,
            (page) => agent.Items.byTitle(searchValue, page),
            agent.Items.byTitle(searchValue)
          );
        }}
      >
        <fieldset className="flex-fill">
          <div className="input-group">
            <input
              className="form-control form-control-md"
              type="text"
              placeholder="What is it that you truly desire?"
              onChange={(event) => setSearchValue(event.target.value)}
            />
            <div className="input-group-prepend">
              <span className="input-group-text" style={{ background: null }}>
                <i className="bi bi-search text-secondary"></i>
              </span>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default SearchBox;
