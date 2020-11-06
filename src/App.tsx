import React from "react";
import { Form, Tasks, LocalizationBar, StatusBar } from "components";

const App: React.FC = () => {
  return (
    <div>
      <LocalizationBar />
      <StatusBar />
      <Form />
      <Tasks />
    </div>
  );
};

export default App;
