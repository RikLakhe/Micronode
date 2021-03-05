import * as userService from "../services/user"

import generateUUID from "../helper/generateUUID"
import {hashPassword} from "../helper/passwordUtils"

/**
 * Find all users.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function findAll(req, res, next) {
    try {
        const response = await userService.findAll();

        res.json({
            response
        });
    } catch (err) {
        next(err);
    }
}

/**
 * Find users by id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function findById(req, res, next) {
    try {
        const response = await userService.findById(req.params.id);

        res.json({
            response
        });
    } catch (err) {
        next(err);
    }
}

/**
 * create user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function create(req, res, next) {
    try {
        const {
            name,
            email,
            password
        } = req.body
        if (!name || !email || !password) {
            throw new Error('Missing fields')
        } else {

            const id = generateUUID();
            const createDate = new Date();
            const data = {
                user_id: id,
                user_name: name,
                user_email: email,
                user_password: hashPassword(password),
                created_at: createDate,
                active: true
            }

            const response = await userService.create(data);

            res.json({
                response
            });
        }
    } catch (err) {
        next(err);
    }
}

/**
 * update users by Id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function updateById(req, res, next) {
    try {
        const {
            name,
            email,
            password,
            active
        } = req.body
        if (!name || !email || !password) {
            throw new Error('Missing fields')
        } else {
            const updateDate = new Date();
            const data = {
                user_name: name,
                user_email: email,
                user_password: hashPassword(password),
                updated_at: updateDate,
                active: active
            }

            const response = await userService.updateById(data, req.params.id);

            res.json({
                response
            });
        }
    } catch (err) {
        next(err);
    }
}



/**
 * delete users by Id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function deleteById(req, res, next) {
    try {
        const response = await userService.deleteById(req.params.id);

        res.json({
            response
        });
    } catch (err) {
        next(err);
    }
}