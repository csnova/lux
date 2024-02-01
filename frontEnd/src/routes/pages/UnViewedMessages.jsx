import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import getNotViewedThreads from "../getRequests/getUnReadThreads";
import viewIcon from "../../assets/show.png";

const NotViewedThreads = ({ currentUser, setThreadViewed, setUserViewed }) => {
  const { unreadThreads, error, loading } = getNotViewedThreads(
    currentUser._id
  );
  if (error) return <p>A Network Error has occurred. </p>;
  if (loading) return <p>Loading...</p>;
  return (
    <div className="page">
      {currentUser ? (
        <div className="page">
          <h2 className="tableHeader">Unread Messages</h2>
          <div className="tableBox">
            <table className="genericTable">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Thread</th>
                </tr>
              </thead>
              <tbody>
                {unreadThreads.unViewed.map((thread, index) => {
                  function onUserClick(e) {
                    let userID = e.target.className;
                    setUserViewed(userID);
                  }

                  function onThreadClick(e) {
                    let threadID = e.target.className;
                    setThreadViewed(threadID);
                  }

                  const threadButtonClass = thread.thread;
                  const userButtonClass = thread.from._id;
                  const friendName = thread.from.username;
                  return (
                    <tr key={thread._id}>
                      <td>
                        <button onClick={onUserClick}>
                          <Link
                            to="/userProfile1"
                            className={userButtonClass}
                            id="userLink"
                          >
                            {friendName}
                          </Link>
                        </button>
                      </td>
                      <td>
                        <button onClick={onThreadClick}>
                          <Link to="/threadMessages">
                            <img
                              src={viewIcon}
                              alt="link to view thread details"
                              id="tableIcon"
                              className={threadButtonClass}
                            />
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

export default NotViewedThreads;
