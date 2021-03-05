import * as moduleService from "../services/module"

import generateUUID from "../helper/generateUUID"
import {hashPassword} from "../helper/passwordUtils"

/**
 * Find all modules.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function findAll(req, res, next) {
    try {
        const response = await moduleService.findAll();

        res.json({
            response
        });
    } catch (err) {
        next(err);
    }
}

/**
 * Find modules by id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function findById(req, res, next) {
    try {
        const response = await moduleService.findById(req.params.id);

        res.json({
            response
        });
    } catch (err) {
        next(err);
    }
}

/**
 * create module.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function create(req, res, next) {
    try {
        const {
            code,
            title,
            note
        } = req.body
        if (!code || !title || !note) {
            throw new Error('Missing fields')
        } else {

            const id = generateUUID();
            const createDate = new Date();
            const data = {
                module_id: id,
                module_code: code,
                module_title: title,
                module_note: note,
                created_at: createDate,
                active: true
            }

            const response = await moduleService.create(data);

            res.json({
                response
            });
        }
    } catch (err) {
        next(err);
    }
}

/**
 * update module by Id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function updateById(req, res, next) {
    try {
        const {
            code,
            title,
            note,
            active
        } = req.body
        if (!code || !title || !note) {
            throw new Error('Missing fields')
        } else {
            const updateDate = new Date();
            const data = {
                module_code: code,
                module_title: title,
                module_note: note,
                updated_at: updateDate,
                active: active
            }

            const response = await moduleService.updateById(data, req.params.id);

            res.json({
                response
            });
        }
    } catch (err) {
        next(err);
    }
}



/**
 * delete module by Id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function deleteById(req, res, next) {
    try {
        const response = await moduleService.deleteById(req.params.id);

        res.json({
            response
        });
    } catch (err) {
        next(err);
    }
}