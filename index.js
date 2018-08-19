require("dotenv").config();
const express = require("express");
const app = express();

const User = require("./models/User");

app.get("/", (request, response) => {
  response.send("hello world");
});

app.get("/users", User.getUsers);
app.get("/users/:id", User.getUser);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
