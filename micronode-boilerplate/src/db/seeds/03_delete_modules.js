import {MODULES} from './../../constants/table';

/**
 * Delete existing entries from modules table.
 *
 * @param {Object} knex
 *
 * @returns {Promise}
 */
export function seed(knex) {
  return knex(MODULES).del();
}
