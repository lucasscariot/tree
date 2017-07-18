/**
 * @flow
 */
import { Schema, mongoose } from '../app'

const bugsSchema = new Schema({
  title: { type: String },
  type: { type: String, enum: ['buttons', 'select', 'form'] },
  value: Number,
  buttons: [{
    title: String,
    value: Number,
  }],
  fields: [{
    title: String,
    ftype: { type: String, enum: ['select', 'input'] },
    values: { type: Array },
  }],
}, { timestamps: true })

const Bugs = mongoose.model('Bugs', bugsSchema)

export default Bugs
