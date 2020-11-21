import React, { useState } from "react";
import { signup } from "api/auth";

export const SignupForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        signup(username, password);
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
