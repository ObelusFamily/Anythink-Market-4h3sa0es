import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import SearchBox from "./SearchBox";

const Banner = (props) => {
  const [isGetClicked, setGetClicked] = useState(false);
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div className="container d-flex flex-row align-items-center justify-content-center">
          <span className="mr-2">A place to </span>
          <span
            className="mr-2"
            style={{ cursor: "pointer" }}
            id="get-part"
            onClick={() => setGetClicked(true)}
          >
            {" "}
            get
          </span>
          {isGetClicked ? <SearchBox /> : null}
          <span>the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
