import {
    Router
} from 'express'
import * as moduleController from '../controller/module'

let router = Router();

router.get('/', moduleController.findAll)
router.get('/:id', moduleController.findById)
router.post('/', moduleController.create)
router.put('/:id', moduleController.updateById)
router.delete('/:id', moduleController.deleteById)

export default router;