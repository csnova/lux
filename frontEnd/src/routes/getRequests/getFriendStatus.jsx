import { useState, useEffect } from "react";

const getFriendStatus = (userID, friendID) => {
  const [friendStatus, setFriendStatus] = useState(null);
  const [error1, setError] = useState(null);
  const [loading1, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://parleyserver-production.up.railway.app/parley/friend/status/${userID}/${friendID} `, {
      method: "GET",
    })
      .then(async (response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        try {
          const data = await response.json();
          setFriendStatus(data);
        } catch (error) {
          setError(error);
        }
      })
      .finally(() => setLoading(false));
  }, []);
  return { friendStatus, error1, loading1 };
};

export default getFriendStatus;
