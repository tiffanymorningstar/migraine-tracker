import { Router } from 'express'
import * as migrainesCtrl from '../controllers/migraines.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/new', isLoggedIn, migrainesCtrl.new)
router.get('/', isLoggedIn, migrainesCtrl.index)
router.post('/',isLoggedIn, migrainesCtrl.create)
router.get('/:id', isLoggedIn, migrainesCtrl.show)

router.post('/:id/triggers', migrainesCtrl.addToMigraine)

export{
  router
}