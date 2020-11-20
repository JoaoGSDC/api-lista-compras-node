import Knex from 'knex';

export const up = async (knex: Knex) => {
    return knex.schema.createTable('Items', (table: any) => {
        table.increments('id').primary();
        table.string('item').notNullable();
    });
}

export const down = async (knex: Knex) => {
    return knex.schema.dropTable('Items')
}
