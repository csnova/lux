import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import likeIcon from "../../assets/like.png";
import useUpdateProfile from "../postRequests/postUpdateProfile";
import getUserDetails from "../getRequests/getUserDetails";
import getUserPicture from "../getRequests/getUserPicture";
import { useNavigate } from "react-router-dom";

const UpdateProfile = ({ currentUser, userToken }) => {
  const { userDetails, error, loading } = getUserDetails(currentUser._id);
  const { userPicture, error1, loading1 } = getUserPicture(currentUser._id);
  const [currentFirstName, setCurrentFirstName] = useState("");
  const [currentLastName, setCurrentLastName] = useState("");
  const [currentBio, setCurrentBio] = useState("");
  const { attemptUpdateProfile } = useUpdateProfile();

  const navigate = useNavigate();

  function updateProfileSubmit(e) {
    attemptUpdateProfile(
      currentFirstName,
      currentLastName,
      currentBio,
      userToken,
      currentUser._id
    );
    navigate("/profile");
  }

  function handleFirstNameChange(e) {
    setCurrentFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setCurrentLastName(e.target.value);
  }

  function handleBioChange(e) {
    setCurrentBio(e.target.value);
  }

  useEffect(() => {
    if (!loading) {
      setCurrentFirstName(userDetails.profile[0].first_name);
      setCurrentLastName(userDetails.profile[0].last_name);
      setCurrentBio(userDetails.profile[0].bio);
    }
  }, [loading]);

  if (error || error1) return <p>A Network Error has occurred. </p>;
  if (loading || loading1) return <p>Loading...</p>;

  return (
    <div className="page">
      {currentUser ? (
        <div className="profilePage">
          <div className="profileSideBar">
            <div className="userBox">
              <h2 className="userName">
                {userDetails.profile[0].user.username}
              </h2>
              <div className="pictureBox">
                <img
                  className="profilePicture"
                  src={userPicture}
                  alt="Profile Picture"
                />
              </div>
              <div className="updateUserInfo">
                <input
                  type="text"
                  className="updateFirst"
                  value={currentFirstName}
                  onChange={handleFirstNameChange}
                  placeholder="First Name"
                />{" "}
                <input
                  type="text"
                  className="updateLast"
                  value={currentLastName}
                  onChange={handleLastNameChange}
                  placeholder="Last Name"
                />
                <textarea
                  name=""
                  className="updateBio"
                  value={currentBio}
                  onChange={handleBioChange}
                  placeholder="Bio"
                ></textarea>
                <button id="profileButton" onClick={updateProfileSubmit}>
                  Update Profile
                </button>
              </div>
            </div>
            <br />
            <div className="followingBox">
              <h3 className="followingTitle">User is Following</h3>
              <div className="followingList">
                {userDetails.following.length ? (
                  <>
                    {userDetails.following.map((user, index) => {
                      return (
                        <button id="profileButton" key={user._id}>
                          <Link className={user._id} id="profileLink">
                            {user.username}
                          </Link>
                        </button>
                      );
                    })}
                  </>
                ) : (
                  <p>No Users</p>
                )}
              </div>
            </div>
            <br />
            <div className="followersBox">
              <h3 className="followersTitle">User's Followers</h3>
              <div className="followersList">
                {userDetails.followed.length ? (
                  <>
                    {userDetails.followed.map((user, index) => {
                      return (
                        <button id="profileButton" key={user._id}>
                          <Link className={user._id} id="profileLink">
                            {user.username}
                          </Link>
                        </button>
                      );
                    })}
                  </>
                ) : (
                  <p>No Users</p>
                )}
              </div>
            </div>
          </div>
          <div className="profileNewsFeed">
            <h2>Posts</h2>
            <div className="postBox">
              {userDetails.posts.length ? (
                <>
                  {userDetails.posts.map((post, index) => {
                    return (
                      <button key={post._id}>
                        <Link className="postLink">
                          <div className="postTitleBox">
                            <h3>{post.title}</h3>
                          </div>
                          <div className="postTextBox">
                            <p>{post.text}</p>
                          </div>
                          <div className="postBar">
                            <div className="likeBar">
                              <img
                                src={likeIcon}
                                className="likeIcon"
                                alt="Like Icon"
                              />
                              <p>({post.likes.length})</p>
                            </div>
                            <Link className="commentLink"> Comments</Link>
                          </div>
                        </Link>
                      </button>
                    );
                  })}
                </>
              ) : (
                <p className="noPosts">No Posts</p>
              )}
            </div>
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
