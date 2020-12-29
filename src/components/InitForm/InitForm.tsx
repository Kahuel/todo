import React from "react";
import { Link, Redirect } from "react-router-dom";
import { getCookie } from "utils/cookie";

export const InitForm: React.FC = () => {
  const token = getCookie("token");
  if (token !== "") {
    return <Redirect to="/taskManager" />;
  }
  return (
    <div>
      <ul>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
        <li>
          <Link to="/signin">Sign in</Link>
        </li>
      </ul>
    </div>
  );
};
