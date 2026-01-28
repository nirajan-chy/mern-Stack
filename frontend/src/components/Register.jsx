import React, { useState } from "react";
import axios from "axios";
import "../../src/App.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleformSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/user/register", {
        username,
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleformSubmit}>
        <h1>Register</h1>

        {/* username */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <br />
        <br />

        {/* email */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <br />

        {/* password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
