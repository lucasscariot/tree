/**
 * @flow
 */
import Channel from '../schemas/channels'
import Users from '../schemas/users'
import { mongoose } from '../app'

export const getChannels = (req, res) => {
  Channel
    .find()
    .populate('creator', 'firstName')
    .then((data) => { res.status(200).json(data) })
    .catch((err) => { res.status(400).json({ error: true, message: err.toString() }) })
}

export const getChannel = (req, res) => {
  Channel
    .findOne({ _id: mongoose.Types.ObjectId(req.body.creator) })
    .populate('creator')
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(400).json({ error: true, message: err.toString() })
    })
}

export const putChannel = (req, res) => {
  Channel
    .findOne({ _id: mongoose.Types.ObjectId(req.body.creator) })
    .populate('creator')
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(400).json({ error: true, message: err.toString() })
    })
}

export const postChannel = (req, res) => {
  Users
    .findOne({ _id: req.body.creator })
    .then((user) => {
      if (!user) { throw new Error('User not found') } else {
        const newChannel = new Channel()

        newChannel.name = req.body.name
        newChannel.description = req.body.description
        newChannel.password = req.body.password
        newChannel.creator = mongoose.Types.ObjectId(req.body.creator)

        newChannel
          .save().then((data) => { res.status(201).json(data) })
          .catch((err) => { throw new Error(err) })
      }
    })
    .catch((error) => { res.status(400).json({ error: true, message: error.toString() }); return false })
}
