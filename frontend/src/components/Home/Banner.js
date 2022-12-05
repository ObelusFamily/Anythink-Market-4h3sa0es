import React from "react";
import logo from "../../imgs/logo.png";
import SearchBox from "./SearchBox";

const Banner = (props) => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div className="container d-flex flex-row align-items-center">
          <span className="mr-2">A place to </span>
          <span className="mr-2" id="get-part">
            {" "}
            get
          </span>
          <SearchBox id="search-box" onSubmit={props.onSearchTitle} />
          <span>the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
