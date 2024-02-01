import { useState, useEffect, useCallback } from "react";

const useRemoveFriend = () => {
  const [removedFriend, setRemovedFriend] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const attemptRemoveFriend = useCallback((currentUser, removedFriend) => {
    fetch(`https://parleyserver-production.up.railway.app/parley/friend/remove `, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        currentUser,
        removedFriend,
      }),
    })
      .then(async (response) => {
        try {
          let data = await response.json();
          setRemovedFriend(data);
        } catch (error) {
          setError(error);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return { removedFriend, error, loading, attemptRemoveFriend };
};

export default useRemoveFriend;
