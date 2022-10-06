import { Router } from 'express'
import * as migrainesCtrl from '../controllers/migraines.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/new', isLoggedIn, migrainesCtrl.new)
// router.get('/', isLoggedIn, migrainesCtrl.index)
router.post('/',isLoggedIn, migrainesCtrl.create)
router.post('/:id/triggers', isLoggedIn, migrainesCtrl.addToMigraine)

router.get('/:id', isLoggedIn, migrainesCtrl.show)
router.get("/:id/edit", isLoggedIn, migrainesCtrl.edit)
router.delete('/:id', isLoggedIn, migrainesCtrl.delete)
router.put('/:migraineId/triggers/:triggerId', isLoggedIn, migrainesCtrl.updateTrigger)
router.put("/:id", migrainesCtrl.update)

router.post('/:id/triggers', isLoggedIn, migrainesCtrl.addToMigraine)

export{
  router
}