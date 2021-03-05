import {MODULES} from './../../constants/table';
import generateUUID from "../../helper/generateUUID"

/**
 * Insert entries to users table.
 *
 * @param {Object} knex
 *
 * @returns {Promise}
 */
export function seed(knex) {
  return knex(MODULES).insert([
    {
      module_id: generateUUID(),
      module_code: "module:users",
      module_title: "Users",
      module_note: "CRUD users",
      created_at: new Date(),
      active: true,
    },
    {
      module_id: generateUUID(),
      module_code: "module:modules",
      module_title: "Modules",
      module_note: "CRUD modules",
      created_at: new Date(),
      active: true,
    },
  ])
}