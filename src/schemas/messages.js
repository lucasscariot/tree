/**
 * @flow
 */
import { Schema, mongoose } from '../app'

const MessagesSchema = new Schema({
  content: String,
  creator: String,
}, { timestamps: true })

const Messages = mongoose.model('Messages', MessagesSchema)

export default Messages
