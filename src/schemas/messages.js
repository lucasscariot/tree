/**
 * @flow
 */
import { Schema, mongoose } from '../app'

const MessagesSchema = new Schema({
  name: String,
  password: String,
}, { timestamps: true })

const Messages = mongoose.model('Messages', MessagesSchema)

export default Messages
