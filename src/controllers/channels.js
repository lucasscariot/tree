/**
 * @flow
 */
import Channel from '../schemas/channels'

export const getChannels = (req, res) => {
  Channel.find().then((data) => {
    res.status(200).json(data)
  }).catch((err) => {
    res.status(400).json({ error: true, message: err.toString() })
  })
}

export const getChannel = (req, res) => {
  Channel
    .findOne({ _id: req.params.userId })
    .populate('creator')
    .exec((err, data) => {
      console.log(data)
      if (err) {
        res.status(400).json({ error: true, message: err.toString() })
      }
      res.status(201).json(data)
    })
}

export const postChannel = (req, res) => {
  const newChannel = new Channel()

  newChannel.name = req.body.name
  newChannel.description = req.body.description
  newChannel.password = req.body.password
  newChannel.creator = req.body.creator

  newChannel.save().then((data) => {
    res.status(201).json(data)
  }).catch((err) => {
    res.status(400).json({ error: true, message: err.toString() })
  })
}
