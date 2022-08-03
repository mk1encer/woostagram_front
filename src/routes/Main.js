import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
const Main = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    let data;
    try {
      if (newAccount) {
        try {
          console.log("create user");
          //data=await(createuser)
        } catch (error) {
          alert("계정 등록 실패!");
        }
      } else {
        //로그인
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);
  const onSocialClick = async (event) => {
    let provider;
    const {
      target: { name },
    } = event;
    // sicial login
  };

  return (
    <div className="mainContainer">
      <FontAwesomeIcon
        icon={faInstagram}
        color={"FB3958"}
        size="3x"
        style={{ marginBottom: 30 }}
      />
      <form onSubmit={onSubmit} className="container">
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
          value={email}
          onChange={onChange}
          className="mainInput"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
          value={password}
          onChange={onChange}
          className="mainInput"
        />
        <input
          type="submit"
          className="mainInput mainSubmit"
          value={newAccount ? "Sign Up" : "Sign In"}
        />
      </form>
      <span onClick={toggleAccount} className="signSwitch">
        {newAccount ? "Sign In" : "Sign Up"}
      </span>
      <div className="authBtns">
        <button onClick={onSocialClick} name="google" className="authBtn">
          Continue with Google <FontAwesomeIcon icon={faGoogle} />
        </button>
        <button onClick={onSocialClick} name="github" className="authBtn">
          Continue with Github <FontAwesomeIcon icon={faGithub} />
        </button>
      </div>
    </div>
  );
};
export default Main;
