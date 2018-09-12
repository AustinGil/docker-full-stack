const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const bodyParser = require("body-parser");
const app = require("express")();

app.use(require("helmet")());
app.use(require("cors")());
app.use(require("morgan")("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

const User = require("./controllers/User");

app.get("/", (request, response) => {
  response.json({
    response: "hello world"
  });
});
app.get("/health-check", (req, res) => res.sendStatus(200));

app.post("/register", User.register);
app.get("/users", User.getUsers);
app.get("/users/:id", User.getUser);

const port = process.env.NODE_PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
