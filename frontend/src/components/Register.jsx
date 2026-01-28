import React, { useState } from "react";
import axios from "axios";
import "../../src/App.css";

// input field text , password , email , file => onchange
// checkbox => onchange
// button type => submit
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleformSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios({
        url: "http://localhost:8000/user/register",
        method: "POST",
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="form">
      <form action="">
        <h1>Register</h1>

        {/* for name */}
        <input type={username} placeholder="username" />
        <br />
        <br />
        {/* for email */}
        <input type={email} placeholder="email" />
        <br />
        <br />
        {/* for password */}
        <input type={password} placeholder="password" />
        <br />
        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
