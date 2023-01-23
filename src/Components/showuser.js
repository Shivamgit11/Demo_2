import React from "react";
import { Link } from "react-router-dom";
import classes from "./Showuser.module.css";

const ShowUser = (props) => {
  console.log("inside showuser");
  return (
    <>
      <div className={classes.div1}>
        <span className={classes.span1}>{props.name}</span>
        <span className={classes.span1}>{props.city}</span>
        <span className={classes.span1}>{props.street}</span>
        <Link to={{ pathname: "/user/userdetails", state: props }}>
          <button>view more</button>
        </Link>
      </div>
    </>
  );
};

export default ShowUser;
