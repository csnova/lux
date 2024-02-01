import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useUpdateProfile = () => {
  const [updatedProfile, setUpdatedProfile] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const attemptUpdateProfile = useCallback(
    (userID, token, name, bio, band, movie, book, setCurrentProfile) => {
      return fetch(`https://parleyserver-production.up.railway.app/parley/profile/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userID, token, name, bio, band, movie, book }),
      })
        .then(async (response) => {
          try {
            let data = await response.json();
            setUpdatedProfile(data);
            setCurrentProfile(data);
            navigate("/profile");
          } catch (error) {
            setError(error);
          }
        })
        .finally(() => setLoading(false));
    },
    []
  );

  return { updatedProfile, error, loading, attemptUpdateProfile };
};

export default useUpdateProfile;
