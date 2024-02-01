import { useState, useEffect, useCallback } from "react";

const useAddFriend = () => {
  const [addFriend, setAddFriend] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const attemptAddFriend = useCallback((currentUser, friendRequest) => {
    fetch(`https://parleyserver-production.up.railway.app/parley/friend/request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        currentUser,
        friendRequest,
      }),
    })
      .then(async (response) => {
        try {
          let data = await response.json();
          setAddFriend(data);
        } catch (error) {
          setError(error);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return { addFriend, error, loading, attemptAddFriend };
};

export default useAddFriend;
