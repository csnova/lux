import { useState, useEffect } from "react";

const getFriendsList = (userID) => {
  const [friendsList, setFriendsList] = useState(null);
  const [error1, setError] = useState(null);
  const [loading1, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://parleyserver-production.up.railway.app/parley/friend/${userID} `, {
      method: "GET",
    })
      .then(async (response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        try {
          const data = await response.json();
          setFriendsList(data);
        } catch (error) {
          setError(error);
        }
      })
      .finally(() => setLoading(false));
  }, []);
  return { friendsList, error1, loading1 };
};

export default getFriendsList;
