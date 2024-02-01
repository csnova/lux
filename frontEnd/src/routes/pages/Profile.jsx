import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import editIcon from "../../assets/edit.png";
import getProfileDetails from "../getRequests/getProfileDetails";

const Profile = ({ currentUser, currentProfile, setCurrentProfile }) => {
  const { profileDetails, error, loading } = getProfileDetails(
    currentUser._id,
    setCurrentProfile
  );
  if (error) return <p>A Network Error has occurred. </p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div className="page">
      <h1 className="pageTitle">Profile</h1>

      {currentUser ? (
        <div>
          <h2 className="tableHeader">{currentProfile.username}</h2>
          <Link className="editButtonBox" to="/updateProfile">
            <img
              src={editIcon}
              alt="link to update profile"
              className="tableIcon"
            />
          </Link>
          <br />
          <div className="tableBox">
            <table className="genericTable">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{currentProfile.profile[0].name}</td>
                </tr>
                <tr>
                  <th>Bio</th>
                  <td>{currentProfile.profile[0].bio}</td>
                </tr>
                <tr>
                  <th>Favorite Band</th>
                  <td>{currentProfile.profile[0].band}</td>
                </tr>
                <tr>
                  <th>Favorite Movie</th>
                  <td>{currentProfile.profile[0].movie}</td>
                </tr>
                <tr>
                  <th>Favorite Book</th>
                  <td>{currentProfile.profile[0].book}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="signInMessage">
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

export default Profile;
