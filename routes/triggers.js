import { Router } from 'express'
import * as triggersCtrl from '../controllers/triggers.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/new', isLoggedIn, triggersCtrl.new)
router.post('/', isLoggedIn, triggersCtrl.create)
// router.delete('/:id', isLoggedIn, triggersCtrl.delete)
router.put('/:id', isLoggedIn, triggersCtrl.update)

export {
  router
}