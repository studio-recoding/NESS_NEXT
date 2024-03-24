"use client";
import { getToken } from "@/app/login/oauth/google/auth";
import { useEffect } from "react";

const Google = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const authorizationCode = urlParams.get("code");
    if(authorizationCode){
        const jwtToken = getToken(authorizationCode);
        console.log(jwtToken);
    }

  }, []);
};

export default Google;
