import { Router } from 'express'
import * as migrainesCtrl from '../controllers/migraines.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/new', isLoggedIn, migrainesCtrl.new)
router.get('/', isLoggedIn, migrainesCtrl.index)
router.post('/',isLoggedIn, migrainesCtrl.create)
router.post('/:id/triggers', isLoggedIn, migrainesCtrl.addToMigraine)

router.get('/:id', isLoggedIn, migrainesCtrl.show)
router.delete('/:id', migrainesCtrl.delete)

router.post('/:id/triggers', migrainesCtrl.addToMigraine)

export{
  router
}