import React from "react";
import { useState } from "react";
import agent from "../../agent";

const SearchBox = (props) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="d-flex flex-row pb-4">
      <form
        className="input-group input-group-sm"
        onSubmit={(event) => {
          event.preventDefault();
          props.onSubmit(
            searchValue,
            (page) => agent.Items.byTitle(searchValue, page),
            agent.Items.byTitle(searchValue)
          );
        }}
      >
        <input
          className="mr-4"
          type="text"
          placeholder="Search title"
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <button
          className="btn btn-sml btn-primary"
          type="submit"
          style={{
            border: 0,
            background: "linear-gradient(90deg, #4683CA -3.21%, #AF93F2 100%)",
            borderRadius: "5px",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
