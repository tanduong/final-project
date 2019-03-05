import React from "react";
import classes from "./CarouselControl.module.css";

const CarouselControl = props => {
  const right = props.value === ">";
  return (
    <input
      className={`${classes.CarouselControl} ${right ? classes.Right : null}`}
      type="button"
      value={props.value}
      onClick={props.Clicked}
    />
  );
};

export default CarouselControl;
