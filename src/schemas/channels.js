/**
 * @flow
 */
import { Schema, mongoose } from '../app'

const channelsSchema = new Schema({
  name: String,
  avatar: String,
  description: String,
  password: String,
  creator: { type: Schema.Types.ObjectId, ref: 'Users' },
}, { timestamps: true })

const Channels = mongoose.model('Channels', channelsSchema)

export default Channels
