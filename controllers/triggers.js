import { Trigger } from "../models/trigger.js"

function create(req, res) {
  Trigger.create(req.body)
    .then(trigger => {
      res.redirect('/triggers/new')
    })
    .catch(err => {
      console.log(err)
      res.redirect('/triggers/new')
    })
}
function newTrigger(req, res) {
  Trigger.find({})
    .then(triggers => {
      res.render('triggers/new', {
        title: 'Add Trigger',
        triggers: triggers
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/migraines')
    })
  }

function update(req, res) {
  Trigger.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(trigger => {
      res.redirect('/profiles')
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
}

export {
  newTrigger as new,
  create,
  update,
}