import React, { useState } from "react";
import { signup } from "api/auth";
import { Link } from "react-router-dom";

export const SignupForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signup(username, password);
          setUsername("");
          setPassword("");
        }}
      >
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Signup</button>
      </form>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};
