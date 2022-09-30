import { Migraine } from '../models/migraine.js'

function newMigraine(req, res) {
  console.log("test")
  res.render('migraines/new', {
  title: 'Add Migraine'
})
}

export {
  newMigraine as new
}
