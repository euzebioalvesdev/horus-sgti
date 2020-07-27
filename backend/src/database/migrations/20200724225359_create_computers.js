
exports.up = function(knex) {
    return knex.schema.createTable('computers', function (table){
        table.increments('id').primary();
        table.string('hostname').notNullable();
        table.string('marca').notNullable();
        table.string('modelo');
        table.string('tipo');
        table.string('departamento').unsigned().notNullable();
        table.string('usuario').unsigned().notNullable();
        table.string('so').notNullable();
        table.string('senha').notNullable();
        table.string('senhaAdmin').notNullable();
        table.string('ipAddress').notNullable();
        table.string('macAddress').notNullable();
        table.string('interface').notNullable();
        table.string('antivirus').notNullable();
        table.foreign('departamento').references('departmentId').inTable('departments');
        table.foreign('usuario').references('userId').inTable('users');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('computers');
};
