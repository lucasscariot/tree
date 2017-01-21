/**
 * @flow
 */
import { Schema, mongoose } from '../app'

const MessagesSchema = new Schema({
  content: String,
  creator: { type: Schema.Types.ObjectId, ref: 'Users' },
  channel: { type: Schema.Types.ObjectId, ref: 'Channels' },
}, { timestamps: true })

const Messages = mongoose.model('Messages', MessagesSchema)

export default Messages
