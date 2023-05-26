import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import googleIcon from "./google.png";
import { google_login, scope, server_baseurl } from "./contants";
const LoginPage = () => {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const tokenId = tokenResponse.access_token;
        let res = await fetch(`${server_baseurl}${google_login}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ tokenId }),
        });

        const data = await res.json();
        const backendToken = data.token;
        localStorage.setItem("token", backendToken);
        alert("Authentication Successfull");
      } catch (error) {
        console.error("Login error:", error);
      }
    },
    scope: scope,
    onError: () => {
      console.log("login failed");
    },
  });
  return (
    <div className="container-google-login">
      <div className="google-login" style={{ margin: "15%" }}>
        <button
          variant="outlined"
          onClick={() => login()}
          className="google-button"
        >
          <img
            src={googleIcon}
            alt="google-logo"
            className="google-icon"
            style={{ height: 100 }}
          />
          Sync Youtube
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
