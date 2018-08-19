require("dotenv").config();
const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const User = require("./models/User");

app.get("/", (request, response) => {
  response.send("hello world");
});

app.post("/register", User.register);
app.get("/users", User.getUsers);
app.get("/users/:id", User.getUser);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
