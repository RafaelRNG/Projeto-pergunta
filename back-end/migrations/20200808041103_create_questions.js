
exports.up = function (knex) {
     return knex.schema.createTable("questions", table => {
          table.increments("id").primary();
          table.string("title").notNullable();
          table.text("questionBody").notNullable();
          table.string("user").notNullable();
          table.string("sector").notNullable();
     });
};

exports.down = function (knex) {
     return knex.schema.dropTable("questions");
};
