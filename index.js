require("dotenv").config();
const express = require("express");

const environment = process.env.NODE_ENV || "development";
const db_config = require("./knexfile")[environment];
const database = require("knex")(db_config);
database.on("query", function(queryData) {
  console.log(queryData);
});

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
  response.send("hello world");
});

app.get("/users", (request, response) => {
  database("users")
    .select()
    .then(users => {
      response.status(200).json(users);
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.get("/users/:id", (request, response) => {
  database("users")
    .where("id", request.params.id)
    .select()
    .then(users => {
      if (users.length) {
        response.status(200).json(users);
      } else {
        response.status(404).json({
          error: `Could not find paper with id ${request.params.id}`
        });
      }
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
