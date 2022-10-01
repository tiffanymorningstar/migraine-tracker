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

    function show(req, res) {
      Migraine.findById(req.params.id)
        .populate('meals')
        .then(flight => {
          Meal.find({ _id: { $nin: flight?.meals } })
            .then(meals => {
              res.render('flights/show', {
                title: 'Flight Detail',
                flight: flight,
                meals: meals
              })
            })
            .catch(err => {
              console.log(err)
              res.redirect("/")
            })
        })
      }
      }

export {
  newMigraine as new,
  create,
  index,
}
