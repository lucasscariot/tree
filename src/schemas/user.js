/**
 * @flow
 */
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
}, { timestamps: true })

export const User = mongoose.model('User', userSchema)
