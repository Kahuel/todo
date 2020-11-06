import React from "react";
import { Form, Tasks, LocalizationBar } from "components";

const App: React.FC = () => {
  return (
    <div>
      <LocalizationBar />
      <Form />
      <Tasks />
    </div>
  );
};

export default App;
