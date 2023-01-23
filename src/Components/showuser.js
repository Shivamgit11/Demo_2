import React from "react";
import { Link } from "react-router-dom";
import classes from './Showuser.module.css';
import UserDetails from "./Userdetails";


const ShowUser = (props) => {
    console.log("inside showuser")
    return (
        <>
        
        <div className={classes.div1} >
            <span>{props.name}</span>
            <span>{props.city}</span>
            <span>{props.street}</span>
            <Link to='/user/userdetails' UserDetails={props}>
            <button>view more</button>
            </Link>
        </div>
        
        </>
    )
};

export default ShowUser;