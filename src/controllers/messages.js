/**
 * @flow
 */
import Messages from '../schemas/messages'
import Channels from '../schemas/channels'
import Users from '../schemas/users'
import { mongoose } from '../app'

export const getMessages = (req, res) => {
  Messages
    .find()
    .populate('creator', 'treeName')
    .populate('channel', 'name')
    .then((channel) => { res.status(200).json(channel) })
    .catch((err) => { res.status(400).json({ error: true, message: err.toString() }) })
}

export const getMessage = (req, res) => {
  Messages
    .findOne({ _id: mongoose.Types.ObjectId(req.params.messageId) })
    .populate('creator', 'treeName')
    .populate('channel', 'name')
    .then((message) => { res.status(200).json(message) })
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

export const postMessage = (req, res) => {
  Channels
  .findOne({ _id: req.body.channel })
  .then((channel) => {
    if (!channel) { throw new Error('Channel not found') } else {
      Users
      .findOne({ _id: req.body.creator })
      .then((user) => {
        if (!user) { throw new Error('User not found') } else {
          const newMessage = new Messages()

          newMessage.content = req.body.content
          newMessage.creator = mongoose.Types.ObjectId(req.body.creator)
          newMessage.channel = mongoose.Types.ObjectId(req.body.channel)

          newMessage.save().then((message) => {
            res.status(201).json(message)
          }).catch((err) => {
            throw new Error(err)
          })
        }
      }).catch((error) => {
        res.status(400).json({ error: true, message: error.toString() })
        return false
      })
    }
  })
  .catch((error) => {
    res.status(400).json({ error: true, message: error.toString() })
    return false
  })
}

export const delChannel = (req, res) => {
  Channels
    .remove({ _id: req.params.channelId })
    .then(() => { res.status(200).json({ message: 'Channel deleted' }) })
    .catch((err) => { res.status(400).json({ error: true, message: err.toString() }) })
}
