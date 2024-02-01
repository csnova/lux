import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import viewIcon from "../../assets/show.png";
import Moment from "moment";

const Summary = ({ currentUser, setPostViewed }) => {
  return (
    <div className="page">
      {currentUser ? (
        <div className="page">
          <h2 className="tableHeader">Welcome to Parley</h2>
          <h3 className="tableHeader">A Site Devoted to Communication</h3>
        </div>
      ) : (
        <div className="signInMessage">
          <h1 className="pageTitle">Home</h1>
          <p>Must be Signed In to view this page</p>
          <div className="signInUp">
            <Link to="/sign-in" className="signInButton">
              Sign In
            </Link>
            <Link to="/sign-up" className="signInButton">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Summary;
