import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import Summary from "./Summary";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import SignUp from "./SignUp";
import Profile from "./Profile";
import UpdateProfile from "./ProfileUpdate";
import Threads from "./Threads";
import NotViewedThreads from "./UnViewedMessages";
import ThreadMessages from "./ThreadMessages";
import NewMessage from "./NewMessage";
import UserProfile2 from "./userProfile2";
import UserProfile1 from "./userProfile1";
import FriendsList from "./FriendsList";
import AddFriends from "./AddFriend";
import FriendsRequests from "./FriendRequests";

function Home() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentProfile, setCurrentProfile] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [threadViewed, setThreadViewed] = useState(null);
  const [userViewed, setUserViewed] = useState(null);
  const [currentTo, setCurrentTo] = useState("");
  const [currentFriend, setCurrentFriend] = useState("");
  const { page } = useParams();

  function checkStorage() {
    if (!localStorage.getItem("userToken")) {
      localStorage.setItem("userToken", null);
      localStorage.setItem("userDetails", null);
    } else {
      setUserToken(localStorage.getItem("userToken"));
      setCurrentUser(JSON.parse(localStorage.getItem("userDetails")));
    }
  }

  useEffect(() => {
    checkStorage();
  }, []);

  return (
    <>
      <div className="topBar">
        <div className="logoBar">
          <img src={logo} alt="" className="logo" />
          <p className="title">Parley</p>
        </div>
        <div className="currentUserBox">
          {currentUser ? (
            <Link to="/profile" className="currentUserButton">
              {currentUser.username}
            </Link>
          ) : (
            <>
              <Link to="/sign-in" className="signInButton">
                Sign In
              </Link>
              <Link to="/sign-up" className="signInButton">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>

      <div className="centerPage">
        <div className="sideBar">
          {currentUser ? (
            <>
              <Link to="/" className="linkBox">
                Home
              </Link>
              <br />
              <div className="linkBoxContainer">
                <h3>Friends</h3>
                <Link to="/friendsList" className="subLinkBox">
                  Friend List
                </Link>
                <Link to="/friendRequests" className="subLinkBox">
                  Friend Requests
                </Link>
                <Link to="/addFriends" className="subLinkBox">
                  Add Friend
                </Link>
              </div>
              <br />
              <div className="linkBoxContainer">
                <h3>Messages</h3>
                <Link to="/newMessage" className="subLinkBox">
                  Create Message
                </Link>
                <Link to="/notViewed" className="subLinkBox">
                  Unread Messages
                </Link>
                <Link to="/threads" className="subLinkBox">
                  All Messages
                </Link>
              </div>
              <br />
              <Link to="/sign-out" className="linkBox">
                Sign Out
              </Link>
            </>
          ) : (
            <>
              <Link to="/sign-in" className="linkBox">
                Sign In
              </Link>
              <br />
              <Link to="/sign-up" className="linkBox">
                Sign Up
              </Link>
            </>
          )}
        </div>

        <div className="mainPage">
          <div className="pageSpecificInfo">
            {page === "sign-in" ? (
              <SignIn
                setUserToken={setUserToken}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            ) : page === "sign-out" ? (
              <SignOut
                setUserToken={setUserToken}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            ) : page === "sign-up" ? (
              <SignUp
                setUserToken={setUserToken}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            ) : page === "profile" ? (
              <Profile
                currentUser={currentUser}
                currentProfile={currentProfile}
                setCurrentProfile={setCurrentProfile}
              />
            ) : page === "updateProfile" ? (
              <UpdateProfile
                currentUser={currentUser}
                userToken={userToken}
                currentProfile={currentProfile}
                setCurrentProfile={setCurrentProfile}
              />
            ) : page === "threads" ? (
              <Threads
                currentUser={currentUser}
                setThreadViewed={setThreadViewed}
                setUserViewed={setUserViewed}
              />
            ) : page === "notViewed" ? (
              <NotViewedThreads
                currentUser={currentUser}
                setThreadViewed={setThreadViewed}
                setUserViewed={setUserViewed}
              />
            ) : page === "threadMessages" ? (
              <ThreadMessages
                currentUser={currentUser}
                threadViewed={threadViewed}
                setUserViewed={setUserViewed}
                setCurrentTo={setCurrentTo}
                setCurrentFriend={setCurrentFriend}
              />
            ) : page === "newMessage" ? (
              <NewMessage
                currentUser={currentUser}
                setThreadViewed={setThreadViewed}
                currentTo={currentTo}
                setCurrentTo={setCurrentTo}
                currentFriend={currentFriend}
                setCurrentFriend={setCurrentFriend}
              />
            ) : page === "userProfile1" ? (
              <UserProfile1
                currentUser={currentUser}
                userViewed={userViewed}
                setUserViewed={setUserViewed}
                setCurrentTo={setCurrentTo}
                setCurrentFriend={setCurrentFriend}
              />
            ) : page === "userProfile2" ? (
              <UserProfile2
                currentUser={currentUser}
                userViewed={userViewed}
                setUserViewed={setUserViewed}
                setCurrentTo={setCurrentTo}
                setCurrentFriend={setCurrentFriend}
              />
            ) : page === "friendsList" ? (
              <FriendsList
                currentUser={currentUser}
                setUserViewed={setUserViewed}
              />
            ) : page === "friendRequests" ? (
              <FriendsRequests
                currentUser={currentUser}
                setUserViewed={setUserViewed}
              />
            ) : page === "addFriends" ? (
              <AddFriends
                currentUser={currentUser}
                setUserViewed={setUserViewed}
              />
            ) : (
              <Summary currentUser={currentUser} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
