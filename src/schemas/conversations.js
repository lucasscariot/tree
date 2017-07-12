/**
 * @flow
 */
import { Schema, mongoose } from '../app'

const conversationsSchema = new Schema({
  name: String,
  preview: String,
  users: [{ type: Schema.Types.ObjectId, ref: 'Users' }],
  messages: [{ type: Schema.Types.ObjectId, ref: 'Messages' }],
}, { timestamps: true })

const Conversations = mongoose.model('Conversations', conversationsSchema)

export default Conversations
