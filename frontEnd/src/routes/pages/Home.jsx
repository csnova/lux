import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import getUserList from "../getRequests/getAllUsers";
import Summary from "./Summary";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import SignUp from "./SignUp";
import Threads from "./Threads";
import NewMessage from "./NewMessage";
import ThreadMessages from "./ThreadMessages";
import UserProfile from "./UserProfile";
import Profile from "./Profile";
import UpdateProfile from "./UpdateProfile";

function Home() {
  const { userList, error, loading } = getUserList();
  const [currentUser, setCurrentUser] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [threadViewed, setThreadViewed] = useState(null);
  const [postViewed, setPostViewed] = useState(null);
  const [userViewed, setUserViewed] = useState(null);
  const [currentTo, setCurrentTo] = useState("");
  const [typedUser, setTypedUser] = useState([]);
  const [searchedUser, setSearchedUser] = useState([]);
  const [possibleUser, setPossibleUser] = useState([]);
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

  useEffect(() => {
    if (userList) {
      if (searchedUser.length === 0) {
        setPossibleUser([]);
      } else {
        let current = searchedUser.toLowerCase();
        let length = current.length;
        let userObject = [];
        for (let i = 0; i < userList.length; i++) {
          if (userList[i]._id !== currentUser._id) {
            let user = userList[i].username;
            user = String(user);
            user = user.slice(0, length);
            if (user === current)
              userObject.push({
                username: userList[i].username,
                _id: userList[i]._id,
              });
            setPossibleUser(userObject);
          }
        }
      }
    }
  }, [searchedUser]);

  function handleUserChange(e) {
    setSearchedUser(e.target.value);
  }
  function setUserId(e) {
    let userID = e.target.className;
    setUserViewed(userID);
    setSearchedUser("");
  }

  if (error) return <p>A Network Error has occurred. </p>;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="topBar">
        <div className="logoBar">
          <img src={logo} alt="" className="logo" />
          <p className="title">
            <Link to="/">Lux</Link>
          </p>
        </div>
        <div className="currentUserBox">
          {currentUser ? (
            <>
              <div className="searchBox">
                <input
                  className="searchBoxInput"
                  type="text"
                  placeholder="search for users"
                  onChange={handleUserChange}
                  value={searchedUser}
                />
                <div id="userOptions">
                  {possibleUser.map((user, index) => {
                    return (
                      <button
                        onClick={setUserId}
                        id="selectedUser"
                        key={user._id}
                      >
                        <Link
                          to="/userProfile"
                          className={user._id}
                          id="userOptionsLink"
                        >
                          {user.username}
                        </Link>
                      </button>
                    );
                  })}
                </div>
              </div>

              <Link to="/threads" className="currentUserButton">
                Messages
              </Link>
              <Link to="/profile" className="currentUserButton">
                {currentUser.username}
              </Link>
              <Link to="/sign-out" className="currentUserButton">
                Sign-Out
              </Link>
            </>
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
            ) : page === "threads" ? (
              <Threads
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
                setTypedUser={setTypedUser}
              />
            ) : page === "newMessage" ? (
              <NewMessage
                currentUser={currentUser}
                setThreadViewed={setThreadViewed}
                currentTo={currentTo}
                setCurrentTo={setCurrentTo}
                typedUser={typedUser}
                setTypedUser={setTypedUser}
              />
            ) : page === "userProfile" ? (
              <UserProfile
                currentUser={currentUser}
                userViewed={userViewed}
                setUserViewed={setUserViewed}
                setCurrentTo={setCurrentTo}
                setTypedUser={setTypedUser}
                setPostViewed={setPostViewed}
              />
            ) : page === "profile" ? (
              <Profile
                currentUser={currentUser}
                setUserViewed={setUserViewed}
                setPostViewed={setPostViewed}
                setTypedUser={setTypedUser}
              />
            ) : page === "updateProfile" ? (
              <UpdateProfile currentUser={currentUser} userToken={userToken} />
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
