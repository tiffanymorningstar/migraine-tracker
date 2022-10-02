import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const triggerSchema = new Schema({
  name: String
})

const trigger = mongoose.model('Trigger', triggerSchema)

export {
  Trigger
}