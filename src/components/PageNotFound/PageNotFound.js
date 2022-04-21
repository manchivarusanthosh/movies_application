import React from "react";
import pageNotFoundImg from "../../images/pnf.jpg";
import "./PageNotFound.scss";

const PageNotFound = () => {
  console.log("page not found");
  return (
    <div className="page-not-found">
      <img src={pageNotFoundImg} alt="PageNotFound" />
    </div>
  );
};

export default PageNotFound;
