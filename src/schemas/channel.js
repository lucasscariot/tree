/**
 * @flow
 */
 import mongoose from 'mongoose'

export default const channelsSchema = new mongoose.Schema({
  name: String,
  city: String,
  creator: mongoose.Schema.Types.ObjectId,
  ip: String,
}, { timestamps: true })
