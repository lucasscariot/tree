/**
 * @flow
 */
import { Schema, mongoose } from '../app'

const VotesSchema = new Schema({
  vote: Boolean,
  reason: String,
}, { timestamps: true })

const Votes = mongoose.model('Votes', VotesSchema)

export default Votes
