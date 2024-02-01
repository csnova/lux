import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import getFriendsList from "../getRequests/getFriendsList";
import useAcceptRequest from "../postRequests/postAcceptRequest";

const FriendsRequests = ({ currentUser, setUserViewed }) => {
  const { friendsList, error1, loading1 } = getFriendsList(currentUser._id);
  const { attemptAcceptFriend } = useAcceptRequest();
  if (error1) return <p>A Network Error has occurred. </p>;
  if (loading1) return <p>Loading...</p>;
  return (
    <div className="page">
      {currentUser ? (
        <div className="page">
          <h2 className="tableHeader">Your Friend Requests</h2>
          <div className="tableBox">
            <table className="genericTable">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Accept</th>
                </tr>
              </thead>
              <tbody>
                {friendsList.awaitingApproval.map((friend, index) => {
                  function onUserClick(e) {
                    let userID = e.target.className;
                    setUserViewed(userID);
                  }

                  function onAcceptClick(e) {
                    let userID = e.target.className;
                    attemptAcceptFriend(currentUser._id, userID);
                    setUserViewed(userID);
                  }

                  let friendClass = friend._id;

                  return (
                    <tr key={friend._id}>
                      <td>
                        <button onClick={onUserClick} id="userLink">
                          <Link to="/userProfile1" className={friendClass}>
                            {friend.username}
                          </Link>
                        </button>
                      </td>
                      <td>
                        <button onClick={onAcceptClick} id="userLink">
                          <Link to="/userProfile1" className={friendClass}>
                            Accept
                          </Link>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
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

export default FriendsRequests;
