import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../routes/Main";
import Home from "../routes/Home";
import Profile from "../routes/Profile";

const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => {
  return (
    <Router>
      <Routes
        style={{
          maxWidth: 890,
          width: "100%",
          margin: "0 auto",
          marginTop: 80,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {isLoggedIn ? (
          <>
            <Route exact path="/" element={<Home userObj={userObj} />} />
            <Route
              path="/profile"
              element={<Profile useerObj={userObj} refreshUser={refreshUser} />}
            />
          </>
        ) : (
          <Route exact path="/" element={<Main />} />
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;
