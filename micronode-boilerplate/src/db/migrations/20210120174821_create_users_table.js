import {USERS} from './../../constants/table';

/**
 * Create table `users`.
 *
 * @param {Object} knex
 * @returns {Promise}
 */
export function up(knex) {
    return knex.schema.createTable(USERS, table => {
      table.dropPrimary()

      table.primary('user_id')
      table.increments('sn');
      table.string('user_id');
      table.string('user_name').notNullable();
      table.string('user_email').unique().notNullable();
      table.string('user_password').notNullable();
      table.datetime('created_at').defaultTo(knex.fn.now()).notNullable();
      table.datetime('updated_at');
      table.boolean('active').defaultTo(true);
    });
  }
  
  /**
   * Drop `users`.
   *
   * @param {Object} knex
   * @returns {Promise}
   */
  export function down(knex) {
    return knex.schema.dropTable(USERS);
  }