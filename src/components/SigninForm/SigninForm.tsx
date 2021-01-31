import React, { useState } from "react";
import { signin } from "api/auth";
import { Redirect, Link } from "react-router-dom";

export const SigninForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  if (redirect === true) {
    return <Redirect to="/taskManager" />;
  }
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await signin(username, password);
          setRedirect(true);
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
        <button>Signin</button>
      </form>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};
