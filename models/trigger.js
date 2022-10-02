import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const triggerSchema = new Schema({
  name: String
})

const Trigger = mongoose.model('Trigger', triggerSchema)

export {
  Trigger
}