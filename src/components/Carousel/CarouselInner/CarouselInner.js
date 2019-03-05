import React from "react";
import classes from "./CarouselInner.module.css";

const CarouselInner = props => {
  return (
    <div
      className={classes.CarouselInner}
      style={{ backgroundImage: `url(${props.display})` }}
    />
  );
};

export default CarouselInner;
