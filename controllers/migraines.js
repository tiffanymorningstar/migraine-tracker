import { Migraine } from '../models/migraine.js'
import { Trigger } from "../models/trigger.js"


function newMigraine(req, res) {
  console.log("test")
  res.render('migraines/new', {
    title: 'Add Migraine'
  })
}

function index(req, res) {
  Migraine.find({})
    .then(migraines => {
      res.render('migraines/index', {
        migraines: migraines,
        title: 'All Migraines'
      })
    })
    .catch(error => { // If there's an error, console.log it and redirect back home!
      console.log(err)
      res.redirect('/')
    })
}

function create(req, res) {
  Migraine.create(req.body)
    .then(migraine => {
      res.redirect('/migraines/')
    })
    .catch(err => {
      console.log(err)
      res.redirect('/migraines/')
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
          res.redirect("/migraines")
        })
        .catch(err => {
          console.log(err)
          res.redirect("/")
        })
    }

    function edit(req, res) {
      Migraine.findById(req.params.id)
        .then(migraine => {
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
  index,
  show,
  addToMigraine,
  deleteMigraine as delete,
  edit,
}
