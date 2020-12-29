import React from "react";
import {
  Form,
  Tasks,
  LocalizationBar,
  StatusBar,
  SigninForm,
  SignupForm,
  InitForm,
} from "components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <InitForm />
        </Route>
        <Route path="/signup">
          <SignupForm />
        </Route>
        <Route path="/signin">
          <SigninForm />
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
