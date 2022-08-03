import React, { useEffect, useState } from "react";
import AppRouter from "./AppRouter";
//import AppRouter from "./AppRouter";

const App = () => {
  const [init, setInit] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  const refreshUser = () => {
    // get user info from backend
    let user;

    //set user info at frontend
  };

  useEffect(() => {
    //after get user info from backend
    //set LoggedIn
  }, []);

  return (
    <>
      {init ? (
        <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />
      ) : (
        "loading..."
      )}
    </>
  );
};

export default App;
