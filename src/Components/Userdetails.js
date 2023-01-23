import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./Userdetails.module.css";

const UserDetails = () => {
  const location = useLocation();
  const prod = location.state;

  console.log(prod);
  return (
    <section>
      <h1>You are inside user UserDetails</h1>
      <div className={classes.div1}>
        <h1>Hello Travellers</h1>
        <span className={classes.span1}>Contact---{prod.name}</span>
        <span className={classes.span1}>city---{prod.city}</span>
        <span className={classes.span1}>street---{prod.street}</span>
        <Link to="/user"><button>Hide Detais</button></Link>
        </div>
        <div className={classes.div2}>
            <h4>Description</h4>
            <h5>Providing service of deomestic fligh booking @ lowest with this we are providing loyal customer service</h5>
            <div>
                <span className={classes.span2}>Contact Person</span>
                <span className={classes.span2}>address</span>
            </div>
            <div>
                <span className={classes.span2}>{prod.name}</span>
                <span className={classes.span2}>{prod.city},{prod.street}</span>
            </div>
            <div>
                <span className={classes.span2}>Email</span>
                <span className={classes.span2}>city</span>
            </div>
            <div>
                <span className={classes.span2}>{prod.email}</span>
                <span className={classes.span2}>{prod.city}</span>
            </div>
            <div>
                <span className={classes.span2}>Phone</span>
                <span className={classes.span2}>Country</span>
            </div>
            <div>
                <span className={classes.span2}>{prod.phone}</span>
                <span className={classes.span2}>India</span>
            </div>


        </div>
    </section>
  );
};

export default UserDetails;
