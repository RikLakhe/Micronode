import {USERS} from './../../constants/table';

/**
 * Delete existing entries from users table.
 *
 * @param {Object} knex
 *
 * @returns {Promise}
 */
export function seed(knex) {
  return knex(USERS).del();
}
