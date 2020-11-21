import axios from "axios";

export const instance = axios.create({
  baseURL: "https://todo-nest-rest-api.herokuapp.com/",
  headers:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFuZHJleSIsImlhdCI6MTYwNTM4MTk1NywiZXhwIjoxNjA1Mzg1NTU3fQ.-ERn5ZtT7JMlxvIZmzIRID0tGLju5ErMQPG7uRNSafc",
});
