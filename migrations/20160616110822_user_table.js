
exports.up = function(knex, Promise) {
  return knex.schema.createTable("user", function(table){
    table.increments();
    table.string('user_name');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("user");
};
