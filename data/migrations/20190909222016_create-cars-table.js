
exports.up = function (knex) {
    return knex.schema
        .createTable('cars', function (table) {
            table.increments('id');
            table.string('vin', 255)
                .notNullable();
            table.text('make', 255)
                .notNullable();
            table.text('model', 255)
                .notNullable();
            table.integer('milleage', 20)
                .notNullable();
            table.text('transmission_type', 255);
            table.text('title_status', 255);
        })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cars')

};
