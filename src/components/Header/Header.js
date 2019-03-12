import React from "react";
import classes from "./Header.module.css";
const header = props => {
  return (
    <div className={classes.Header}>
      <i className="fas fa-shopping-cart" />({props.total})
    </div>
  );
};

export default header;
