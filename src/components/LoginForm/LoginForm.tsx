import React, { useState } from "react";
import { signin } from "api/auth";

export const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        signin(username, password);
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
  );
};
