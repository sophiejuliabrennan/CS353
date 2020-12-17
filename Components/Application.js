import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Addplants from "./addplants";
import UserProvider from "../providers/UserProvider";
import ProfilePage from "./ProfilePage";
import { UserContext } from "../providers/UserProvider";
import PasswordReset from "./PasswordReset";
import Weather from "./weather";
import Dashboard from "./dashboard";




function Application() {
  const user = useContext(UserContext);
  return (
        user ?
        <ProfilePage />
      :
        <Router>
          <SignUp path="signUp" />
          <SignIn path="signin" />
          <PasswordReset path = "passwordReset" />
          <Addplants path = "addplants"/>
          <Weather path = "weather"/>
          <Dashboard path = "dashboard"/>
          <ProfilePage path = "profilepage"/>
        
        </Router>
      
  );
}

export default Application;
