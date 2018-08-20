exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("users", function(table) {
      table.increments("id").primary();
      table.string("role");
      table.string("username").unique();
      table
        .string("email")
        .unique()
        .notNullable();
      table.string("password").notNullable();
      table.string("token");

      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("users")]);
};
