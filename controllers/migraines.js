import { Migraine } from '../models/migraine.js'

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
      .then(migraine => {
        res.render('migraines/show', { 
          title: 'Migraine Detail', 
          migraine: migraine,
        })    
      })
      .catch(err => {
        console.log(err)
        res.redirect("/")
      })
    }

export {
  newMigraine as new,
  create,
  index,
  show
}
