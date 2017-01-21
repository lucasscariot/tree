/**
 * @flow
 */
import mongoose from 'mongoose'

const channelSchema = new mongoose.Schema({
  name: String,
  password: String,
}, { timestamps: true })

const Channel = mongoose.model('Channel', channelSchema)

export default Channel
