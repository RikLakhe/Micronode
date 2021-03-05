import knex from "../db/connection";
import {USERS} from "../constants/table"

/**
 * Fetch all users
 * 
 * @returns {Array}
 * 
 */
export async function findAll(){
    const user = await knex(USERS);
    return user;
}

/**
 * Fetch user by Identification
 * 
 * @params {String} id
 * @returns {Array}
 * 
 */
export async function findById(id){
    const user = await knex(USERS).select().where({"user_id": id});
    return user;
}

/**
 * Fetch user by Email
 * 
 * @params {String} email
 * @returns {Array}
 * 
 */
export async function findByEmail(email){
    const user = await knex(USERS).select().where({"user_email": email});
    return user;
}

/**
 * Create user
 * 
 * @params {Object} data
 * @returns {Array}
 * 
 */
export async function create(data){
    const user = await knex(USERS).insert(data).returning("*").then(rows => {return rows[0];});
    return user;
}

/**
 * Update user
 * 
 * @params {Object} data
 * @returns {Array}
 * 
 */
export async function updateById(data, id){
    const user = await knex(USERS).update(data).where('user_id',id).returning("*").then(rows => {return rows[0];});
    return user;
}

/**
 * Delete user
 * 
 * @params {String} id
 * @returns {Array}
 * 
 */
export async function deleteById(id){
    const user = await knex(USERS).delete().where('user_id',id)
    return user;
}