
exports.up = function(knex) {
    return knex.schema.createTable('departments', function (table){
        table.increments('departmentId').primary();
        table.string('departmentName').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('departments');
};
