import {MODULES} from './../../constants/table';

/**
 * Create table `modules`.
 *
 * @param {Object} knex
 * @returns {Promise}
 */
export function up(knex) {
    return knex.schema.createTable(MODULES, table => {
      table.dropPrimary()

      table.primary('module_id')
      table.increments('sn');
      table.string('module_id');
      table.string('module_code').unique().notNullable();
      table.string('module_title').unique().notNullable();
      table.string('module_note').notNullable();
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
    return knex.schema.dropTable(MODULES);
  }