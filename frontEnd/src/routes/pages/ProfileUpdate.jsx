import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useUpdateProfile from "../postRequests/postUpdateProfile";
import getProfileDetails from "../getRequests/getProfileDetails";
import editIcon from "../../assets/edit.png";

const UpdateProfile = ({
  currentUser,
  userToken,
  currentProfile,
  setCurrentProfile,
}) => {
  const [currentName, setCurrentName] = useState(
    currentProfile.profile[0].name
  );
  const [currentBio, setCurrentBio] = useState(currentProfile.profile[0].bio);
  const [currentBand, setCurrentBand] = useState(
    currentProfile.profile[0].band
  );
  const [currentMovie, setCurrentMovie] = useState(
    currentProfile.profile[0].movie
  );
  const [currentBook, setCurrentBook] = useState(
    currentProfile.profile[0].book
  );

  const { attemptUpdateProfile } = useUpdateProfile();

  function updateProfileSubmit(e) {
    attemptUpdateProfile(
      currentUser._id,
      userToken,
      currentName,
      currentBio,
      currentBand,
      currentMovie,
      currentBook,
      setCurrentProfile
    );
  }

  function handleNameChange(e) {
    setCurrentName(e.target.value);
  }

  function handleBioChange(e) {
    setCurrentBio(e.target.value);
  }

  function handleBandChange(e) {
    setCurrentBand(e.target.value);
  }

  function handleMovieChange(e) {
    setCurrentMovie(e.target.value);
  }

  function handleBookChange(e) {
    setCurrentBook(e.target.value);
  }

  return (
    <div className="page">
      <h1 className="pageTitle">Update Profile</h1>

      {currentUser ? (
        <div>
          <h2 className="tableHeader">{currentUser.username}</h2>
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
                  <td>
                    <input
                      className="updateProfileInput"
                      type="text"
                      onChange={handleNameChange}
                      value={currentName}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Bio</th>
                  <td>
                    <input
                      className="updateProfileInput"
                      type="text"
                      onChange={handleBioChange}
                      value={currentBio}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Favorite Band</th>
                  <td>
                    <input
                      className="updateProfileInput"
                      type="text"
                      onChange={handleBandChange}
                      value={currentBand}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Favorite Movie</th>
                  <td>
                    <input
                      className="updateProfileInput"
                      type="text"
                      onChange={handleMovieChange}
                      value={currentMovie}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Favorite Book</th>
                  <td>
                    <input
                      className="updateProfileInput"
                      type="text"
                      onChange={handleBookChange}
                      value={currentBook}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <label>
              <button className="formSubmit" onClick={updateProfileSubmit}>
                Submit
              </button>
            </label>
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

export default UpdateProfile;
