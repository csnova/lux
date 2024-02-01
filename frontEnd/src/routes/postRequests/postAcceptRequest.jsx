import { useState, useEffect, useCallback } from "react";

const useAcceptRequest = () => {
  const [acceptFriend, setAcceptFriend] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const attemptAcceptFriend = useCallback((currentUser, approvedFriend) => {
    fetch(`https://parleyserver-production.up.railway.app/parley/friend/accept`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        currentUser,
        approvedFriend,
      }),
    })
      .then(async (response) => {
        try {
          let data = await response.json();
          setAcceptFriend(data);
        } catch (error) {
          setError(error);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return { acceptFriend, error, loading, attemptAcceptFriend };
};

export default useAcceptRequest;
