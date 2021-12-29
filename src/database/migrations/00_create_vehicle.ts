import { Knex } from 'knex'


export async function up(knex: Knex) {
    return knex.schema.createTable('vehicles', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('bio').notNullable(); //Bio is Color, Tag, Year and other info.
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('vehicles');
}