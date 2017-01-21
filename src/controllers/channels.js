/**
 * @flow
 */
import Channels from '../schemas/channels'
import Users from '../schemas/users'
import { mongoose } from '../app'

export const getChannels = (req, res) => {
  Channels
    .find()
    .populate('creator', 'treeName')
    .then((channel) => { res.status(200).json(channel) })
    .catch((err) => { res.status(400).json({ error: true, message: err.toString() }) })
}

export const getChannel = (req, res) => {
  Channels
    .findOne({ _id: mongoose.Types.ObjectId(req.params.channelId) })
    .populate('creator', 'treeName')
    .then((channel) => { res.status(200).json(channel) })
    .catch((err) => { res.status(400).json({ error: true, message: err.toString() }) })
}

export const putChannel = (req, res) => {
  Channels
    .findOne({ _id: req.params.channelId }).exec()
    .then((channel) => {
      const updatedChannel = channel
      if (req.body.name) { updatedChannel.name = req.body.name }
      if (req.body.description) { updatedChannel.description = req.body.description }
      if (req.body.password) { updatedChannel.password = crypto(req.body.password) }
      return updatedChannel.save()
    })
    .then((user) => { res.status(200).json(user) })
    .catch((err) => { res.status(400).json({ error: true, message: err.toString() }) })
}

export const postChannel = (req, res) => {
  Users
    .findOne({ _id: req.body.creator })
    .then((user) => {
      if (!user) { throw new Error('User not found') } else {
        const newChannel = new Channels()

        newChannel.name = req.body.name
        newChannel.description = req.body.description
        newChannel.password = req.body.password
        newChannel.creator = mongoose.Types.ObjectId(req.body.creator)

        newChannel
          .save().then((channel) => { res.status(201).json(channel) })
          .catch((err) => { throw new Error(err) })
      }
    })
    .catch((error) => { res.status(400).json({ error: true, message: error.toString() }); return false })
}

export const delChannel = (req, res) => {
  Channels
    .remove({ _id: req.params.channelId })
    .then(() => { res.status(200).json({ message: 'Channel deleted' }) })
    .catch((err) => { res.status(400).json({ error: true, message: err.toString() }) })
}
