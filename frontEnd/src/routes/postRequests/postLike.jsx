import { useState, useEffect, useCallback } from "react";

const useLikePost = () => {
  const [likePost, setLikePost] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const attemptLikePost = useCallback((userID, postID) => {
    fetch(`http://localhost:3000/lux/post/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID,
        postID,
      }),
    })
      .then(async (response) => {
        try {
          let data = await response.json();
          setLikePost(data);
        } catch (error) {
          setError(error);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return { likePost, error, loading, attemptLikePost };
};

export default useLikePost;
