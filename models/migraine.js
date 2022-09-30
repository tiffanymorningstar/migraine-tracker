import mongoose from 'mongoose'

const Schema = mongoose.Schema

const migraineSchema = new Schema({
  date: Date,
  type: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})

const Migraine = mongoose.model('Migraine', migraineSchema)

export {
  Migraine
}