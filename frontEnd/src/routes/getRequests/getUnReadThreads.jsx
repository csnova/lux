import { useState, useEffect } from "react";

const getNotViewedThreads = (userID) => {
  const [unreadThreads, setUnreadThreads] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://parleyserver-production.up.railway.app/parley/thread/unViewed/${userID} `, {
      method: "GET",
    })
      .then(async (response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        try {
          const data = await response.json();
          setUnreadThreads(data);
        } catch (error) {
          setError(error);
        }
      })
      .finally(() => setLoading(false));
  }, []);
  return { unreadThreads, error, loading };
};

export default getNotViewedThreads;
