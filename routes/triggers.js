import { Router } from 'express'
import * as triggersCtrl from '../controllers/triggers.js'

const router = Router()

router.get('/new', triggersCtrl.new)
router.post('/', triggersCtrl.create)

export {
  router
}