import mongoose from 'mongoose'

const channelsSchema = new mongoose.Schema({
  name: String,
  city: String,
  creator: mongoose.Schema.Types.ObjectId,
  ip: String,
}, { timestamps: true })

export default channelsSchema
