const environment = process.env.NODE_ENV || "development";
const configuration = require("../knexfile")[environment];
const database = require("knex")(configuration);

getUsers = (request, response) => {
  database("users")
    .select()
    .then(users => {
      response.status(200).json(users);
    })
    .catch(error => {
      response.status(500).json({ error });
    });
};

getUser = (request, response) => {
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
};

module.exports = {
  getUsers,
  getUser
};
