import React from "react";
import classes from './Showuser.module.css';

const ShowUser = (props) => {
    console.log("inside showuser")
    return (
        <>
        <div className={classes.div1}>
            <span>{props.name}</span>
            <span>{props.city}</span>
            <span>{props.street}</span>
            <button>view more</button>
        </div>
        </>
    )
};

export default ShowUser;