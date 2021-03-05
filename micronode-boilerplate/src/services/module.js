import knex from "../db/connection";
import {MODULES} from "../constants/table"

/**
 * Fetch all modules
 * 
 * @returns {Array}
 * 
 */
export async function findAll(){
    const module = await knex(MODULES);
    return module;
}

/**
 * Fetch module by Identification
 * 
 * @params {String} id
 * @returns {Array}
 * 
 */
export async function findById(id){
    const module = await knex(MODULES).select().where({"module_id": id});
    return module;
}

/**
 * Fetch modules by Code
 * 
 * @params {String} code
 * @returns {Array}
 * 
 */
export async function findByCode(code){
    const module = await knex(MODULES).select().where({"module_code": code});
    return module;
}

/**
 * Create user
 * 
 * @params {Object} data
 * @returns {Array}
 * 
 */
export async function create(data){
    const module = await knex(MODULES).insert(data).returning("*").then(rows => {return rows[0];});
    return module;
}

/**
 * Update user
 * 
 * @params {Object} data
 * @returns {Array}
 * 
 */
export async function updateById(data, id){
    const module = await knex(MODULES).update(data).where('module_id',id).returning("*").then(rows => {return rows[0];});
    return module;
}

/**
 * Delete user
 * 
 * @params {String} id
 * @returns {Array}
 * 
 */
export async function deleteById(id){
    const module = await knex(MODULES).delete().where('module_id',id)
    return module;
}