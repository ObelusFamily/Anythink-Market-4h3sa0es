import React from "react";
import agent from "../../agent";
import { connect } from "react-redux";
import { SET_TITLE_SEARCH, TITLE_SEARCH } from "../../constants/actionTypes";

const mapStateToProps = (state) => ({
  searchTitle: state.itemList.searchTitle,
});

const mapDispatchToProps = (dispatch) => ({
  setSearchTitle: (searchTitle) =>
    dispatch({ type: SET_TITLE_SEARCH, searchTitle }),
  onSearchTitle: (pager, payload) =>
    dispatch({ type: TITLE_SEARCH, pager, payload }),
});

const SearchBox = (props) => {
  const onSearchTitle = (event) => {
    event.preventDefault();
    let value = event.target.value;
    if (value.length >= 3 || props.searchTitle.length > value.length) {
      props.onSearchTitle(
        (page) => agent.Items.byTitle(value, page),
        agent.Items.byTitle(value)
      );
    }
    props.setSearchTitle(value);
  };

  return (
    <div className="flex-fill mr-2">
      <fieldset className="flex-fill">
        <div className="input-group">
          <input
            className="form-control form-control-md"
            id="search-box"
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
