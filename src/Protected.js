import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";

const Protected = ({ children }) => {
  const { user, loading } = UserAuth(); // Get both user and loading state

  // Show a loading spinner or text until Firebase finishes initializing
  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  // If still no user after loading, redirect to login
  if (!user) {
    return <Navigate to="/" />;
  }

  // Otherwise, user is authenticated — show the page
  return children;
};

export default Protected;
