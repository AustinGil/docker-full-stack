const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// const User = require("./controllers/User");

app.get("/", (request, response) => {
  response.json({
    response: "hello world"
  });
});

// app.post("/register", User.register);
// app.get("/users", User.getUsers);
// app.get("/users/:id", User.getUser);

const port = process.env.NODE_PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
