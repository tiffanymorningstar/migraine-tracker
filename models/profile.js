import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  avatar: String,
  migraines:[{ type: Schema.Types.ObjectId, ref: 'Migraine' }],
  triggers: [{ type: Schema.Types.ObjectId, ref: 'Trigger' }]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
