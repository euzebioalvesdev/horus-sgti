
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table){
        table.increments('userId').primary();
        table.string('userFullName').notNullable();
        table.string('userEmail').notNullable();
        table.string('userDepartment').notNullable();


        table.foreign('userDepartment').references('departmentId').inTable('departments');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
