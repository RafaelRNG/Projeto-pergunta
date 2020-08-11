
exports.up = function (knex) {
     return knex.schema.createTable("answers", table => {
          table.increments("id").primary();
          table.text("questionAnswers").notNullable();
          table.string("userName").notNullable();
          table.boolean("done", false);
          table.integer("question_id")
               .references("id")
               .inTable("questions");
     });
};

exports.down = function (knex) {
     return knex.schema.dropTable("answers");
};
