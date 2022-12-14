import { Migraine } from '../models/migraine.js'
import { Trigger } from "../models/trigger.js"
import { Profile } from "../models/profile.js"

function newMigraine(req, res) {
  console.log("test")
  res.render('migraines/new', {
    title: 'Add Migraine'
  })
}

function create(req, res) {
  Migraine.create(req.body)
    .then(migraine => {
      console.log('migraine', migraine.date)
      Profile.findById(req.user.profile._id)
        .then(profile => {
          profile.migraines.push(migraine._id)
          profile.save()
            .then(() => {
              res.redirect('/profiles/show')
            })
        })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/profiles/show')
    })

}

function show(req, res) {
  Migraine.findById(req.params.id)
    .populate('triggers')
    .then(migraine => {
      Trigger.find({ _id: { $nin: migraine?.triggers } })
        .then(triggers => {
          res.render('migraines/show', {
            title: 'Migraine Detail',
            migraine: migraine,
            triggers: triggers
          })
        })
        .catch(err => {
          console.log(err)
          res.redirect("/")
        })
    })

}

function deleteMigraine(req, res) {
  Migraine.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/profiles/show")
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
}

function updateTrigger(req, res) {
  Migraine.findById(req.params.migraineId)
    .then(migraine => {
      Trigger.findById(req.params.triggerId)
        .then(trigger => {
          migraine.triggers.remove(trigger)
          migraine.save()
            .then(() => {
              res.redirect(`/migraines/${req.params.migraineId}`)
            })
        })
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
}

function edit(req, res) {
  Migraine.findById(req.params.id)
    .then(migraine => {
      console.log(migraine)
      res.render("migraines/edit", {
        migraine, // same as: flight: flight
        title: "Edit Migraine"
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
}

function update(req, res) {
  Migraine.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(migraine => {
      res.redirect('/profiles/show')
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
}

function addToMigraine(req, res) {
  Migraine.findById(req.params.id)
    .then(migraine => {
      console.log(req.body.triggerlId, 'Look here')
      migraine.triggers.push(req.body.triggerId)
      migraine.save()
        .then(() => {
          res.redirect(`/migraines/${migraine._id}`)
        })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })

}

export {
  newMigraine as new,
  create,
  show,
  addToMigraine,
  deleteMigraine as delete,
  edit,
  update,
  updateTrigger,
}
