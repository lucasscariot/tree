/**
 * @flow
 */
import { Schema, mongoose } from '../app'

const usersSchema = new Schema({
  firstName: String,
  lastName: String,
  avatar: String,
  treeName: String,
  email: String,
  password: String,
  pictures: [String],
}, { timestamps: true })

const Users = mongoose.model('Users', usersSchema)

export default Users
