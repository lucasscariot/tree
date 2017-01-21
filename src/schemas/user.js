/**
 * @flow
 */
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
}, { timestamps: true })

const User = mongoose.model('User', userSchema)

export default User
