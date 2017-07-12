/**
 * @flow
 */
import { Schema, mongoose } from '../app'

const MessagesSchema = new Schema({
  content: String,
  provider: String,
  medium: { type: String, enum: ['sms'] },
  type: { type: String, enum: ['user', 'internal'] },
  status: { type: String, enum: ['sent', 'delivered', 'read', 'deleted'] },
  sender: { type: Schema.Types.ObjectId, ref: 'Users' },
  conversationId: { type: Schema.Types.ObjectId, ref: 'Conversations' },
  recipient: { type: Schema.Types.ObjectId, ref: 'Users' },
}, { timestamps: true })

const Messages = mongoose.model('Messages', MessagesSchema)

export default Messages
