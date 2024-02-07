import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import likeIcon from "../../assets/like.png";
import getNewsFeed from "../getRequests/getNewsFeed";
import Moment from "moment";

const Summary = ({ currentUser, setPostViewed }) => {
  const { postList, error, loading } = getNewsFeed(currentUser._id);

  function postSelect(e) {
    let postID = e.target.className;
    setPostViewed(postID);
  }

  if (error) return <p>A Network Error has occurred. </p>;
  if (loading) return <p>Loading...</p>;
  return (
    <div className="page">
      {currentUser ? (
        <div className="page">
          <div className="profileNewsFeed">
            <h2>News Feed</h2>
            {postList.length ? (
              <div className="allPosts">
                {postList.map((post, index) => {
                  return (
                    <div className="postBox" key={post._id}>
                      <button onClick={postSelect}>
                        <Link id="postLink" className={post._id} to="/post">
                          <div id="postTitleBox" className={post._id}>
                            <h3 className={post._id}>{post.title}</h3>
                          </div>
                          <div id="postTextBox" className={post._id}>
                            <p className={post._id}>{post.text}</p>
                          </div>
                          <div id="postBar" className={post._id}>
                            <div id="likeBar" className={post._id}>
                              <img
                                src={likeIcon}
                                className={post._id}
                                id="likeIcon"
                                alt="Like Icon"
                              />
                              <p className={post._id}>({post.likes.length})</p>
                            </div>
                          </div>
                        </Link>
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p>No Posts</p>
            )}
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

export default Summary;
