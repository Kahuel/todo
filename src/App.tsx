import React from "react";
import {
  Form,
  Tasks,
  LocalizationBar,
  StatusBar,
  LoginForm,
  SignupForm,
} from "components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { tasksApi } from "./api/tasks";

tasksApi.getTasks().then(console.log);

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <SignupForm />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/taskManager">
          <LocalizationBar />
          <StatusBar />
          <Form />
          <Tasks />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
