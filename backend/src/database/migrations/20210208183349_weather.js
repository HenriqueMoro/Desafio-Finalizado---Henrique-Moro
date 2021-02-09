
exports.up = function(knex) {
    return knex.schema.createTable('weather', function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('country').notNullable();
      table.string('localtime').notNullable();
      table.integer('temperature').notNullable();
      table.string('icons').notNullable();
      table.integer('wind').notNullable();
      table.integer('pressure').notNullable();
      table.integer('precip').notNullable();
      table.integer('humidity').notNullable();
      table.integer('feelslike').notNullable();
      table.integer('visibility').notNullable();
  
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('weather');
};