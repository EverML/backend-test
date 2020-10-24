
exports.up = function(knex) {
  return knex.schema.createTable('events',(table)=>{
      table.increments();
      table.string('title').notNullable();
      table.string('eventImage').notNullable();
      table.string('description').notNullable();
      table.string('location').notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('events');
};
