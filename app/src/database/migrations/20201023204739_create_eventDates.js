

exports.up = function(knex) {
    return knex.schema.createTable('event_dates',(table)=>{
        table.integer('event_id').unsigned();
        table.string('event_date');
        table.string('event_time');
        table.foreign('event_id').references('id').inTable('events');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('event_dates');
};

