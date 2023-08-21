import "../stylesheets/login.css";
import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
const Login = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, // spread operator if we enter in name field then it will not affect other fields like password email reEnterPassword
      [name]: value,
    });
  };
  const login = () => {
    axios
      .post("http://localhost:9002/login", user)
      .then((res) => alert(res.data.message));
  };
  return (
    <div className="common">
    <div className="login">
      {console.log("User", user)}
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Enter your email"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter your password"
        onChange={handleChange}
      ></input>
      <div className="button" onClick={() => navigate("/")}>
        Login
      </div>
      <div>or</div>
      <div className="button" onClick={() => navigate("/signup")}>Register</div>
    </div>
    </div>
  );
};

export default Login;
