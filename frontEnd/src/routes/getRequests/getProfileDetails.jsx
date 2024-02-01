import { useState, useEffect } from "react";

const getProfileDetails = (userID, setCurrentProfile) => {
  const [profileDetails, setProfileDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://parleyserver-production.up.railway.app/parley/profile/${userID} `, {
      method: "GET",
    })
      .then(async (response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        try {
          const data = await response.json();
          setProfileDetails(data);
          if (setCurrentProfile) setCurrentProfile(data);
        } catch (error) {
          setError(error);
        }
      })
      .finally(() => setLoading(false));
  }, []);
  return { profileDetails, error, loading };
};

export default getProfileDetails;
