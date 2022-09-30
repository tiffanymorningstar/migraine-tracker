import { Router } from 'express'
import * as migrainesCtrl from '../controllers/migraines.js'

const router = Router()

router.get('/new', migrainesCtrl.new)

export{
  router
}