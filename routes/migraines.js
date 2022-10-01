import { Router } from 'express'
import * as migrainesCtrl from '../controllers/migraines.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/new', isLoggedIn, migrainesCtrl.new)



export{
  router
}